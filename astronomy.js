(() => {
  'use strict';
  const $ = (sel, root = document) => root.querySelector(sel);
  const init = () => {
    const btn = $('#globeRotate');
    if (btn) btn.addEventListener('click', () => {
      btn.textContent = 'หมุนอัตโนมัติ: เปิด';
    });

    const reset = $('#globeReset');
    if (reset) reset.addEventListener('click', () => {
      if (window.peemorGlobe && window.peemorGlobe.pointOfView) {
        window.peemorGlobe.pointOfView({ lat: 18, lng: 105, altitude: 2.2 }, 800);
      }
    });
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
