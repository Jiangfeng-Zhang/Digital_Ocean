import urllib.request, re

# Test main page
req = urllib.request.Request(
    'https://news.daheiai.com/',
    headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}
)
html = urllib.request.urlopen(req, timeout=10).read().decode('utf-8')

# Find issue links
links = re.findall(r'href="(realtime\.php\?file=quick_[^"]+)"', html)
for l in links:
    print(l)

print("=== Issue numbers and dates ===")
pattern = r'<span class="card-issue">第\s+(\d+)\s+期</span>\s*<span class="card-time">(\d{4}-\d{2}-\d{2}\s+\d{2}:\d{2})</span>'
matches = re.findall(pattern, html)
for m in matches:
    print(f"num={m[0]} datetime={m[1]}")

print("=== Summary texts ===")
summary_pattern = r'<p class="card-summary">(.*?)</p>'
summaries = re.findall(summary_pattern, html, re.DOTALL)
for s in summaries:
    clean = re.sub(r'<[^>]+>', '', s).strip()
    print(clean[:80] + "...")

# Also test a detail page
print("\n=== Detail page test ===")
req2 = urllib.request.Request(
    'https://news.daheiai.com/realtime.php?file=quick_2026-05-22_1200',
    headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}
)
html2 = urllib.request.urlopen(req2, timeout=10).read().decode('utf-8')

# Find AI summary
summary_match = re.search(r'◆ AI 总结[^<]*(.*?)(?:<h2|<div class="item|$)', html2, re.DOTALL)
if summary_match:
    summary_text = summary_match.group(1)
    # Remove HTML tags
    summary_clean = re.sub(r'<[^>]+>', '', summary_text).strip()
    print(f"Summary: {summary_clean[:100]}...")

# Find items
items = re.findall(r'<h3>(.*?)</h3>\s*<p>(.*?)</p>', html2, re.DOTALL)
print(f"Found {len(items)} items via <h3><p> pattern")

# Find source links
links = re.findall(r'\[(\d+)\]\((https?://[^)]+)\)', html2)
print(f"Found {len(links)} source links")