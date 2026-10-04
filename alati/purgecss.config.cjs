// PurgeCSS: iz Bootstrap-a ostavlja samo klase koje se koriste u stranicama i skriptama.
// Koristi ga alati/css.py (stranice čita iz privremenih kopija bez već ugrađenog CSS-a).
const pages = process.env.PURGE_PAGES_DIR;

module.exports = {
  css: ['vendor/bootstrap/bootstrap.min.css'],
  content: [
    `${pages}/index.html`,
    `${pages}/politika-privatnosti.html`,
    'js/main.js',
  ],
  // izbacuje i Bootstrap promenljive (--bs-...) koje nijedna zadržana klasa ne koristi
  variables: true,
  safelist: {
    // klase koje dodaju skripte (meni, harmonika, poruke forme)
    standard: ['show', 'collapsing', 'collapsed', 'was-validated', 'is-invalid'],
    greedy: [/^alert-/],
  },
};
