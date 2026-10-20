import { Fragment } from 'react'

export default function Manifesto({ v }) {
  return (
    <section data-sts="1" style={{ position: "relative", height: "240vh" }}>
      <div style={{ position: "sticky", top: "0", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "0 20px" }}>
        <div style={{ width: "min(1080px,100%)" }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: "10px", fontSize: "15px", fontWeight: "500", color: "#334155" }}>
            <span style={{ fontSize: "13px", fontVariantNumeric: "tabular-nums", color: "#7c3aed" }}>(01)</span>
            Por qué Zeryx
          </div>
          <p style={{ margin: "22px 0 0", fontSize: "clamp(28px,4.6vw,64px)", lineHeight: "1.12", letterSpacing: "-.03em", fontWeight: "600", display: "flex", flexWrap: "wrap", gap: "0 .26em" }}>
            {v.manifesto.map((w, $index) => (
              <Fragment key={$index}>
                {$index > 0 && " "}
                <span data-sw="1" data-hl={w.hl} style={{ color: "#e2e8f0", transition: "color .15s" }}>
                {w.t}
              </span>
              </Fragment>
            ))}
          </p>
        </div>
      </div>
    </section>
  )
}
