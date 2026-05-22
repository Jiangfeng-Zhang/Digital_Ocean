import re
f = open('news/news-data.js', 'r', encoding='utf-8').read()
dates = re.findall(r"num: '(\d{4}-\d{2}-\d{2})'", f)
print(f"Entries: {len(dates)}")
for d in dates:
    print(f"  {d}")