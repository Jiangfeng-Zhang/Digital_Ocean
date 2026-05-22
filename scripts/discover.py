import urllib.request, re

# Check main page for pagination/archive links
req = urllib.request.Request(
    'https://news.daheiai.com/',
    headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}
)
html = urllib.request.urlopen(req, timeout=10).read().decode('utf-8')

# Look for pagination, "next page", or archive links
patterns = ['page', 'pager', 'pagination', 'next', '上一页', '下一页', 'more', 'load', 'offset', 'start']
for p in patterns:
    matches = re.findall(r'<a[^>]*href="([^"]*' + p + r'[^"]*)"[^>]*>', html, re.IGNORECASE)
    if matches:
        print(f"Pattern '{p}': {matches}")

# Check for any JavaScript that might have data
js_pattern = r'<script[^>]*>(.*?)</script>'
scripts = re.findall(js_pattern, html, re.DOTALL)
for i, s in enumerate(scripts):
    if 'quick_' in s:
        print(f"\nScript {i} has 'quick_': {s[:200]}")

# Check RSS feed
print("\n=== RSS Feed ===")
try:
    req2 = urllib.request.Request(
        'https://news.daheiai.com/rss.php',
        headers={'User-Agent': 'Mozilla/5.0'}
    )
    rss = urllib.request.urlopen(req2, timeout=10).read().decode('utf-8')
    # Count items
    items = re.findall(r'<item>', rss)
    links = re.findall(r'<link>(.*?)</link>', rss)
    print(f"RSS items: {len(items)}")
    for l in links[:5]:
        print(f"  {l}")
    print(f"  ... and {len(links)-5} more")
except Exception as e:
    print(f"RSS error: {e}")

# Check changelog page
print("\n=== Changelog Page ===")
try:
    req3 = urllib.request.Request(
        'https://news.daheiai.com/changelog.php',
        headers={'User-Agent': 'Mozilla/5.0'}
    )
    changelog = urllib.request.urlopen(req3, timeout=10).read().decode('utf-8')
    links2 = re.findall(r'href="([^"]*quick_[^"]*)"', changelog)
    print(f"Changelog links: {len(links2)}")
    for l in links2[:5]:
        print(f"  {l}")
except Exception as e:
    print(f"Changelog error: {e}")