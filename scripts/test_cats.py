import urllib.request, re

req = urllib.request.Request(
    'https://news.daheiai.com/',
    headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}
)
html = urllib.request.urlopen(req, timeout=10).read().decode('utf-8')

# Find all issue links
link_pattern = r'href="(realtime\.php\?file=quick_[^"]+)"'
links = re.findall(link_pattern, html)
print(f"Found {len(links)} issues on main page")

# Check a few different issues to see all category names used
checked = set()
for link in links[:6]:
    url = 'https://news.daheiai.com/' + link
    if url in checked:
        continue
    checked.add(url)
    try:
        req2 = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        html2 = urllib.request.urlopen(req2, timeout=10).read().decode('utf-8')
        cats = re.findall(r'<h2 class="category-header">(.*?)</h2>', html2)
        print(f"\n{link}:")
        for c in cats:
            cat_name = re.sub(r'<[^>]+>', '', c).strip()
            print(f"  - {cat_name}")
    except:
        print(f"\n{link}: (failed to fetch)")