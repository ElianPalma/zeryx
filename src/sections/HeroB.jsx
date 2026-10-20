import Roll from '../components/Roll.jsx'

export default function HeroB({ v }) {
  if (!v.isB) return null
  return (
    <header data-hero="B" style={{ position: "relative", overflow: "clip", minHeight: "100vh", padding: "clamp(120px,14vw,150px) 20px 80px", display: "flex", alignItems: "center", justifyContent: "center", background: "#280465", color: "#ffffff" }}>
      <div style={{ position: "absolute", inset: "0", pointerEvents: "none" }}>
        <div data-blob="0" style={{ position: "absolute", top: "-10%", left: "-5%", width: "50vw", height: "50vw", borderRadius: "50%", background: "#7c3aed", opacity: ".7", filter: "blur(110px)" }}></div>
        <div data-blob="1" style={{ position: "absolute", bottom: "-20%", right: "-10%", width: "50vw", height: "50vw", borderRadius: "50%", background: "#497dee", opacity: ".5", filter: "blur(110px)" }}></div>
        <div data-blob="2" style={{ position: "absolute", top: "30%", left: "40%", width: "30vw", height: "30vw", borderRadius: "50%", background: "#bc95ff", opacity: ".35", filter: "blur(90px)" }}></div>
      </div>
      <div style={{ position: "relative", width: "min(1180px,100%)", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,440px),1fr))", gap: "clamp(40px,6vw,72px)", alignItems: "center" }}>
        <div>
          <div data-w="1" style={{ fontSize: "11px", fontWeight: "600", textTransform: "uppercase", letterSpacing: ".05em", color: "#d7c0ff", opacity: "0" }}>Cobro de facturas · Empresas · España</div>
          <h1 style={{ margin: "20px 0 0", fontSize: "clamp(48px,7.6vw,112px)", lineHeight: ".92", letterSpacing: "-.045em", fontWeight: "700" }}>
            <span style={{ display: "block", overflow: "hidden", paddingBottom: ".08em" }}>
              <span data-w="1" style={{ display: "inline-block", opacity: "0" }}>Tú vendes.</span>
            </span>
            <span style={{ display: "block", overflow: "hidden", paddingBottom: ".08em" }}>
              <span data-w="1" style={{ display: "inline-block", opacity: "0", color: "#bc95ff" }}>Zeryx cobra.</span>
            </span>
          </h1>
          <p data-w="1" style={{ margin: "26px 0 0", maxWidth: "500px", fontSize: "clamp(16px,1.6vw,19px)", lineHeight: "1.55", color: "#ede9fe", textWrap: "pretty", opacity: "0" }}>
            Zeryx habla con tus clientes por WhatsApp y correo, en tu nombre, hasta que pagan. Tú apruebas lo que quieras y ves cada conversación.
          </p>
          <div data-w="1" style={{ marginTop: "34px", display: "flex", gap: "10px", flexWrap: "wrap", opacity: "0" }}>
            <a className="hv14" href={v.waLink} target={v.waTarget} rel="noopener" data-mag="1" onMouseMove={v.magnet} onMouseLeave={v.unmagnet} style={{ whiteSpace: "nowrap", padding: "15px 24px", borderRadius: "8px", background: "#ffffff", color: "#4d18a9", fontWeight: "500", fontSize: "16px", transition: "transform .25s cubic-bezier(.2,.8,.2,1),background .3s" }}>
              <Roll>
                Pedir acceso por WhatsApp →
              </Roll>
            </a>
            <a className="hv15" href="#demo" onClick={v.openVideo} data-mag="1" onMouseMove={v.magnet} onMouseLeave={v.unmagnet} style={{ whiteSpace: "nowrap", padding: "15px 22px", borderRadius: "8px", border: "1px solid rgba(255,255,255,.3)", color: "#ffffff", fontSize: "16px", fontWeight: "500", transition: "transform .25s cubic-bezier(.2,.8,.2,1),background .3s" }}>
              <Roll>
                Ver demo · 0:50
              </Roll>
            </a>
          </div>
        </div>
        <div data-w="1" style={{ position: "relative", height: "clamp(340px,40vw,440px)", opacity: "0" }}>
          {v.heroCards.map((c, $index) => (
            <div key={$index} data-stackcard="1" data-nosnippet="" aria-hidden="true" style={{ position: "absolute", left: "0", right: "0", top: "30px", margin: "auto", width: "min(420px,100%)", padding: "22px", borderRadius: "18px", background: "#ffffff", color: "#0f172a", boxShadow: "0 30px 60px -20px rgba(0,0,0,.5)", transition: "transform .9s cubic-bezier(.7,0,.2,1),opacity .9s,filter .9s" }}>
              <div style={{ display: "flex", justifyContent: "space-between", gap: "12px", alignItems: "center" }}>
                <span style={{ fontSize: "13px", color: "#64748b" }}>
                  {c.k}
                </span>
                <span style={{ fontSize: "11px", fontWeight: "600", padding: "4px 8px", borderRadius: "999px", background: "#dcfce7", color: "#16a34a", whiteSpace: "nowrap" }}>
                  {c.tag}
                </span>
              </div>
              <div style={{ fontSize: "clamp(34px,4vw,44px)", fontWeight: "700", letterSpacing: "-.03em", marginTop: "10px" }}>
                {c.v}
              </div>
              <div style={{ fontSize: "13px", color: "#64748b", marginTop: "6px" }}>
                {c.s}
              </div>
            </div>
          ))}
        </div>
      </div>
    </header>
  )
}
