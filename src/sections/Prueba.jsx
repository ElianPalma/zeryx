import SplitWords from '../components/SplitWords.jsx'

export default function Prueba({ v }) {
  return (
    <section id="prueba" style={{ padding: "0 20px clamp(90px,12vw,160px)", display: "flex", justifyContent: "center" }}>
      <div style={{ width: "min(1180px,100%)" }}>
        <div data-r="1" style={{ display: "flex", alignItems: "baseline", gap: "10px", fontSize: "15px", fontWeight: "500", color: "#334155", opacity: "0", transform: "translateY(24px)" }}>
          <span style={{ fontSize: "13px", fontVariantNumeric: "tabular-nums", color: "#7c3aed" }}>(07)</span>
          La prueba
        </div>
        <h2 data-split="1" style={{ margin: "16px 0 0", fontSize: "clamp(34px,5.4vw,72px)", lineHeight: "1", letterSpacing: "-.045em", fontWeight: "600", maxWidth: "900px" }}>
          <SplitWords text={"Pocas empresas, noventa días y un número público."} />
        </h2>
        <div style={{ marginTop: "clamp(40px,6vw,64px)", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,420px),1fr))", gap: "16px", alignItems: "stretch" }}>
          <div data-r="1" data-d="0" style={{ opacity: "0", transform: "translateY(60px)" }}>
            <div style={{ height: "100%", padding: "clamp(24px,3.5vw,40px)", borderRadius: "16px", background: "#f8fafc", border: "1px solid #e2e8f0", display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span style={{ width: "44px", height: "44px", borderRadius: "12px", background: "#280465", color: "#ffffff", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center" }}>01</span>
                <span style={{ minWidth: "0" }}>
                  <span style={{ display: "block", fontWeight: "600" }}>Primeras empresas</span>
                  <span style={{ display: "block", fontSize: "13px", color: "#64748b" }}>Otoño de 2026 · España · facturas entre empresas</span>
                </span>
              </div>
              <p style={{ margin: "28px 0 0", fontSize: "clamp(22px,2.4vw,30px)", lineHeight: "1.3", letterSpacing: "-.02em", fontWeight: "600", color: "#0f172a", textWrap: "pretty" }}>
                Elegimos pocas empresas con facturas vencidas de verdad. Durante noventa días, Zeryx cobra la mitad y tú la otra mitad. En diciembre publicamos el resultado, salga como salga.
              </p>
              <div style={{ marginTop: "auto", paddingTop: "28px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", flexWrap: "wrap" }}>
                <span style={{ fontSize: "12px", fontWeight: "500", padding: "5px 10px", borderRadius: "999px", background: "#dcfce7", color: "#16a34a", whiteSpace: "nowrap" }}>Quedan plazas</span>
                <a className="hv25" href={v.waLink} target={v.waTarget} rel="noopener" style={{ display: "inline-flex", gap: "8px", whiteSpace: "nowrap", fontSize: "14px", fontWeight: "600", color: "#7c3aed" }}>Pedir acceso →</a>
              </div>
            </div>
          </div>
          <div data-r="1" data-d="120" style={{ opacity: "0", transform: "translateY(60px)" }}>
            <div style={{ height: "100%", padding: "clamp(24px,3.5vw,40px)", borderRadius: "16px", background: "#ffffff", border: "1px solid #e2e8f0", boxShadow: "0 10px 15px -3px rgba(0,0,0,.08)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                <span style={{ fontSize: "11px", fontWeight: "600", textTransform: "uppercase", letterSpacing: ".05em", color: "#64748b" }}>Qué mide el marcador</span>
                <span style={{ fontSize: "12px", fontWeight: "500", padding: "5px 10px", borderRadius: "999px", background: "#ede9fe", color: "#7c3aed", whiteSpace: "nowrap" }}>Resultado en diciembre</span>
              </div>
              <div style={{ marginTop: "30px", display: "flex", flexDirection: "column", gap: "22px" }}>
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "12px" }}>
                    <span style={{ fontSize: "14px", color: "#475569" }}>Puntos de cobro de Zeryx sobre tu control</span>
                    <span style={{ fontSize: "clamp(24px,2.6vw,32px)", fontWeight: "700", letterSpacing: "-.03em", whiteSpace: "nowrap", color: "#94a3b8" }}>—</span>
                  </div>
                  <div style={{ marginTop: "10px", height: "8px", borderRadius: "8px", background: "#f1f5f9" }}></div>
                </div>
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "12px" }}>
                    <span style={{ fontSize: "14px", color: "#475569" }}>Parte del dinero que entra por el enlace</span>
                    <span style={{ fontSize: "clamp(24px,2.6vw,32px)", fontWeight: "700", letterSpacing: "-.03em", whiteSpace: "nowrap", color: "#94a3b8" }}>—</span>
                  </div>
                  <div style={{ marginTop: "10px", height: "8px", borderRadius: "8px", background: "#f1f5f9" }}></div>
                </div>
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "12px" }}>
                    <span style={{ fontSize: "14px", color: "#475569" }}>Días desde el vencimiento hasta el cobro</span>
                    <span style={{ fontSize: "clamp(24px,2.6vw,32px)", fontWeight: "700", letterSpacing: "-.03em", whiteSpace: "nowrap", color: "#94a3b8" }}>—</span>
                  </div>
                  <div style={{ marginTop: "10px", height: "8px", borderRadius: "8px", background: "#f1f5f9" }}></div>
                </div>
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "12px" }}>
                    <span style={{ fontSize: "14px", color: "#475569" }}>Facturas y empresas medidas</span>
                    <span style={{ fontSize: "clamp(24px,2.6vw,32px)", fontWeight: "700", letterSpacing: "-.03em", whiteSpace: "nowrap", color: "#94a3b8" }}>—</span>
                  </div>
                  <div style={{ marginTop: "10px", height: "8px", borderRadius: "8px", background: "#f1f5f9" }}></div>
                </div>
              </div>
              <div style={{ marginTop: "24px", fontSize: "13px", lineHeight: "1.5", color: "#64748b" }}>Las rayas se rellenan con el número que salga. No antes.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
