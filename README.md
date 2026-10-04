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
img/                       - slike i favicon
alati/ikonice.py           - ugrađuje ikonice u stranice (videti dole)
```

## Pre objavljivanja

U oba HTML fajla potražiti `TODO` i zameniti:

- broj telefona (`+381600000000` / `060 000 0000`) - i u Viber / WhatsApp linkovima
- email (`info@dualenergy.rs`)
- grad / područje rada (`Beograd`)
- naziv firme, adresu, PIB i matični broj u podnožju i u politici privatnosti
- cene u cenovniku (`X.XXX`)
- brojke u hero delu (10+, 2000+, 24h) i spisak brendova
- linkove ka Facebook / Instagram profilu (ili ih obrisati)
- `VAS_FORM_ID` u kontakt formi - napraviti besplatan nalog na https://formspree.io,
  kreirati formu i upisati njen ID (upiti stižu na email)

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
