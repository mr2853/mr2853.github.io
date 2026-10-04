# Dual Energy - sajt

Statičan sajt za montažu i servis klima uređaja (HTML + Bootstrap 5), optimizovan za mobilne
telefone i Google Ads. Lighthouse (mobilni): 100 / 100 / 100 / 100.

## Struktura

```
index.html                 - glavna stranica (landing za oglase)
politika-privatnosti.html  - politika privatnosti (potrebna zbog forme i Google Ads-a)
css/style.css              - stilovi
js/main.js                 - meni, forma, praćenje konverzija
vendor/bootstrap/          - Bootstrap 5.3.3 (lokalno, zbog brzine)
img/                       - logo (SVG), favicon, ikonica za telefon, slika za deljenje linka
alati/ikonice.py           - ugrađuje ikonice u stranice (videti dole)
images/                    - izvorni fajlovi logoa (.ai, .eps, .pdf) - NE objavljuju se (.gitignore)
```

## Logo i boje

- `img/logo.svg` - glavni logo (crna slova), u meniju
- `img/logo-white.svg` - bela slova i zelena ikonica, za tamno podnožje
- `img/favicon.svg`, `img/apple-touch-icon.png` - ikonica u tabu i na početnom ekranu telefona
- `img/og-image.jpg` - slika koja se prikazuje kada se link pošalje na Viber / Facebook

Boje sajta su iz logoa: zelena `#8bc53f` (dugmad, sa crnim tekstom), tamnozelena `#3f6e14`
(tekst na svetloj pozadini) i crna. Definisane su na vrhu `css/style.css`.

## Adresa sajta

Sajt je na `https://mr2853.github.io/`. Ako se pređe na sopstveni domen, adresu promeniti u
`index.html`: `canonical`, `og:url`, `og:image` i u podacima za Google (`url`, `logo`, `image`).

## Pre objavljivanja

U `index.html` potražiti `TODO` i dopuniti:

- cene u cenovniku (`X.XXX`)
- spisak brendova sa kojima se radi (sekcija "Zašto mi")
- `VAS_FORM_ID` u kontakt formi - napraviti besplatan nalog na https://formspree.io
  (sa `dualenergyinstalacije@gmail.com`), kreirati formu i upisati njen ID
- Google Ads ID i labele konverzija (videti dole)

Proveriti sa klijentom i tvrdnje na sajtu: izlazak u roku od 24h, besplatna procena,
radno vreme (Pon - Sub 08 - 20h), garancija i fiskalni račun.

## Google Ads

### Praćenje konverzija

1. U Google Ads-u: **Ciljevi → Konverzije → Nova konverzija → Veb-sajt**, i napraviti
   4 konverzije: *Poziv*, *Viber*, *WhatsApp*, *Forma* (kategorija: Kontakt / Potencijalni klijent).
2. Za svaku izabrati ručno podešavanje kodom - Google daje `AW-XXXXXXXXXX/labela`.
3. U `index.html`, u `<head>`, upisati ID i labele u `ADS_CONFIG`.

Dok je u `ADS_CONFIG` ostavljeno `XXXX`, Google tag se ne učitava i ništa se ne šalje.
Klikovi na dugmad za poziv, Viber i WhatsApp, kao i uspešno poslata forma, automatski se
prijavljuju kao konverzije. Uz svaki upit iz forme stiže i `gclid` (oznaka klika na oglas),
pa se u mejlu vidi da je upit došao preko oglasa.

### Naslov prilagođen oglasu

Na kraj konačne URL adrese oglasa dodati `?usluga=...` i naslov stranice, podnaslov i
izbor u formi biće prilagođeni toj usluzi:

| Parametar            | Naslov                         |
|----------------------|--------------------------------|
| `?usluga=montaza`    | Montaža klima uređaja          |
| `?usluga=servis`     | Servis klima uređaja           |
| `?usluga=ciscenje`   | Čišćenje i dezinfekcija klima  |
| `?usluga=freon`      | Punjenje klima freonom         |
| `?usluga=kvar`       | Popravka klima uređaja         |
| `?usluga=demontaza`  | Demontaža i premeštanje klima  |

Primer: oglasna grupa "servis klima" → `https://www.dualenergy.rs/?usluga=servis`.
Tekstovi se menjaju u skripti odmah ispod naslova u `index.html`.

## Animacija hlađenje / grejanje

Hero deo automatski prikazuje animaciju po datumu:

- **septembar - mart:** grejanje (topla pozadina, klima na 24°, topao vazduh)
- **april - avgust:** hlađenje (plava pozadina, klima na 18°, pahulje)

Prekidač ❄ / ☀ u donjem desnom uglu hero dela menja animaciju ručno. Link za prikaz klijentu:
`?sezona=grejanje` ili `?sezona=hladjenje` na kraju adrese.

Meseci se menjaju u skripti "Sezona animacije" u `<head>` delu `index.html`.
Prekidač se uklanja brisanjem bloka `season-toggle` na kraju hero dela.

## Ikonice

Ikonice su Bootstrap Icons, ugrađene direktno u stranicu (bez dodatnog učitavanja).
Za novu ikonicu: na https://icons.getbootstrap.com pronaći ime (npr. `house-fill`), u HTML dodati

```html
<svg class="bi" aria-hidden="true"><use href="#i-house-fill"/></svg>
```

i pokrenuti `python alati/ikonice.py` - skripta sama ubacuje sve korišćene ikonice.

## Slike

Ako se dodaju fotografije (npr. galerija radova): koristiti `.webp` format, širine do ~1200 px,
sa `width`, `height` i `loading="lazy"` atributima, da sajt ostane brz na mobilnom.

## Objavljivanje na GitHub Pages

1. Napraviti repozitorijum na GitHub-u (npr. `dual-energy`).
2. Postaviti fajlove:
   ```
   git init
   git add .
   git commit -m "Prvi commit"
   git branch -M main
   git remote add origin https://github.com/KORISNIK/dual-energy.git
   git push -u origin main
   ```
3. Na GitHub-u: **Settings → Pages → Source: Deploy from a branch → main / (root) → Save**.
4. Sajt će biti dostupan na `https://KORISNIK.github.io/dual-energy/`.

### Sopstveni domen (npr. dualenergy.rs)

- U **Settings → Pages → Custom domain** upisati domen.
- Kod registra domena dodati DNS zapise:
  - `A` zapisi za `@`: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
  - `CNAME` za `www`: `KORISNIK.github.io`
- Uključiti **Enforce HTTPS**.
- U `index.html` otkomentarisati `<link rel="canonical">` i upisati pravu adresu.
