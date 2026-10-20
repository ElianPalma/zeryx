import { useEffect, useRef, useState } from 'react'
import { FEATURES, FEATURE_GROUPS } from '../data/features.js'
import FeatureIcon from '../components/FeatureIcon.jsx'

const COLUMNS = [['Cobrar'], ['Controlar', 'Conectar'], ['Hacia dónde vamos', 'promo']]
const groupTitle = { 'Cobrar': 'Cobrar', 'Controlar': 'Controlar', 'Conectar': 'Conectar', 'Hacia dónde vamos': 'Hacia dónde vamos' }
const byGroup = name => FEATURES.filter(f => f.group === name)

const one = { display: "block", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }
const soonPill = { flex: "none", fontSize: "9.5px", fontWeight: 600, textTransform: "uppercase", letterSpacing: ".05em", padding: "2px 6px", borderRadius: "999px", background: "#fef3c7", color: "#b45309" }

export function MenuItem({ f, onClick, compact }) {
  const soon = f.status === "soon"
  return (
    <a href={`/producto/${f.slug}/`} onClick={onClick} className="pm-item" style={{ display: "flex", gap: "12px", alignItems: "center", padding: compact ? "10px 12px" : "8px 10px", borderRadius: "10px", color: "#0f172a" }}>
      <span className="pm-icon" style={{ flex: "none", width: "34px", height: "34px", borderRadius: "9px", display: "flex", alignItems: "center", justifyContent: "center", background: soon ? "#f8fafc" : "#f3ebff", color: soon ? "#94a3b8" : "#7c3aed", border: "1px solid " + (soon ? "#e2e8f0" : "#ede9fe") }}>
        <FeatureIcon slug={f.slug} />
      </span>
      <span style={{ minWidth: 0, flex: 1 }}>
        <span style={{ display: "flex", alignItems: "center", gap: "6px", minWidth: 0, fontSize: "14px", fontWeight: 600, letterSpacing: "-.01em" }}>
          <span style={one}>{f.menuName || f.name}</span>
          {soon && <span style={soonPill}>En el plan</span>}
        </span>
        {!compact && <span style={{ ...one, marginTop: "1px", fontSize: "12.5px", lineHeight: 1.4, color: "#64748b" }}>{f.tagline}</span>}
      </span>
    </a>
  )
}

function Promo({ v, close }) {
  return (
    <div style={{ position: "relative", flex: 1, overflow: "hidden", display: "flex", flexDirection: "column", margin: "4px 6px 2px", padding: "18px", borderRadius: "12px", background: "linear-gradient(150deg,#4d18a9,#280465)", color: "#ffffff" }}>
      <span aria-hidden="true" style={{ position: "absolute", right: "-25%", top: "-45%", width: "70%", aspectRatio: "1", borderRadius: "50%", background: "#7c3aed", opacity: 0.55, filter: "blur(45px)" }} />
      <span style={{ position: "relative", fontSize: "11px", fontWeight: 600, textTransform: "uppercase", letterSpacing: ".06em", color: "#d7c0ff" }}>Demo · 0:50</span>
      <span style={{ position: "relative", marginTop: "8px", fontSize: "17px", lineHeight: 1.2, fontWeight: 700, letterSpacing: "-.02em" }}>Mira a Zeryx cobrar una factura de principio a fin</span>
      <span style={{ position: "relative", marginTop: "auto", paddingTop: "14px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "10px", flexWrap: "wrap" }}>
        <a href="/#demo" onClick={e => { close(); v.openVideo(e) }} className="pm-cta" style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "14px", fontWeight: 600, color: "#ffffff" }}>
          <span style={{ width: "28px", height: "28px", borderRadius: "50%", background: "#ffffff", color: "#7c3aed", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "9px", paddingLeft: "2px" }}>▶</span>
          Ver demo
        </a>
        <a href="/producto/" onClick={close} className="pm-cta" style={{ fontSize: "13px", fontWeight: 600, color: "#ede9fe" }}>Todas las funciones →</a>
      </span>
    </div>
  )
}

export default function ProductMenu({ v }) {
  const [open, setOpen] = useState(false)
  const root = useRef(null)
  const btn = useRef(null)
  const timer = useRef(0)
  const pointer = useRef('')

  const show = () => { clearTimeout(timer.current); setOpen(true) }
  const toggle = () => { const mouse = pointer.current === 'mouse'; pointer.current = ''; setOpen(o => (mouse && o) || !o) }
  const hide = (delay = 160) => { clearTimeout(timer.current); timer.current = setTimeout(() => setOpen(false), delay) }

  useEffect(() => {
    if (!open) return
    const onKey = e => { if (e.key === 'Escape') { setOpen(false); btn.current && btn.current.focus() } }
    const onDown = e => { if (root.current && !root.current.contains(e.target)) setOpen(false) }
    const y0 = window.scrollY
    const onScroll = () => { if (Math.abs(window.scrollY - y0) > 40) setOpen(false) }
    window.addEventListener('keydown', onKey)
    document.addEventListener('pointerdown', onDown)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('keydown', onKey)
      document.removeEventListener('pointerdown', onDown)
      window.removeEventListener('scroll', onScroll)
    }
  }, [open])

  useEffect(() => () => clearTimeout(timer.current), [])

  const close = () => setOpen(false)

  return (
    <div ref={root} onMouseEnter={show} onMouseLeave={() => hide()} onFocus={show} onBlur={e => { if (!e.currentTarget.contains(e.relatedTarget)) hide(0) }}>
      <button
        ref={btn}
        type="button"
        aria-expanded={open}
        aria-controls="menu-producto"
        onPointerDown={e => { pointer.current = e.pointerType }}
        onClick={toggle}
        className="hv-link"
        style={{ display: 'flex', alignItems: 'center', gap: '4px', padding: 0, border: 0, background: 'transparent', fontFamily: 'inherit', fontSize: '14px', color: open ? '#0f172a' : '#475569', cursor: 'pointer', whiteSpace: 'nowrap' }}
      >
        Producto
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ transition: 'transform .3s cubic-bezier(.2,.8,.2,1)', transform: open ? 'rotate(180deg)' : 'none' }}><path d="M6 9l6 6 6-6" /></svg>
      </button>
      <div
        id="menu-producto"
        data-lenis-prevent=""
        style={{
          position: 'absolute', top: 'calc(100% + 8px)', left: 0, right: 0, zIndex: 71,
          padding: '12px', borderRadius: '16px', background: '#ffffff', border: '1px solid #e2e8f0',
          boxShadow: '0 30px 60px -20px rgba(40,4,101,.28), 0 1px 2px rgba(0,0,0,.05)',
          display: 'grid', gridTemplateColumns: 'repeat(3,minmax(0,1fr))', gap: '4px',
          opacity: open ? 1 : 0, visibility: open ? 'visible' : 'hidden', transform: open ? 'none' : 'translateY(-6px)',
          transition: open ? 'opacity .25s ease, transform .35s cubic-bezier(.2,.8,.2,1), visibility 0s' : 'opacity .2s ease, transform .2s ease, visibility 0s linear .2s'
        }}
      >
        <span aria-hidden="true" style={{ position: 'absolute', left: 0, right: 0, top: '-10px', height: '10px' }} />
        {COLUMNS.map(groups => (
          <div key={groups.join()} style={{ display: "flex", flexDirection: "column", gap: "10px", padding: "4px", minWidth: 0 }}>
            {groups.map(g => g === "promo" ? <Promo key={g} v={v} close={close} /> : (
              <div key={g}>
                <div style={{ padding: "0 10px 4px", fontSize: "11px", fontWeight: 600, textTransform: "uppercase", letterSpacing: ".06em", color: "#94a3b8" }}>{groupTitle[g]}</div>
                {byGroup(g).map(f => <MenuItem key={f.slug} f={f} onClick={close} />)}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export { FEATURE_GROUPS, byGroup, groupTitle }
