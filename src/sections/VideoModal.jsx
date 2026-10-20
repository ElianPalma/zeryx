import { lazy, Suspense } from 'react'

const ZeryxDemo = lazy(() => import('../demo/ZeryxDemo.jsx'))

export default function VideoModal({ v }) {
  if (!v.videoOpen) return null
  return (
    <div data-vmodal="1" onClick={v.closeVideo} style={{ position: "fixed", inset: "0", zIndex: "85", background: "rgba(15,23,42,.82)", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)", display: "flex", alignItems: "center", justifyContent: "center", padding: "20px", opacity: "0", transition: "opacity .4s ease" }}>
      <div data-vbox="1" onClick={v.stop} style={{ position: "relative", width: "min(1100px,100%)", aspectRatio: v.vRatio, borderRadius: "16px", overflow: "hidden", background: "#000000", boxShadow: "0 40px 80px -20px rgba(0,0,0,.6)", transform: "scale(.92) translateY(24px)", transition: "transform .8s cubic-bezier(.19,1,.22,1)" }}>
        {v.vIframe && (
          <>
            <iframe data-vsrc={v.vEmbed} title="Demo de Zeryx" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen={true} style={{ position: "absolute", inset: "0", width: "100%", height: "100%", border: "0" }}></iframe>
          </>
        )}
        {v.vFile && (
          <>
            <video data-vsrc={v.vEmbed} controls={true} autoPlay={true} playsInline={true} style={{ position: "absolute", inset: "0", width: "100%", height: "100%", background: "#000000" }}></video>
          </>
        )}
        {v.vNone && (
          <>
            <div style={{ position: "absolute", inset: "0", background: "#0a0a0a" }}>
              <Suspense fallback={null}>
                <ZeryxDemo />
              </Suspense>
            </div>
          </>
        )}
      </div>
      <button onClick={v.closeVideo} aria-label="Cerrar" style={{ position: "absolute", top: "20px", right: "20px", width: "44px", height: "44px", borderRadius: "50%", border: "1px solid rgba(255,255,255,.3)", background: "rgba(255,255,255,.1)", color: "#ffffff", fontSize: "16px", cursor: "pointer" }}>✕</button>
    </div>
  )
}
