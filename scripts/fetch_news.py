#!/usr/bin/env python3
"""
fetch_news.py - 从 news.daheiai.com 抓取 AI 新闻，生成日报

用法:
  python scripts/fetch_news.py          首次全量抓取（~180期→20期日报）
  python scripts/fetch_news.py --full   强制全量抓取
  python scripts/fetch_news.py --inc    增量更新（仅抓取新内容）
"""

import urllib.request, urllib.error, urllib.parse
import re, os, sys, json
import ssl
import time
import http.client
import socket
import gzip
from datetime import datetime, timedelta

# 创建 SSL 上下文以解决连接问题
try:
    ssl_context = ssl.SSLContext(ssl.PROTOCOL_TLS_CLIENT)
except AttributeError:
    ssl_context = ssl.SSLContext(ssl.PROTOCOL_TLS)
ssl_context.check_hostname = False
ssl_context.verify_mode = ssl.CERT_NONE

BASE_URL = 'https://news.daheiai.com'
SCRIPT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUTPUT_DIR = os.path.join(SCRIPT_DIR, 'news')
STATE_FILE = os.path.join(OUTPUT_DIR, 'state.json')
OUTPUT_FILE = os.path.join(OUTPUT_DIR, 'news-data.js')

MAX_DAILY = 20
ISSUES_PER_DAY = 6
HISTORICAL_TARGET = 360

CATEGORY_MAP = {
    '模型动态': 'model', '产品工具': 'tool',
    '技巧教程': 'tutorial', '行业资讯': 'industry',
    '行业观察': 'industry', '开源项目': 'open-source',
}
CATEGORY_NORMALIZE = {'行业资讯': '行业观察'}

# ========== 网络 ==========

def fetch(url, retries=5):
    """使用 urllib.request 抓取 URL，支持 gzip，重试机制"""
    for attempt in range(retries):
        try:
            req = urllib.request.Request(url, headers={
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
                'Accept-Language': 'zh-CN,zh;q=0.9',
                'Accept-Encoding': 'gzip, deflate',
                'Connection': 'close',
            })
            with urllib.request.urlopen(req, timeout=60, context=ssl_context) as resp:
                body = resp.read()
                content_encoding = resp.headers.get('Content-Encoding', '')
                if content_encoding == 'gzip':
                    body = gzip.decompress(body)
                return body.decode('utf-8', errors='ignore')
        except Exception as e:
            if attempt < retries - 1:
                wait = (attempt + 1) * 5
                print(f'  [重试 {attempt+1}/{retries}] 连接失败: {e}，等待 {wait} 秒...')
                time.sleep(wait)
            else:
                raise

def is_valid_issue(html):
    return len(html) > 100 and 'ai-summary' in html

def extract_text(html):
    return re.sub(r'<[^>]+>', '', html).strip()

# ========== 主页面解析 ==========

def parse_main_page():
    html = fetch(BASE_URL)
    card_pat = r'<span class="card-issue">第\s+(\d+)\s+期</span>\s*<span class="card-time">(\d{4}-\d{2}-\d{2}\s+\d{2}:\d{2})</span>'
    cards = re.findall(card_pat, html)
    link_pat = r'href="(realtime\.php\?file=quick_[^"]+)"'
    links = re.findall(link_pat, html)
    summary_pat = r'<p class="card-summary">(.*?)</p>'
    summaries = re.findall(summary_pat, html, re.DOTALL)

    issues = []
    for i in range(min(len(cards), len(links))):
        num, dt = cards[i]
        date, time = dt.split(' ')
        s = re.sub(r'<img[^>]+>', '', summaries[i]) if i < len(summaries) else ''
        issues.append({
            'num': num, 'date': date, 'time': time,
            'url': BASE_URL + '/' + links[i],
            'summary': extract_text(s),
        })
    return issues

# ========== 历史URL构造 ==========

def construct_historical_urls(latest_date, latest_time, target=HISTORICAL_TARGET):
    latest_dt = datetime.strptime(f"{latest_date} {latest_time}", "%Y-%m-%d %H:%M")
    urls = []
    dt = latest_dt
    limit = timedelta(days=60)

    while len(urls) < target and (latest_dt - dt) < limit:
        # Try HH00 first, then HH01
        for minute_offset in ['00', '01']:
            url = f"realtime.php?file=quick_{dt.strftime('%Y-%m-%d_%H')}{minute_offset}"
            urls.append(url)
        dt -= timedelta(hours=4)

    return urls

# ========== 详情页解析 ==========

def parse_issue(url):
    try:
        html = fetch(url)
    except Exception as e:
        return None

    if not is_valid_issue(html):
        return None

    summary = ''
    sm = re.search(r'<section class="ai-summary">.*?<p class="summary-content">(.*?)</p>', html, re.DOTALL)
    if sm:
        summary = sm.group(1).strip()

    items = []
    companies = set()
    cats_set = set()

    block_pat = r'<section class="content-block">(.*?)</section>'
    blocks = re.findall(block_pat, html, re.DOTALL)

    for block in blocks:
        cm = re.search(r'<h2 class="category-header">(.*?)</h2>', block, re.DOTALL)
        if not cm:
            continue
        cat_name = extract_text(cm.group(1))
        cat_display = CATEGORY_NORMALIZE.get(cat_name, cat_name)
        cat_key = CATEGORY_MAP.get(cat_name, '')
        if cat_key:
            cats_set.add(cat_display)

        arts = re.findall(r'<article class="article-item">(.*?)</article>', block, re.DOTALL)
        for art in arts:
            comp_m = re.search(r'<span class="article-keywords">(.*?)</span>', art, re.DOTALL)
            company = extract_text(comp_m.group(1)).strip() if comp_m else ''
            if company:
                companies.add(company)

            title_m = re.search(r'<h3 class="article-title">(.*?)</h3>', art, re.DOTALL)
            title = title_m.group(1).strip() if title_m else ''

            body_m = re.search(r'<div class="article-body">(.*?)</div>', art, re.DOTALL)
            body_html = body_m.group(1).strip() if body_m else ''

            links = re.findall(r'<a href="(https?://[^"]+)"[^>]*class="ref-link"[^>]*>\[\d+\]</a>', body_html)
            body_clean = re.sub(r'<sup>.*?</sup>', '', body_html).strip()

            link_objects = [{'text': domain_name(u), 'url': u} for u in links]

            if title:
                items.append({
                    'company': company, 'cat': cat_key,
                    'title': title, 'body': body_clean,
                    'links': link_objects,
                })

    if not items:
        return None

    # Extract issue number from page title or content
    num_match = re.search(r'第\s*(\d+)\s*期', html)
    issue_num = num_match.group(1) if num_match else ''
    date_match = re.search(r'(\d{4}-\d{2}-\d{2})\s+\d{2}:\d{2}\s*.*?第\s*\d+\s*期', html)
    issue_date = date_match.group(1) if date_match else ''

    return {
        'num': issue_num,
        'date': issue_date,
        'summary': summary,
        'companies': list(companies),
        'cats': list(cats_set),
        'items': items,
    }

def domain_name(url):
    domain = re.sub(r'^https?://', '', url.split('/')[0])
    domain = re.sub(r'^www\.', '', domain)
    return {'x.com': 'X / Twitter', 'twitter.com': 'X / Twitter',
            'reddit.com': 'Reddit', 'github.com': 'GitHub'}.get(domain, domain)

# ========== 日报合并 ==========

def merge_into_daily(issues):
    daily = {}
    for issue in issues:
        d = issue['date']
        if not d:
            continue
        if d not in daily:
            daily[d] = {
                'nums': [], 'companies': set(), 'cats': set(),
                'summary_parts': [], 'items': [],
            }
        entry = daily[d]
        entry['nums'].append(int(issue['num']))
        entry['companies'].update(issue.get('companies', []))
        entry['cats'].update(issue.get('cats', []))
        if issue.get('summary'):
            entry['summary_parts'].append(issue['summary'])
        entry['items'].extend(issue.get('items', []))

    result = []
    for date in sorted(daily.keys(), reverse=True):
        e = daily[date]
        result.append({
            'num': date,
            'date': date,
            'time': '',
            'summary': ' | '.join(e['summary_parts']),
            'companies': list(e['companies']),
            'cats': list(e['cats']),
            'items': e['items'],
            'issueRange': f"{min(e['nums'])}-{max(e['nums'])}" if e['nums'] else '',
        })
    return result

# ========== JS 生成 ==========

def to_js(data):
    def js_str(s):
        return s.replace('\\', '\\\\').replace("'", "\\'").replace('\n', '\\n').replace('\r', '')

    lines = ['var newsData = [']
    for idx, entry in enumerate(data):
        summary = entry['summary'].replace('<strong>', '<b>').replace('</strong>', '</b>')
        items = entry.get('items', [])
        comps = ', '.join(f"'{js_str(c)}'" for c in entry['companies'])
        cats = ', '.join(f"'{js_str(c)}'" for c in entry['cats'])

        lines.append(f"  {{")
        lines.append(f"    num: '{js_str(entry['num'])}',")
        lines.append(f"    date: '{js_str(entry['date'])}',")
        lines.append(f"    time: '',")
        lines.append(f"    summary: '{js_str(summary)}',")
        lines.append(f"    issueRange: '{js_str(entry.get('issueRange', ''))}',")
        lines.append(f"    companies: [{comps}],")
        lines.append(f"    cats: [{cats}],")
        lines.append(f"    items: [")
        for i, item in enumerate(items):
            t = item['title'].replace('<strong>', '<b>').replace('</strong>', '</b>')
            b = item['body'].replace('<strong>', '<b>').replace('</strong>', '</b>')
            lines.append(f"      {{")
            lines.append(f"        company: '{js_str(item['company'])}',")
            lines.append(f"        cat: '{js_str(item['cat'])}',")
            lines.append(f"        title: '{js_str(t)}',")
            lines.append(f"        body: '{js_str(b)}',")
            if item.get('links'):
                lines.append(f"        links: [")
                for lk in item['links']:
                    lines.append(f"          {{ text: '{js_str(lk['text'])}', url: '{js_str(lk['url'])}' }},")
                lines.append(f"        ]")
            else:
                lines.append(f"        links: []")
            lines.append(f"      }}," if i < len(items) - 1 else f"      }}")
        lines.append(f"    ]")
        lines.append(f"  }}," if idx < len(data) - 1 else f"  }}")

    lines.append('];')
    return '\n'.join(lines)

# ========== 状态管理 ==========

def load_state():
    if os.path.exists(STATE_FILE):
        with open(STATE_FILE, 'r', encoding='utf-8') as f:
            return json.load(f)
    return {'first_run_done': False, 'last_issue_num': 0}

def save_state(state):
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    with open(STATE_FILE, 'w', encoding='utf-8') as f:
        json.dump(state, f, ensure_ascii=False, indent=2)

# ========== 主流程 ==========

def main():
    is_full = '--full' in sys.argv
    is_inc = '--inc' in sys.argv or '--incremental' in sys.argv

    state = load_state()
    first_run = not state['first_run_done'] or is_full
    if is_inc:
        first_run = False

    print(f"正在从 {BASE_URL} 抓取数据...")

    # Step 1: Parse main page
    print("[1/4] 解析主页面...")
    main_issues = parse_main_page()
    if not main_issues:
        print("  [ERROR] 无法解析主页面")
        return
    print(f"  主页面显示 {len(main_issues)} 期快讯")

    latest = main_issues[0]
    current_max = int(latest['num'])

    if first_run:
        # Full fetch: main page + historical
        print("[2/4] 首次全量抓取，构造历史URL...")

        # First, try all main page issues
        all_urls = [f"realtime.php?file=quick_{m['date'].replace('-','')}_{m['time'].replace(':','')}" for m in main_issues]
        # Wait, the URL has dashes in the date. Let me use the URL from main_issues directly
        # Actually the main_issues don't store the URL. Let me re-fetch from main page.
        main_html = fetch(BASE_URL)
        link_pat = r'href="(realtime\.php\?file=quick_[^"]+)"'
        main_links = re.findall(link_pat, main_html)
        all_urls = [BASE_URL + '/' + l for l in main_links]

        # Add historical URLs
        hist_urls = construct_historical_urls(latest['date'], latest['time'])
        all_urls_set = set(all_urls)
        for u in hist_urls:
            full_url = BASE_URL + '/' + u
            if full_url not in all_urls_set:
                all_urls_set.add(full_url)

        all_urls = list(all_urls_set)
        print(f"  共 {len(all_urls)} 个候选URL")

    else:
        # Incremental: only new issues from main page
        last_max = state.get('last_issue_num', 0)
        new_issues = [m for m in main_issues if int(m['num']) > last_max]

        if not new_issues:
            print("[2/4] 无新内容需要更新")
            return

        # Re-fetch URLs from main page
        main_html = fetch(BASE_URL)
        link_pat = r'href="(realtime\.php\?file=quick_[^"]+)"'
        main_links = re.findall(link_pat, main_html)
        all_urls = [BASE_URL + '/' + l for l in main_links[:len(new_issues)]]
        print(f"[2/4] 增量更新，发现 {len(new_issues)} 期新快讯")

    # Step 3: Fetch & parse each issue
    print(f"[3/4] 抓取并解析详情页...")
    parsed = []
    total = len(all_urls)
    for i, url in enumerate(all_urls):
        pct = f"({i+1}/{total})"
        result = parse_issue(url)
        if result:
            parsed.append(result)
            print(f"  {pct} ✓ 第 {result['num']} 期 ({result['date']}) - {len(result['items'])} 条", flush=True)
        else:
            print(f"  {pct} ✗ 跳过", flush=True)

    if not parsed:
        print("[ERROR] 未成功解析任何期次")
        return

    # Sort by issue number descending
    parsed.sort(key=lambda x: int(x.get('num', 0) or 0), reverse=True)

    # For first run: keep all for daily merging
    if first_run:
        print(f"\n  成功解析 {len(parsed)} 期，合并为日报...")
        daily = merge_into_daily(parsed)
        print(f"  合并后共 {len(daily)} 期日报")
        state['first_run_done'] = True
        state['last_issue_num'] = current_max
    else:
        # Incremental: merge new issues into existing daily entries
        print(f"\n  新增 {len(parsed)} 期，合并到已有日报...")

        # Load existing data from JSON backup
        json_path = OUTPUT_FILE.replace('.js', '.json')
        existing_entries = []
        if os.path.exists(json_path):
            try:
                with open(json_path, 'r', encoding='utf-8') as f:
                    existing_entries = json.load(f)
            except:
                existing_entries = []

        # Build index by date
        existing_by_date = {e['date']: e for e in existing_entries}
        merged_anything = False

        # For each parsed issue, merge into the corresponding daily entry
        for issue in parsed:
            d = issue['date']
            if not d:
                continue
            merged_anything = True
            if d in existing_by_date:
                entry = existing_by_date[d]
                # Dedup items by title
                seen_titles = {it['title'] for it in entry.get('items', [])}
                new_count = 0
                for item in issue.get('items', []):
                    if item['title'] not in seen_titles:
                        entry['items'].append(item)
                        seen_titles.add(item['title'])
                        new_count += 1
                # Combine companies (dedup)
                comps_set = set(entry.get('companies', []))
                comps_set.update(issue.get('companies', []))
                entry['companies'] = sorted(comps_set, key=lambda x: x.lower())
                # Combine cats (dedup)
                cats_set = set(entry.get('cats', []))
                cats_set.update(issue.get('cats', []))
                entry['cats'] = sorted(cats_set)
                # Append summary
                if issue.get('summary'):
                    entry['summary'] = (entry.get('summary', '') + ' | ' + issue['summary']).strip(' |')
                # Update issueRange
                existing_nums = set()
                if entry.get('issueRange'):
                    parts = entry['issueRange'].split('-')
                    try:
                        existing_nums = set(range(int(parts[0]), int(parts[-1]) + 1))
                    except:
                        pass
                if issue.get('num'):
                    existing_nums.add(int(issue['num']))
                if existing_nums:
                    entry['issueRange'] = f"{min(existing_nums)}-{max(existing_nums)}"
                if new_count > 0:
                    print(f"    {d}: 新增 {new_count} 条资讯")
            else:
                # New date entry
                existing_by_date[d] = {
                    'num': d, 'date': d, 'time': '',
                    'summary': issue.get('summary', ''),
                    'companies': list(issue.get('companies', [])),
                    'cats': list(issue.get('cats', [])),
                    'items': list(issue.get('items', [])),
                    'issueRange': issue.get('num', ''),
                }
                print(f"    {d}: 新建日报 ({len(issue.get('items', []))} 条资讯)")

        if not merged_anything:
            print("  没有新增内容需要合并")
            return

        # Sort by date descending, limit to MAX_DAILY
        daily = sorted(existing_by_date.values(), key=lambda x: x['date'], reverse=True)[:MAX_DAILY]
        print(f"  合并后共 {len(daily)} 期日报")
        state['last_issue_num'] = current_max

    # Take only the latest MAX_DAILY daily entries
    daily = daily[:MAX_DAILY]

    # Step 4: Generate JS
    print(f"[4/4] 生成 {OUTPUT_FILE} ...")
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    js_content = to_js(daily)
    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        f.write(js_content)

    total_items = sum(len(d.get('items', [])) for d in daily)
    print(f"  ✓ 成功生成 {len(daily)} 期日报（{total_items} 条资讯）")

    # Save JSON backup for incremental merging
    json_path = OUTPUT_FILE.replace('.js', '.json')
    # Strip out temporary fields before saving
    clean = []
    for d in daily:
        entry = {k: v for k, v in d.items() if k != 'placeholder'}
        clean.append(entry)
    with open(json_path, 'w', encoding='utf-8') as f:
        json.dump(clean, f, ensure_ascii=False, indent=2)
    print(f"  ✓ JSON 备份已保存")

    save_state(state)
    print(f"  ✓ 状态已保存")


if __name__ == '__main__':
    main()