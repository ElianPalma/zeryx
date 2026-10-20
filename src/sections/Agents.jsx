import { useSyncExternalStore } from 'react'
import SplitWords from '../components/SplitWords.jsx'
import { agentsView } from '../site/viewModel.js'

// La animación de esta sección cambia de paso cada pocos segundos. Su estado vive en un store
// propio (Site.agStore): al suscribirse aquí, solo se re-renderiza esta sección.
export default function Agents({ v }) {
  const ag = useSyncExternalStore(v.agStore.subscribe, v.agStore.get, v.agStore.get)
  return <AgentsSection v={{ ...v, ...agentsView(ag, v.agW, v.agLanding) }} />
}

function AgentsSection({ v }) {
  return (
    <section id="agentes" style={{ padding: "0 20px clamp(90px,12vw,160px)", display: "flex", justifyContent: "center" }}>
      <div style={{ width: "min(1180px,100%)" }}>
        <div data-r="1" style={{ display: "flex", alignItems: "baseline", gap: "10px", fontSize: "15px", fontWeight: "500", color: "#334155", opacity: "0", transform: "translateY(24px)" }}>
          <span style={{ fontSize: "13px", fontVariantNumeric: "tabular-nums", color: "#7c3aed" }}>(06)</span>
          En acción
        </div>
        <h2 data-split="1" style={{ margin: "16px 0 0", fontSize: "clamp(34px,5.4vw,72px)", lineHeight: "1", letterSpacing: "-.045em", fontWeight: "600", maxWidth: "900px" }}>
          <SplitWords text={"Así cobras una factura sin mover un dedo."} />
        </h2>
        <div data-r="1" data-agwrap="1" style={{ marginTop: "clamp(36px,5vw,56px)", borderRadius: "24px", background: "linear-gradient(180deg,#faf7ff 0%,#f8fafc 100%)", border: "1px solid #ece6fb", padding: "clamp(20px,3vw,40px)", opacity: "0", transform: "translateY(40px)" }}>
          {v.agWide && (
            <>
              <div data-nosnippet="" aria-hidden="true" style={{ position: "relative", width: "100%", aspectRatio: "1000/540", backgroundImage: "radial-gradient(circle at 50% 54%,rgba(167,139,250,.22),rgba(167,139,250,0) 34%),radial-gradient(#e6dcfa 1px,transparent 1px)", backgroundSize: "100% 100%,22px 22px", borderRadius: "16px" }}>
                <svg data-agsvg="1" viewBox="0 0 1000 540" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", overflow: "visible" }}>
                  <defs>
                    <filter id="ag-glow" x="-50%" y="-50%" width="200%" height="200%">
                      <feGaussianBlur stdDeviation="5"></feGaussianBlur>
                    </filter>
                  </defs>
                  <path d="M130 173 C 300 173, 330 292, 500 292" fill="none" stroke="#ddd3f5" strokeWidth="2" strokeDasharray="6 7"></path>
                  <path d="M500 292 C 670 292, 700 173, 870 173" fill="none" stroke="#ddd3f5" strokeWidth="2" strokeDasharray="6 7"></path>
                  <path d="M870 173 C 980 230, 980 355, 870 410" fill="none" stroke="#ddd3f5" strokeWidth="2" strokeDasharray="6 7"></path>
                  <path d="M870 410 C 700 410, 670 292, 500 292" fill="none" stroke="#ddd3f5" strokeWidth="2" strokeDasharray="6 7"></path>
                  <path d="M500 292 C 330 292, 300 410, 130 410" fill="none" stroke="#ddd3f5" strokeWidth="2" strokeDasharray="6 7"></path>
                  <path data-agpath="0" d="M130 173 C 300 173, 330 292, 500 292" fill="none" stroke="#7c3aed" strokeWidth="2.5" strokeLinecap="round" style={{ opacity: "0" }}></path>
                  <path data-agpath="1" d="M500 292 C 670 292, 700 173, 870 173" fill="none" stroke="#7c3aed" strokeWidth="2.5" strokeLinecap="round" style={{ opacity: "0" }}></path>
                  <path data-agpath="2" d="M870 173 C 980 230, 980 355, 870 410" fill="none" stroke="#7c3aed" strokeWidth="2.5" strokeLinecap="round" style={{ opacity: "0" }}></path>
                  <path data-agpath="3" d="M870 410 C 700 410, 670 292, 500 292" fill="none" stroke="#7c3aed" strokeWidth="2.5" strokeLinecap="round" style={{ opacity: "0" }}></path>
                  <path data-agpath="4" d="M500 292 C 330 292, 300 410, 130 410" fill="none" stroke="#7c3aed" strokeWidth="2.5" strokeLinecap="round" style={{ opacity: "0" }}></path>
                  <path data-agglow="1" fill="none" stroke="#a78bfa" strokeWidth="9" strokeLinecap="round" filter="url(#ag-glow)" style={{ opacity: "0" }}></path>
                  <path data-agtrail="1" fill="none" stroke="#c4b5fd" strokeWidth="6" strokeLinecap="round" style={{ opacity: "0" }}></path>
                  <circle data-agripple="1" r="0" fill="none" stroke="#7c3aed" strokeWidth="2" style={{ opacity: "0" }}></circle>
                  <circle data-agdot2="1" r="18" fill="#a78bfa" filter="url(#ag-glow)" style={{ opacity: "0" }}></circle>
                  <circle data-agdot="1" r="6" fill="#ffffff" stroke="#7c3aed" strokeWidth="3" style={{ opacity: "0" }}></circle>
                </svg>
                <div data-agnode="0" style={{ position: "absolute", zIndex: v.agN0z, left: "13%", top: "32%", width: "230px", transform: `translate(-50%,-50%) scale(${v.agN0s})`, transition: "transform .6s cubic-bezier(.34,1.56,.64,1)" }}>
                  <div style={{ borderRadius: "16px", background: "#ffffff", border: `1px solid ${v.agN0b}`, boxShadow: v.agN0h, padding: "14px", transition: "border-color .5s,box-shadow .5s" }}>
                    <div style={{ opacity: v.agN0o, transition: "opacity .5s" }}>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "8px", fontSize: "11px", fontWeight: "600", letterSpacing: ".04em", textTransform: "uppercase", color: "#64748b" }}>Tus facturas</div>
                      <div style={{ marginTop: "10px", display: "flex", flexDirection: "column", gap: "7px", fontSize: "12.5px" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", gap: "8px", padding: "8px 10px", borderRadius: "10px", background: "#fef2f2" }}>
                          <span style={{ fontWeight: "600", color: "#0f172a" }}>FAC-0381</span>
                          <span style={{ color: "#b91c1c", fontWeight: "600" }}>Vencida</span>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between", gap: "8px", padding: "0 10px", color: "#64748b" }}>
                          <span>FAC-0384</span>
                          <span style={{ whiteSpace: "nowrap" }}>En plazo</span>
                        </div>
                      </div>
                      <div style={{ marginTop: "10px", fontSize: "11.5px", color: "#94a3b8", whiteSpace: "nowrap" }}>Zeryx · Odoo · Excel</div>
                    </div>
                  </div>
                  <div style={{ position: "absolute", left: "0", right: "0", bottom: "calc(100% + 12px)", display: "flex", gap: "8px", alignItems: "flex-start", fontSize: "13px", lineHeight: "1.45", color: "#334155", textWrap: "pretty", opacity: v.agC0o, transform: v.agC0y, transition: "opacity .45s ease,transform .6s cubic-bezier(.2,.8,.2,1)" }}>
                    <span style={{ flex: "none", marginTop: "1px", minWidth: "20px", height: "20px", padding: "0 6px", boxSizing: "border-box", borderRadius: "999px", background: "linear-gradient(135deg,#9f7aea,#6d28d9)", color: "#ffffff", fontSize: "11px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      {v.agC0n}
                    </span>
                    <span>
                      {v.agC0t}
                    </span>
                  </div>
                </div>
                <div data-agnode="1" style={{ position: "absolute", zIndex: v.agN1z, left: "50%", top: "54%", transform: `translate(-50%,-50%) scale(${v.agN1s})`, opacity: v.agN1o, transition: "transform .6s cubic-bezier(.34,1.56,.64,1),opacity .5s", display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}>
                  <div style={{ position: "relative", width: "128px", height: "128px", borderRadius: "50%", background: "radial-gradient(circle,#f6f1ff 0%,#f6f1ff 46%,rgba(246,241,255,0) 70%)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <img src="/logo-zeryx.svg" width="72" height="72" alt="Zeryx" style={{ display: "block", filter: "drop-shadow(0 12px 22px rgba(124,58,237,.35))" }} />
                  </div>
                  <span style={{ maxWidth: "280px", padding: "8px 16px", borderRadius: "14px", background: v.agHubBg, border: `1px solid ${v.agHubBd}`, fontSize: "13px", lineHeight: "1.4", fontWeight: "600", color: v.agHubC, textAlign: "center", textWrap: "balance", transition: "background .4s,color .4s,border-color .4s" }}>
                    {v.agHubT}
                  </span>
                </div>
                <div data-agnode="2" style={{ position: "absolute", zIndex: v.agN2z, left: "87%", top: "32%", width: "250px", transform: `translate(-50%,-50%) scale(${v.agN2s})`, transition: "transform .6s cubic-bezier(.34,1.56,.64,1)" }}>
                  <div style={{ borderRadius: "16px", background: "#ffffff", border: `1px solid ${v.agN2b}`, boxShadow: v.agN2h, padding: "14px", transition: "border-color .5s,box-shadow .5s" }}>
                    <div style={{ opacity: v.agN2o, transition: "opacity .5s" }}>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "8px", fontSize: "11px", fontWeight: "600", letterSpacing: ".04em", textTransform: "uppercase", color: "#64748b" }}>
                        WhatsApp
                        <span style={{ textTransform: "none", letterSpacing: "0", fontWeight: "500", color: "#94a3b8", whiteSpace: "nowrap" }}>Constructoras Norte</span>
                      </div>
                      <div style={{ marginTop: "10px", padding: "10px 12px", borderRadius: "12px 12px 12px 4px", background: "#dcfce7", fontSize: "13px", lineHeight: "1.45", color: "#0f172a" }}>Hola Marta, soy del equipo de cobro de Reformas Atlas. La FAC-0381 venció ayer, ¿hay algo que la frene? Puedes pagarla aquí:</div>
                      <div style={{ marginTop: "8px", padding: "9px", borderRadius: "10px", background: "#7c3aed", color: "#ffffff", fontSize: "13px", fontWeight: "600", textAlign: "center" }}>Pagar 8.750 €</div>
                    </div>
                  </div>
                  <div style={{ position: "absolute", left: "0", right: "0", bottom: "calc(100% + 12px)", display: "flex", gap: "8px", alignItems: "flex-start", fontSize: "13px", lineHeight: "1.45", color: "#334155", textWrap: "pretty", opacity: v.agC2o, transform: v.agC2y, transition: "opacity .45s ease,transform .6s cubic-bezier(.2,.8,.2,1)" }}>
                    <span style={{ flex: "none", marginTop: "1px", minWidth: "20px", height: "20px", padding: "0 6px", boxSizing: "border-box", borderRadius: "999px", background: "linear-gradient(135deg,#9f7aea,#6d28d9)", color: "#ffffff", fontSize: "11px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      {v.agC2n}
                    </span>
                    <span>
                      {v.agC2t}
                    </span>
                  </div>
                </div>
                <div data-agnode="3" style={{ position: "absolute", zIndex: v.agN3z, left: "87%", top: "76%", width: "230px", transform: `translate(-50%,-50%) scale(${v.agN3s})`, transition: "transform .6s cubic-bezier(.34,1.56,.64,1)" }}>
                  <div style={{ borderRadius: "16px", background: "#ffffff", border: `1px solid ${v.agN3b}`, boxShadow: v.agN3h, padding: "14px", transition: "border-color .5s,box-shadow .5s" }}>
                    <div style={{ opacity: v.agN3o, transition: "opacity .5s" }}>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "8px", fontSize: "11px", fontWeight: "600", letterSpacing: ".04em", textTransform: "uppercase", color: "#64748b" }}>
                        Pago
                        <span style={{ textTransform: "none", letterSpacing: "0", fontWeight: "600", whiteSpace: "nowrap", color: v.agPayC }}>
                          {v.agPayT}
                        </span>
                      </div>
                      <div style={{ marginTop: "8px", fontSize: "22px", fontWeight: "700", letterSpacing: "-.02em", color: "#0f172a" }}>8.750,00 €</div>
                      <div style={{ marginTop: "10px", display: "flex", gap: "6px" }}>
                        <span style={{ flex: "1", padding: "7px 0", borderRadius: "8px", border: `1px solid ${v.agBizB}`, background: v.agBizBg, fontSize: "12px", fontWeight: "600", textAlign: "center", color: "#334155", transition: "all .4s" }}>Tarjeta</span>
                        <span style={{ flex: "1", padding: "7px 0", borderRadius: "8px", border: "1px solid #e2e8f0", fontSize: "12px", fontWeight: "600", textAlign: "center", color: "#334155" }}>Transferencia</span>
                      </div>
                    </div>
                  </div>
                  <div style={{ position: "absolute", left: "0", right: "0", top: "calc(100% + 12px)", display: "flex", gap: "8px", alignItems: "flex-start", fontSize: "13px", lineHeight: "1.45", color: "#334155", textWrap: "pretty", opacity: v.agC3o, transform: v.agC3y, transition: "opacity .45s ease,transform .6s cubic-bezier(.2,.8,.2,1)" }}>
                    <span style={{ flex: "none", marginTop: "1px", minWidth: "20px", height: "20px", padding: "0 6px", boxSizing: "border-box", borderRadius: "999px", background: "linear-gradient(135deg,#9f7aea,#6d28d9)", color: "#ffffff", fontSize: "11px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      {v.agC3n}
                    </span>
                    <span>
                      {v.agC3t}
                    </span>
                  </div>
                </div>
                <div data-agnode="4" style={{ position: "absolute", zIndex: v.agN4z, left: "13%", top: "76%", width: "230px", transform: `translate(-50%,-50%) scale(${v.agN4s})`, transition: "transform .6s cubic-bezier(.34,1.56,.64,1)" }}>
                  <div style={{ borderRadius: "16px", background: "#ffffff", border: `1px solid ${v.agN4b}`, boxShadow: v.agN4h, padding: "14px", transition: "border-color .5s,box-shadow .5s" }}>
                    <div style={{ opacity: v.agN4o, transition: "opacity .5s" }}>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "8px", fontSize: "11px", fontWeight: "600", letterSpacing: ".04em", textTransform: "uppercase", color: "#64748b" }}>Tu banco</div>
                      <div data-agbank="1" style={{ marginTop: "8px", fontSize: "22px", fontWeight: "700", letterSpacing: "-.02em", fontVariantNumeric: "tabular-nums", color: v.agBankC, transition: "color .5s" }}></div>
                      <div style={{ marginTop: "6px", display: "flex", alignItems: "center", gap: "6px", fontSize: "12.5px", color: "#64748b" }}>
                        <span style={{ width: "16px", height: "16px", borderRadius: "50%", background: v.agBankDot, color: "#16a34a", fontSize: "10px", display: "flex", alignItems: "center", justifyContent: "center", flex: "none" }}>✓</span>
                        <span style={{ whiteSpace: "nowrap" }}>
                          {v.agBankS}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div style={{ position: "absolute", left: "0", right: "0", top: "calc(100% + 12px)", display: "flex", gap: "8px", alignItems: "flex-start", fontSize: "13px", lineHeight: "1.45", color: "#334155", textWrap: "pretty", opacity: v.agC4o, transform: v.agC4y, transition: "opacity .45s ease,transform .6s cubic-bezier(.2,.8,.2,1)" }}>
                    <span style={{ flex: "none", marginTop: "1px", minWidth: "20px", height: "20px", padding: "0 6px", boxSizing: "border-box", borderRadius: "999px", background: "linear-gradient(135deg,#9f7aea,#6d28d9)", color: "#ffffff", fontSize: "11px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      {v.agC4n}
                    </span>
                    <span>
                      {v.agC4t}
                    </span>
                  </div>
                </div>
              </div>
            </>
          )}
          <div style={{ marginTop: v.agStepsMt, display: "grid", gridTemplateColumns: v.agStepCols, gap: v.agStepGap }}>
            {v.agSteps.map((s, $index) => (
              <button key={$index} onClick={s.go} style={{ display: "flex", flexDirection: "column", alignItems: "stretch", gap: "10px", padding: "0", border: "0", background: "transparent", fontFamily: "inherit", textAlign: "left", cursor: "pointer" }}>
                <div style={{ position: "relative", height: "3px", borderRadius: "3px", background: "#e2e8f0", overflow: "hidden" }}>
                  <div data-agfill={$index} style={{ position: "absolute", left: "0", top: "0", bottom: "0", width: "0", borderRadius: "3px", background: "linear-gradient(90deg,#c4b5fd,#7c3aed)" }}></div>
                </div>
                <div style={{ display: "flex", alignItems: "baseline", gap: "10px" }}>
                  <span style={{ flex: "none", fontSize: "13px", fontWeight: "600", fontVariantNumeric: "tabular-nums", color: s.nc, transition: "color .4s" }}>
                    {s.n}
                  </span>
                  <span style={{ display: "block", fontSize: "clamp(16px,1.4vw,18px)", lineHeight: "1.25", fontWeight: "600", letterSpacing: "-.02em", color: s.tc, transition: "color .4s" }}>
                    {s.t}
                  </span>
                </div>
                <div style={{ paddingLeft: "28px", fontSize: "14px", lineHeight: "1.5", color: "#64748b", opacity: s.op, transition: "opacity .4s", textWrap: "pretty" }}>
                  {s.d}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
