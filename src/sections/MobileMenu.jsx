import { MenuItem, byGroup, groupTitle } from './ProductMenu.jsx'

const ORDER = ['Cobrar', 'Controlar', 'Conectar', 'Hacia dónde vamos']
const label = { padding: '14px 12px 6px', fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.06em', color: '#94a3b8' }
const link = { padding: '14px 12px', borderRadius: '8px', fontSize: '16px', color: '#0f172a' }

export default function MobileMenu({ v }) {
  if (!v.menuOpen) return null
  return (
    <div data-lenis-prevent="" style={{ position: 'fixed', top: '72px', left: '12px', right: '12px', zIndex: 69, maxHeight: 'calc(100dvh - 88px)', overflowY: 'auto', overscrollBehavior: 'contain', padding: '8px 12px 12px', borderRadius: '12px', background: '#ffffff', border: '1px solid #e2e8f0', boxShadow: '0 25px 50px -12px rgba(0,0,0,.18)', display: 'flex', flexDirection: 'column' }}>
      <nav aria-label="Producto" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,260px),1fr))', columnGap: '8px' }}>
        {ORDER.map(g => (
          <div key={g}>
            <div style={label}>{groupTitle[g]}</div>
            {byGroup(g).map(f => <MenuItem key={f.slug} f={f} onClick={v.closeMenu} compact />)}
          </div>
        ))}
      </nav>
      <a href="/producto/" onClick={v.closeMenu} style={{ ...link, marginTop: '6px', color: '#7c3aed', fontWeight: 600 }}>Todas las funciones →</a>
      <div style={{ height: '1px', margin: '8px 12px', background: '#e2e8f0' }} />
      {v.navItems.map(it => (
        <a key={it.t} className="hv-row" href={it.href} onClick={v.closeMenu} style={link}>{it.t}</a>
      ))}
      <a href={v.waLink} target={v.waTarget} rel="noopener" onClick={v.closeMenu} style={{ ...link, color: '#7c3aed', fontWeight: 600 }}>Pedir acceso por WhatsApp →</a>
    </div>
  )
}
