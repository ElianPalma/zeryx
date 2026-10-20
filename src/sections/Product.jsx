import SplitWords from '../components/SplitWords.jsx'

export default function Product({ v }) {
  return (
    <section id="producto" style={{ padding: "clamp(40px,6vw,80px) 20px clamp(80px,10vw,140px)", display: "flex", justifyContent: "center" }}>
      <div style={{ width: "min(1180px,100%)" }}>
        <div data-r="1" style={{ display: "flex", alignItems: "baseline", gap: "10px", fontSize: "15px", fontWeight: "500", color: "#334155", opacity: "0", transform: "translateY(24px)" }}>
          <span style={{ fontSize: "13px", fontVariantNumeric: "tabular-nums", color: "#7c3aed" }}>(02)</span>
          Producto
        </div>
        <h2 data-split="1" style={{ margin: "16px 0 0", fontSize: "clamp(34px,5.4vw,72px)", lineHeight: "1", letterSpacing: "-.045em", fontWeight: "600", maxWidth: "900px" }}>
          <SplitWords text={"Tu departamento de cobro, completo desde el primer día."} />
        </h2>
        <div style={{ marginTop: "clamp(40px,6vw,72px)", display: "flex", flexDirection: "column", gap: "24px" }}>
          <div data-pile="0" style={{ position: v.pilePos, top: "88px" }}>
            <div data-pilein="1" style={{ transformOrigin: "50% 0", borderRadius: "16px", padding: "clamp(22px,4vw,48px)", background: "#f8fafc", border: "1px solid #e2e8f0", boxShadow: "0 10px 15px -3px rgba(0,0,0,.08)", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,340px),1fr))", gap: "clamp(24px,4vw,56px)", alignItems: "center", minHeight: v.pileMinH }}>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span style={{ fontSize: "12px", fontWeight: "600", color: "#7c3aed", padding: "4px 10px", borderRadius: "999px", background: "#ede9fe" }}>01</span>
                  <span style={{ whiteSpace: "nowrap", fontSize: "11px", fontWeight: "600", textTransform: "uppercase", letterSpacing: ".05em", color: "#64748b" }}>Habla</span>
                </div>
                <h3 style={{ margin: "18px 0 0", fontSize: "clamp(28px,3.6vw,48px)", lineHeight: "1.05", letterSpacing: "-.03em", fontWeight: "700" }}>Habla con cada cliente hasta que paga.</h3>
                <p style={{ margin: "16px 0 0", maxWidth: "460px", color: "#64748b", fontSize: "16px", lineHeight: "1.6" }}>
                  Escribe por WhatsApp y correo en nombre de tu empresa, con tu tono. Pregunta si hay algo que frene el pago, escucha la respuesta, acuerda una fecha y vuelve ese día. Sin plantillas frías ni amenazas.
                </p>
                <div style={{ marginTop: "18px", display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  <span style={{ whiteSpace: "nowrap", fontSize: "12px", padding: "5px 10px", borderRadius: "999px", border: "1px solid #e2e8f0", background: "#ffffff" }}>WhatsApp</span>
                  <span style={{ whiteSpace: "nowrap", fontSize: "12px", padding: "5px 10px", borderRadius: "999px", border: "1px solid #e2e8f0", background: "#ffffff" }}>Correo</span>
                  <span style={{ whiteSpace: "nowrap", fontSize: "12px", padding: "5px 10px", borderRadius: "999px", border: "1px solid #e2e8f0", background: "#ffffff" }}>En tu nombre</span>
                  <span style={{ whiteSpace: "nowrap", fontSize: "12px", padding: "5px 10px", borderRadius: "999px", border: "1px solid #e2e8f0", background: "#ffffff" }}>Promesas de pago</span>
                </div>
                <a className="hv19" href="/producto/cobro-por-whatsapp/" style={{ marginTop: "24px", display: "inline-flex", gap: "8px", whiteSpace: "nowrap", fontSize: "14px", fontWeight: "600", color: "#7c3aed" }}>Ver cómo lo hace →</a>
              </div>
              <div onMouseMove={v.tilt} onMouseLeave={v.untilt} style={{ position: "relative", display: "flex", justifyContent: "center", padding: "20px 0 34px", transition: "transform .5s cubic-bezier(.2,.8,.2,1)" }}>
                <div style={{ width: "min(400px,100%)", borderRadius: "20px", background: "#efeae2", border: "1px solid #e2e8f0", boxShadow: "0 30px 60px -20px rgba(76,24,169,.35)", overflow: "hidden" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "12px 14px", background: "#ffffff", borderBottom: "1px solid #e2e8f0" }}>
                    <span style={{ width: "34px", height: "34px", borderRadius: "50%", background: "#280465", color: "#fff", fontSize: "12px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center" }}>RA</span>
                    <span style={{ minWidth: "0", lineHeight: "1.2" }}>
                      <span style={{ display: "block", fontSize: "14px", fontWeight: "600", color: "#0f172a" }}>Reformas Atlas</span>
                      <span style={{ display: "block", fontSize: "12px", color: "#64748b" }}>Cuenta de empresa · equipo de cobro</span>
                    </span>
                  </div>
                  <div style={{ padding: "14px 12px 16px", display: "flex", flexDirection: "column", gap: "8px", backgroundImage: "radial-gradient(rgba(84,72,56,.07) 1.2px,transparent 1.4px)", backgroundSize: "22px 22px" }}>
                    <div data-chat="1" style={{ alignSelf: "flex-start", maxWidth: "88%", padding: "9px 12px", borderRadius: "4px 12px 12px 12px", background: "#ffffff", color: "#111b21", fontSize: "14px", lineHeight: "1.4", boxShadow: "0 1px .5px rgba(11,20,26,.13)", opacity: "0", transform: "translateY(10px)", transition: "opacity .5s ease,transform .7s cubic-bezier(.34,1.56,.64,1)" }}>
                      Hola Carlos, soy del equipo de cobro de Reformas Atlas. La factura FAC-0381, de 8.750 €, venció el 1 de octubre. ¿Hay algo que la esté frenando?
                      <span style={{ display: "block", textAlign: "right", fontSize: "11px", color: "#667781", marginTop: "4px" }}>18:43</span>
                    </div>
                    <div data-chat="1" style={{ alignSelf: "flex-end", maxWidth: "88%", padding: "9px 12px", borderRadius: "12px 4px 12px 12px", background: "#d9fdd3", color: "#111b21", fontSize: "14px", lineHeight: "1.4", boxShadow: "0 1px .5px rgba(11,20,26,.13)", opacity: "0", transform: "translateY(10px)", transition: "opacity .5s ease,transform .7s cubic-bezier(.34,1.56,.64,1)" }}>
                      Perdona, se nos pasó con el cierre. El viernes os la pagamos.
                      <span style={{ display: "block", textAlign: "right", fontSize: "11px", color: "#667781", marginTop: "4px" }}>18:51</span>
                    </div>
                    <div data-chat="1" style={{ alignSelf: "flex-start", maxWidth: "88%", padding: "9px 12px", borderRadius: "4px 12px 12px 12px", background: "#ffffff", color: "#111b21", fontSize: "14px", lineHeight: "1.4", boxShadow: "0 1px .5px rgba(11,20,26,.13)", opacity: "0", transform: "translateY(10px)", transition: "opacity .5s ease,transform .7s cubic-bezier(.34,1.56,.64,1)" }}>
                      Perfecto, lo dejo apuntado para el viernes 17. Te dejo el enlace por si queréis adelantarlo:{" "}
                      <span style={{ color: "#027eb5", textDecoration: "underline" }}>pay.zeryx.io/l/8K2P</span>
                      <span style={{ display: "block", textAlign: "right", fontSize: "11px", color: "#667781", marginTop: "4px" }}>18:52</span>
                    </div>
                  </div>
                </div>
                <div style={{ position: "absolute", right: "0", bottom: "0", padding: "12px 16px", borderRadius: "14px", background: "#ffffff", border: "1px solid #e2e8f0", boxShadow: "0 25px 50px -12px rgba(0,0,0,.18)" }}>
                  <div style={{ fontSize: "12px", color: "#64748b" }}>Promesa de pago</div>
                  <div style={{ fontSize: "20px", fontWeight: "700", color: "#7c3aed", whiteSpace: "nowrap" }}>viernes 17 · 8.750 €</div>
                </div>
              </div>
            </div>
          </div>
          <div data-pile="1" style={{ position: v.pilePos, top: "104px" }}>
            <div data-pilein="1" style={{ transformOrigin: "50% 0", borderRadius: "16px", padding: "clamp(22px,4vw,48px)", background: "#ffffff", border: "1px solid #e2e8f0", boxShadow: "0 10px 15px -3px rgba(0,0,0,.08)", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,340px),1fr))", gap: "clamp(24px,4vw,56px)", alignItems: "center", minHeight: v.pileMinH }}>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span style={{ fontSize: "12px", fontWeight: "600", color: "#7c3aed", padding: "4px 10px", borderRadius: "999px", background: "#ede9fe" }}>02</span>
                  <span style={{ whiteSpace: "nowrap", fontSize: "11px", fontWeight: "600", textTransform: "uppercase", letterSpacing: ".05em", color: "#64748b" }}>Acuerda y cobra</span>
                </div>
                <h3 style={{ margin: "18px 0 0", fontSize: "clamp(28px,3.6vw,48px)", lineHeight: "1.05", letterSpacing: "-.03em", fontWeight: "700" }}>Una fecha acordada. Un enlace para pagar.</h3>
                <p style={{ margin: "16px 0 0", maxWidth: "460px", color: "#64748b", fontSize: "16px", lineHeight: "1.6" }}>
                  Cuando el cliente dice «el viernes», Zeryx lo apunta y vuelve el viernes. Cuando dice «ahora», le da un enlace para pagar con tarjeta o transferencia, y el cobro se casa con tu factura. Sin perseguir, sin perder el hilo.
                </p>
                <a className="hv20" href="/producto/enlace-de-pago/" style={{ marginTop: "24px", display: "inline-flex", gap: "8px", whiteSpace: "nowrap", fontSize: "14px", fontWeight: "600", color: "#7c3aed" }}>Ver cómo paga tu cliente →</a>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {v.estados.map((o, $index) => (
                  <div className="hv21" key={$index} style={{ display: "grid", gridTemplateColumns: "36px minmax(0,1fr) auto", gap: "12px", alignItems: "center", padding: "12px 14px", borderRadius: "12px", border: "1px solid #e2e8f0", background: "#ffffff", transition: "transform .3s,box-shadow .3s" }}>
                    <span style={{ width: "36px", height: "36px", borderRadius: "50%", background: "#ede9fe", color: "#7c3aed", fontSize: "12px", fontWeight: "600", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      {o.av}
                    </span>
                    <span style={{ minWidth: "0" }}>
                      <span style={{ display: "block", fontSize: "14px", fontWeight: "500", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                        {o.n}
                      </span>
                      <span style={{ display: "block", fontSize: "12px", color: "#64748b" }}>
                        {o.a}
                      </span>
                    </span>
                    <span style={{ fontSize: "12px", fontWeight: "500", padding: "4px 10px", borderRadius: "999px", whiteSpace: "nowrap", background: o.bg, color: o.c }}>
                      {o.s}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div data-pile="2" style={{ position: v.pilePos, top: "120px" }}>
            <div data-pilein="1" style={{ transformOrigin: "50% 0", borderRadius: "16px", padding: "clamp(22px,4vw,48px)", background: "#280465", color: "#ffffff", boxShadow: "0 25px 50px -12px rgba(40,4,101,.4)", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,340px),1fr))", gap: "clamp(24px,4vw,56px)", alignItems: "center", minHeight: v.pileMinH, overflow: "hidden", position: "relative" }}>
              <div style={{ position: "absolute", right: "-10%", top: "-30%", width: "60%", aspectRatio: "1", borderRadius: "50%", background: "#7c3aed", opacity: ".5", filter: "blur(90px)", pointerEvents: "none" }}></div>
              <div style={{ position: "relative" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span style={{ fontSize: "12px", fontWeight: "600", color: "#280465", padding: "4px 10px", borderRadius: "999px", background: "#d7c0ff" }}>03</span>
                  <span style={{ whiteSpace: "nowrap", fontSize: "11px", fontWeight: "600", textTransform: "uppercase", letterSpacing: ".05em", color: "#d7c0ff" }}>Te informa</span>
                </div>
                <h3 style={{ margin: "18px 0 0", fontSize: "clamp(28px,3.6vw,48px)", lineHeight: "1.05", letterSpacing: "-.03em", fontWeight: "700" }}>Cada mañana sabes dónde está tu dinero.</h3>
                <p style={{ margin: "16px 0 0", maxWidth: "460px", color: "#ede9fe", fontSize: "16px", lineHeight: "1.6" }}>
                  A las 8:00 recibes un resumen en tu WhatsApp: qué se ha cobrado, qué se ha prometido, quién no contesta y qué necesita tu decisión. Y en el panel, cada factura, cada mensaje y cada promesa, con fecha y hora.
                </p>
                <a className="hv22" href="/producto/garantia/" style={{ marginTop: "24px", display: "inline-flex", gap: "8px", whiteSpace: "nowrap", fontSize: "14px", fontWeight: "600", color: "#bc95ff" }}>Ver cómo lo medimos →</a>
              </div>
              <div style={{ position: "relative", display: "flex", flexDirection: "column", borderRadius: "20px", background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.12)", overflow: "hidden" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "14px 16px", borderBottom: "1px solid rgba(255,255,255,.1)" }}>
                  <span style={{ width: "34px", height: "34px", borderRadius: "50%", background: "#7c3aed", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "700" }}>Zx</span>
                  <span style={{ minWidth: "0" }}>
                    <span style={{ display: "block", fontSize: "14px", fontWeight: "600" }}>Zeryx</span>
                    <span style={{ display: "block", fontSize: "12px", color: "#d7c0ff" }}>Tu equipo de cobro · resumen de las 8:00</span>
                  </span>
                </div>
                <div style={{ padding: "16px", display: "flex", flexDirection: "column", gap: "10px" }}>
                  <div style={{ alignSelf: "flex-start", maxWidth: "92%", padding: "12px 14px", borderRadius: "4px 14px 14px 14px", background: "#ffffff", color: "#312741", fontSize: "14px", lineHeight: "1.5" }}>
                    <div style={{ fontWeight: "600" }}>Buenos días, Pedro. Ayer, martes 13:</div>
                    <div style={{ marginTop: "8px", display: "flex", gap: "8px" }}>
                      <span style={{ color: "#16a34a", fontWeight: "700" }}>✓</span>
                      <span>
                        3 facturas cobradas ·{" "}
                        <b>12.630 €</b>
                      </span>
                    </div>
                    <div style={{ marginTop: "4px", display: "flex", gap: "8px" }}>
                      <span style={{ color: "#7c3aed", fontWeight: "700" }}>◷</span>
                      <span>2 promesas nuevas para esta semana</span>
                    </div>
                    <div style={{ marginTop: "4px", display: "flex", gap: "8px" }}>
                      <span style={{ color: "#d97706", fontWeight: "700" }}>…</span>
                      <span>Dist. Pérez no contesta desde hace 6 días</span>
                    </div>
                    <div style={{ marginTop: "4px", display: "flex", gap: "8px" }}>
                      <span style={{ color: "#dc2626", fontWeight: "700" }}>!</span>
                      <span>
                        Mármoles Arce dice que falta un albarán.{" "}
                        <b>Necesita tu decisión.</b>
                      </span>
                    </div>
                    <div style={{ marginTop: "8px", color: "#64748b", fontSize: "13px" }}>En seguimiento: 14 facturas · 41.380 €</div>
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                    <span style={{ whiteSpace: "nowrap", fontSize: "12px", padding: "7px 12px", borderRadius: "999px", border: "1px solid rgba(255,255,255,.22)", color: "#ede9fe" }}>Ver el detalle</span>
                    <span style={{ whiteSpace: "nowrap", fontSize: "12px", padding: "7px 12px", borderRadius: "999px", border: "1px solid rgba(255,255,255,.22)", color: "#ede9fe" }}>Llamo yo a Mármoles</span>
                    <span style={{ whiteSpace: "nowrap", fontSize: "12px", padding: "7px 12px", borderRadius: "999px", border: "1px solid rgba(255,255,255,.22)", color: "#ede9fe" }}>Dale otra semana a Pérez</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div data-pile="3" style={{ position: v.pilePos, top: "136px" }}>
            <div data-pilein="1" style={{ transformOrigin: "50% 0", borderRadius: "16px", padding: "clamp(22px,4vw,48px)", background: "#f3ebff", border: "1px solid #e2e8f0", boxShadow: "0 10px 15px -3px rgba(0,0,0,.08)", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,340px),1fr))", gap: "clamp(24px,4vw,56px)", alignItems: "center", minHeight: v.pileMinH }}>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span style={{ fontSize: "12px", fontWeight: "600", color: "#7c3aed", padding: "4px 10px", borderRadius: "999px", background: "#ffffff" }}>04</span>
                  <span style={{ whiteSpace: "nowrap", fontSize: "11px", fontWeight: "600", textTransform: "uppercase", letterSpacing: ".05em", color: "#64748b" }}>Tú mandas</span>
                </div>
                <h3 style={{ margin: "18px 0 0", fontSize: "clamp(28px,3.6vw,48px)", lineHeight: "1.05", letterSpacing: "-.03em", fontWeight: "700" }}>Tú decides hasta dónde llega.</h3>
                <p style={{ margin: "16px 0 0", maxWidth: "460px", color: "#64748b", fontSize: "16px", lineHeight: "1.6" }}>
                  Qué clientes no se tocan, qué tono, cuántos mensajes y cuándo parar. Al principio apruebas cada mensaje; cuando confías, das permiso por cliente o por importe. Zeryx no negocia descuentos ni amenaza: pregunta, acuerda y cobra. Y todo lo que hace queda escrito.
                </p>
                <a className="hv23" href="/producto/reglas/" style={{ marginTop: "24px", display: "inline-flex", gap: "8px", whiteSpace: "nowrap", fontSize: "14px", fontWeight: "600", color: "#7c3aed" }}>Ver las reglas →</a>
              </div>
              <div onMouseMove={v.tilt} onMouseLeave={v.untilt} style={{ padding: "24px", borderRadius: "20px", background: "#ffffff", border: "1px solid #e2e8f0", boxShadow: "0 25px 50px -12px rgba(0,0,0,.18)", transition: "transform .5s cubic-bezier(.2,.8,.2,1)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <span style={{ width: "44px", height: "44px", borderRadius: "12px", background: "#ede9fe", color: "#7c3aed", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center" }}>RA</span>
                  <span style={{ minWidth: "0" }}>
                    <span style={{ display: "block", fontWeight: "600" }}>Límites de Reformas Atlas</span>
                    <span style={{ display: "block", fontSize: "12px", color: "#64748b" }}>Los cambias cuando quieras · cada cambio queda registrado</span>
                  </span>
                </div>
                <div style={{ marginTop: "20px", display: "flex", flexDirection: "column", gap: "8px" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "104px minmax(0,1fr)", gap: "12px", alignItems: "center", padding: "11px 12px", borderRadius: "12px", background: "#f8fafc" }}>
                    <span style={{ fontSize: "11px", fontWeight: "600", textTransform: "uppercase", letterSpacing: ".05em", color: "#7c3aed" }}>Nunca</span>
                    <span style={{ fontSize: "14px", color: "#0f172a" }}>Cuentas clave (3) · ni un mensaje</span>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "104px minmax(0,1fr)", gap: "12px", alignItems: "center", padding: "11px 12px", borderRadius: "12px", background: "#f8fafc" }}>
                    <span style={{ fontSize: "11px", fontWeight: "600", textTransform: "uppercase", letterSpacing: ".05em", color: "#7c3aed" }}>Aprobar antes</span>
                    <span style={{ fontSize: "14px", color: "#0f172a" }}>Facturas de más de 5.000 €</span>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "104px minmax(0,1fr)", gap: "12px", alignItems: "center", padding: "11px 12px", borderRadius: "12px", background: "#f8fafc" }}>
                    <span style={{ fontSize: "11px", fontWeight: "600", textTransform: "uppercase", letterSpacing: ".05em", color: "#7c3aed" }}>Como máximo</span>
                    <span style={{ fontSize: "14px", color: "#0f172a" }}>Un mensaje cada 3 días por factura</span>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "104px minmax(0,1fr)", gap: "12px", alignItems: "center", padding: "11px 12px", borderRadius: "12px", background: "#f8fafc" }}>
                    <span style={{ fontSize: "11px", fontWeight: "600", textTransform: "uppercase", letterSpacing: ".05em", color: "#7c3aed" }}>Pasar a Pedro</span>
                    <span style={{ fontSize: "14px", color: "#0f172a" }}>Disputa, descuento o más de 60 días</span>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "104px minmax(0,1fr)", gap: "12px", alignItems: "center", padding: "11px 12px", borderRadius: "12px", background: "#f8fafc" }}>
                    <span style={{ fontSize: "11px", fontWeight: "600", textTransform: "uppercase", letterSpacing: ".05em", color: "#7c3aed" }}>Tono</span>
                    <span style={{ fontSize: "14px", color: "#0f172a" }}>Cercano · formal con los grupos</span>
                  </div>
                </div>
                <div style={{ marginTop: "14px", display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  <span style={{ fontSize: "12px", fontWeight: "500", padding: "5px 10px", borderRadius: "999px", background: "#dcfce7", color: "#16a34a" }}>Pregunta</span>
                  <span style={{ fontSize: "12px", fontWeight: "500", padding: "5px 10px", borderRadius: "999px", background: "#ede9fe", color: "#7c3aed" }}>Acuerda</span>
                  <span style={{ fontSize: "12px", fontWeight: "500", padding: "5px 10px", borderRadius: "999px", background: "#ede9fe", color: "#7c3aed" }}>Cobra</span>
                  <span style={{ whiteSpace: "nowrap", fontSize: "12px", padding: "5px 10px", borderRadius: "999px", border: "1px solid #e2e8f0", color: "#475569" }}>Nunca amenaza</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
