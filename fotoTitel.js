// 1. Selecteer alle foto's
const fotos = document.querySelectorAll('.list-img');

// 2. Selecteer de plekken in de topbar
const fotoTitel = document.getElementById('fotoTitel');
const fotoJaar = document.getElementById('fotoJaar');

// 3. Klik-event
fotos.forEach(foto => {
  foto.addEventListener('click', () => {
    fotoTitel.textContent = foto.dataset.titel;
    fotoJaar.textContent = foto.dataset.jaar;
  });
});