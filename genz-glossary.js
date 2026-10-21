(() => {
  'use strict';
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];

  const terms = [
    'จึ้ง', 'เริ่ด', 'ฟีล', 'ฮีลใจ', 'โอเค', 'อ่อม', 'คูล', 'อันตราย'
  ];

  const wrap = $('#glossaryList');
  if (wrap) {
    wrap.innerHTML = terms.map(t => `<span>${t}</span>`).join('');
  }

  const calc = () => {
    const f = $('#fontSizeControl');
    const w = $('#fontWeightControl');
    if (!f || !w) return;
    document.documentElement.style.setProperty('--reading-size', `${f.value}px`);
    document.documentElement.style.setProperty('--reading-weight', w.value);
  };

  const f = $('#fontSizeControl');
  const w = $('#fontWeightControl');
  if (f) f.addEventListener('input', calc);
  if (w) w.addEventListener('change', calc);
  calc();
})();
