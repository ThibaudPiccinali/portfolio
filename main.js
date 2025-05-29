function copyToClipboard(text, element) {
    navigator.clipboard.writeText(text).then(() => {
      const tooltip = element.querySelector('.tooltip');
      tooltip.classList.add('show');
      setTimeout(() => {
        tooltip.classList.remove('show');
      }, 1500);
    });
  }

  const marquee = document.querySelector('.marquee-container');
  const track = document.querySelector('.marquee-track');

  let isDragging = false;
  let startX;
  let scrollLeft;
  let autoScrollSpeed = 0.5;
  let isPaused = false;
  let pauseTimeout;

  // Fonction de scroll automatique
  function autoScroll() {
    if (!isPaused) {
      marquee.scrollLeft += autoScrollSpeed;
      const contentWidth = track.scrollWidth / 2;
      if (marquee.scrollLeft >= contentWidth) {
        marquee.scrollLeft = 0;
      }
    }
    requestAnimationFrame(autoScroll);
  }

  autoScroll();

  function startDrag(x) {
    isDragging = true;
    isPaused = true;
    clearTimeout(pauseTimeout);
    startX = x;
    scrollLeft = marquee.scrollLeft;
  }

  function dragMove(x) {
    if (!isDragging) return;
    const walk = (x - startX) * 1.5;
    marquee.scrollLeft = scrollLeft - walk;
  }

  function endDrag() {
    isDragging = false;
    pauseTimeout = setTimeout(() => {
      isPaused = false;
    }, 100);
  }

  // Souris
  marquee.addEventListener('mousedown', (e) => startDrag(e.pageX));
  marquee.addEventListener('mousemove', (e) => dragMove(e.pageX));
  marquee.addEventListener('mouseup', endDrag);
  marquee.addEventListener('mouseleave', endDrag);

  // Tactile
  marquee.addEventListener('touchstart', (e) => startDrag(e.touches[0].pageX));
  marquee.addEventListener('touchmove', (e) => {
    dragMove(e.touches[0].pageX);
    e.preventDefault(); // évite le scroll vertical de la page
  }, { passive: false });
  marquee.addEventListener('touchend', endDrag);