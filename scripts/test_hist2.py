import urllib.request, urllib.error

# Check response for non-existent issue
req = urllib.request.Request(
    'https://news.daheiai.com/realtime.php?file=quick_2026-04-01_1200',
    headers={'User-Agent': 'Mozilla/5.0'}
)
try:
    r = urllib.request.urlopen(req, timeout=10)
    content = r.read()
    print(f"Non-existent: status={r.status}, len={len(content)}, content={content[:50]}")
except Exception as e:
    print(f"Error: {e}")

# Check a real issue
req2 = urllib.request.Request(
    'https://news.daheiai.com/realtime.php?file=quick_2026-05-22_1200',
    headers={'User-Agent': 'Mozilla/5.0'}
)
r2 = urllib.request.urlopen(req2, timeout=10)
content2 = r2.read()
print(f"Real issue: status={r2.status}, len={len(content2)}")

# Test various historical dates to see what works
import datetime
base = datetime.date(2026, 5, 22)
for days_back in range(1, 8):
    d = base - datetime.timedelta(days=days_back)
    url = f'https://news.daheiai.com/realtime.php?file=quick_{d.strftime("%Y-%m-%d")}_1200'
    try:
        r = urllib.request.urlopen(urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'}), timeout=10)
        content = r.read()
        if len(content) > 30:
            print(f"{d.strftime('%Y-%m-%d')} 12:00: EXISTS (len={len(content)})")
        else:
            print(f"{d.strftime('%Y-%m-%d')} 12:00: EMPTY (len={len(content)})")
    except Exception as e:
        print(f"{d.strftime('%Y-%m-%d')} 12:00: ERROR {e}")