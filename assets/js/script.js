setTimeout(function () {
    const image = document.getElementById('main-image');
    const overlay = document.querySelector('.color-overlay');
    if (image && overlay) {
      overlay.style.height = `${image.offsetHeight}px`;
    } else {
      console.error('Image or overlay element not found');
    }
  }, 200);