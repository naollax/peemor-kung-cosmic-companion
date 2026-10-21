(() => {
  'use strict';
  const $ = (s, r = document) => r.querySelector(s);
  const ready = () => {
    const btn = $('#languageToggle');
    if (!btn) return;
    btn.textContent = 'TH';
    btn.title = 'Switch language';
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', ready);
  else ready();
})();
