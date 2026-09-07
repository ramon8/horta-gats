// HortaGats · scripts de la landing

// Menú mòbil
function toggleMenu() {
  document.querySelector('.nav').classList.toggle('oberta');
}

document.querySelectorAll('.nav a').forEach(function (enllac) {
  enllac.addEventListener('click', function () {
    document.querySelector('.nav').classList.remove('oberta');
  });
});

// Carrusel del hero
// Es va provar amb tres fotos rotant cada 5 segons. La junta va preferir
// una sola foto fixa. Ho deixo aquí per si canvien d'opinió.
const slides = document.querySelectorAll('.hero-slide');
// let actual = 0;
// function seguentSlide() {
//   slides[actual].classList.remove('activa');
//   actual = (actual + 1) % slides.length;
//   slides[actual].classList.add('activa');
// }
// setInterval(seguentSlide, 5000);

// Formulari de contacte
// De moment no s'envia enlloc: la junta ha de decidir si va per correu o
// per un servei de formularis. Només validem i mostrem el missatge de rebut.
const formulari = document.querySelector('.formulari');

const missatges = {
  nom: 'Necessitem saber com et dius.',
  correu: 'Ens cal un correu sencer per poder respondre\'t.',
  casa: 'Sense saber com és casa teva no podem continuar.',
  consentiment: 'Sense el teu permís no podem guardar el missatge.'
};

function netejaErrors() {
  formulari.querySelectorAll('.camp--error').forEach(function (camp) {
    camp.classList.remove('camp--error');
  });
  formulari.querySelectorAll('.camp-error').forEach(function (p) {
    p.remove();
  });
}

function marcaError(control, text) {
  const camp = control.closest('.camp') || control.closest('.consentiment');
  camp.classList.add('camp--error');
  const p = document.createElement('p');
  p.className = 'camp-error';
  p.textContent = text;
  camp.appendChild(p);
}

function correuValid(valor) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor);
}

formulari.addEventListener('submit', function (event) {
  event.preventDefault();
  netejaErrors();

  let hiHaErrors = false;
  const controls = formulari.querySelectorAll('[required]');

  controls.forEach(function (control) {
    const nom = control.name;
    let buit;

    if (control.type === 'checkbox') {
      buit = !control.checked;
    } else {
      buit = control.value.trim() === '';
    }

    if (buit) {
      marcaError(control, missatges[nom]);
      hiHaErrors = true;
    } else if (nom === 'correu' && !correuValid(control.value.trim())) {
      marcaError(control, missatges.correu);
      hiHaErrors = true;
    }
  });

  if (hiHaErrors) {
    formulari.querySelector('.camp--error input, .camp--error textarea').focus();
    return;
  }

  formulari.reset();
  formulari.querySelector('.formulari-ok').hidden = false;
});
