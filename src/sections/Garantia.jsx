import Counter from '../components/Counter.jsx'
import Silk from '../components/Silk.jsx'
import SplitWords from '../components/SplitWords.jsx'

export default function Garantia({ v }) {
  return (
    <section id="garantia" data-clip="1" style={{ position: "relative", clipPath: "inset(0 4% round 40px)", overflow: "hidden", padding: "clamp(90px,12vw,160px) 20px", background: "#f3ebff", color: "#0f172a", display: "flex", justifyContent: "center" }}>
      <Silk view={"{\"floor\":-2,\"angle\":0.5,\"ox\":0.3,\"oy\":0.05,\"zoom\":0.9,\"sy\":1.8,\"designWidth\":1100,\"scrollRef\":0.5,\"scrollK\":0.4,\"whiten\":0.03,\"maxL\":0.92,\"res\":0.75}"} transparent style={{ position: "absolute", inset: "0" }} />
      <div style={{ position: "absolute", inset: "0", pointerEvents: "none", background: "linear-gradient(90deg,#f3ebff 22%,rgba(243,235,255,.6) 55%,rgba(243,235,255,0) 88%)" }}></div>
      <div style={{ position: "absolute", left: "0", right: "0", bottom: "0", height: "45%", pointerEvents: "none", background: "linear-gradient(180deg,rgba(243,235,255,0),#f3ebff 80%)" }}></div>
      <div style={{ position: "relative", width: "min(1180px,100%)" }}>
        <div data-r="1" style={{ display: "flex", alignItems: "baseline", gap: "10px", fontSize: "15px", fontWeight: "500", color: "#334155", opacity: "0", transform: "translateY(24px)" }}>
          <span style={{ fontSize: "13px", fontVariantNumeric: "tabular-nums", color: "#7c3aed" }}>(04)</span>
          Garantía
        </div>
        <h2 data-split="1" style={{ margin: "16px 0 0", fontSize: "clamp(34px,5.4vw,72px)", lineHeight: "1", letterSpacing: "-.045em", fontWeight: "600", maxWidth: "860px" }}>
          <SplitWords text={"No te pedimos que nos creas. Lo medimos."} />
        </h2>
        <div style={{ marginTop: "clamp(36px,5vw,56px)", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,260px),1fr))", gap: "14px" }}>
          {v.medimos.map((t, $index) => (
            <div key={$index} data-r="1" data-d={t.d} style={{ opacity: "0", transform: "translateY(60px)" }}>
              <div className="hv24" onMouseMove={v.tilt} onMouseLeave={v.untilt} style={{ height: "100%", padding: "24px", borderRadius: "20px", background: "rgba(255,255,255,.88)", border: "1px solid #e2e8f0", boxShadow: "0 10px 15px -3px rgba(0,0,0,.06)", transition: "transform .5s cubic-bezier(.2,.8,.2,1),background .3s,box-shadow .3s" }}>
                <div style={{ fontSize: "11px", fontWeight: "600", textTransform: "uppercase", letterSpacing: ".05em", color: "#7c3aed" }}>
                  {t.k}
                </div>
                <div style={{ marginTop: "12px", fontSize: "22px", fontWeight: "700", letterSpacing: "-.02em" }}>
                  {t.t}
                </div>
                <p style={{ margin: "10px 0 0", fontSize: "14px", lineHeight: "1.6", color: "#64748b" }}>
                  {t.d2}
                </p>
                <div style={{ marginTop: "16px", display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {t.tags.map((g, $index) => (
                    <span key={$index} style={{ whiteSpace: "nowrap", fontSize: "12px", padding: "5px 10px", borderRadius: "999px", background: "#ede9fe", color: "#6d28d9" }}>
                      {g}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div data-r="1" data-d="160" style={{ marginTop: "clamp(40px,6vw,64px)", padding: "clamp(18px,3vw,28px)", borderRadius: "16px", background: "rgba(255,255,255,.88)", border: "1px solid #e2e8f0", boxShadow: "0 10px 15px -3px rgba(0,0,0,.06)", opacity: "0", transform: "translateY(60px)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", gap: "12px", flexWrap: "wrap", fontSize: "13px", color: "#64748b" }}>
            <span>Marcador público · primeras empresas</span>
            <span style={{ color: "#0f172a", fontWeight: "600" }}>Se publica en diciembre de 2026</span>
          </div>
          <div style={{ marginTop: "18px", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,180px),1fr))", gap: "12px" }}>
            <div style={{ padding: "16px 18px", borderRadius: "12px", background: "#f8fafc", border: "1px solid #e2e8f0" }}>
              <div style={{ fontSize: "12px", color: "#64748b" }}>Cobrado por tu control</div>
              <div style={{ marginTop: "8px", fontSize: "clamp(28px,3vw,40px)", fontWeight: "700", letterSpacing: "-.03em", lineHeight: "1", color: "#94a3b8" }}>—</div>
            </div>
            <div style={{ padding: "16px 18px", borderRadius: "12px", background: "#f8fafc", border: "1px solid #e2e8f0" }}>
              <div style={{ fontSize: "12px", color: "#64748b" }}>Cobrado por Zeryx</div>
              <div style={{ marginTop: "8px", fontSize: "clamp(28px,3vw,40px)", fontWeight: "700", letterSpacing: "-.03em", lineHeight: "1", color: "#7c3aed" }}>—</div>
            </div>
            <div style={{ padding: "16px 18px", borderRadius: "12px", background: "#f8fafc", border: "1px solid #e2e8f0" }}>
              <div style={{ fontSize: "12px", color: "#64748b" }}>Diferencia</div>
              <div style={{ marginTop: "8px", fontSize: "clamp(28px,3vw,40px)", fontWeight: "700", letterSpacing: "-.03em", lineHeight: "1", color: "#0f172a" }}>— pts</div>
            </div>
            <div style={{ padding: "16px 18px", borderRadius: "12px", background: "#f8fafc", border: "1px solid #e2e8f0" }}>
              <div style={{ fontSize: "12px", color: "#64748b" }}>Dinero entrado por el enlace</div>
              <div style={{ marginTop: "8px", fontSize: "clamp(28px,3vw,40px)", fontWeight: "700", letterSpacing: "-.03em", lineHeight: "1", color: "#0f172a" }}>— %</div>
            </div>
          </div>
          <div style={{ marginTop: "14px", fontSize: "13px", lineHeight: "1.5", color: "#64748b" }}>
            Con los datos de las primeras empresas, salga lo que salga. Hasta entonces, aquí no hay cifras.
          </div>
        </div>
        <div style={{ marginTop: "clamp(32px,5vw,56px)", display: "grid", gridTemplateColumns: v.priceCols, gap: "clamp(20px,3vw,32px)" }}>
          <div data-r="1" data-d="0" style={{ paddingTop: "20px", borderTop: "1px solid #d7c0ff", opacity: "0", transform: "translateY(60px)" }}>
            <div style={{ whiteSpace: "nowrap", fontSize: "clamp(44px,5.6vw,80px)", fontWeight: "700", letterSpacing: "-.04em", lineHeight: "1" }}>
              <Counter to={3} />
              <span style={{ fontSize: ".42em", fontWeight: "600", marginLeft: ".15em", letterSpacing: "-.01em" }}>meses</span>
            </div>
            <div style={{ marginTop: "12px", color: "#64748b", fontSize: "14px" }}>de garantía de resultado</div>
          </div>
          <div data-r="1" data-d="120" style={{ paddingTop: "20px", borderTop: "1px solid #d7c0ff", opacity: "0", transform: "translateY(60px)" }}>
            <div style={{ whiteSpace: "nowrap", fontSize: "clamp(44px,5.6vw,80px)", fontWeight: "700", letterSpacing: "-.04em", lineHeight: "1", color: "#7c3aed" }}>
              <Counter to={10} prefix="+" />
              <span style={{ fontSize: ".42em", fontWeight: "600", marginLeft: ".15em", letterSpacing: "-.01em" }}>puntos</span>
            </div>
            <div style={{ marginTop: "12px", color: "#64748b", fontSize: "14px" }}>sobre tu control, o te devolvemos las cuotas</div>
          </div>
          <div data-r="1" data-d="240" style={{ paddingTop: "20px", borderTop: "1px solid #d7c0ff", opacity: "0", transform: "translateY(60px)" }}>
            <div style={{ whiteSpace: "nowrap", fontSize: "clamp(44px,5.6vw,80px)", fontWeight: "700", letterSpacing: "-.04em", lineHeight: "1" }}>
              <Counter to={0} />
              <span style={{ fontSize: ".42em", fontWeight: "600", marginLeft: ".15em", letterSpacing: "-.01em" }}>€</span>
            </div>
            <div style={{ marginTop: "12px", color: "#64748b", fontSize: "14px" }}>le cuesta a tu cliente pagar por el enlace</div>
          </div>
          <div data-r="1" data-d="360" style={{ paddingTop: "20px", borderTop: "1px solid #d7c0ff", opacity: "0", transform: "translateY(60px)" }}>
            <div style={{ whiteSpace: "nowrap", fontSize: "clamp(44px,5.6vw,80px)", fontWeight: "700", letterSpacing: "-.04em", lineHeight: "1" }}>
              <Counter to={1} />
              <span style={{ fontSize: ".42em", fontWeight: "600", marginLeft: ".15em", letterSpacing: "-.01em" }}>día</span>
            </div>
            <div style={{ marginTop: "12px", color: "#64748b", fontSize: "14px" }}>para empezar a cobrar</div>
          </div>
        </div>
      </div>
    </section>
  )
}
