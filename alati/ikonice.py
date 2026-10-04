"""Ugrađuje Bootstrap Icons kao SVG sprite u HTML stranice.

Pronalazi sve ikonice koje stranica koristi (<use href="#i-IME"/>), preuzima ih sa
cdn.jsdelivr.net i upisuje između komentara <!-- ikonice:start --> i <!-- ikonice:end -->.

Nova ikonica: na https://icons.getbootstrap.com pronaći ime (npr. "house-fill"),
u HTML dodati <svg class="bi" aria-hidden="true"><use href="#i-house-fill"/></svg>
i pokrenuti:  python alati/ikonice.py
"""

import re
import urllib.request
from pathlib import Path

VERSION = "1.11.3"
ROOT = Path(__file__).resolve().parent.parent
PAGES = ["index.html", "politika-privatnosti.html"]
MARKERS = re.compile(r"(<!-- ikonice:start -->).*?(<!-- ikonice:end -->)", re.S)

cache = {}


def symbol(name):
    if name not in cache:
        url = f"https://cdn.jsdelivr.net/npm/bootstrap-icons@{VERSION}/icons/{name}.svg"
        svg = urllib.request.urlopen(url).read().decode("utf-8")
        inner = re.search(r"<svg[^>]*>(.*)</svg>", svg, re.S).group(1)
        inner = re.sub(r"\s*\n\s*", "", inner)
        cache[name] = f'<symbol id="i-{name}" viewBox="0 0 16 16">{inner}</symbol>'
    return cache[name]


for page in PAGES:
    path = ROOT / page
    html = path.read_text(encoding="utf-8")
    names = sorted(set(re.findall(r'href="#i-([a-z0-9-]+)"', html)))
    symbols = "\n    ".join(symbol(n) for n in names)
    sprite = (
        '<svg xmlns="http://www.w3.org/2000/svg" width="0" height="0" '
        'style="position:absolute" aria-hidden="true">\n    '
        f"{symbols}\n  </svg>"
    )
    html = MARKERS.sub(lambda m: f"{m.group(1)}\n  {sprite}\n  {m.group(2)}", html)
    path.write_text(html, encoding="utf-8", newline="\n")
    print(f"{page}: {len(names)} ikonica")
