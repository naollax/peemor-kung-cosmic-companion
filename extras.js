(() => {
  'use strict';
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const $ = (s, r = document) => r.querySelector(s);

  const setupSettings = () => {
    const btn = $('#settingsToggle');
    const panel = $('#settingsPanel');
    if (btn && panel) {
      btn.addEventListener('click', () => panel.classList.toggle('hidden'));
    }
    $('#closeSettings')?.addEventListener('click', () => panel?.classList.add('hidden'));
  };

  const setupLanguage = () => {
    const btn = $('#languageToggle');
    if (!btn) return;
    btn.addEventListener('click', () => {
      const current = document.documentElement.lang === 'en' ? 'en' : 'th';
      document.documentElement.lang = current === 'th' ? 'en' : 'th';
      btn.textContent = current === 'th' ? 'TH' : 'EN';
    });
  };

  setupSettings();
  setupLanguage();
})();
