const EXPO = 'cubic-bezier(.19,1,.22,1)';
const springs = new Map();
let running = false, last = 0;
const K = ['x', 'y', 'rx', 'ry', 's'];
function get(el, cfg) {
  let s = springs.get(el);
  if (!s) {
    s = { c: { x: 0, y: 0, rx: 0, ry: 0, s: 1 }, t: { x: 0, y: 0, rx: 0, ry: 0, s: 1 }, v: { x: 0, y: 0, rx: 0, ry: 0, s: 0 }, k: 220, d: 20, persp: 0 };
    el.style.transition = (el.style.transition || '').split(',').filter(p => !/transform/.test(p)).join(',');
    el.style.willChange = 'transform';
    springs.set(el, s);
  }
  Object.assign(s, cfg || {});
  if (!running) { running = true; last = performance.now(); requestAnimationFrame(tick); }
  return s;
}
function tick(now) {
  const dt = Math.min(0.032, (now - last) / 1000); last = now;
  springs.forEach((s, el) => {
    let rest = true;
    K.forEach(k => {
      const a = (s.t[k] - s.c[k]) * s.k - s.v[k] * s.d;
      s.v[k] += a * dt; s.c[k] += s.v[k] * dt;
      if (Math.abs(s.v[k]) > 0.001 || Math.abs(s.t[k] - s.c[k]) > 0.001) rest = false;
    });
    const c = s.c;
    el.style.transform = `${s.persp ? `perspective(${s.persp}px) ` : ''}translate3d(${c.x.toFixed(2)}px,${c.y.toFixed(2)}px,0) rotateX(${c.rx.toFixed(2)}deg) rotateY(${c.ry.toFixed(2)}deg) scale(${c.s.toFixed(4)})`;
    if (rest && s.t.x === 0 && s.t.y === 0 && s.t.rx === 0 && s.t.ry === 0 && s.t.s === 1) { el.style.transform = ''; el.style.willChange = ''; springs.delete(el); }
  });
  if (springs.size) requestAnimationFrame(tick); else running = false;
}
const rel = (el, e) => { const r = el.getBoundingClientRect(); return { x: (e.clientX - r.left) / r.width - 0.5, y: (e.clientY - r.top) / r.height - 0.5, px: e.clientX - r.left, py: e.clientY - r.top }; };
function glare(el) {
  let g = el._glare;
  if (!g) {
    if (getComputedStyle(el).position === 'static') el.style.position = 'relative';
    g = document.createElement('span');
    g.style.cssText = 'position:absolute;inset:0;border-radius:inherit;pointer-events:none;opacity:0;transition:opacity .5s;mix-blend-mode:soft-light;z-index:5';
    el.appendChild(g); el._glare = g;
  }
  return g;
}
const API = {
  tilt(el, e) {
    const p = rel(el, e), s = get(el, { k: 180, d: 18, persp: 1000 });
    s.t.rx = -p.y * 10; s.t.ry = p.x * 12; s.t.s = 1.015;
    const g = glare(el); g.style.opacity = 1;
    g.style.background = `radial-gradient(420px circle at ${p.px}px ${p.py}px, rgba(255,255,255,.55), rgba(255,255,255,0) 60%)`;
  },
  untilt(el) { const s = get(el, { k: 120, d: 14 }); s.t.rx = 0; s.t.ry = 0; s.t.s = 1; if (el._glare) el._glare.style.opacity = 0; },
  magnet(el, e) { const p = rel(el, e), s = get(el, { k: 260, d: 20 }); s.t.x = p.x * el.offsetWidth * 0.18; s.t.y = p.y * el.offsetHeight * 0.3; s.t.s = 1.03; },
  unmagnet(el) { const s = get(el, { k: 200, d: 11 }); s.t.x = 0; s.t.y = 0; s.t.s = 1; },
  odometer(el, text) {
    el.style.fontVariantNumeric = 'tabular-nums';
    let di = 0;
    el.innerHTML = Array.from(text).map(ch => {
      if (!/[0-9]/.test(ch)) return `<span style="display:inline-block">${ch}</span>`;
      const n = +ch, i = di++, list = Array.from({ length: 20 }, (_, k) => `<span style="display:block;height:1em;line-height:1em">${k % 10}</span>`).join('');
      return `<span style="display:inline-block;height:1em;line-height:1em;overflow:hidden;vertical-align:top"><span data-odo="${10 + n}" data-i="${i}" style="display:block;transform:translateY(0)">${list}</span></span>`;
    }).join('');
    requestAnimationFrame(() => requestAnimationFrame(() => {
      el.querySelectorAll('[data-odo]').forEach(c => {
        c.style.transition = `transform ${1.6 + +c.dataset.i * 0.12}s ${EXPO} ${+c.dataset.i * 60}ms`;
        c.style.transform = `translateY(-${c.dataset.odo}em)`;
      });
    }));
  }
};
export default API
