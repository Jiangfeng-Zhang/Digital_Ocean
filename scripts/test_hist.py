import urllib.request
req = urllib.request.Request(
    'https://news.daheiai.com/realtime.php?file=quick_2026-04-01_1200',
    headers={'User-Agent': 'Mozilla/5.0'}
)
try:
    r = urllib.request.urlopen(req, timeout=10)
    print(f"Status: {r.status}, Len: {len(r.read())}")
except urllib.error.HTTPError as e:
    print(f"HTTP Error: {e.code} {e.reason}")
except Exception as e:
    print(f"Error: {e}")

# Also check rss feed links
import re
req2 = urllib.request.Request(
    'https://news.daheiai.com/rss.php',
    headers={'User-Agent': 'Mozilla/5.0'}
)
rss = urllib.request.urlopen(req2, timeout=10).read().decode('utf-8')
links = re.findall(r'<link>(.*?)</link>', rss)
for l in links:
    if 'quick_' in l:
        print(l)