(() => {
  'use strict';
  const $ = (s, r = document) => r.querySelector(s);
  const bridge = {
    login() { return Promise.resolve(); },
    save() { return Promise.resolve(); },
    load() { return Promise.resolve({}); },
    logout() { return Promise.resolve(); },
    status() { return { signedIn: false, mode: 'demo', email: null, pending: false }; }
  };

  window.cosmicBridge = Object.assign(window.cosmicBridge || {}, bridge);

  const auth = $('#cloudLogin');
  if (auth) {
    auth.addEventListener('click', () => {
      const panel = $('#syncPanel');
      if (panel) panel.classList.remove('hidden');
    });
  }
})();
