import SplitWords from '../components/SplitWords.jsx'

export default function Faq({ v }) {
  return (
    <section id="faq" style={{ padding: "0 20px clamp(90px,12vw,160px)", display: "flex", justifyContent: "center" }}>
      <div style={{ width: "min(1180px,100%)", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,360px),1fr))", gap: "clamp(32px,5vw,72px)", alignItems: "start" }}>
        <div style={{ position: "sticky", top: "110px" }}>
          <div data-r="1" style={{ display: "flex", alignItems: "baseline", gap: "10px", fontSize: "15px", fontWeight: "500", color: "#334155", opacity: "0", transform: "translateY(24px)" }}>
            <span style={{ fontSize: "13px", fontVariantNumeric: "tabular-nums", color: "#7c3aed" }}>(09)</span>
            Preguntas
          </div>
          <h2 data-split="1" style={{ margin: "16px 0 0", fontSize: "clamp(34px,4.6vw,60px)", lineHeight: "1", letterSpacing: "-.045em", fontWeight: "600" }}>
            <SplitWords text={"Lo que todos preguntan antes de empezar."} />
          </h2>
          <p data-r="1" style={{ margin: "20px 0 0", maxWidth: "380px", fontSize: "16px", lineHeight: "1.6", color: "#64748b", opacity: "0", transform: "translateY(24px)" }}>
            ¿Otra duda?{" "}
            <a href={v.waLink2} target={v.waTarget} rel="noopener" style={{ fontWeight: "600" }}>Escríbenos por WhatsApp</a>
            {" "}y te contestamos nosotros, no un bot.
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", borderTop: "1px solid #e2e8f0" }}>
          {v.faqs.map((f, $index) => (
            <div key={$index} data-r="1" data-d={f.d} style={{ borderBottom: "1px solid #e2e8f0", opacity: "0", transform: "translateY(30px)" }}>
              <button onClick={f.toggle} style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "20px", padding: "22px 0", border: "0", background: "transparent", fontFamily: "inherit", fontSize: "clamp(16px,1.5vw,19px)", fontWeight: "600", color: "#0f172a", textAlign: "left", cursor: "pointer" }}>
                <span>
                  {f.q}
                </span>
                <span style={{ flex: "none", width: "32px", height: "32px", borderRadius: "50%", border: "1px solid #e2e8f0", display: "flex", alignItems: "center", justifyContent: "center", color: f.ic, fontSize: "18px", fontWeight: "400", transition: "transform .5s cubic-bezier(.34,1.56,.64,1),background .3s,color .3s", transform: f.rot, background: f.ibg }}>+</span>
              </button>
              <div style={{ display: "grid", gridTemplateRows: f.rows, transition: "grid-template-rows .6s cubic-bezier(.2,.8,.2,1)" }}>
                <div style={{ overflow: "hidden" }}>
                  <p style={{ margin: "0", padding: "0 52px 24px 0", fontSize: "15px", lineHeight: "1.65", color: "#64748b", textWrap: "pretty", opacity: f.op, transition: "opacity .5s ease" }}>
                    {f.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
