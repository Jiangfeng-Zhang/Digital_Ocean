import urllib.request, re

req = urllib.request.Request(
    'https://news.daheiai.com/realtime.php?file=quick_2026-05-22_1200',
    headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}
)
html = urllib.request.urlopen(req, timeout=10).read().decode('utf-8')
lines = html.split('\n')
for i, line in enumerate(lines):
    print(f'{i:4d}: {line}')