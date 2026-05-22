import urllib.request, urllib.error
from datetime import datetime, timedelta
import re, sys

BASE_URL = 'https://news.daheiai.com'

def fetch(url, retries=3):
    for attempt in range(retries):
        try:
            req = urllib.request.Request(url, headers={
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
            })
            with urllib.request.urlopen(req, timeout=30) as r:
                return r.read().decode('utf-8')
        except Exception as e:
            if attempt < retries - 1:
                import time
                time.sleep(3)
            else:
                raise e

# First try the same time pattern but with more retries
latest_date = '2026-05-22'
latest_time = '12:00'
latest_dt = datetime.strptime(f"{latest_date} {latest_time}", "%Y-%m-%d %H:%M")

# Try going back further with time slots
found = 0
dt = latest_dt
limit = timedelta(days=45)
slots_tried = 0

print("Trying historical URLs...")
while (latest_dt - dt) < limit and found < 130:
    for minute_offset in ['00', '01']:
        slots_tried += 1
        url_path = f"realtime.php?file=quick_{dt.strftime('%Y-%m-%d_%H')}{minute_offset}"
        url = f"{BASE_URL}/{url_path}"
        try:
            html = fetch(url, retries=1)
            if len(html) > 100 and 'ai-summary' in html:
                found += 1
                num_match = re.search(r'第\s*(\d+)\s*期', html)
                num = num_match.group(1) if num_match else '?'
                print(f"  [{found}] #{num} {dt.strftime('%Y-%m-%d %H:%M')} FOUND (len={len(html)})")
        except Exception:
            pass
    dt -= timedelta(hours=4)

print(f"\nTried {slots_tried} URLs, found {found} valid issues")