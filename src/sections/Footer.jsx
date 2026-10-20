import Silk from '../components/Silk.jsx'
import { FOOTER_COLUMNS } from '../data/features.js'

export default function Footer({ v }) {
  return (
    <footer style={{ position: "relative", overflow: "hidden", padding: "clamp(48px,6vw,80px) 20px 28px", display: "flex", justifyContent: "center" }}>
      <div style={{ width: "min(1180px,100%)" }}>
        <nav aria-label="Mapa del sitio" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,180px),1fr))", gap: "28px", paddingBottom: "clamp(40px,5vw,64px)" }}>
          {FOOTER_COLUMNS.map(col => (
            <div key={col.title}>
              <h2 style={{ margin: 0, fontSize: "12px", fontWeight: "600", textTransform: "uppercase", letterSpacing: ".06em", color: "#64748b" }}>{col.title}</h2>
              <ul style={{ margin: "14px 0 0", padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
                {col.links.map(l => (
                  <li key={l.href}><a className="hv-link" href={l.href} style={{ fontSize: "14px", color: "#475569" }}>{l.t}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
        <div style={{ position: "relative", isolation: "isolate", overflow: "hidden", background: "#6427cb" }}>
          <div style={{ position: "absolute", inset: "0", background: "#6427cb" }}>
            <Silk view={"{\"angle\":1.4,\"ox\":0.1,\"oy\":0,\"zoom\":1.3,\"sy\":1.8,\"scrollRef\":0.5,\"scrollK\":0.8,\"whiten\":0.04,\"maxL\":0.9,\"res\":0.5}"} transparent nograin style={{ position: "absolute", inset: "0" }} />
          </div>
          <div data-wm="1" style={{ position: "relative", background: "#ffffff", color: "#000000", mixBlendMode: "screen", display: "flex", justifyContent: "center", fontSize: "clamp(88px,24vw,340px)", fontWeight: "800", letterSpacing: "-.02em", gap: ".015em", lineHeight: ".82", overflow: "hidden", padding: "0 0 .2em" }}>
            <span data-wl="1" style={{ display: "inline-block", transform: "translateY(105%)" }}>z</span>
            <span data-wl="1" style={{ display: "inline-block", transform: "translateY(105%)" }}>e</span>
            <span data-wl="1" style={{ display: "inline-block", transform: "translateY(105%)" }}>r</span>
            <span data-wl="1" style={{ display: "inline-block", transform: "translateY(105%)" }}>y</span>
            <span data-wl="1" style={{ display: "inline-block", transform: "translateY(105%)" }}>x</span>
          </div>
        </div>
        <div style={{ marginTop: "28px", paddingTop: "20px", borderTop: "1px solid #e2e8f0", display: "flex", justifyContent: "space-between", gap: "16px", flexWrap: "wrap", fontSize: "13px", color: "#64748b" }}>
          <span>© 2026 Zeryx</span>
          <span style={{ fontWeight: "500" }}>Cobro de facturas entre empresas · Hecho en España</span>
        </div>
        <p style={{ margin: "14px 0 0", maxWidth: "760px", fontSize: "12.5px", lineHeight: "1.6", color: "#94a3b8" }}>Privacidad: esta página no usa cookies ni rastreadores. Si nos escribes por WhatsApp, usamos tu nombre y tu número solo para responderte sobre Zeryx; puedes pedirnos que los borremos cuando quieras.</p>
      </div>
    </footer>
  )
}
