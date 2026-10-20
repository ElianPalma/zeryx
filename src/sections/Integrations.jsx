import { Fragment } from 'react'
import SplitWords from '../components/SplitWords.jsx'

export default function Integrations({ v }) {
  return (
    <section id="stack" style={{ padding: "clamp(90px,12vw,160px) 20px", display: "flex", justifyContent: "center" }}>
      <div style={{ width: "min(1180px,100%)" }}>
        <div data-r="1" style={{ display: "flex", alignItems: "baseline", gap: "10px", fontSize: "15px", fontWeight: "500", color: "#334155", opacity: "0", transform: "translateY(24px)" }}>
          <span style={{ fontSize: "13px", fontVariantNumeric: "tabular-nums", color: "#7c3aed" }}>(05)</span>
          Integraciones
        </div>
        <h2 data-split="1" style={{ margin: "16px 0 0", fontSize: "clamp(34px,5.4vw,72px)", lineHeight: "1", letterSpacing: "-.045em", fontWeight: "600", maxWidth: "900px" }}>
          <SplitWords text={"Se conecta a lo que ya usas."} />
        </h2>
        <div style={{ marginTop: "clamp(40px,6vw,64px)", display: "grid", gridTemplateColumns: v.bentoCols, gap: "16px" }}>
          <div data-r="1" data-d="0" style={{ gridColumn: v.spanWide, opacity: "0", transform: "translateY(70px) scale(.97)" }}>
            <div onMouseMove={v.spot} style={{ position: "relative", height: "100%", minHeight: "300px", padding: "clamp(22px,3vw,32px)", borderRadius: "16px", border: "1px solid #e2e8f0", overflow: "hidden", background: "radial-gradient(420px circle at var(--x,50%) var(--y,0%),#f8fafc,#ffffff 60%)" }}>
              <div style={{ fontSize: "11px", fontWeight: "600", textTransform: "uppercase", letterSpacing: ".05em", color: "#64748b" }}>Cómo paga tu cliente</div>
              <div style={{ marginTop: "10px", fontSize: "clamp(22px,2.4vw,28px)", fontWeight: "700", letterSpacing: "-.02em" }}>Un enlace. Sin registrarse.</div>
              <p style={{ margin: "8px 0 0", maxWidth: "420px", fontSize: "14px", lineHeight: "1.6", color: "#64748b" }}>
                Tu cliente abre el enlace, ve la factura y paga. El dinero va de su banco a tu cuenta; Zeryx solo lo casa con la factura.
              </p>
              <div style={{ marginTop: "28px", display: "grid", gridTemplateColumns: "auto minmax(0,1fr) auto", gap: "10px 14px", alignItems: "center" }}>
                <div style={{ gridRow: "span 4", padding: "14px 16px", borderRadius: "12px", background: "#7c3aed", color: "#fff", fontSize: "13px", fontWeight: "600", textAlign: "center" }}>
                  Factura
                  <br />
                  <span style={{ fontSize: "18px" }}>8.750 €</span>
                </div>
                {v.psps.map((p, $index) => (
                  <Fragment key={$index}>
                    <div style={{ position: "relative", height: "2px", background: "#e2e8f0", borderRadius: "2px" }}>
                      <span data-dot="1" style={{ position: "absolute", top: "-3px", left: "0", width: "8px", height: "8px", borderRadius: "50%", background: "#7c3aed", boxShadow: "0 0 0 4px rgba(124,58,237,.15)" }}></span>
                    </div>
                    <div data-psp="1" style={{ padding: "8px 14px", borderRadius: "8px", border: "1px solid #e2e8f0", background: "#ffffff", fontSize: "13px", fontWeight: "600", color: "#334155", minWidth: "92px", textAlign: "center", transition: "background .4s,color .4s,border-color .4s" }}>
                      {p}
                    </div>
                  </Fragment>
                ))}
              </div>
            </div>
          </div>
          <div data-r="1" data-d="120" style={{ opacity: "0", transform: "translateY(70px) scale(.97)" }}>
            <div onMouseMove={v.spot} style={{ height: "100%", minHeight: "300px", padding: "clamp(22px,3vw,32px)", borderRadius: "16px", border: "1px solid #e2e8f0", background: "radial-gradient(360px circle at var(--x,50%) var(--y,0%),#f8fafc,#ffffff 60%)", display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: "11px", fontWeight: "600", textTransform: "uppercase", letterSpacing: ".05em", color: "#64748b" }}>Facturación</div>
              <div style={{ marginTop: "auto", fontSize: "clamp(48px,5vw,72px)", fontWeight: "700", letterSpacing: "-.05em", lineHeight: "1", color: "#7c3aed" }}>Odoo</div>
              <div style={{ marginTop: "8px", fontSize: "14px", color: "#64748b" }}>
                Si facturas con Zeryx, tus facturas ya están dentro. Si usas Odoo, Zeryx lee cada día tus facturas, vencimientos y cobros. Venimos de AIT, partner de Odoo.
              </div>
              <div style={{ marginTop: "18px", display: "flex", flexWrap: "wrap", gap: "6px" }}>
                <span style={{ whiteSpace: "nowrap", fontSize: "12px", padding: "5px 10px", borderRadius: "999px", border: "1px solid #e2e8f0" }}>Facturación de Zeryx</span>
                <span style={{ whiteSpace: "nowrap", fontSize: "12px", padding: "5px 10px", borderRadius: "999px", border: "1px solid #e2e8f0" }}>Odoo</span>
                <span style={{ whiteSpace: "nowrap", fontSize: "12px", padding: "5px 10px", borderRadius: "999px", border: "1px solid #e2e8f0" }}>Excel / CSV</span>
              </div>
            </div>
          </div>
          <div data-r="1" data-d="0" style={{ opacity: "0", transform: "translateY(70px) scale(.97)" }}>
            <div onMouseMove={v.spot} style={{ height: "100%", minHeight: "300px", padding: "clamp(22px,3vw,32px)", borderRadius: "16px", border: "1px solid #e2e8f0", background: "radial-gradient(360px circle at var(--x,50%) var(--y,0%),#f8fafc,#ffffff 60%)", display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: "11px", fontWeight: "600", textTransform: "uppercase", letterSpacing: ".05em", color: "#64748b" }}>Canales</div>
              <div style={{ marginTop: "10px", fontSize: "clamp(22px,2.4vw,28px)", fontWeight: "700", letterSpacing: "-.02em" }}>Donde tu cliente responde</div>
              <p style={{ margin: "8px 0 0", fontSize: "14px", lineHeight: "1.6", color: "#64748b" }}>
                WhatsApp primero. Correo si no responde o no lo tiene. Y un portal donde ve y descarga su factura.
              </p>
              <div style={{ marginTop: "auto", paddingTop: "24px", display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {v.channels.map((c, $index) => (
                  <span key={$index} data-ch="1" style={{ fontSize: "14px", fontWeight: "500", padding: "9px 14px", borderRadius: "999px", border: "1px solid #e2e8f0", background: "#ffffff", color: "#475569", transition: "background .4s,color .4s,border-color .4s,transform .4s" }}>
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div data-r="1" data-d="120" style={{ gridColumn: v.spanWide, opacity: "0", transform: "translateY(70px) scale(.97)" }}>
            <div onMouseMove={v.spot} style={{ height: "100%", minHeight: "300px", padding: "clamp(22px,3vw,32px)", borderRadius: "16px", border: "1px solid #e2e8f0", background: "radial-gradient(420px circle at var(--x,50%) var(--y,0%),#f8fafc,#ffffff 60%)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", gap: "12px", flexWrap: "wrap", alignItems: "baseline" }}>
                <div>
                  <div style={{ fontSize: "11px", fontWeight: "600", textTransform: "uppercase", letterSpacing: ".05em", color: "#64748b" }}>Conciliación</div>
                  <div style={{ marginTop: "10px", fontSize: "clamp(22px,2.4vw,28px)", fontWeight: "700", letterSpacing: "-.02em" }}>Cada cobro vuelve a su factura</div>
                  <div style={{ marginTop: "6px", fontSize: "14px", color: "#64748b" }}>
                    Cuando tu cliente paga por el enlace, la factura se marca como cobrada sola. Las transferencias, en cuanto las concilias en Odoo o las marcas en Zeryx.
                  </div>
                </div>
                <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                  <span style={{ whiteSpace: "nowrap", fontSize: "12px", padding: "5px 10px", borderRadius: "999px", border: "1px solid #e2e8f0" }}>Odoo</span>
                  <span style={{ whiteSpace: "nowrap", fontSize: "12px", padding: "5px 10px", borderRadius: "999px", border: "1px solid #e2e8f0" }}>Panel</span>
                  <span style={{ whiteSpace: "nowrap", fontSize: "12px", padding: "5px 10px", borderRadius: "999px", border: "1px solid #e2e8f0" }}>Recibo al cliente</span>
                </div>
              </div>
              <div style={{ marginTop: "22px", display: "flex", flexDirection: "column", gap: "8px" }}>
                {v.recon.map((r, $index) => (
                  <div key={$index} style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) auto auto", gap: "12px", alignItems: "center", padding: "12px 14px", borderRadius: "12px", border: "1px solid #e2e8f0", background: "#ffffff", fontSize: "14px" }}>
                    <span style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", fontFamily: "ui-monospace,SFMono-Regular,Menlo,monospace", fontSize: "13px", color: "#475569" }}>
                      {r.ref}
                    </span>
                    <span style={{ fontWeight: "600", whiteSpace: "nowrap" }}>
                      {r.amt}
                    </span>
                    <span data-rs="1" style={{ fontSize: "12px", fontWeight: "500", padding: "4px 10px", borderRadius: "999px", background: "#f1f5f9", color: "#64748b", whiteSpace: "nowrap", minWidth: "104px", textAlign: "center", transition: "background .4s,color .4s" }}>Pendiente</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div data-r="1" data-d="0" style={{ gridColumn: v.spanAuto, opacity: "0", transform: "translateY(70px) scale(.97)" }}>
            <div onMouseMove={v.spot} style={{ height: "100%", minHeight: "300px", padding: "clamp(22px,3vw,32px)", borderRadius: "16px", border: "1px solid #e2e8f0", background: "radial-gradient(420px circle at var(--x,50%) var(--y,0%),#f8fafc,#ffffff 60%)" }}>
              <div style={{ fontSize: "11px", fontWeight: "600", textTransform: "uppercase", letterSpacing: ".05em", color: "#64748b" }}>Límites</div>
              <div style={{ marginTop: "10px", fontSize: "clamp(22px,2.4vw,28px)", fontWeight: "700", letterSpacing: "-.02em" }}>Tú pones las reglas</div>
              <div style={{ marginTop: "22px", display: "flex", flexDirection: "column", gap: "8px" }}>
                {v.rule.map((r, $index) => (
                  <div key={$index} data-rule="1" style={{ display: "grid", gridTemplateColumns: "118px minmax(0,1fr)", gap: "12px", alignItems: "center", padding: "12px 14px", borderRadius: "12px", border: "1px solid #e2e8f0", background: "#ffffff", transition: "border-color .4s,box-shadow .4s,transform .4s" }}>
                    <span style={{ fontSize: "11px", fontWeight: "600", textTransform: "uppercase", letterSpacing: ".05em", color: "#7c3aed", whiteSpace: "nowrap" }}>
                      {r.k}
                    </span>
                    <span style={{ fontSize: "14px", color: "#0f172a" }}>
                      {r.v}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div data-r="1" data-d="120" style={{ opacity: "0", transform: "translateY(70px) scale(.97)" }}>
            <div onMouseMove={v.spot} style={{ height: "100%", minHeight: "300px", padding: "clamp(22px,3vw,32px)", borderRadius: "16px", border: "1px solid #e2e8f0", background: "radial-gradient(360px circle at var(--x,50%) var(--y,0%),#f8fafc,#ffffff 60%)", display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: "11px", fontWeight: "600", textTransform: "uppercase", letterSpacing: ".05em", color: "#64748b" }}>Para tu cliente</div>
              <div style={{ marginTop: "10px", fontSize: "clamp(22px,2.4vw,28px)", fontWeight: "700", letterSpacing: "-.02em" }}>Pagar le cuesta 0 €</div>
              <div style={{ marginTop: "16px", padding: "14px", borderRadius: "12px", background: "#0f172a", color: "#e2e8f0", fontSize: "13px", lineHeight: "1.6", overflow: "hidden" }}>
                <div style={{ fontFamily: "ui-monospace,SFMono-Regular,Menlo,monospace", fontSize: "12px", color: "#94a3b8" }}>pay.zeryx.io/l/8K2P</div>
                <div style={{ marginTop: "6px", fontWeight: "600" }}>Factura FAC-0381 · Reformas Atlas</div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "10px", marginTop: "8px" }}>
                  <span style={{ fontSize: "18px", fontWeight: "700" }}>8.750,00 €</span>
                  <span style={{ padding: "7px 12px", borderRadius: "8px", background: "#7c3aed", color: "#fff", fontSize: "12px", fontWeight: "600", whiteSpace: "nowrap" }}>Pagar ahora</span>
                </div>
              </div>
              <div style={{ marginTop: "auto", paddingTop: "16px", display: "flex", flexWrap: "wrap", gap: "6px" }}>
                <span style={{ whiteSpace: "nowrap", fontSize: "12px", padding: "5px 10px", borderRadius: "999px", border: "1px solid #e2e8f0" }}>Sin registro</span>
                <span style={{ whiteSpace: "nowrap", fontSize: "12px", padding: "5px 10px", borderRadius: "999px", border: "1px solid #e2e8f0" }}>Sin comisión</span>
                <span style={{ whiteSpace: "nowrap", fontSize: "12px", padding: "5px 10px", borderRadius: "999px", border: "1px solid #e2e8f0" }}>Factura descargable</span>
                <span style={{ whiteSpace: "nowrap", fontSize: "12px", padding: "5px 10px", borderRadius: "999px", border: "1px solid #e2e8f0" }}>Recibo al instante</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
