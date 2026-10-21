(() => {
  'use strict';
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
  const defaultState = {
    theme: { accent: '#5ce5dc', bg: '#07121d', glow: '#f5b777', mode: 'dark', background: '' },
    profile: { nick: '', first: '', last: '', date: '', time: '', place: '', avatar: '', cover: '' },
    glossary: [],
    chats: [],
    readings: [],
    notes: {},
    tone: 'ตรงแต่ใจดี'
  };

  const STORE = 'peemorKungV2';
  function loadState() {
    try {
      const raw = JSON.parse(localStorage.getItem(STORE) || '{}');
      return { ...structuredClone(defaultState), ...raw, theme: { ...defaultState.theme, ...(raw.theme || {}) }, profile: { ...defaultState.profile, ...(raw.profile || {}) }, notes: raw.notes || {} };
    } catch {
      return structuredClone(defaultState);
    }
  }

  let state = loadState();
  const app = () => {
    const root = document.documentElement;
    const t = state.theme || defaultState.theme;
    root.style.setProperty('--accent', t.accent || '#5ce5dc');
    root.style.setProperty('--bg', t.bg || '#07121d');
    root.style.setProperty('--glow', t.glow || '#f5b777');
    document.body.classList.toggle('light', t.mode === 'light');
    const bgEl = $('.space-bg');
    if (bgEl) {
      bgEl.style.backgroundImage = t.background ? `linear-gradient(rgba(3,10,18,.25),rgba(3,10,18,.25)),url("${t.background}")` : "url('assets/space-earth.png')";
    }
  };

  const toast = (msg) => {
    const el = $('#toast');
    if (!el) return;
    el.textContent = msg;
    el.classList.add('show');
    clearTimeout(window._peemorToastTimer);
    window._peemorToastTimer = setTimeout(() => el.classList.remove('show'), 2600);
  };

  function saveState() {
    try {
      localStorage.setItem(STORE, JSON.stringify(state));
    } catch {
      toast('พื้นที่บันทึกเต็ม ลองส่งออกข้อมูลหรือเลือกภาพเล็กลง');
    }
  }

  function goPage(name) {
    currentPage = name;
    $$('.page').forEach(p => p.classList.toggle('active', p.id === `page-${name}`));
    $$('.nav').forEach(b => b.classList.toggle('active', b.dataset.page === name));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  let currentPage = 'home';
  window.goPage = goPage;

  $$('.nav, [data-go]').forEach(el => {
    el.addEventListener('click', () => {
      const page = el.dataset.page || el.dataset.go;
      if (page) goPage(page);
    });
  });

  const init = () => {
    app();
    if (document.getElementById('languageToggle')) {
      document.getElementById('languageToggle').textContent = 'TH';
    }
    if (document.getElementById('aiConnectionState')) {
      document.getElementById('aiConnectionState').textContent = 'Local AI · ready when browser supports WebGPU';
    }
    if (document.getElementById('healthStatus')) {
      document.getElementById('healthStatus').textContent = 'Local AI · browser-ready';
    }
  };

  window.addEventListener('DOMContentLoaded', init);
  window.toast = toast;
  window.appState = state;
  window.saveAppState = saveState;
})();
