(() => {
  'use strict';
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const init = () => {
    const root = document.getElementById('homeCarousel');
    if (!root) return;
    const track = root.querySelector('.carousel-track');
    const slides = root.querySelectorAll('.slide');
    let index = 0;
    const render = () => {
      if (!track) return;
      track.style.transform = `translateX(-${index * 100}%)`;
    };
    root.querySelector('[data-carousel="next"]')?.addEventListener('click', () => {
      index = (index + 1) % slides.length;
      render();
    });
    root.querySelector('[data-carousel="prev"]')?.addEventListener('click', () => {
      index = (index - 1 + slides.length) % slides.length;
      render();
    });
    render();
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
