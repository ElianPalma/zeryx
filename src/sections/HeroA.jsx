import Roll from '../components/Roll.jsx'
import Silk from '../components/Silk.jsx'

export default function HeroA({ v }) {
  if (!v.isA) return null
  return (
    <header data-hero="A" style={{ position: "relative", overflow: "clip", padding: "clamp(120px,15vw,176px) 20px 0", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div data-herobg="1" style={{ position: "absolute", inset: "0", pointerEvents: "none" }}>
        <Silk view={"{\"floor\":-1}"} style={{ position: "absolute", inset: "0" }} />
        <div style={{ position: "absolute", inset: "0", background: "radial-gradient(ellipse 50% 44% at 50% 32%,rgba(255,255,255,.96),rgba(255,255,255,.75) 55%,rgba(255,255,255,0) 100%)" }}></div>
        <div style={{ position: "absolute", left: "0", right: "0", bottom: "0", height: "240px", background: "linear-gradient(180deg,rgba(255,255,255,0),#ffffff)" }}></div>
      </div>
      <div data-w="1" style={{ position: "relative", display: "inline-flex", alignItems: "center", gap: "10px", padding: "6px 14px 6px 6px", borderRadius: "999px", border: "1px solid #e2e8f0", background: "rgba(255,255,255,.8)", maxWidth: "100%", fontSize: "clamp(12px,3.4vw,14px)", color: "#475569", boxShadow: "0 1px 2px rgba(0,0,0,.05)", opacity: "0" }}>
        <span style={{ fontSize: "11px", fontWeight: "600", padding: "4px 9px", borderRadius: "999px", background: "#7c3aed", color: "#fff" }}>Nuevo</span>
        <span style={{ textAlign: "left" }}>
          Tu departamento de cobro,{" "}
          <span style={{ color: "#7c3aed", fontWeight: "600" }}>sin contratar a nadie</span>
        </span>
      </div>
      <h1 style={{ position: "relative", margin: "26px 0 0", fontSize: "clamp(44px,9vw,132px)", lineHeight: ".94", letterSpacing: "-.045em", fontWeight: "700", maxWidth: "1160px" }}>
        <span style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0 .22em" }}>
          <span style={{ overflow: "hidden", paddingBottom: ".1em" }}>
            <span data-w="1" style={{ display: "inline-block", opacity: "0" }}>Tú</span>
          </span>{" "}
          <span style={{ overflow: "hidden", paddingBottom: ".1em" }}>
            <span data-w="1" style={{ display: "inline-block", opacity: "0" }}>vendes.</span>
          </span>
        </span>
        {" "}
        <span style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0 .22em", color: "#7c3aed" }}>
          <span style={{ overflow: "hidden", paddingBottom: ".1em" }}>
            <span data-w="1" style={{ display: "inline-block", opacity: "0" }}>Zeryx</span>
          </span>{" "}
          <span style={{ overflow: "hidden", paddingBottom: ".1em" }}>
            <span data-w="1" style={{ display: "inline-block", opacity: "0" }}>cobra.</span>
          </span>
        </span>
      </h1>
      <p data-w="1" style={{ position: "relative", margin: "26px 0 0", maxWidth: "640px", fontSize: "clamp(16px,1.6vw,19px)", lineHeight: "1.55", color: "#64748b", textWrap: "pretty", opacity: "0" }}>
        Zeryx habla con tus clientes por WhatsApp y correo, en tu nombre, hasta que pagan. Tú no persigues a nadie: ves cada factura, cada respuesta y cada promesa en un solo panel.
      </p>
      <div data-w="1" style={{ position: "relative", marginTop: "34px", display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: "center", opacity: "0" }}>
        <a className="hv12" href={v.waLink} target={v.waTarget} rel="noopener" data-mag="1" onMouseMove={v.magnet} onMouseLeave={v.unmagnet} style={{ whiteSpace: "nowrap", display: "inline-flex", alignItems: "center", gap: "10px", padding: "15px 24px", borderRadius: "8px", background: "#7c3aed", color: "#ffffff", fontWeight: "500", fontSize: "16px", boxShadow: "0 10px 30px -12px rgba(124,58,237,.6)", transition: "transform .25s cubic-bezier(.2,.8,.2,1),background .3s,box-shadow .3s" }}>
          <Roll gap="10px">
            Pedir acceso{" "}
            <span>→</span>
          </Roll>
        </a>
        <a className="hv13" href="#demo" onClick={v.openVideo} data-mag="1" onMouseMove={v.magnet} onMouseLeave={v.unmagnet} style={{ whiteSpace: "nowrap", display: "inline-flex", alignItems: "center", gap: "10px", padding: "15px 22px", borderRadius: "8px", border: "1px solid #e2e8f0", background: "#ffffff", color: "#334155", fontWeight: "500", fontSize: "16px", transition: "transform .25s cubic-bezier(.2,.8,.2,1),background .3s" }}>
          <Roll gap="10px">
            <span style={{ width: "22px", height: "22px", borderRadius: "50%", background: "#7c3aed", color: "#fff", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "9px" }}>▶</span>
            Ver demo · 0:50
          </Roll>
        </a>
      </div>
      <div style={{ position: "relative", width: "min(1180px,100%)", marginTop: "clamp(56px,8vw,96px)", perspective: "1800px" }}>
        <div data-tiltmock="1" data-nosnippet="" aria-hidden="true" style={{ position: "relative", zIndex: "1", transformOrigin: "50% 0", transform: "rotateX(24deg) scale(.9)", borderRadius: "18px", padding: "8px", background: "#f8fafc", border: "1px solid #e2e8f0", boxShadow: "0 40px 80px -24px rgba(76,24,169,.35)" }}>
          <div style={{ borderRadius: "12px", background: "#f8fafc", border: "1px solid #e2e8f0", display: "grid", gridTemplateColumns: v.mockCols, minHeight: "clamp(300px,42vw,500px)", textAlign: "left", overflow: "hidden" }}>
            {v.notMobile && (
              <>
                <div style={{ borderRight: "1px solid #e2e8f0", background: "#ffffff", padding: "14px 10px", display: "flex", flexDirection: "column", gap: "1px" }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 6px 12px" }}>
                    <span style={{ display: "flex", alignItems: "center", gap: "7px", fontWeight: "700", fontSize: "17px", letterSpacing: "-.02em", color: "#0f172a" }}>
                      <img src="/logo-zeryx.svg" width="22" height="22" alt="" style={{ display: "block" }} />
                      zeryx
                    </span>
                    <span style={{ width: "15px", height: "15px", border: "1.6px solid #475569", borderRadius: "3px" }}></span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "7px", height: "34px", padding: "0 10px", marginBottom: "4px", borderRadius: "9px", border: "1px solid #e2e8f0", fontSize: "12px", color: "#64748b", whiteSpace: "nowrap" }}>
                    <span style={{ flex: "1" }}>Buscar o crear…</span>
                    <span style={{ fontSize: "10px", padding: "1px 5px", borderRadius: "5px", border: "1px solid #e2e8f0", background: "#f8fafc" }}>Ctrl K</span>
                  </div>
                  <div style={{ margin: "6px 0 6px", padding: "0 10px", fontSize: "10px", fontWeight: "600", textTransform: "uppercase", letterSpacing: ".08em", color: "#64748b" }}>Empresa</div>
                  <div style={{ position: "relative", display: "flex", alignItems: "center", gap: "10px", padding: "7px 10px", borderRadius: "8px", whiteSpace: "nowrap", fontSize: "13px", color: "#1e293b" }}>
                    <span style={{ display: "flex", color: "#334155" }}>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ display: "block", flex: "none" }}>
                        <path d="M12 3v9h9"></path>
                        <path d="M20.5 15.5A9 9 0 1 1 8.5 3.7"></path>
                      </svg>
                    </span>
                    <span style={{ flex: "1" }}>Panel</span>
                  </div>
                  <div style={{ position: "relative", display: "flex", alignItems: "center", gap: "10px", padding: "7px 10px", borderRadius: "8px", whiteSpace: "nowrap", fontSize: "13px", color: "#1e293b" }}>
                    <span style={{ display: "flex", color: "#334155" }}>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ display: "block", flex: "none" }}>
                        <path d="M4 8h16v11H4z"></path>
                        <path d="M9 8V5h6v3"></path>
                        <path d="M4 13h16"></path>
                      </svg>
                    </span>
                    <span style={{ flex: "1" }}>Facturación</span>
                  </div>
                  <div style={{ position: "relative", display: "flex", alignItems: "center", gap: "10px", padding: "7px 10px", borderRadius: "8px", whiteSpace: "nowrap", fontSize: "13px", color: "#1e293b" }}>
                    <span style={{ display: "flex", color: "#334155" }}>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ display: "block", flex: "none" }}>
                        <path d="M5 3h14v18H5z"></path>
                        <circle cx="12" cy="10" r="2.5"></circle>
                        <path d="M8 17a4 4 0 0 1 8 0"></path>
                      </svg>
                    </span>
                    <span style={{ flex: "1" }}>Clientes</span>
                  </div>
                  <div style={{ margin: "18px 0 6px", padding: "0 10px", fontSize: "10px", fontWeight: "600", textTransform: "uppercase", letterSpacing: ".08em", color: "#64748b" }}>Cobro</div>
                  <div style={{ position: "relative", display: "flex", alignItems: "center", gap: "10px", padding: "7px 10px", borderRadius: "8px", whiteSpace: "nowrap", fontSize: "13px", background: "#f3ebff", fontWeight: "500", color: "#1e293b" }}>
                    <span style={{ position: "absolute", left: "-8px", top: "6px", bottom: "6px", width: "3px", borderRadius: "3px", background: "#7c3aed" }}></span>
                    <span style={{ display: "flex", color: "#7c3aed" }}>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ display: "block", flex: "none" }}>
                        <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"></path>
                        <path d="M14 3v5h5"></path>
                        <path d="M9 13h6M9 17h4"></path>
                      </svg>
                    </span>
                    <span style={{ flex: "1" }}>Facturas</span>
                  </div>
                  <div style={{ position: "relative", display: "flex", alignItems: "center", gap: "10px", padding: "7px 10px", borderRadius: "8px", whiteSpace: "nowrap", fontSize: "13px", color: "#1e293b" }}>
                    <span style={{ display: "flex", color: "#334155" }}>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ display: "block", flex: "none" }}>
                        <path d="M21 12a8 8 0 0 1-11.5 7.2L4 20.5l1.3-5A8 8 0 1 1 21 12z"></path>
                      </svg>
                    </span>
                    <span style={{ flex: "1" }}>Conversaciones</span>
                  </div>
                  <div style={{ position: "relative", display: "flex", alignItems: "center", gap: "10px", padding: "7px 10px", borderRadius: "8px", whiteSpace: "nowrap", fontSize: "13px", color: "#1e293b" }}>
                    <span style={{ display: "flex", color: "#334155" }}>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ display: "block", flex: "none" }}>
                        <circle cx="12" cy="12" r="9"></circle>
                        <path d="M12 7v5l3 2"></path>
                      </svg>
                    </span>
                    <span style={{ flex: "1" }}>Promesas de pago</span>
                  </div>
                  <div style={{ position: "relative", display: "flex", alignItems: "center", gap: "10px", padding: "7px 10px", borderRadius: "8px", whiteSpace: "nowrap", fontSize: "13px", color: "#1e293b" }}>
                    <span style={{ display: "flex", color: "#334155" }}>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ display: "block", flex: "none" }}>
                        <path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1"></path>
                        <path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"></path>
                      </svg>
                    </span>
                    <span style={{ flex: "1" }}>Enlaces de pago</span>
                  </div>
                  <div style={{ position: "relative", display: "flex", alignItems: "center", gap: "10px", padding: "7px 10px", borderRadius: "8px", whiteSpace: "nowrap", fontSize: "13px", color: "#1e293b" }}>
                    <span style={{ display: "flex", color: "#334155" }}>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ display: "block", flex: "none" }}>
                        <path d="M5 12.5l4.5 4.5L19 7.5"></path>
                      </svg>
                    </span>
                    <span style={{ flex: "1" }}>Conciliación</span>
                  </div>
                  <div style={{ position: "relative", display: "flex", alignItems: "center", gap: "10px", padding: "7px 10px", borderRadius: "8px", whiteSpace: "nowrap", fontSize: "13px", color: "#1e293b" }}>
                    <span style={{ display: "flex", color: "#334155" }}>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ display: "block", flex: "none" }}>
                        <path d="M12 3l9.5 17h-19z"></path>
                        <path d="M12 10v4M12 17.5v.01"></path>
                      </svg>
                    </span>
                    <span style={{ flex: "1" }}>Para ti</span>
                  </div>
                </div>
              </>
            )}
            <div style={{ padding: "clamp(14px,2vw,24px)", display: "flex", flexDirection: "column", gap: "14px", minWidth: "0" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "12px", flexWrap: "wrap" }}>
                <div style={{ minWidth: "0" }}>
                  <div style={{ fontSize: "clamp(17px,1.8vw,21px)", fontWeight: "600", color: "#0f172a" }}>Cobro de facturas</div>
                  <div style={{ marginTop: "2px", fontSize: "12px", color: "#64748b" }}>Zeryx habla con cada cliente hasta que paga · WhatsApp y correo</div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "6px", flexWrap: "wrap" }}>
                  <span style={{ whiteSpace: "nowrap", padding: "3px 10px", borderRadius: "999px", fontSize: "11px", fontWeight: "500", background: "#fef3c7", color: "#d97706" }}>Supervisado</span>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", whiteSpace: "nowrap", padding: "6px 11px", borderRadius: "7px", border: "1px solid #fcd34d", background: "#ffffff", color: "#d97706", fontSize: "12px", fontWeight: "500" }}>
                    Aprobaciones
                    <span style={{ minWidth: "17px", height: "17px", borderRadius: "999px", background: "#f59e0b", color: "#ffffff", fontSize: "10px", fontWeight: "700", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>1</span>
                  </span>
                  <span style={{ whiteSpace: "nowrap", padding: "6px 11px", borderRadius: "7px", background: "#7c3aed", color: "#ffffff", fontSize: "12px", fontWeight: "500" }}>Configurar</span>
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: v.kpiCols, gap: "10px" }}>
                <div style={{ padding: "14px", borderRadius: "12px", border: "1px solid #e2e8f0", background: "#ffffff", boxShadow: "0 1px 2px rgba(0,0,0,.05)", minWidth: "0" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "8px" }}>
                    <span style={{ fontSize: "12px", lineHeight: "1.3", color: "#64748b", minWidth: "0" }}>Pendiente de cobro</span>
                    <span style={{ flex: "none", width: "12px", height: "12px", borderRadius: "50%", background: "#ede9fe" }}></span>
                  </div>
                  <div style={{ marginTop: "10px", fontSize: "clamp(17px,1.9vw,23px)", fontWeight: "700", letterSpacing: "-.02em", whiteSpace: "nowrap", color: "#0f172a", transition: "color .3s" }}>187.250,00 €</div>
                  <div style={{ marginTop: "6px", fontSize: "11px", color: "#64748b", whiteSpace: "nowrap" }}>14 facturas en seguimiento</div>
                </div>
                <div style={{ padding: "14px", borderRadius: "12px", border: "1px solid #e2e8f0", background: "#ffffff", boxShadow: "0 1px 2px rgba(0,0,0,.05)", minWidth: "0" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "8px" }}>
                    <span style={{ fontSize: "12px", lineHeight: "1.3", color: "#64748b", minWidth: "0" }}>Vencido</span>
                    <span style={{ flex: "none", width: "12px", height: "12px", borderRadius: "50%", background: "#fee2e2" }}></span>
                  </div>
                  <div style={{ marginTop: "10px", fontSize: "clamp(17px,1.9vw,23px)", fontWeight: "700", letterSpacing: "-.02em", whiteSpace: "nowrap", color: "#0f172a", transition: "color .3s" }}>41.380,00 €</div>
                  <div style={{ marginTop: "6px", fontSize: "11px", color: "#64748b", whiteSpace: "nowrap" }}>5 facturas vencidas</div>
                </div>
                <div style={{ padding: "14px", borderRadius: "12px", border: "1px solid #e2e8f0", background: "#ffffff", boxShadow: "0 1px 2px rgba(0,0,0,.05)", minWidth: "0" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "8px" }}>
                    <span style={{ fontSize: "12px", lineHeight: "1.3", color: "#64748b", minWidth: "0" }}>Cobrado este mes</span>
                    <span style={{ flex: "none", width: "12px", height: "12px", borderRadius: "50%", background: "#dcfce7" }}></span>
                  </div>
                  <div data-live="1" style={{ marginTop: "10px", fontSize: "clamp(17px,1.9vw,23px)", fontWeight: "700", letterSpacing: "-.02em", whiteSpace: "nowrap", color: "#0f172a", transition: "color .3s" }}>62.940,00 €</div>
                  <div style={{ marginTop: "6px", fontSize: "11px", color: "#16a34a", whiteSpace: "nowrap" }}>3 pagadas hoy por el enlace</div>
                </div>
                <div style={{ padding: "14px", borderRadius: "12px", border: "1px solid #e2e8f0", background: "#ffffff", boxShadow: "0 1px 2px rgba(0,0,0,.05)", minWidth: "0" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "8px" }}>
                    <span style={{ fontSize: "12px", lineHeight: "1.3", color: "#64748b", minWidth: "0" }}>Promesas de pago</span>
                    <span style={{ flex: "none", width: "12px", height: "12px", borderRadius: "50%", background: "#dbeafe" }}></span>
                  </div>
                  <div style={{ marginTop: "10px", fontSize: "clamp(17px,1.9vw,23px)", fontWeight: "700", letterSpacing: "-.02em", whiteSpace: "nowrap", color: "#0f172a", transition: "color .3s" }}>6 abiertas</div>
                  <div style={{ marginTop: "6px", fontSize: "11px", color: "#64748b", whiteSpace: "nowrap" }}>3 vencen esta semana</div>
                </div>
              </div>
              <div style={{ display: "flex", gap: "2px", borderBottom: "1px solid #e2e8f0", fontSize: "12.5px", overflow: "hidden" }}>
                <span style={{ padding: "7px 12px", color: "#64748b", whiteSpace: "nowrap" }}>Resumen</span>
                <span style={{ padding: "7px 12px", color: "#4d18a9", fontWeight: "600", borderBottom: "2px solid #4d18a9", marginBottom: "-1px", whiteSpace: "nowrap" }}>
                  Facturas{" "}
                  <span style={{ color: "#94a3b8", fontWeight: "400" }}>(14)</span>
                </span>
                <span style={{ padding: "7px 12px", color: "#64748b", whiteSpace: "nowrap" }}>
                  Conversaciones{" "}
                  <span style={{ color: "#94a3b8" }}>(9)</span>
                </span>
                <span style={{ padding: "7px 12px", color: "#64748b", whiteSpace: "nowrap" }}>
                  Promesas{" "}
                  <span style={{ color: "#94a3b8" }}>(6)</span>
                </span>
                <span style={{ padding: "7px 12px", color: "#64748b", whiteSpace: "nowrap" }}>Registro</span>
              </div>
              <div style={{ flex: "1", padding: "14px 16px 6px", borderRadius: "8px", background: "#ffffff", boxShadow: "0 4px 12px 0 rgba(32,27,40,.1)", minWidth: "0" }}>
                <div style={{ fontSize: "13px", fontWeight: "600", color: "#334155" }}>Facturas pendientes</div>
                <div style={{ display: "grid", gridTemplateColumns: v.tblCols, gap: "10px", padding: "10px 0 7px", borderBottom: "1px solid #e2e8f0", fontSize: "11.5px", fontWeight: "500", color: "#64748b" }}>
                  <span>Factura</span>
                  <span>Cliente</span>
                  <span style={{ display: v.vencDisp }}>Vencimiento</span>
                  <span style={{ textAlign: "right" }}>Pendiente</span>
                  <span>Estado</span>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: v.tblCols, gap: "10px", alignItems: "center", padding: "9px 0", borderBottom: "1px solid #f1f5f9", fontSize: "12.5px" }}>
                  <span style={{ fontWeight: "600", color: "#1e293b", whiteSpace: "nowrap" }}>FAC-0379</span>
                  <span style={{ color: "#1e293b", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>Grupo Lumen</span>
                  <span style={{ color: "#b45309", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", fontSize: "11.5px", display: v.vencDisp }}>hace 11 días</span>
                  <span style={{ textAlign: "right", fontWeight: "700", color: "#0f172a", whiteSpace: "nowrap" }}>3.120,00 €</span>
                  <span>
                    <span style={{ display: "inline-block", whiteSpace: "nowrap", padding: "2px 9px", borderRadius: "999px", fontSize: "11px", fontWeight: "500", background: "#dcfce7", color: "#16a34a" }}>Promesa</span>
                  </span>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: v.tblCols, gap: "10px", alignItems: "center", padding: "9px 0", borderBottom: "1px solid #f1f5f9", fontSize: "12.5px" }}>
                  <span style={{ fontWeight: "600", color: "#1e293b", whiteSpace: "nowrap" }}>FAC-0381</span>
                  <span style={{ color: "#1e293b", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>Constructoras Norte</span>
                  <span style={{ color: "#b45309", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", fontSize: "11.5px", display: v.vencDisp }}>hace 12 días</span>
                  <span style={{ textAlign: "right", fontWeight: "700", color: "#0f172a", whiteSpace: "nowrap" }}>8.750,00 €</span>
                  <span>
                    <span style={{ display: "inline-block", whiteSpace: "nowrap", padding: "2px 9px", borderRadius: "999px", fontSize: "11px", fontWeight: "500", background: "#fef3c7", color: "#d97706" }}>Hablando</span>
                  </span>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: v.tblCols, gap: "10px", alignItems: "center", padding: "9px 0", borderBottom: "1px solid #f1f5f9", fontSize: "12.5px" }}>
                  <span style={{ fontWeight: "600", color: "#1e293b", whiteSpace: "nowrap" }}>FAC-0372</span>
                  <span style={{ color: "#1e293b", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>Dist. Pérez</span>
                  <span style={{ color: "#b91c1c", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", fontSize: "11.5px", display: v.vencDisp }}>hace 24 días</span>
                  <span style={{ textAlign: "right", fontWeight: "700", color: "#0f172a", whiteSpace: "nowrap" }}>6.400,00 €</span>
                  <span>
                    <span style={{ display: "inline-block", whiteSpace: "nowrap", padding: "2px 9px", borderRadius: "999px", fontSize: "11px", fontWeight: "500", background: "#ede9fe", color: "#7c3aed" }}>Enlace</span>
                  </span>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: v.tblCols, gap: "10px", alignItems: "center", padding: "9px 0", borderBottom: "1px solid #f1f5f9", fontSize: "12.5px" }}>
                  <span style={{ fontWeight: "600", color: "#1e293b", whiteSpace: "nowrap" }}>FAC-0384</span>
                  <span style={{ color: "#1e293b", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>Talleres Ebro</span>
                  <span style={{ color: "#15803d", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", fontSize: "11.5px", display: v.vencDisp }}>en 5 días</span>
                  <span style={{ textAlign: "right", fontWeight: "700", color: "#0f172a", whiteSpace: "nowrap" }}>1.940,00 €</span>
                  <span>
                    <span style={{ display: "inline-block", whiteSpace: "nowrap", padding: "2px 9px", borderRadius: "999px", fontSize: "11px", fontWeight: "500", background: "#dbeafe", color: "#2563eb" }}>En plazo</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ position: "absolute", zIndex: "3", left: "calc(50% - 50vw)", right: "calc(50% - 50vw)", bottom: "-2px", height: "160px", background: "linear-gradient(180deg,rgba(255,255,255,0),#ffffff)", pointerEvents: "none" }}></div>
    </header>
  )
}
