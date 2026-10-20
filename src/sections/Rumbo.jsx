import { useEffect, useRef } from 'react'
import { ROADMAP } from '../data/content.js'
import SplitWords from '../components/SplitWords.jsx'
import Silk from '../components/Silk.jsx'

const TONES = ['now', 'plan', 'plan', 'dest']
const OPEN = 2.6
const CLOSED = 1
const STIFFNESS = 190
const DAMPING = 24

const smooth = (a, b, x) => {
  const t = Math.min(1, Math.max(0, (x - a) / (b - a)))
  return t * t * (3 - 2 * t)
}

function useSpringBar(ref) {
  useEffect(() => {
    const bar = ref.current
    if (!bar) return
    const narrow = window.matchMedia('(max-width: 860px)')
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const segs = Array.from(bar.children).map((el, i) => ({
      el,
      g: i === 0 ? OPEN : CLOSED,
      v: 0,
      closed: el.querySelector('.rb-closed'),
      open: el.querySelector('.rb-open'),
      vig: Array.from(el.querySelectorAll('.rb-vig > *'))
    }))
    let active = 0, raf = 0, last = 0, intent = 0, back = 0

    const paint = s => {
      const p = (s.g - CLOSED) / (OPEN - CLOSED)
      const out = smooth(0, 0.45, p)
      s.el.style.flexGrow = s.g.toFixed(4)
      s.closed.style.opacity = (1 - out).toFixed(3)
      s.closed.style.transform = `translateY(${(-out * 10).toFixed(2)}px)`
      s.open.style.opacity = smooth(0.35, 0.95, p).toFixed(3)
      s.open.style.transform = `translateY(${((1 - smooth(0.3, 1, p)) * 12).toFixed(2)}px)`
      s.vig.forEach((c, k) => {
        const q = smooth(0.5 + k * 0.1, 0.9 + k * 0.05, p)
        c.style.opacity = q.toFixed(3)
        c.style.transform = `translateY(${((1 - q) * 10).toFixed(2)}px)`
      })
    }

    const clear = () => segs.forEach(s => {
      ;[s.el, s.closed, s.open, ...s.vig].forEach(n => { n.style.flexGrow = ''; n.style.opacity = ''; n.style.transform = '' })
    })

    const tick = now => {
      const dt = Math.min(0.033, (now - last) / 1000 || 0.016)
      last = now
      let moving = false
      segs.forEach((s, i) => {
        const target = i === active ? OPEN : CLOSED
        s.v += ((target - s.g) * STIFFNESS - s.v * DAMPING) * dt
        s.g += s.v * dt
        if (Math.abs(s.v) > 0.0015 || Math.abs(target - s.g) > 0.0015) moving = true
        else { s.g = target; s.v = 0 }
        paint(s)
      })
      raf = moving ? requestAnimationFrame(tick) : 0
    }

    const setActive = i => {
      if (narrow.matches || i === active) return
      active = i
      if (reduce) {
        segs.forEach((s, j) => { s.g = j === active ? OPEN : CLOSED; s.v = 0; paint(s) })
        return
      }
      if (!raf) { last = performance.now(); raf = requestAnimationFrame(tick) }
    }

    const offs = []
    const on = (el, ev, fn) => { el.addEventListener(ev, fn); offs.push(() => el.removeEventListener(ev, fn)) }
    segs.forEach((s, i) => {
      on(s.el, 'pointerenter', e => {
        if (e.pointerType !== 'mouse') return
        clearTimeout(back)
        clearTimeout(intent)
        intent = setTimeout(() => setActive(i), 90)
      })
      on(s.el, 'focusin', () => { clearTimeout(back); setActive(i) })
      on(s.el, 'click', () => setActive(i))
    })
    on(bar, 'pointerleave', () => {
      clearTimeout(intent)
      back = setTimeout(() => setActive(0), 700)
    })

    const sync = () => {
      cancelAnimationFrame(raf)
      raf = 0
      if (narrow.matches) { clear(); return }
      segs.forEach((s, j) => { s.g = j === active ? OPEN : CLOSED; s.v = 0; paint(s) })
    }
    narrow.addEventListener('change', sync)
    sync()

    return () => {
      cancelAnimationFrame(raf)
      clearTimeout(intent)
      clearTimeout(back)
      narrow.removeEventListener('change', sync)
      offs.forEach(f => f())
    }
  }, [ref])
}

function Vignette({ i }) {
  if (i === 0) {
    return (
      <div className="rb-vig rb-chat">
        <span className="rb-bubble rb-in" style={{ '--d': 0 }}>¿Hay algo que esté frenando el pago de la FAC-0381?</span>
        <span className="rb-bubble rb-out" style={{ '--d': 1 }}>Se nos pasó. El viernes os la pagamos.</span>
        <span className="rb-paid" style={{ '--d': 2 }}><b>Pagado</b> · 8.750,00 €</span>
      </div>
    )
  }
  if (i === 1) {
    return (
      <div className="rb-vig rb-sketch">
        <div className="rb-inv" style={{ '--d': 0 }}>
          <span>FAC-0412</span>
          <span className="rb-muted">Vence en 45 días</span>
          <b>12.400,00 €</b>
        </div>
        <span className="rb-arrow" style={{ '--d': 1 }} aria-hidden="true">↓</span>
        <div className="rb-inv rb-inv-today" style={{ '--d': 2 }}>
          <span>En tu cuenta</span>
          <b>Hoy</b>
        </div>
      </div>
    )
  }
  if (i === 2) {
    return (
      <div className="rb-vig rb-sketch">
        <div className="rb-bal" style={{ '--d': 0 }}><span>Cuenta principal</span><b>84.200 €</b></div>
        <div className="rb-bal" style={{ '--d': 1 }}><span>Cuenta de pagos</span><b>31.600 €</b></div>
        <div className="rb-bal rb-bal-ok" style={{ '--d': 2 }}><span>Pago a proveedor</span><b>Aprobado ✓</b></div>
      </div>
    )
  }
  return (
    <div className="rb-vig rb-ledger">
      <span className="rb-ledger-head">Esta semana, sin que hicieras nada</span>
      <div className="rb-row"><span className="rb-tag">Cobrado</span><span className="rb-what">3 facturas</span><b>21.150 €</b></div>
      <div className="rb-row"><span className="rb-tag">Adelantado</span><span className="rb-what">FAC-0412</span><b>12.400 €</b></div>
      <div className="rb-row"><span className="rb-tag">Pagado</span><span className="rb-what">2 proveedores</span><b>6.300 €</b></div>
    </div>
  )
}

export default function Rumbo() {
  const barRef = useRef(null)
  useSpringBar(barRef)
  return (
    <section id="rumbo" className="rb">
      <div style={{ width: 'min(1180px,100%)' }}>
        <div data-r="1" style={{ display: 'flex', alignItems: 'baseline', gap: '10px', fontSize: '15px', fontWeight: 500, color: '#334155', opacity: 0, transform: 'translateY(24px)' }}>
          <span style={{ fontSize: '13px', fontVariantNumeric: 'tabular-nums', color: '#7c3aed' }}>(11)</span>
          Hacia dónde vamos
        </div>
        <h2 data-split="1" style={{ margin: '16px 0 0', fontSize: 'clamp(34px,5.4vw,72px)', lineHeight: 1, letterSpacing: '-.045em', fontWeight: 600, maxWidth: '900px' }}>
          <SplitWords text="Empezamos cobrando. Acabaremos siendo tu banco." />
        </h2>
        <p data-r="1" style={{ margin: '20px 0 0', maxWidth: '620px', fontSize: 'clamp(16px,1.5vw,18px)', lineHeight: 1.6, color: '#64748b', opacity: 0, transform: 'translateY(24px)' }}>
          Cada paso llega cuando el anterior funciona, no antes. Hoy solo está disponible el primero.
        </p>

        <ol ref={barRef} className="rb-bar">
          {ROADMAP.map((s, i) => (
            <li key={s.t} tabIndex={0} data-r="1" data-d={i * 80} className={'rb-seg rb-' + TONES[i]} style={{ opacity: 0, transform: 'translateY(24px)' }}>
              {i === 0 && <span className="rb-fill" aria-hidden="true" />}
              {i === 3 && (
                <span className="rb-silk" aria-hidden="true">
                  <Silk view={'{"angle":1.4,"ox":0.1,"oy":0,"zoom":1.3,"sy":1.8,"scrollRef":0.5,"scrollK":0.8,"whiten":0.04,"maxL":0.9,"res":0.6}'} transparent nograin style={{ position: 'absolute', inset: 0 }} />
                </span>
              )}
              <div className="rb-closed" aria-hidden="true">
                <div className="rb-top">
                  <span className="rb-when">{s.when}</span>
                  {i === 0 && <span className="rb-live" />}
                </div>
                <span className="rb-big">{String(i + 1).padStart(2, '0')}</span>
                <div className="rb-closed-title">{s.t}</div>
              </div>
              <div className="rb-open">
                <div className="rb-top">
                  <span className="rb-num">{String(i + 1).padStart(2, '0')}</span>
                  <span className="rb-when">{s.when}</span>
                  <span className="rb-status">{i === 0 && <span className="rb-live" aria-hidden="true" />}{s.status}</span>
                </div>
                <Vignette i={i} />
                <div className="rb-text">
                  <h3 className="rb-title">{s.t}</h3>
                  <p className="rb-desc">{s.d}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>

        <p data-r="1" data-d="400" className="rb-note" style={{ opacity: 0, transform: 'translateY(24px)' }}>
          Hoy Zeryx no es un banco ni guarda tu dinero. El pago va de tu cliente a tu cuenta.
        </p>
      </div>
    </section>
  )
}
