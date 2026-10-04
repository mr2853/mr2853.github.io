"""Ugrađuje CSS direktno u stranice, da ne blokira prikaz (brže učitavanje na mobilnom).

- iz Bootstrap-a ostavlja samo klase koje sajt koristi (PurgeCSS, potreban Node.js)
- dodaje css/style.css
- upisuje sve između <!-- css:start --> i <!-- css:end --> u obe stranice

Posle SVAKE izmene u css/style.css (ili dodavanja nove Bootstrap klase u HTML) pokrenuti:
    python alati/css.py
"""

import json
import os
import re
import subprocess
import tempfile
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
PAGES = ["index.html", "politika-privatnosti.html"]
MARKERS = re.compile(r"(<!-- css:start -->).*?(<!-- css:end -->)", re.S)


def purge_bootstrap():
    with tempfile.TemporaryDirectory() as tmp:
        # kopije stranica bez već ugrađenog CSS-a, da on ne "čuva" nekorišćene klase
        pages_dir = Path(tmp) / "pages"
        pages_dir.mkdir()
        for page in PAGES:
            html = (ROOT / page).read_text(encoding="utf-8")
            (pages_dir / page).write_text(MARKERS.sub(r"\1\2", html), encoding="utf-8")
        result = subprocess.run(
            "npx -y purgecss@6 --config alati/purgecss.config.cjs",
            cwd=ROOT, shell=True, check=True, capture_output=True, encoding="utf-8",
            env={**os.environ, "PURGE_PAGES_DIR": pages_dir.as_posix()},
        )
        return json.loads(result.stdout)[0]["css"]


def compact(css):
    css = re.sub(r"/\*.*?\*/", "", css, flags=re.S)
    css = re.sub(r"\s+", " ", css)
    return re.sub(r"\s*([{};])\s*", r"\1", css).strip()


bootstrap = purge_bootstrap()
site = compact((ROOT / "css/style.css").read_text(encoding="utf-8"))
style = f"<style>{bootstrap}\n{site}</style>"

for page in PAGES:
    path = ROOT / page
    html = path.read_text(encoding="utf-8")
    assert MARKERS.search(html), f"{page}: nema <!-- css:start --> / <!-- css:end -->"
    html = MARKERS.sub(lambda m: f"{m.group(1)}\n  {style}\n  {m.group(2)}", html)
    path.write_text(html, encoding="utf-8", newline="\n")

print(f"Bootstrap: {len(bootstrap) / 1024:.1f} KB, style.css: {len(site) / 1024:.1f} KB -> ugradjeno u {', '.join(PAGES)}")
