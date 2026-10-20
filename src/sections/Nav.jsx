import Roll from '../components/Roll.jsx'
import ProductMenu from './ProductMenu.jsx'

export default function Nav({ v }) {
  return (
    <nav data-nav="1" style={{ position: "fixed", top: "12px", left: "50%", transform: "translateX(-50%)", zIndex: "70", width: "min(1180px,calc(100% - 24px))", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px", padding: "8px 8px 8px 18px", borderRadius: "12px", background: "rgba(255,255,255,.72)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", border: "1px solid #e2e8f0", boxShadow: "0 1px 2px rgba(0,0,0,.05)", transition: "background .4s,box-shadow .4s" }}>
      <a href="/" style={{ display: "flex", alignItems: "center", gap: "10px", fontWeight: "700", fontSize: "19px", letterSpacing: "-.02em", color: "#0f172a" }}>
        <img src="/logo-zeryx.svg" width="26" height="26" alt="" style={{ display: "block" }} />
        {" "}zeryx{" "}
      </a>
      {v.wide && (
        <>
          <div style={{ display: "flex", alignItems: "center", gap: "28px", fontSize: "14px" }}>
            <ProductMenu v={v} />
            {v.navItems.map(it => (
              <a key={it.t} className="hv-link" href={it.href} style={{ whiteSpace: "nowrap", color: "#475569" }}>{it.t}</a>
            ))}
          </div>
        </>
      )}
      <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
        <a className="hv-nav-cta" href={v.waLink} target={v.waTarget} rel="noopener" data-mag="1" onMouseMove={v.magnet} onMouseLeave={v.unmagnet} style={{ whiteSpace: "nowrap", fontSize: "14px", fontWeight: "500", color: "#ffffff", background: "#7c3aed", padding: "10px 16px", borderRadius: "8px", transition: "transform .25s cubic-bezier(.2,.8,.2,1),background .25s" }}>
          <Roll>Pedir acceso</Roll>
        </a>
        {v.notWide && (
          <>
            <button onClick={v.toggleMenu} aria-label="Menú" style={{ width: "40px", height: "40px", borderRadius: "8px", border: "1px solid #e2e8f0", background: "#ffffff", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "4px", cursor: "pointer" }}>
              <span style={{ width: "16px", height: "2px", borderRadius: "2px", background: "#0f172a", transition: "transform .3s", transform: v.bar1 }}></span>
              <span style={{ width: "16px", height: "2px", borderRadius: "2px", background: "#0f172a", transition: "opacity .3s", opacity: v.bar2 }}></span>
              <span style={{ width: "16px", height: "2px", borderRadius: "2px", background: "#0f172a", transition: "transform .3s", transform: v.bar3 }}></span>
            </button>
          </>
        )}
      </div>
    </nav>
  )
}
