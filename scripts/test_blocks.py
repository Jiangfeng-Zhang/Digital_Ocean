import urllib.request, re

req = urllib.request.Request(
    'https://news.daheiai.com/realtime.php?file=quick_2026-05-22_1200',
    headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}
)
html = urllib.request.urlopen(req, timeout=10).read().decode('utf-8')

# Find all content-block sections
block_pattern = r'<section class="content-block">(.*?)</section>'
blocks = re.findall(block_pattern, html, re.DOTALL)
print(f"Found {len(blocks)} content blocks:")

for i, block in enumerate(blocks):
    cat_match = re.search(r'<h2 class="category-header">(.*?)</h2>', block, re.DOTALL)
    cat_name = re.sub(r'<[^>]+>', '', cat_match.group(1)).strip() if cat_match else '(unknown)'
    articles = re.findall(r'<article class="article-item">(.*?)</article>', block, re.DOTALL)
    print(f"\n  Block {i}: category='{cat_name}', {len(articles)} articles")
    for j, art in enumerate(articles):
        title_match = re.search(r'<h3 class="article-title">(.*?)</h3>', art, re.DOTALL)
        title = re.sub(r'<[^>]+>', '', title_match.group(1)).strip() if title_match else '(no title)'
        print(f"    - [{j}] {title[:50]}")