(() => {
  'use strict';
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];

  const panel = $('#localAIPanel');
  const status = $('#localAIStatus');
  if (panel && status) {
    status.textContent = 'Model ready to download when WebGPU is supported.';
  }

  const btn = $('#loadLocalAI');
  if (btn) {
    btn.addEventListener('click', () => {
      btn.textContent = 'Model ready to start';
      btn.disabled = true;
      if (status) status.textContent = 'Open through localhost or HTTPS to enable model download.';
    });
  }
})();
