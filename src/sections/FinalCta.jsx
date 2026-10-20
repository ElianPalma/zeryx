import Roll from '../components/Roll.jsx'
import Silk from '../components/Silk.jsx'
import SplitWords from '../components/SplitWords.jsx'

export default function FinalCta({ v }) {
  return (
    <section id="empezar" style={{ position: "relative", padding: "0 20px clamp(80px,10vw,140px)", display: "flex", justifyContent: "center" }}>
      <div data-r="1" style={{ position: "relative", width: "min(1180px,100%)", padding: "clamp(72px,10vw,130px) clamp(20px,4vw,40px)", borderRadius: "20px", overflow: "hidden", textAlign: "center", background: "#280465", color: "#ffffff", opacity: "0", transform: "translateY(80px) scale(.94)" }}>
        <Silk view={"{\"angle\":2.4,\"ox\":0,\"oy\":0.1,\"zoom\":1.1,\"sy\":1.8,\"scrollRef\":0.5,\"scrollK\":0.5,\"whiten\":0,\"maxL\":1,\"dark\":1,\"rim\":0.9,\"res\":0.75}"} transparent nograin style={{ position: "absolute", inset: "0" }} />
        <div style={{ position: "absolute", inset: "0", pointerEvents: "none", background: "radial-gradient(ellipse 46% 40% at 50% 50%,rgba(40,4,101,.55),rgba(40,4,101,0))" }}></div>
        <h2 data-split="1" style={{ position: "relative", margin: "0 auto", fontSize: "clamp(40px,7.4vw,108px)", lineHeight: ".94", letterSpacing: "-.045em", fontWeight: "700", maxWidth: "960px", textWrap: "balance" }}>
          <SplitWords text={"Deja de perseguir facturas."} />
        </h2>
        <p style={{ position: "relative", margin: "24px auto 0", maxWidth: "520px", fontSize: "clamp(16px,1.6vw,19px)", lineHeight: "1.55", color: "#ede9fe" }}>
          Arrancamos con pocas empresas en España. Si tienes facturas vencidas de verdad, escríbenos por WhatsApp y te contamos cómo entrar. Te contesta una persona.
        </p>
        <div style={{ position: "relative", marginTop: "38px", display: "flex", justifyContent: "center", gap: "10px", flexWrap: "wrap" }}>
          <a className="hv30" href={v.waLink} target={v.waTarget} rel="noopener" data-mag="1" onMouseMove={v.magnet} onMouseLeave={v.unmagnet} style={{ whiteSpace: "nowrap", padding: "16px 26px", borderRadius: "8px", background: "#ffffff", color: "#4d18a9", fontWeight: "600", fontSize: "16px", transition: "transform .25s cubic-bezier(.2,.8,.2,1),background .3s" }}>
            <Roll>
              Pedir acceso por WhatsApp →
            </Roll>
          </a>
          <a className="hv31" href="#demo" onClick={v.openVideo} data-mag="1" onMouseMove={v.magnet} onMouseLeave={v.unmagnet} style={{ whiteSpace: "nowrap", padding: "16px 24px", borderRadius: "8px", border: "1px solid rgba(255,255,255,.4)", color: "#ffffff", fontSize: "16px", fontWeight: "500", transition: "transform .25s cubic-bezier(.2,.8,.2,1),background .3s" }}>
            <Roll>
              Ver el vídeo · 0:50
            </Roll>
          </a>
        </div>
      </div>
    </section>
  )
}
