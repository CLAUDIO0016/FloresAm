 // main.js
onload = () => {
  // Quitamos la clase "container" si la tenías para pausar animaciones
  document.body.classList.remove("container");

  // Referencias
  const btnYes       = document.querySelector('.btn-yes');
  const btnNo        = document.querySelector('.btn-no');
  const infoModal    = document.querySelector('.info-modal');
  const modalClose   = document.querySelector('.info-modal__close');
  let noClicks       = 0;

  // 1) "Sí" → mostramos el modal
  btnYes.addEventListener('click', () => {
    infoModal.classList.remove('hidden');
  });

  // 2) Cerrar modal con la "X"
  modalClose.addEventListener('click', () => {
    infoModal.classList.add('hidden');
  });

  // 3) Cerrar si clikeas fuera del contenido
  infoModal.addEventListener('click', e => {
    if (e.target === infoModal) {
      infoModal.classList.add('hidden');
    }
  });

  // 4) "No" → se mueve aleatoriamente, y desaparece al 2º click
  btnNo.addEventListener('click', () => {
    noClicks++;

    // Si ya hizo 2 clicks, lo desvanecemos y quitamos
    if (noClicks >= 2) {
      btnNo.style.transition = 'opacity 0.3s';
      btnNo.style.opacity = '0';
      setTimeout(() => btnNo.remove(), 300);
      return;
    }

    // Calculamos un punto aleatorio dentro de la ventana
    const vw = Math.max(document.documentElement.clientWidth, window.innerWidth);
    const vh = Math.max(document.documentElement.clientHeight, window.innerHeight);
    const rect = btnNo.getBoundingClientRect();
    const maxX = vw - rect.width;
    const maxY = vh - rect.height;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    // Aplicamos posición absoluta
    btnNo.style.position = 'absolute';
    btnNo.style.left     = `${randomX}px`;
    btnNo.style.top      = `${randomY}px`;
    btnNo.style.transform = 'translate(0,0)'; // limpia transform si lo tenías
  });
};
onload = () =>{
    document.body.classList.remove("container");
   

};