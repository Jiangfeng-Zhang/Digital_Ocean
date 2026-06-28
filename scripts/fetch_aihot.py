#!/usr/bin/env python3
"""
fetch_aihot.py - 从 aihot.virxact.com API 抓取 AI 日报，生成连续无遗漏的日报数据

用法:
  python scripts/fetch_aihot.py            抓取从第一期到今天的所有日报
  python scripts/fetch_aihot.py --until 2026-06-28   抓取到指定日期
"""

import urllib.request, urllib.error
import json, os, sys, re, time
import ssl
from datetime import datetime, timedelta

ssl_context = ssl.SSLContext(ssl.PROTOCOL_TLS)
ssl_context.check_hostname = False
ssl_context.verify_mode = ssl.CERT_NONE

API_BASE = 'https://aihot.virxact.com/api/public'
SCRIPT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUTPUT_DIR = os.path.join(SCRIPT_DIR, 'news')
JSON_FILE = os.path.join(OUTPUT_DIR, 'news-data.json')
JS_FILE = os.path.join(OUTPUT_DIR, 'news-data.js')
STATE_FILE = os.path.join(OUTPUT_DIR, 'state.json')

# API section label -> cat key -> cat display name
SECTION_MAP = {
    '模型发布/更新': 'model',
    '模型发布': 'model',
    '产品发布/更新': 'tool',
    '产品发布': 'tool',
    '行业动态': 'industry',
    '行业观察': 'industry',
    '论文研究': 'open-source',
    '论文/研究': 'open-source',
    '技巧与观点': 'tutorial',
    '技巧教程': 'tutorial',
    '开源项目': 'open-source',
}
CAT_DISPLAY = {
    'model': '模型动态',
    'tool': '产品工具',
    'tutorial': '技巧教程',
    'industry': '行业观察',
    'open-source': '开源项目',
}

# 常见公司名（用于从标题/摘要中提取）
KNOWN_COMPANIES = [
    'OpenAI', 'Google', 'Anthropic', 'Claude', 'Meta', 'Microsoft', 'NVIDIA',
    'DeepSeek', '字节', '豆包', '阿里', 'Qwen', '通义', '腾讯', '百度', 'Baidu',
    '智谱', 'Zhipu', 'GLM', '小米', 'MiMo', 'Mistral', 'xAI', 'Grok',
    'Runway', 'Luma', 'Vercel', 'ElevenLabs', 'Cartesia', 'MiniMax',
    '华为', 'Hunyuan', 'StepFun', '商汤', 'SenseNova', 'Apple', '苹果',
    'Amazon', 'AWS', 'Bedrock', 'GitHub', 'Hugging Face', 'Stability',
]


def fetch(url, retries=8):
    for attempt in range(retries):
        try:
            req = urllib.request.Request(url, headers={
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
                'Accept': 'application/json',
                'Connection': 'close',
            })
            with urllib.request.urlopen(req, timeout=45, context=ssl_context) as resp:
                return json.loads(resp.read().decode('utf-8', errors='ignore'))
        except urllib.error.HTTPError as e:
            # 400/404 等客户端错误不重试
            if e.code in (400, 404, 403):
                raise
            if attempt < retries - 1:
                wait = min(3 + attempt * 4, 30)
                print(f'    [重试 {attempt+1}/{retries}] HTTP {e.code}，等待 {wait}s')
                time.sleep(wait)
            else:
                raise
        except Exception as e:
            if attempt < retries - 1:
                wait = min(3 + attempt * 4, 30)
                print(f'    [重试 {attempt+1}/{retries}] {str(e)[:50]}，等待 {wait}s')
                time.sleep(wait)
            else:
                raise


def extract_companies(text):
    found = []
    low = text.lower()
    for c in KNOWN_COMPANIES:
        if c.lower() in low and c not in found:
            found.append(c)
    return found


def convert_daily(daily, lead_title=None):
    """将 API 日报转换为现有数据格式"""
    date = daily.get('date', '')
    items = []
    cats_set = set()
    companies_set = set()

    for section in daily.get('sections', []):
        label = section.get('label', '')
        cat_key = SECTION_MAP.get(label, 'industry')
        cats_set.add(CAT_DISPLAY.get(cat_key, '行业观察'))

        for it in section.get('items', []):
            title = it.get('title', '').strip()
            if not title:
                continue
            summary = it.get('summary', '').strip()
            # 简单处理：首句加粗作为引子（保持与现有 body 风格一致）
            body = summary if summary else title
            links = []
            src = it.get('sourceUrl', '')
            if src:
                links.append({'text': src.split('/')[2] if '/' in src else '来源', 'url': src})
            perm = it.get('permalink', '')
            if perm and perm != src:
                links.append({'text': '详情', 'url': perm})

            comps = extract_companies(title + ' ' + summary)
            for c in comps:
                companies_set.add(c)

            items.append({
                'company': comps[0] if comps else '',
                'cat': cat_key,
                'title': title,
                'body': body,
                'links': links,
            })

    # 加入 flashes（如有）
    for flash in daily.get('flashes', []):
        title = flash.get('title', '').strip()
        if not title:
            continue
        summary = flash.get('summary', '').strip()
        body = summary if summary else title
        src = flash.get('sourceUrl', '')
        links = []
        if src:
            links.append({'text': src.split('/')[2] if '/' in src else '来源', 'url': src})
        comps = extract_companies(title + ' ' + summary)
        for c in comps:
            companies_set.add(c)
        cats_set.add('行业观察')
        items.append({
            'company': comps[0] if comps else '',
            'cat': 'industry',
            'title': title,
            'body': body,
            'links': links,
        })

    summary_text = lead_title or ''
    if not summary_text and items:
        summary_text = items[0]['title']

    return {
        'num': date,
        'date': date,
        'time': '',
        'summary': summary_text,
        'companies': sorted(companies_set, key=lambda x: x.lower()),
        'cats': sorted(cats_set),
        'items': items,
        'issueRange': '',
    }


def main():
    until_arg = None
    if '--until' in sys.argv:
        idx = sys.argv.index('--until')
        until_arg = sys.argv[idx + 1] if idx + 1 < len(sys.argv) else None

    print('=== AIHOT 日报抓取工具 ===')
    print('[1/4] 获取日报日期列表...')
    resp = fetch(f'{API_BASE}/dailies?take=100')
    dailies = resp.get('items', resp) if isinstance(resp, dict) else resp
    print(f'  共 {len(dailies)} 个日报日期')

    # 确定日期范围
    available_dates = [d['date'] for d in dailies]
    lead_titles = {d['date']: d.get('leadTitle', '') for d in dailies}
    first_date = available_dates[-1] if available_dates else None
    print(f'  最早: {first_date}  最新: {available_dates[0]}')

    # 构建从第一期到目标日期的连续日期列表
    until_date = until_arg or datetime.now().strftime('%Y-%m-%d')
    print(f'  目标截止: {until_date}')

    start_dt = datetime.strptime(first_date, '%Y-%m-%d')
    end_dt = datetime.strptime(until_date, '%Y-%m-%d')
    all_dates = []
    dt = end_dt
    while dt >= start_dt:
        all_dates.append(dt.strftime('%Y-%m-%d'))
        dt -= timedelta(days=1)

    print(f'  需要覆盖 {len(all_dates)} 天 ({all_dates[-1]} ~ {all_dates[0]})')

    # 加载已有数据（保留无法抓取的日期的旧数据）
    existing = {}
    if os.path.exists(JSON_FILE):
        try:
            with open(JSON_FILE, 'r', encoding='utf-8') as f:
                for e in json.load(f):
                    existing[e['date']] = e
        except Exception:
            pass

    print(f'\n[2/4] 抓取各日期日报详情...')
    results = {}
    fetched = 0
    skipped = 0
    failed = []
    for i, date in enumerate(all_dates):
        pct = f'({i+1}/{len(all_dates)})'
        if date in available_dates:
            try:
                daily = fetch(f'{API_BASE}/daily/{date}')
                entry = convert_daily(daily, lead_titles.get(date))
                results[date] = entry
                fetched += 1
                print(f'  {pct} ✓ {date} - {len(entry["items"])} 条', flush=True)
            except Exception as e:
                # 用已有数据兜底
                if date in existing:
                    results[date] = existing[date]
                    skipped += 1
                    print(f'  {pct} ⚠ {date} 抓取失败，用旧数据 ({len(existing[date]["items"])} 条): {str(e)[:30]}', flush=True)
                else:
                    failed.append(date)
                    print(f'  {pct} ✗ {date} 失败且无旧数据: {str(e)[:30]}', flush=True)
            time.sleep(0.3)  # 礼貌限速
        elif date in existing:
            results[date] = existing[date]
            skipped += 1
            print(f'  {pct} · {date} API无日报，用旧数据 ({len(existing[date]["items"])} 条)', flush=True)
        else:
            # API 和旧数据都没有该日期，跳过（不制造空数据）
            print(f'  {pct} - {date} 无数据，跳过', flush=True)

    print(f'\n  抓取: {fetched} | 复用旧数据: {skipped} | 失败: {len(failed)}')
    if failed:
        print(f'  失败日期: {failed}')

    print(f'\n[3/4] 排序并保存数据...')
    # 按日期降序排列
    daily_list = [results[d] for d in sorted(results.keys(), reverse=True)]
    print(f'  共 {len(daily_list)} 期日报')

    # 保存 JSON
    with open(JSON_FILE, 'w', encoding='utf-8') as f:
        json.dump(daily_list, f, ensure_ascii=False, indent=2)
    print(f'  已保存 JSON: {JSON_FILE}')

    # 保存 JS
    js_content = 'window.newsData = ' + json.dumps(daily_list, ensure_ascii=False, indent=2) + ';\n'
    with open(JS_FILE, 'w', encoding='utf-8') as f:
        f.write(js_content)
    print(f'  已保存 JS: {JS_FILE}')

    # 更新状态
    state = {}
    if os.path.exists(STATE_FILE):
        try:
            with open(STATE_FILE, 'r', encoding='utf-8') as f:
                state = json.load(f)
        except Exception:
            pass
    state['last_fetch_date'] = all_dates[0] if all_dates else ''
    state['first_date'] = all_dates[-1] if all_dates else ''
    state['total_dailies'] = len(daily_list)
    with open(STATE_FILE, 'w', encoding='utf-8') as f:
        json.dump(state, f, ensure_ascii=False, indent=2)
    print(f'  已更新状态: {STATE_FILE}')

    # 统计
    total_items = sum(len(d['items']) for d in daily_list)
    print(f'\n[4/4] 完成！')
    print(f'  日报期数: {len(daily_list)}')
    print(f'  资讯总数: {total_items}')
    print(f'  日期范围: {daily_list[-1]["date"]} ~ {daily_list[0]["date"]}')

    # 检查连续性
    dates_sorted = sorted(results.keys())
    gaps = []
    for i in range(1, len(dates_sorted)):
        prev = datetime.strptime(dates_sorted[i-1], '%Y-%m-%d')
        curr = datetime.strptime(dates_sorted[i], '%Y-%m-%d')
        if (curr - prev).days > 1:
            gaps.append(f'{dates_sorted[i-1]} ~ {dates_sorted[i]}')
    if gaps:
        print(f'  ⚠ 仍有缺口: {gaps}')
    else:
        print(f'  ✓ 日期连续无缺口')


if __name__ == '__main__':
    main()
