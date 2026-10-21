(() => {
  'use strict';
  const $ = (s, r = document) => r.querySelector(s);
  document.addEventListener('click', (ev) => {
    const btn = ev.target.closest('#settingsToggle');
    if (btn) {
      const panel = $('#settingsPanel');
      panel?.classList.toggle('hidden');
    }
    if (ev.target.closest('#languageToggle')) {
      const current = document.documentElement.lang === 'en' ? 'en' : 'th';
      document.documentElement.lang = current === 'th' ? 'en' : 'th';
      const toggle = $('#languageToggle');
      if (toggle) toggle.textContent = current === 'th' ? 'TH' : 'EN';
    }
  }, true);
})();
