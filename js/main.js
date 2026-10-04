// ===== Dual Energy - skripte =====

// Navigacija dobija tamniju pozadinu kada se skroluje
const nav = document.getElementById('mainNav');
const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 50);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Zatvaranje mobilnog menija posle klika na link
const navMenu = document.getElementById('navMenu');
navMenu.querySelectorAll('.nav-link').forEach((link) => {
  link.addEventListener('click', () => {
    if (navMenu.classList.contains('show')) {
      bootstrap.Collapse.getOrCreateInstance(navMenu).hide();
    }
  });
});

// Tekuća godina u footer-u
document.getElementById('year').textContent = new Date().getFullYear();

// ----- Google Ads konverzije -----
// Šalje konverziju samo ako su u <head> upisani pravi ID i labele (ADS_CONFIG)
const trackConversion = (type) => {
  const label = window.ADS_CONFIG && window.ADS_CONFIG.conversions[type];
  if (!label || label.includes('XXXX')) return;
  gtag('event', 'conversion', { send_to: label });
};

// Klik na telefon / Viber / WhatsApp
document.addEventListener('click', (e) => {
  const link = e.target.closest('[data-track]');
  if (link) trackConversion(link.dataset.track);
});

// GCLID (ID klika iz oglasa) se šalje uz formu, da se zna koji upit je došao preko oglasa
const gclidField = document.getElementById('gclid');
try {
  const fromUrl = new URLSearchParams(location.search).get('gclid');
  if (fromUrl) sessionStorage.setItem('gclid', fromUrl);
  gclidField.value = fromUrl || sessionStorage.getItem('gclid') || '';
} catch {
  // sessionStorage nije dostupan (privatni režim i sl.) - nije bitno
}

// Usluga iz oglasa (?usluga=...) je unapred izabrana u formi
const izabranaUsluga = document.documentElement.dataset.usluga;
if (izabranaUsluga) {
  const option = document.querySelector(`#usluga option[data-usluga~="${izabranaUsluga}"]`);
  if (option) option.selected = true;
}

// ----- Slanje kontakt forme (Formspree) bez napuštanja stranice -----
const form = document.getElementById('contactForm');
const statusBox = document.getElementById('formStatus');

const showStatus = (type, message) => {
  statusBox.className = `alert alert-${type} mb-0`;
  statusBox.textContent = message;
};

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  if (!form.checkValidity()) {
    form.classList.add('was-validated');
    form.querySelector(':invalid').focus();
    return;
  }

  const button = form.querySelector('button[type="submit"]');
  button.disabled = true;

  try {
    const response = await fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { Accept: 'application/json' },
    });

    if (!response.ok) throw new Error('Greška pri slanju');

    trackConversion('forma');
    showStatus('success', 'Hvala! Vaš upit je poslat, javićemo vam se uskoro.');
    form.reset();
    form.classList.remove('was-validated');
  } catch {
    showStatus('danger', 'Došlo je do greške. Molimo vas pozovite nas telefonom.');
  } finally {
    button.disabled = false;
  }
});
