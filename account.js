(() => {
  'use strict';
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];

  // Add minimal fallback interactivity to tabs
  $$('[data-sa-tab]').forEach(tab => {
    tab.addEventListener('click', () => {
      const name = tab.dataset.saTab;
      $$('[data-sa-tab]').forEach(t => t.classList.toggle('active', t === tab));
      $$('.sa-panel').forEach(panel => panel.classList.toggle('active', panel.id === `sa-${name}`));
    });
  });
})();
