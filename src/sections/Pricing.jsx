import Roll from '../components/Roll.jsx'
import SplitWords from '../components/SplitWords.jsx'

export default function Pricing({ v }) {
  return (
    <section id="precios" style={{ padding: "0 20px clamp(90px,12vw,160px)", display: "flex", justifyContent: "center" }}>
      <div style={{ width: "min(1180px,100%)" }}>
        <div data-r="1" style={{ display: "flex", alignItems: "baseline", gap: "10px", fontSize: "15px", fontWeight: "500", color: "#334155", opacity: "0", transform: "translateY(24px)" }}>
          <span style={{ fontSize: "13px", fontVariantNumeric: "tabular-nums", color: "#7c3aed" }}>(08)</span>
          Precios
        </div>
        <h2 data-split="1" style={{ margin: "16px 0 0", fontSize: "clamp(34px,5.4vw,72px)", lineHeight: "1", letterSpacing: "-.045em", fontWeight: "600", maxWidth: "900px" }}>
          <SplitWords text={"Precios claros. Sin permanencia."} />
        </h2>
        <div style={{ marginTop: "clamp(40px,6vw,64px)", display: "grid", gridTemplateColumns: v.priceCols, gap: "16px", alignItems: "stretch" }}>
          <div data-r="1" data-d="0" style={{ opacity: "0", transform: "translateY(60px)" }}>
            <div onMouseMove={v.tilt} onMouseLeave={v.untilt} style={{ position: "relative", height: "100%", padding: "28px", borderRadius: "16px", display: "flex", flexDirection: "column", transition: "transform .5s cubic-bezier(.2,.8,.2,1)", background: "#ffffff", border: "1px solid #e2e8f0", boxShadow: "0 1px 2px rgba(0,0,0,.05)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "8px" }}>
                <h3 style={{ margin: 0, fontSize: "18px", fontWeight: "600" }}>Pyme</h3>
              </div>
              <div style={{ marginTop: "6px", fontSize: "14px", color: "#64748b" }}>
                Para empresas que facturan a otras empresas y tienen unas cuantas vencidas al mes.
              </div>
              <div style={{ marginTop: "22px", display: "flex", alignItems: "baseline", gap: "4px" }}>
                <span style={{ fontSize: "52px", fontWeight: "700", letterSpacing: "-.04em", lineHeight: "1" }}>{"149 €"}</span>
                <span style={{ fontSize: "14px", color: "#64748b" }}>/mes</span>
              </div>
              <div style={{ marginTop: "8px", fontSize: "13px", lineHeight: "1.4", color: "#64748b" }}>Todo incluido. Sin porcentaje.</div>
              <div style={{ marginTop: "24px", display: "flex", flexDirection: "column", gap: "10px" }}>
                <div style={{ display: "flex", gap: "10px", alignItems: "flex-start", fontSize: "14px", lineHeight: "1.4", color: "#475569" }}>
                  <span style={{ color: "#7c3aed", fontWeight: "700" }}>✓</span>
                  <span>Cobro por WhatsApp y correo, en tu nombre</span>
                </div>
                <div style={{ display: "flex", gap: "10px", alignItems: "flex-start", fontSize: "14px", lineHeight: "1.4", color: "#475569" }}>
                  <span style={{ color: "#7c3aed", fontWeight: "700" }}>✓</span>
                  <span>Facturas vencidas sin límite</span>
                </div>
                <div style={{ display: "flex", gap: "10px", alignItems: "flex-start", fontSize: "14px", lineHeight: "1.4", color: "#475569" }}>
                  <span style={{ color: "#7c3aed", fontWeight: "700" }}>✓</span>
                  <span>Enlace de pago y conciliación</span>
                </div>
                <div style={{ display: "flex", gap: "10px", alignItems: "flex-start", fontSize: "14px", lineHeight: "1.4", color: "#475569" }}>
                  <span style={{ color: "#7c3aed", fontWeight: "700" }}>✓</span>
                  <span>Facturación de Zeryx, Odoo o Excel</span>
                </div>
                <div style={{ display: "flex", gap: "10px", alignItems: "flex-start", fontSize: "14px", lineHeight: "1.4", color: "#475569" }}>
                  <span style={{ color: "#7c3aed", fontWeight: "700" }}>✓</span>
                  <span>Resumen diario y registro completo</span>
                </div>
              </div>
              <a className="hv26" href={v.waLink} target={v.waTarget} rel="noopener" data-mag="1" onMouseMove={v.magnet} onMouseLeave={v.unmagnet} style={{ marginTop: "auto", display: "flex", justifyContent: "center", whiteSpace: "nowrap", padding: "13px 18px", borderRadius: "8px", fontSize: "14px", fontWeight: "500", transition: "transform .25s cubic-bezier(.2,.8,.2,1),background .3s", background: "#ffffff", color: "#334155", border: "1px solid #e2e8f0" }}>
                <Roll>
                  Pedir acceso
                </Roll>
              </a>
            </div>
          </div>
          <div data-r="1" data-d="100" style={{ opacity: "0", transform: "translateY(60px)" }}>
            <div onMouseMove={v.tilt} onMouseLeave={v.untilt} style={{ position: "relative", height: "100%", padding: "28px", borderRadius: "16px", display: "flex", flexDirection: "column", transition: "transform .5s cubic-bezier(.2,.8,.2,1)", background: "#7c3aed", color: "#ffffff", boxShadow: "0 30px 60px -20px rgba(124,58,237,.55)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "8px" }}>
                <h3 style={{ margin: 0, fontSize: "18px", fontWeight: "600" }}>Mediana</h3>
                <span style={{ fontSize: "11px", fontWeight: "600", padding: "4px 9px", borderRadius: "999px", background: "#ffffff", color: "#7c3aed", whiteSpace: "nowrap" }}>Con garantía</span>
              </div>
              <div style={{ marginTop: "6px", fontSize: "14px", color: "#ede9fe" }}>Para empresas con un equipo de administración que ya reclama.</div>
              <div style={{ marginTop: "22px", fontSize: "13px", fontWeight: "600", textTransform: "uppercase", letterSpacing: ".05em", color: "#ede9fe" }}>desde</div>
              <div style={{ marginTop: "6px", display: "flex", alignItems: "baseline", gap: "4px" }}>
                <span style={{ fontSize: "52px", fontWeight: "700", letterSpacing: "-.04em", lineHeight: "1" }}>{"490 €"}</span>
                <span style={{ fontSize: "14px", color: "#ede9fe" }}>/mes</span>
              </div>
              <div style={{ marginTop: "8px", fontSize: "13px", lineHeight: "1.4", color: "#ede9fe" }}>
                + 1,5 % de lo vencido que Zeryx cobra hablando. 490, 990 o 1.490 € según tamaño.
              </div>
              <div style={{ marginTop: "24px", display: "flex", flexDirection: "column", gap: "10px" }}>
                <div style={{ display: "flex", gap: "10px", alignItems: "flex-start", fontSize: "14px", lineHeight: "1.4", color: "#ede9fe" }}>
                  <span style={{ color: "#bc95ff", fontWeight: "700" }}>✓</span>
                  <span>Todo lo de Pyme</span>
                </div>
                <div style={{ display: "flex", gap: "10px", alignItems: "flex-start", fontSize: "14px", lineHeight: "1.4", color: "#ede9fe" }}>
                  <span style={{ color: "#bc95ff", fontWeight: "700" }}>✓</span>
                  <span>Control: la mitad Zeryx, la mitad tú</span>
                </div>
                <div style={{ display: "flex", gap: "10px", alignItems: "flex-start", fontSize: "14px", lineHeight: "1.4", color: "#ede9fe" }}>
                  <span style={{ color: "#bc95ff", fontWeight: "700" }}>✓</span>
                  <span>Marcador propio a los 90 días</span>
                </div>
                <div style={{ display: "flex", gap: "10px", alignItems: "flex-start", fontSize: "14px", lineHeight: "1.4", color: "#ede9fe" }}>
                  <span style={{ color: "#bc95ff", fontWeight: "700" }}>✓</span>
                  <span>Garantía: +10 puntos o te devolvemos las cuotas</span>
                </div>
                <div style={{ display: "flex", gap: "10px", alignItems: "flex-start", fontSize: "14px", lineHeight: "1.4", color: "#ede9fe" }}>
                  <span style={{ color: "#bc95ff", fontWeight: "700" }}>✓</span>
                  <span>Reglas por cliente y por importe</span>
                </div>
              </div>
              <a className="hv27" href={v.waLink} target={v.waTarget} rel="noopener" data-mag="1" onMouseMove={v.magnet} onMouseLeave={v.unmagnet} style={{ marginTop: "auto", display: "flex", justifyContent: "center", whiteSpace: "nowrap", padding: "13px 18px", borderRadius: "8px", fontSize: "14px", fontWeight: "500", transition: "transform .25s cubic-bezier(.2,.8,.2,1),background .3s", background: "#ffffff", color: "#4d18a9" }}>
                <Roll>
                  Pedir acceso
                </Roll>
              </a>
            </div>
          </div>
          <div data-r="1" data-d="200" style={{ opacity: "0", transform: "translateY(60px)" }}>
            <div onMouseMove={v.tilt} onMouseLeave={v.untilt} style={{ position: "relative", height: "100%", padding: "28px", borderRadius: "16px", display: "flex", flexDirection: "column", transition: "transform .5s cubic-bezier(.2,.8,.2,1)", background: "#ffffff", border: "1px solid #e2e8f0", boxShadow: "0 1px 2px rgba(0,0,0,.05)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "8px" }}>
                <h3 style={{ margin: 0, fontSize: "18px", fontWeight: "600" }}>Grande</h3>
              </div>
              <div style={{ marginTop: "6px", fontSize: "14px", color: "#64748b" }}>Para grupos con varias sociedades o miles de facturas al mes.</div>
              <div style={{ marginTop: "22px", display: "flex", alignItems: "baseline", gap: "4px" }}>
                <span style={{ fontSize: "34px", fontWeight: "700", letterSpacing: "-.04em", lineHeight: "1" }}>A propuesta</span>
                <span style={{ fontSize: "14px", color: "#64748b" }}></span>
              </div>
              <div style={{ marginTop: "8px", fontSize: "13px", lineHeight: "1.4", color: "#64748b" }}>Cuota fija más un porcentaje a la baja con el volumen.</div>
              <div style={{ marginTop: "24px", display: "flex", flexDirection: "column", gap: "10px" }}>
                <div style={{ display: "flex", gap: "10px", alignItems: "flex-start", fontSize: "14px", lineHeight: "1.4", color: "#475569" }}>
                  <span style={{ color: "#7c3aed", fontWeight: "700" }}>✓</span>
                  <span>Todo lo de Mediana</span>
                </div>
                <div style={{ display: "flex", gap: "10px", alignItems: "flex-start", fontSize: "14px", lineHeight: "1.4", color: "#475569" }}>
                  <span style={{ color: "#7c3aed", fontWeight: "700" }}>✓</span>
                  <span>Varias sociedades y varios equipos</span>
                </div>
                <div style={{ display: "flex", gap: "10px", alignItems: "flex-start", fontSize: "14px", lineHeight: "1.4", color: "#475569" }}>
                  <span style={{ color: "#7c3aed", fontWeight: "700" }}>✓</span>
                  <span>Implantación con Odoo incluida</span>
                </div>
                <div style={{ display: "flex", gap: "10px", alignItems: "flex-start", fontSize: "14px", lineHeight: "1.4", color: "#475569" }}>
                  <span style={{ color: "#7c3aed", fontWeight: "700" }}>✓</span>
                  <span>Un responsable de tu cuenta</span>
                </div>
              </div>
              <a className="hv28" href={v.waLink2} target={v.waTarget} rel="noopener" data-mag="1" onMouseMove={v.magnet} onMouseLeave={v.unmagnet} style={{ marginTop: "auto", display: "flex", justifyContent: "center", whiteSpace: "nowrap", padding: "13px 18px", borderRadius: "8px", fontSize: "14px", fontWeight: "500", transition: "transform .25s cubic-bezier(.2,.8,.2,1),background .3s", background: "#ffffff", color: "#334155", border: "1px solid #e2e8f0" }}>
                <Roll>
                  Hablar por WhatsApp
                </Roll>
              </a>
            </div>
          </div>
          <div data-r="1" data-d="300" style={{ opacity: "0", transform: "translateY(60px)" }}>
            <div onMouseMove={v.tilt} onMouseLeave={v.untilt} style={{ position: "relative", height: "100%", padding: "28px", borderRadius: "16px", display: "flex", flexDirection: "column", transition: "transform .5s cubic-bezier(.2,.8,.2,1)", background: "#ffffff", border: "1px solid #e2e8f0", boxShadow: "0 1px 2px rgba(0,0,0,.05)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "8px" }}>
                <h3 style={{ margin: 0, fontSize: "18px", fontWeight: "600" }}>Tu cliente</h3>
              </div>
              <div style={{ marginTop: "6px", fontSize: "14px", color: "#64748b" }}>Para quien te debe dinero.</div>
              <div style={{ marginTop: "22px", display: "flex", alignItems: "baseline", gap: "4px" }}>
                <span style={{ fontSize: "52px", fontWeight: "700", letterSpacing: "-.04em", lineHeight: "1" }}>{"0 €"}</span>
                <span style={{ fontSize: "14px", color: "#64748b" }}>siempre</span>
              </div>
              <div style={{ marginTop: "8px", fontSize: "13px", lineHeight: "1.4", color: "#64748b" }}>Pagar nunca le cuesta nada.</div>
              <div style={{ marginTop: "24px", display: "flex", flexDirection: "column", gap: "10px" }}>
                <div style={{ display: "flex", gap: "10px", alignItems: "flex-start", fontSize: "14px", lineHeight: "1.4", color: "#475569" }}>
                  <span style={{ color: "#7c3aed", fontWeight: "700" }}>✓</span>
                  <span>Sin registro ni app</span>
                </div>
                <div style={{ display: "flex", gap: "10px", alignItems: "flex-start", fontSize: "14px", lineHeight: "1.4", color: "#475569" }}>
                  <span style={{ color: "#7c3aed", fontWeight: "700" }}>✓</span>
                  <span>Sin comisión por pagar</span>
                </div>
                <div style={{ display: "flex", gap: "10px", alignItems: "flex-start", fontSize: "14px", lineHeight: "1.4", color: "#475569" }}>
                  <span style={{ color: "#7c3aed", fontWeight: "700" }}>✓</span>
                  <span>Ve y descarga su factura</span>
                </div>
                <div style={{ display: "flex", gap: "10px", alignItems: "flex-start", fontSize: "14px", lineHeight: "1.4", color: "#475569" }}>
                  <span style={{ color: "#7c3aed", fontWeight: "700" }}>✓</span>
                  <span>Recibo al instante</span>
                </div>
              </div>
              <a className="hv29" href="#stack" data-mag="1" onMouseMove={v.magnet} onMouseLeave={v.unmagnet} style={{ marginTop: "auto", display: "flex", justifyContent: "center", whiteSpace: "nowrap", padding: "13px 18px", borderRadius: "8px", fontSize: "14px", fontWeight: "500", transition: "transform .25s cubic-bezier(.2,.8,.2,1),background .3s", background: "#ffffff", color: "#334155", border: "1px solid #e2e8f0" }}>
                <Roll>
                  Así lo ve tu cliente
                </Roll>
              </a>
            </div>
          </div>
        </div>
        <p data-r="1" style={{ margin: "22px 0 0", fontSize: "14px", lineHeight: "1.6", color: "#64748b", opacity: "0", transform: "translateY(24px)" }}>
          Precios sin IVA. Sin permanencia: pagas mes a mes y paras cuando quieras. Y el mismo precio para todos: no hacemos excepciones.
        </p>
      </div>
    </section>
  )
}
