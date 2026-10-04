# Dual Energy - sajt

Statičan sajt za montažu i servis klima uređaja (HTML + Bootstrap 5).

## Struktura

```
index.html      - cela stranica
css/style.css   - stilovi
js/main.js      - navigacija i slanje forme
img/            - slike i favicon
```

## Pre objavljivanja

U `index.html` potražiti `TODO` i zameniti:

- broj telefona (`+381600000000` / `060 000 0000`) - Viber i WhatsApp linkovi takođe
- email (`info@dualenergy.rs`)
- grad / područje rada (`Beograd`)
- cene u cenovniku (`X.XXX`)
- linkove ka Facebook / Instagram profilu
- `VAS_FORM_ID` u kontakt formi - napraviti besplatan nalog na https://formspree.io, kreirati formu i upisati njen ID (upiti stižu na email)

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
