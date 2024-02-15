window.addEventListener("load", event => {
  var image = document.querySelector('img');
  var overlay = document.querySelector('.color-overlay');

  function createOverlay() {
    if (!overlay) {
      let main = document.querySelector('main');
      overlay = document.createElement('div');
      main.prepend(overlay);
      overlay.classList.add("color-overlay");
    }
    updateOverlayHeight();
  }

  function updateOverlayHeight() {
    if (!overlay) return;
    overlay.style.height = `${image.offsetHeight}px`;
  }

  image.addEventListener('load', createOverlay);

  if (image.complete) {
    createOverlay();
  }

  window.addEventListener('resize', createOverlay);
});
