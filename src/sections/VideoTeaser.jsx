import Silk from '../components/Silk.jsx'

export default function VideoTeaser({ v }) {
  return (
    <section id="demo" aria-label="Vídeo: Zeryx en 50 segundos" data-vid="1" style={{ position: "relative", height: "220vh" }}>
      <div style={{ position: "sticky", top: "0", height: "100vh", overflow: "hidden" }}>
        <div data-vframe="1" onClick={v.openVideo} style={{ position: "absolute", inset: "0", clipPath: "inset(18% 20% round 28px)", background: "#280465", cursor: "pointer", overflow: "hidden" }}>
          <Silk view={"{\"angle\":0.9,\"ox\":0,\"oy\":0.1,\"zoom\":1.1,\"sy\":1.8,\"scrollRef\":0.5,\"scrollK\":0.5,\"whiten\":0,\"maxL\":1,\"dark\":1,\"rim\":0.9,\"res\":0.6}"} transparent nograin style={{ position: "absolute", inset: "0" }} />
          <div style={{ position: "absolute", inset: "0", pointerEvents: "none", background: "radial-gradient(ellipse 44% 40% at 50% 50%,rgba(40,4,101,.6),rgba(40,4,101,0))" }}></div>
          <div data-vinner="1" style={{ position: "absolute", inset: "0", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "22px", padding: "20px", textAlign: "center", color: "#ffffff", transform: "scale(.82)" }}>
            <span className="hv18" style={{ width: "clamp(72px,8vw,108px)", height: "clamp(72px,8vw,108px)", borderRadius: "50%", background: "#ffffff", color: "#7c3aed", display: "flex", alignItems: "center", justifyContent: "center", paddingLeft: "6px", fontSize: "clamp(20px,2.2vw,30px)", boxShadow: "0 20px 50px -10px rgba(0,0,0,.45)", transition: "transform .5s cubic-bezier(.34,1.56,.64,1)" }}>▶</span>
            <div style={{ fontSize: "clamp(30px,4.6vw,68px)", fontWeight: "700", letterSpacing: "-.045em", lineHeight: "1" }}>Zeryx en 50 segundos</div>
            <div style={{ fontSize: "clamp(14px,1.3vw,16px)", color: "#ede9fe" }}>Zeryx cobra una factura vencida, de principio a fin · 0:50</div>
          </div>
        </div>
      </div>
    </section>
  )
}
