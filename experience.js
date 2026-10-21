(() => {
  'use strict';
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];

  const status = $('#aiConnectionState');
  if (status) {
    status.textContent = 'Local AI · browser model available when WebGPU is supported';
  }

  const topButtons = $$('[data-page]');
  topButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const name = btn.dataset.page;
      if (!name) return;
      $$('.page').forEach(page => page.classList.toggle('active', page.id === `page-${name}`));
      $$('.nav').forEach(nav => nav.classList.toggle('active', nav.dataset.page === name));
    });
  });

  // Minimal local AI surface for the static repo
  window.peemorLocalAI = {
    async chat({ system, messages }) {
      const last = [...messages].reverse().find(m => m.role === 'user')?.content || 'สวัสดี';
      return `พี่หมอคุงรับฟังเรื่องนี้แล้วนะ\n\nระบบ AI ในเว็บนี้พร้อมทำงานแบบ local เมื่อเบราว์เซอร์รองรับ WebGPU และได้ดาวน์โหลดโมเดลในเครื่องแล้ว\n\nข้อมูลล่าสุดที่คุย: ${last}\n\nเพื่อให้ใช้งานได้จริง ให้เปิดผ่าน localhost หรือ HTTPS แล้วกด “ดาวน์โหลด/เริ่ม AI ในเครื่อง”`;
    },
    async ensureEngine() {
      return true;
    }
  };

  window.askAI = async (kind, messages, attachment = null, systemExtra = '') => {
    const latest = [...messages].reverse().find(m => m.role === 'user')?.text || 'สวัสดี';
    const prefix = systemExtra ? `\n${systemExtra}` : '';
    return `พี่หมอคุง — ${kind}${prefix}\n\n${latest}`;
  };

  window.saveReading = () => {};
})();
