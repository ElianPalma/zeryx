import { Component } from 'react'
import Lenis from 'lenis'
import ZMotion from '../lib/motion.js'
import { buildView } from './viewModel.js'
import { defineSilk, releaseSilk } from '../lib/silk-bg.js'
import Curtain from '../sections/Curtain.jsx'
import Cursor from '../sections/Cursor.jsx'
import ScrollProgress from '../sections/ScrollProgress.jsx'
import Nav from '../sections/Nav.jsx'
import MobileMenu from '../sections/MobileMenu.jsx'
import VideoModal from '../sections/VideoModal.jsx'
import Footer from '../sections/Footer.jsx'

const AG_TRAVEL = 1100
const AG_HOLD = 2700
const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v))
const qa = s => Array.from(document.querySelectorAll(s))
const TICK_SEL = '[data-psp],[data-ch],[data-rule],[data-rs]'

// Estado de la animación de Agents fuera del estado de Site: así cada paso re-renderiza
// solo esa sección (Agents.jsx se suscribe) y no la página entera.
function createAgentStore() {
  let snap = { agS: -1, agArr: false }
  const subs = new Set()
  return {
    get: () => snap,
    subscribe: f => { subs.add(f); return () => subs.delete(f) },
    set: patch => { snap = { ...snap, ...patch }; subs.forEach(f => f()) }
  }
}

export default class Site extends Component {
  // w empieza en 1280, igual que en el HTML prerenderizado, para que la hidratación encaje;
  // componentDidMount lo corrige al ancho real antes del primer pintado.
  state = { w: 1280, menu: false, video: false, faq: 0, introGone: false }
  agStore = createAgentStore()

  componentDidMount() {
    defineSilk()
    this.off = []
    const introSeen = !!this.props.introSeen
    this.setState({ w: window.innerWidth, introGone: introSeen }, () => { this.layout(); this.onScroll(true) })
    this.seen = new WeakSet()
    this.observeReveals()
    this.initAgents()
    this.initLenis()
    this.initCursor()
    this.initLoop()
    this.initTickers()

    const onKey = e => { if (e.key === 'Escape' && this.state.video) this.closeVideo() }
    window.addEventListener('keydown', onKey)
    this.off.push(() => window.removeEventListener('keydown', onKey))

    const onScroll = (force) => {
      if (this.ticking) { if (force === true) this.forceScroll = true; return }
      this.ticking = true
      if (force === true) this.forceScroll = true
      requestAnimationFrame(() => { this.ticking = false; const f = this.forceScroll; this.forceScroll = false; this.onScroll(f) })
    }
    const onResize = () => {
      this.setState({ w: window.innerWidth })
      ;(this.E.dot || []).forEach(d => { d._w = 0 })
      ;(this.E.marq || []).forEach(m => { m._half = 0 })
      this.layout()
      onScroll(true)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onResize)
    this.off.push(() => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onResize) })
    this.ro = new ResizeObserver(() => {
      if (window.innerWidth !== this.state.w) { this.setState({ w: window.innerWidth }); this.layout() }
    })
    this.ro.observe(document.documentElement)

    this.introBase = ((this.props.introCurtain ?? true) && !introSeen) ? 2100 : 0
    if (this.introBase) {
      // La seda WebGL arranca cuando la cortina empieza a levantarse (antes está tapada).
      import('../lib/intro.js').then(m => m.playIntro(releaseSilk)).catch(() => releaseSilk())
      this.introFallback = setTimeout(() => {
        const c = document.querySelector('[data-curtain]')
        if (c && c.style.display !== 'none' && !c.style.clipPath.includes('100%')) { c.style.transition = 'clip-path 1s ease'; c.style.clipPath = 'inset(0 0 100% 0)' }
        releaseSilk()
      }, 5000)
    } else {
      // Sin intro: la seda arranca cuando la página ha cargado y el navegador está libre.
      const go = () => (window.requestIdleCallback || (f => setTimeout(f, 1)))(releaseSilk, { timeout: 1200 })
      if (document.readyState === 'complete') go()
      else {
        window.addEventListener('load', go, { once: true })
        this.off.push(() => window.removeEventListener('load', go))
      }
    }

    this.initHero()
    this.layout()
    this.onScroll(true)
    this.lateLayout = setTimeout(() => { this.layout(); this.onScroll(true) }, 600)
  }

  componentDidUpdate(pp, ps) {
    if ((pp.heroVariant ?? 'A') !== (this.props.heroVariant ?? 'A')) setTimeout(() => { this.initHero(); this.onScroll(true) }, 30)
    if (ps.w !== this.state.w || ps.video !== this.state.video) this.observeReveals()
  }

  componentWillUnmount() {
    this.vio && this.vio.disconnect()
    this.ro && this.ro.disconnect()
    cancelAnimationFrame(this.raf)
    cancelAnimationFrame(this.craf)
    if (this.lenis) this.lenis.destroy()
    ;[this.io, this.dio, this.sio].forEach(o => o && o.disconnect())
    this.io = this.dio = this.sio = this.vio = null
    clearInterval(this.iv)
    clearInterval(this.fiv)
    clearInterval(this.rot)
    clearInterval(this.stk)
    clearTimeout(this.lateLayout)
    clearTimeout(this.introFallback)
    this.off.forEach(f => f())
  }

  observeReveals() {
    if (!this.io) {
      this.io = new IntersectionObserver(es => es.filter(e => e.isIntersecting)
        .sort((a, b) => (a.boundingClientRect.top - b.boundingClientRect.top) || (a.boundingClientRect.left - b.boundingClientRect.left))
        .forEach((e, bi) => {
          const el = e.target
          const d = el.dataset.d !== undefined ? +el.dataset.d : bi * 90
          el.style.transition = `opacity .9s ease ${d}ms, transform 1.4s cubic-bezier(.19,1,.22,1) ${d}ms`
          el.style.opacity = 1
          el.style.transform = 'none'
          this.io.unobserve(el)
        }), { threshold: 0.12 })
      this.dio = new IntersectionObserver(es => es.forEach(e => {
        if (!e.isIntersecting) return
        const el = e.target
        if (el.dataset.scorewrap) { const m = el.querySelector('[data-score]'); if (m) setTimeout(() => { m.style.left = '82%' }, 300) }
        if (el.dataset.draw) { el.style.transition = 'stroke-dashoffset 2.4s cubic-bezier(.6,0,.2,1) .3s'; el.style.strokeDashoffset = 0 }
        if (el.dataset.chatwrap) el.querySelectorAll('[data-chat]').forEach((c, i) => setTimeout(() => { c.style.opacity = 1; c.style.transform = 'none' }, 300 + i * 700))
        this.dio.unobserve(el)
      }), { threshold: 0.4 })
      this.sio = new IntersectionObserver(es => es.forEach(e => {
        if (!e.isIntersecting) return
        e.target.querySelectorAll('[data-sl]').forEach((s, i) => {
          s.style.transition = `transform 1.3s cubic-bezier(.19,1,.22,1) ${i * 55}ms, opacity .8s ease ${i * 55}ms`
          s.style.transform = 'none'
          s.style.opacity = 1
        })
        e.target.querySelectorAll('[data-wl]').forEach((s, i) => {
          s.style.transition = `transform 1.6s cubic-bezier(.19,1,.22,1) ${i * 80}ms`
          s.style.transform = 'none'
        })
        this.sio.unobserve(e.target)
      }), { threshold: 0.3 })
      this.vio = new IntersectionObserver(es => {
        let tick = false
        es.forEach(e => {
          e.target._vis = e.isIntersecting
          if (e.isIntersecting && e.target.matches(TICK_SEL)) tick = true
        })
        if (tick && this.paintTickers) this.paintTickers()
      }, { rootMargin: '120px' })
    }
    this.E = { marq: qa('[data-marquee]'), blob: qa('[data-blob]'), dot: qa('[data-dot]'), tick: qa(TICK_SEL) }
    Object.values(this.E).flat().forEach(el => { if (!this.seen.has(el)) { this.seen.add(el); this.vio.observe(el) } })
    const once = (sel, obs, prep) => qa(sel).forEach(el => { if (!this.seen.has(el)) { this.seen.add(el); prep && prep(el); obs.observe(el) } })
    once('[data-r]', this.io)
    once('[data-draw]', this.dio, el => { const L = el.getTotalLength(); el.style.strokeDasharray = L; el.style.strokeDashoffset = L })
    once('[data-split],[data-wm]', this.sio)
    const cw = document.querySelector('[data-chat]')
    if (cw && !this.seen.has(cw.parentNode)) {
      this.seen.add(cw.parentNode)
      cw.parentNode.dataset.chatwrap = 1
      cw.parentNode.querySelectorAll('[data-chat]').forEach(c => { c.style.opacity = 0; c.style.transform = 'translateY(10px)'; c.style.transition = 'opacity .5s ease, transform .6s cubic-bezier(.2,.8,.2,1)' })
      this.dio.observe(cw.parentNode)
    }
    const sm = document.querySelector('[data-score]')
    if (sm && !this.seen.has(sm.parentNode)) { this.seen.add(sm.parentNode); sm.parentNode.dataset.scorewrap = 1; this.dio.observe(sm.parentNode) }
  }

  initAgents() {
    const agIO = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting && !this.agOn) { this.agOn = 1; this.agStart(0) }
    }), { threshold: 0.3 })
    // Visibilidad de la sección: fuera de pantalla el reloj de la animación sigue corriendo
    // (los pasos avanzan igual que antes), pero no se escribe en el DOM.
    this.agVis = true
    const agVisIO = new IntersectionObserver(es => es.forEach(e => { this.agVis = e.isIntersecting }), { rootMargin: '150px' })
    const agW = document.querySelector('[data-agwrap]')
    if (agW) { agIO.observe(agW); agVisIO.observe(agW) }
    const agLoop = now => {
      if (this.agOn) {
        const el = now - this.agT0, seg = this.agSeg, p = Math.min(1, el / AG_TRAVEL)
        const e = p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2
        const svg = this.agVis ? document.querySelector('[data-agsvg]') : null
        if (svg) {
          svg.querySelectorAll('[data-agpath]').forEach(pa => {
            const j = +pa.dataset.agpath, L = pa._L || (pa._L = pa.getTotalLength())
            pa.style.strokeDasharray = L
            pa.style.strokeDashoffset = j < seg ? 0 : j === seg ? L * (1 - e) : L
            pa.style.opacity = j <= seg ? (j < seg ? 0.35 : 1) : 0
          })
          const cur = svg.querySelector('[data-agpath="' + seg + '"]'), d1 = svg.querySelector('[data-agdot]'), d2 = svg.querySelector('[data-agdot2]')
          if (cur && d1) {
            const L = cur._L, pt = cur.getPointAtLength(L * e)
            d1.setAttribute('cx', pt.x); d1.setAttribute('cy', pt.y)
            d2.setAttribute('cx', pt.x); d2.setAttribute('cy', pt.y)
            d1.style.opacity = p < 1 ? 1 : 0
            d2.style.opacity = p < 1 ? 0.55 : 0
            const glow = svg.querySelector('[data-agglow]'), trail = svg.querySelector('[data-agtrail]'), rip = svg.querySelector('[data-agripple]')
            const dAttr = cur.getAttribute('d')
            if (glow.getAttribute('d') !== dAttr) { glow.setAttribute('d', dAttr); trail.setAttribute('d', dAttr) }
            glow.style.strokeDasharray = L
            glow.style.strokeDashoffset = L * (1 - e)
            glow.style.opacity = p < 1 ? 0.5 : Math.max(0, 0.5 - (el - AG_TRAVEL) / 1400)
            const T = Math.min(110, L * e)
            trail.style.strokeDasharray = T + ' ' + (L + T)
            trail.style.strokeDashoffset = -(L * e - T)
            trail.style.opacity = p < 1 ? 0.9 : 0
            const r = Math.min(1, Math.max(0, (el - AG_TRAVEL) / 900))
            if (p >= 1 && r < 1) {
              const end = cur.getPointAtLength(L)
              rip.setAttribute('cx', end.x); rip.setAttribute('cy', end.y)
              rip.setAttribute('r', 8 + 46 * (1 - Math.pow(1 - r, 3)))
              rip.style.opacity = 0.5 * (1 - r)
            } else rip.style.opacity = 0
          }
        }
        const bank = this.agVis ? document.querySelector('[data-agbank]') : null
        if (bank) {
          const k = seg === 4 && p >= 1 ? Math.min(1, (el - AG_TRAVEL) / 1100) : 0
          const txt = k > 0 ? '+' + (8750 * (1 - Math.pow(1 - k, 3))).toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2, useGrouping: 'always' }) + ' €' : '0,00 €'
          if (bank.textContent !== txt) bank.textContent = txt
        }
        if (this.agVis) qa('[data-agfill]').forEach(f => {
          const j = +f.dataset.agfill
          f.style.width = (j < seg ? 100 : j === seg ? Math.min(100, el / (AG_TRAVEL + AG_HOLD) * 100) : 0) + '%'
        })
        if (p >= 1 && !this.agArrived) { this.agArrived = true; this.agStore.set({ agArr: true }) }
        if (el > AG_TRAVEL + AG_HOLD + (seg === 4 ? 1200 : 0)) this.agStart((seg + 1) % 5)
      }
      this.agRaf = requestAnimationFrame(agLoop)
    }
    // El bucle arranca con el primer agStart (al llegar a la sección o al pulsar un paso).
    this.agLoop = agLoop
    this.off.push(() => { agIO.disconnect(); agVisIO.disconnect(); cancelAnimationFrame(this.agRaf); this.agRaf = 0; this.agLoop = null; this.agOn = 0 })
  }

  agStart(i) {
    this.agSeg = i
    this.agT0 = performance.now()
    this.agArrived = false
    this.agStore.set({ agS: i, agArr: false })
    if (!this.agRaf && this.agLoop) this.agRaf = requestAnimationFrame(this.agLoop)
  }

  initLenis() {
    this.lenis = new Lenis({ lerp: 0.09, anchors: { offset: -80 }, smoothWheel: true, autoRaf: false })
    this.lenis.on('scroll', () => this.onScroll())
  }

  initCursor() {
    const c = document.querySelector('[data-cursor]')
    if (!c || !window.matchMedia('(pointer:fine)').matches) return
    let x = -100, y = -100, cx = -100, cy = -100, running = false
    c.style.transform = 'translate3d(-100px,-100px,0)'
    const mv = e => {
      x = e.clientX; y = e.clientY
      if (!running) { running = true; this.craf = requestAnimationFrame(step) }
      c.style.opacity = 1
      const hot = e.target.closest && e.target.closest('a,button')
      c.style.width = c.style.height = hot ? '64px' : '34px'
      c.style.margin = hot ? '-32px 0 0 -32px' : '-17px 0 0 -17px'
      c.style.background = hot ? 'rgba(124,58,237,.12)' : 'transparent'
    }
    const lv = () => { c.style.opacity = 0 }
    window.addEventListener('mousemove', mv, { passive: true })
    document.addEventListener('mouseleave', lv)
    this.off.push(() => { window.removeEventListener('mousemove', mv); document.removeEventListener('mouseleave', lv) })
    const step = () => {
      cx += (x - cx) * 0.2; cy += (y - cy) * 0.2
      if (Math.abs(x - cx) < 0.05 && Math.abs(y - cy) < 0.05) { cx = x; cy = y; running = false }
      c.style.transform = `translate3d(${cx}px,${cy}px,0)`
      if (running) this.craf = requestAnimationFrame(step)
    }
  }

  initLoop() {
    let last = performance.now()
    this.mq = [0, 0]
    const loop = now => {
      const dt = Math.min(50, now - last)
      last = now
      const t = now / 1000
      if (this.lenis) this.lenis.raf(now)
      const sy = window.scrollY, vel = sy - (this.lastY ?? sy)
      this.lastY = sy
      this.vel = (this.vel || 0) * 0.9 + vel * 0.1
      const boost = 1 + Math.min(Math.abs(this.vel) * 0.25, 8), skew = Math.max(-10, Math.min(10, this.vel * 0.6))
      const E = this.E || {}
      ;(E.marq || []).forEach((m, i) => {
        if (!m._vis) return
        const dir = +m.dataset.dir, half = m._half || (m._half = m.scrollWidth / 2)
        if (!half) return
        this.mq[i] = (this.mq[i] || 0) + dt * 0.05 * dir * boost
        if (this.mq[i] <= -half) this.mq[i] += half
        if (this.mq[i] > 0) this.mq[i] -= half
        m.style.transform = `translate3d(${this.mq[i]}px,0,0) skewX(${-skew * dir}deg)`
      })
      ;(E.blob || []).forEach(b => {
        if (!b._vis) return
        const k = +b.dataset.blob
        b.style.translate = `${Math.sin(t * 0.4 + k * 2) * 60}px ${Math.cos(t * 0.33 + k) * 50}px`
      })
      ;(E.dot || []).forEach((d, i) => {
        if (!d._vis) return
        const w = d._w || (d._w = d.parentNode.offsetWidth)
        const p = ((t * (0.35 + i * 0.07) + i * 0.27) % 1)
        d.style.transform = `translate3d(${p * w - 4}px,0,0)`
        d.style.opacity = Math.sin(p * Math.PI)
      })
      this.raf = requestAnimationFrame(loop)
    }
    this.raf = requestAnimationFrame(loop)
  }

  initTickers() {
    // Los contadores avanzan siempre al mismo ritmo; solo se pinta lo que está en pantalla
    // (o cerca). Cuando un elemento vuelve a verse, vio llama a paintTickers y lo pone al día.
    let pk = 0, ck = 0, rk = 0, lk = 0, rl = 0, ticked = false
    const shown = el => el._vis !== false
    const paint = (els, on, styles) => els.forEach((el, i) => { if (shown(el)) Object.assign(el.style, styles(i === on)) })
    const paintAll = (psp, chs) => {
      paint(psp, pk, on => ({ background: on ? '#7c3aed' : '#ffffff', color: on ? '#ffffff' : '#334155', borderColor: on ? '#7c3aed' : '#e2e8f0' }))
      paint(chs, ck, on => ({ background: on ? '#7c3aed' : '#ffffff', color: on ? '#ffffff' : '#475569', borderColor: on ? '#7c3aed' : '#e2e8f0', transform: on ? 'translateY(-4px)' : 'none' }))
      paint(qa('[data-rule]'), rl, on => ({ borderColor: on ? '#bc95ff' : '#e2e8f0', boxShadow: on ? '0 10px 15px -3px rgba(124,58,237,.15)' : 'none', transform: on ? 'translateX(6px)' : 'none' }))
      qa('[data-rs]').forEach((r, i) => {
        if (!shown(r)) return
        const on = i < rk
        r.textContent = on ? 'Conciliado ✓' : 'Pendiente'
        r.style.background = on ? '#dcfce7' : '#f1f5f9'
        r.style.color = on ? '#16a34a' : '#64748b'
      })
    }
    this.paintTickers = () => { if (ticked) paintAll(qa('[data-psp]'), qa('[data-ch]')) }
    this.iv = setInterval(() => {
      const psp = qa('[data-psp]'), chs = qa('[data-ch]')
      pk = (pk + 1) % Math.max(1, psp.length)
      ck = (ck + 1) % Math.max(1, chs.length)
      rl = lk % 4
      rk = (rk + 1) % 5
      lk++
      ticked = true
      paintAll(psp, chs)
    }, 1400)
    this.cobrado = 62940
    this.fiv = setInterval(() => {
      const live = document.querySelector('[data-live]')
      if (!live || document.hidden || window.scrollY > window.innerHeight * 1.5) return
      this.cobrado += [2480, 126, 890, 6400, 49][Math.floor(Math.random() * 5)]
      live.textContent = this.cobrado.toLocaleString('es-ES') + ',00 €'
      live.style.transition = 'color .3s'
      live.style.color = '#16a34a'
      setTimeout(() => { live.style.color = '' }, 700)
    }, 3200)
  }

  openVideo(e) {
    if (e && e.preventDefault) e.preventDefault()
    try { localStorage.setItem('animstage-v3:t', '0') } catch (er) { void er }
    if (this.lenis) this.lenis.stop()
    this.setState({ video: true })
    let n = 0
    const go = () => {
      const m = document.querySelector('[data-vmodal]'), b = document.querySelector('[data-vbox]')
      if (!m) { if (n++ < 60) requestAnimationFrame(go); return }
      m.querySelectorAll('[data-vsrc]').forEach(el => { if (el.dataset.vsrc && !el.getAttribute('src')) el.src = el.dataset.vsrc })
      requestAnimationFrame(() => requestAnimationFrame(() => { m.style.opacity = 1; if (b) b.style.transform = 'none' }))
    }
    requestAnimationFrame(go)
  }

  closeVideo() {
    const m = document.querySelector('[data-vmodal]'), b = document.querySelector('[data-vbox]')
    if (m) m.style.opacity = 0
    if (b) b.style.transform = 'scale(.95) translateY(12px)'
    setTimeout(() => { this.setState({ video: false }); if (this.lenis) this.lenis.start() }, 380)
  }

  layout() {
    const hs = document.querySelector('[data-hs]'), tr = document.querySelector('[data-track]')
    if (hs && tr) hs.style.height = (tr.scrollWidth - window.innerWidth + window.innerHeight) + 'px'
  }

  initHero() {
    clearInterval(this.rot)
    clearInterval(this.stk)
    const hero = document.querySelector('[data-hero]')
    if (!hero) return
    hero.querySelectorAll('[data-w]').forEach((el, i) => {
      el.style.transition = 'none'
      el.style.opacity = 0
      el.style.transform = 'translateY(110%) rotate(4deg)'
      requestAnimationFrame(() => requestAnimationFrame(() => {
        const d = (this.introBase || 0) + 120 + i * 85
        el.style.transition = `opacity .9s ease ${d}ms, transform 1.5s cubic-bezier(.19,1,.22,1) ${d}ms`
        el.style.opacity = 1
        el.style.transform = 'none'
      }))
    })
    const rot = hero.querySelector('[data-rot]'), box = hero.querySelector('[data-rotbox]')
    if (rot && box) {
      let k = 0
      const meas = i => {
        const s = document.createElement('span')
        s.textContent = rot.children[i].textContent
        s.style.cssText = 'position:absolute;visibility:hidden;white-space:nowrap;font:inherit;font-weight:600'
        box.parentNode.appendChild(s)
        const w = s.getBoundingClientRect().width
        s.remove()
        return Math.ceil(w) + 1
      }
      const fit = () => { box.style.width = Math.max(40, meas(k)) + 'px' }
      fit()
      if (document.fonts && document.fonts.ready) document.fonts.ready.then(fit)
      this.rot = setInterval(() => { k = (k + 1) % 4; rot.style.transform = `translateY(${-k * 1.25}em)`; fit() }, 2200)
    }
    const cards = Array.from(hero.querySelectorAll('[data-stackcard]'))
    if (cards.length) {
      let t = 0
      const n = cards.length
      const place = () => cards.forEach((c, i) => {
        const s = (i - t + n * 10) % n
        c.style.zIndex = n - s
        c.style.transform = s === n - 1 ? 'translateY(-70px) scale(1.05) rotate(-3deg)' : `translateY(${s * 60}px) scale(${1 - s * 0.07})`
        c.style.opacity = s === n - 1 ? 0 : 1 - s * 0.25
        c.style.filter = `blur(${s * 1.2}px)`
      })
      place()
      this.stk = setInterval(() => { t++; place() }, 2600)
    }
  }

  onScroll(force) {
    if (window.innerWidth !== this.state.w) this.setState({ w: window.innerWidth })
    const y = window.scrollY
    // Lenis y el evento nativo de scroll llaman a onScroll en el mismo frame: si la posición
    // no ha cambiado, no hay nada que recalcular (salvo llamadas forzadas por layout/resize).
    if (force !== true && y === this.lastSY) return
    this.lastSY = y

    // ---- 1) Lecturas: todas las medidas antes de escribir ningún estilo (evita reflows forzados) ----
    const vh = window.innerHeight, iw = window.innerWidth, H = document.documentElement.scrollHeight
    const pb = document.querySelector('[data-progress]')
    const nav = document.querySelector('[data-nav]')
    const mock = document.querySelector('[data-tiltmock]')
    const vd = document.querySelector('[data-vid]')
    const vdR = vd && vd.getBoundingClientRect()
    const cl = document.querySelector('[data-clip]')
    const clR = cl && cl.getBoundingClientRect()
    const sts = document.querySelector('[data-sts]')
    const stsR = sts && sts.getBoundingClientRect()
    const ws = sts ? qa('[data-sw]') : null
    const piles = qa('[data-pile]').map(pl => ({ inn: pl.querySelector('[data-pilein]'), r: pl.getBoundingClientRect() }))
    const hs = document.querySelector('[data-hs]'), tr = document.querySelector('[data-track]')
    let hsR, hsMax, cards
    if (hs && tr) {
      hsR = hs.getBoundingClientRect()
      hsMax = tr.scrollWidth - iw
      cards = qa('[data-hcard]').map(c => ({ c, left: c.offsetLeft, width: c.offsetWidth }))
    }

    // ---- 2) Escrituras ----
    if (pb) pb.style.width = (y / Math.max(1, H - vh) * 100) + '%'
    if (nav) {
      nav.style.background = y > 40 ? 'rgba(255,255,255,.94)' : 'rgba(255,255,255,.72)'
      nav.style.boxShadow = y > 40 ? '0 10px 15px -3px rgba(0,0,0,.08)' : '0 1px 2px rgba(0,0,0,.05)'
    }
    if (mock) { const p = clamp(y / (vh * 0.6)); mock.style.transform = `rotateX(${24 * (1 - p)}deg) scale(${0.9 + 0.1 * p})` }
    if (vd) {
      const r = vdR
      if (r.bottom > 0 && r.top < vh) {
        const p = clamp((vh - r.top) / (r.height * 0.8)), e = 1 - Math.pow(1 - p, 3), k = 1 - e, mob = iw < 720
        const fr = vd.querySelector('[data-vframe]'), inn = vd.querySelector('[data-vinner]')
        if (fr) fr.style.clipPath = 'inset(' + (k * (mob ? 26 : 18)) + '% ' + (k * (mob ? 5 : 20)) + '% round ' + (k * 28) + 'px)'
        if (inn) inn.style.transform = 'scale(' + (0.82 + 0.18 * e) + ')'
      }
    }
    if (cl) { const r = clR, p = clamp((vh - r.top) / (vh * 0.85)), k = 1 - p; cl.style.clipPath = `inset(0 ${k * 4}% round ${k * 40}px)` }
    if (sts) {
      const r = stsR, p = clamp(-r.top / (r.height - vh)), n = ws.length
      ws.forEach((w, i) => {
        const k = clamp(p * (n + 4) - i)
        const to = w.dataset.hl === 'true' ? [124, 58, 237] : [15, 23, 42], fr = [226, 232, 240]
        w.style.color = `rgb(${fr.map((f, j) => Math.round(f + (to[j] - f) * k)).join(',')})`
      })
    }
    piles.forEach((pl, i) => {
      const nx = piles[i + 1], inn = pl.inn
      if (!inn) return
      if (!nx) { inn.style.transform = 'none'; inn.style.filter = 'none'; return }
      const a = pl.r, b = nx.r
      const p = clamp(1 - (b.top - a.top) / Math.max(1, a.height))
      inn.style.transform = `scale(${1 - p * 0.06})`
      inn.style.filter = `brightness(${1 - p * 0.12})`
    })
    if (hs && tr) {
      const r = hsR, p = clamp(-r.top / Math.max(1, r.height - vh)), max = hsMax
      tr.style.transform = `translate3d(${-p * max}px,0,0)`
      const n = 5, a = Math.min(n - 1, Math.floor(p * n))
      const bar = document.querySelector('[data-hsbar]')
      if (bar) bar.style.width = (20 + p * 80) + '%'
      const num = document.querySelector('[data-hsnum]')
      if (num) num.textContent = '0' + (a + 1)
      const tx = -p * max
      cards.forEach(({ c, left, width }) => {
        const mid = (left + width / 2 + tx) / iw, dd = Math.max(-1.3, Math.min(1.3, (mid - 0.42) / 0.55)), ad = Math.abs(dd)
        c.style.transition = 'border-color .5s, box-shadow .5s'
        c.style.transform = `perspective(1400px) translate3d(0,${(ad * 28).toFixed(1)}px,${(-ad * 90).toFixed(1)}px) rotateY(${(-dd * 12).toFixed(2)}deg)`
        c.style.opacity = (1 - Math.min(ad, 1) * 0.4).toFixed(3)
        const on = ad < 0.4
        c.style.borderColor = on ? '#bc95ff' : '#e2e8f0'
        c.style.boxShadow = on ? '0 30px 60px -20px rgba(124,58,237,.3)' : '0 10px 15px -3px rgba(0,0,0,.06)'
      })
    }
  }

  render() {
    const v = buildView(this)
    const Page = this.props.page
    return (
      <div style={{ position: 'relative', overflowX: 'clip', background: '#ffffff', minHeight: '100vh' }}>
        <Curtain v={v} />
        <Cursor v={v} />
        <ScrollProgress v={v} />
        <Nav v={v} />
        <MobileMenu v={v} />
        <VideoModal v={v} />
        <main>
          <Page v={v} {...this.props.pageProps} />
        </main>
        <Footer v={v} />
      </div>
    )
  }
}
