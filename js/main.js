// ===== Dual Energy - skripte =====

// Navigacija dobija tamniju pozadinu kada se skroluje
const nav = document.getElementById('mainNav');
const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 50);
window.addEventListener('scroll', onScroll);
onScroll();

// Zatvaranje mobilnog menija posle klika na link
const navMenu = document.getElementById('navMenu');
document.querySelectorAll('#navMenu .nav-link').forEach((link) => {
  link.addEventListener('click', () => {
    if (navMenu.classList.contains('show')) {
      bootstrap.Collapse.getOrCreateInstance(navMenu).hide();
    }
  });
});

// Tekuća godina u footer-u
document.getElementById('year').textContent = new Date().getFullYear();

// Slanje kontakt forme (Formspree) bez napuštanja stranice
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

    showStatus('success', 'Hvala! Vaš upit je poslat, javićemo vam se uskoro.');
    form.reset();
    form.classList.remove('was-validated');
  } catch {
    showStatus('danger', 'Došlo je do greške. Molimo vas pozovite nas telefonom.');
  } finally {
    button.disabled = false;
  }
});
