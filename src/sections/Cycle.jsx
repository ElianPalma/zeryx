import SplitWords from '../components/SplitWords.jsx'

export default function Cycle({ v }) {
  return (
    <section id="ciclo" data-hs="1" style={{ position: "relative", background: "#f8fafc", borderTop: "1px solid #e2e8f0", borderBottom: "1px solid #e2e8f0" }}>
      <div style={{ position: "sticky", top: "0", height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", overflow: "hidden", gap: "clamp(14px,3.5vh,48px)", padding: "clamp(64px,11vh,80px) 0 16px" }}>
        <div style={{ padding: "0 max(20px,calc((100vw - 1180px) / 2))", display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: "24px", flexWrap: "wrap" }}>
          <div>
            <div style={{ display: "flex", alignItems: "baseline", gap: "10px", fontSize: "15px", fontWeight: "500", color: "#334155" }}>
              <span style={{ fontSize: "13px", fontVariantNumeric: "tabular-nums", color: "#7c3aed" }}>(03)</span>
              Cómo funciona
            </div>
            <h2 data-split="1" style={{ margin: "14px 0 0", fontSize: "clamp(32px,5vw,64px)", lineHeight: "1", letterSpacing: "-.04em", fontWeight: "700", maxWidth: "760px" }}>
              <SplitWords text={"Así cobra Zeryx, paso a paso."} />
            </h2>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "14px", fontSize: "13px", color: "#64748b", minWidth: "200px" }}>
            <span data-hsnum="1" style={{ fontWeight: "600", color: "#0f172a" }}>01</span>
            <span style={{ flex: "1", height: "3px", borderRadius: "3px", background: "#e2e8f0", overflow: "hidden", minWidth: "120px" }}>
              <span data-hsbar="1" style={{ display: "block", height: "100%", width: "20%", background: "#7c3aed" }}></span>
            </span>
            <span>05</span>
          </div>
        </div>
        <div data-track="1" style={{ display: "flex", gap: "clamp(14px,2vw,24px)", padding: "0 max(20px,calc((100vw - 1180px) / 2))", width: "max-content", willChange: "transform" }}>
          {v.steps.map((s, $index) => (
            <div key={$index} data-hcard="1" style={{ width: "clamp(290px,40vw,500px)", minHeight: "clamp(220px,46vh,520px)", borderRadius: "16px", padding: "clamp(22px,3vw,36px)", background: "#ffffff", border: "1px solid #e2e8f0", boxShadow: "0 10px 15px -3px rgba(0,0,0,.08)", display: "flex", flexDirection: "column", transition: "transform .5s cubic-bezier(.2,.8,.2,1),border-color .4s,box-shadow .4s" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <span style={{ fontSize: "clamp(56px,7vw,96px)", lineHeight: ".8", fontWeight: "800", letterSpacing: "-.05em", color: "#ede9fe" }}>
                  {s.n}
                </span>
                <span style={{ fontSize: "11px", fontWeight: "600", textTransform: "uppercase", letterSpacing: ".05em", color: "#7c3aed", padding: "6px 10px", borderRadius: "999px", background: "#f3ebff" }}>
                  {s.k}
                </span>
              </div>
              <h3 style={{ margin: "auto 0 0", paddingTop: "28px", fontSize: "clamp(24px,2.6vw,34px)", lineHeight: "1.08", letterSpacing: "-.03em", fontWeight: "700", textWrap: "balance" }}>
                {s.t}
              </h3>
              <p style={{ margin: "12px 0 0", color: "#64748b", fontSize: "15px", lineHeight: "1.6", textWrap: "pretty" }}>
                {s.d}
              </p>
              <div style={{ marginTop: "20px", display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {s.tags.map((t, $index) => (
                  <span key={$index} style={{ whiteSpace: "nowrap", fontSize: "12px", padding: "5px 10px", borderRadius: "999px", border: "1px solid #e2e8f0", color: "#475569" }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
