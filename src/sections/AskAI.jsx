export default function AskAI({ v }) {
  return (
    <section id="ia" style={{ padding: "0 20px clamp(80px,10vw,120px)", display: "flex", justifyContent: "center" }}>
      <div data-r="1" style={{ width: "min(1180px,100%)", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,420px),1fr))", alignItems: "center", gap: "32px clamp(32px,5vw,72px)", padding: "clamp(36px,5vw,56px) clamp(24px,4vw,56px)", borderRadius: "20px", background: "#f3ebff", opacity: "0", transform: "translateY(30px)" }}>
        <div>
          <div style={{ display: "flex", alignItems: "baseline", gap: "10px", fontSize: "15px", fontWeight: "500", color: "#334155" }}>
            <span style={{ fontSize: "13px", fontVariantNumeric: "tabular-nums", color: "#7c3aed" }}>(10)</span>
            Segunda opinión
          </div>
          <h2 style={{ margin: "14px 0 0", fontSize: "clamp(28px,3.4vw,44px)", lineHeight: "1.05", letterSpacing: "-.04em", fontWeight: "600", color: "#0f172a", textWrap: "balance" }}>No nos creas a nosotros. Pregúntale a tu IA.</h2>
          <p style={{ margin: "14px 0 0", fontSize: "15px", lineHeight: "1.6", color: "#475569", maxWidth: "420px" }}>Un clic y tu asistente te explica Zeryx sin filtros.</p>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", justifyContent: "flex-start" }}>
          {v.iaLinks.map((l, $index) => (
            <a className="hv30" key={$index} href={l.href} target="_blank" rel="noopener" aria-label={`Preguntar a ${l.name}`} style={{ flex: "1 1 92px", minWidth: "92px", display: "flex", flexDirection: "column", alignItems: "center", gap: "10px", padding: "18px 10px 14px", borderRadius: "16px", background: "#ffffff", border: "1px solid #e9dcff", textDecoration: "none", color: "#0f172a", fontSize: "13px", fontWeight: "600", transition: "transform .35s cubic-bezier(.34,1.56,.64,1),box-shadow .3s,border-color .3s" }}>
              <img src={l.logo} alt="" width="36" height="36" style={{ width: "36px", height: "36px", borderRadius: "8px", display: "block" }} />
              <span>
                {l.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
