export const LOGOS_A = [
  { t: 'WhatsApp', logos: ['whatsapp'] },
  { t: 'Correo electrónico', logos: ['gmail', 'outlook'] },
  { t: 'Enlace de pago', logos: ['zeryx'] },
  { t: 'Tarjeta', logos: ['visa', 'mastercard'] },
  { t: 'Transferencia', logos: ['sepa'] },
  { t: 'Apple Pay', logos: ['applepay'] },
  { t: 'Google Pay', logos: ['googlepay'] },
  { t: 'Recibo al instante', logos: ['zeryx'] }
]
export const LOGOS_B = [
  { t: 'Facturación de Zeryx', logos: ['zeryx'] },
  { t: 'Odoo', logos: ['odoo'] },
  { t: 'Excel / CSV', logos: ['excel'] },
  { t: 'Tu panel', logos: ['zeryx'] },
  { t: 'Portal de tu cliente', logos: ['zeryx'] },
  { t: 'Resumen diario', logos: ['whatsapp'] },
  { t: 'Grupo de control', logos: ['zeryx'] },
  { t: 'Registro completo', logos: ['zeryx'] }
]

const MANIFESTO_TEXT = 'Nadie monta una empresa para perseguir facturas. Zeryx habla con tus clientes, en tu nombre, hasta que pagan. Y tú vuelves a lo que de verdad importa.'
const MANIFESTO_HIGHLIGHT = new Set(['perseguir', 'habla', 'pagan.', 'importa.'])
export const MANIFESTO = MANIFESTO_TEXT.split(' ').map(t => ({ t, hl: MANIFESTO_HIGHLIGHT.has(t) ? 'true' : 'false' }))

export const HERO_CARDS = [
  { k: 'Promesa de pago · WhatsApp 18:51', tag: 'Apuntada', v: '8.750 €', s: 'Constructoras Norte: «el viernes os la pagamos»' },
  { k: 'Enlace de pago · abierto', tag: 'Cobrada', v: '+2.480,00 €', s: 'Factura 1042 · cobrada y conciliada en tu panel' },
  { k: 'Factura vencida · 11 días', tag: 'Hablando', v: '3.120 €', s: 'Grupo Lumen respondió en 14 minutos' },
  { k: 'Resumen de las 8:00 · WhatsApp', tag: 'Enviado', v: '14 facturas', s: '3 cobradas, 6 promesas, 5 en conversación' }
]

export const ESTADOS = [
  { av: 'GL', n: 'Grupo Lumen · FAC-0379', a: 'Promesa para el viernes 17', s: 'Promesa', bg: '#dcfce7', c: '#16a34a' },
  { av: 'CN', n: 'Constructoras Norte · FAC-0381', a: 'Respondió hace 14 minutos', s: 'Hablando', bg: '#fef3c7', c: '#d97706' },
  { av: 'DP', n: 'Dist. Pérez · FAC-0372', a: 'Abrió el enlace, aún sin pagar', s: 'Vuelve mañana', bg: '#ede9fe', c: '#7c3aed' },
  { av: 'TE', n: 'Talleres Ebro · FAC-0384', a: 'Pagada por el enlace · conciliada', s: 'Cobrada', bg: '#dcfce7', c: '#16a34a' },
  { av: 'MA', n: 'Mármoles Arce · FAC-0368', a: 'Disputa: dice que falta un albarán', s: 'Para ti', bg: '#fee2e2', c: '#dc2626' }
]

export const MEDIMOS = [
  { k: 'Control', t: 'La mitad para Zeryx, la otra para ti', d2: 'Repartimos tus facturas vencidas al azar. Zeryx lleva una mitad; la otra la sigues llevando como hasta ahora. Mismos clientes, mismo mes.', tags: ['Reparto al azar', 'Mismos clientes', '90 días'], d: 0 },
  { k: 'Marcador', t: 'Puntos de cobro sobre tu control', d2: 'A los 90 días comparamos qué parte del dinero vencido se ha cobrado en cada mitad y cuánto ha entrado por el enlace. Un número, no una opinión.', tags: ['Dinero cobrado', 'Por el enlace', 'Días hasta el cobro'], d: 120 },
  { k: 'Garantía', t: 'Diez puntos más, o te devolvemos las cuotas', d2: 'Si en tres meses Zeryx no cobra al menos diez puntos más que tu control, te devolvemos lo pagado. Sin discusión.', tags: ['3 meses', '+10 puntos', 'Devolución'], d: 240 }
]

export const RULE = [
  { k: 'Nunca', v: 'Escribe a los clientes que marques como intocables' },
  { k: 'Antes de enviar', v: 'Te pide aprobación por encima del importe que fijes' },
  { k: 'Como máximo', v: 'Un mensaje cada tres días por factura' },
  { k: 'Te avisa si', v: 'Hay disputa, piden descuento o pasan 60 días' }
]

export const CYCLE_STEPS = [
  { n: '01', k: 'Importa', t: 'Las facturas que haces con Zeryx, o las de tu Odoo.', d: 'Zeryx lee qué factura está vencida, de quién y desde cuándo. Tú marcas qué clientes no se tocan y qué importes quieres aprobar antes.', tags: ['Zeryx', 'Odoo', 'Clientes excluidos'] },
  { n: '02', k: 'Pregunta', t: 'Escribe en tu nombre y pregunta qué pasa.', d: 'Por WhatsApp, y por correo si no responde. Con tu tono y sin plantillas frías: «¿hay algo que esté frenando el pago?».', tags: ['WhatsApp', 'Correo', 'Tu tono'] },
  { n: '03', k: 'Acuerda', t: 'Escucha la respuesta y apunta la fecha.', d: 'Si el cliente dice «el viernes», Zeryx lo anota y vuelve el viernes. Si hay una disputa, te la pasa a ti con todo el contexto.', tags: ['Promesa de pago', 'Disputas', 'Para ti'] },
  { n: '04', k: 'Cobra', t: 'Un enlace para pagar. El cobro, a su factura.', d: 'Tarjeta o transferencia, sin registrarse. Cuando paga, la factura queda cobrada en tu panel y tu cliente recibe su recibo.', tags: ['Enlace de pago', 'Conciliación', 'Recibo'] },
  { n: '05', k: 'Te informa', t: 'Cada mañana, el resumen. Siempre, el registro.', d: 'Qué se cobró, qué se prometió, quién no contesta y qué necesita tu decisión. Cada mensaje queda escrito, con fecha y hora.', tags: ['Resumen diario', 'Registro', 'Marcador'] }
]

export const PSPS = ['Tarjeta', 'Transferencia', 'Apple Pay', 'Google Pay']
export const CHANNELS = ['WhatsApp', 'Correo electrónico', 'Portal de tu cliente']
export const RECON = [
  { ref: 'FAC-0384 · Talleres Ebro', amt: '1.940,00 €' },
  { ref: 'FAC-0381 · Constructoras Norte', amt: '8.750,00 €' },
  { ref: 'FAC-0388 · Clínica Sol', amt: '2.215,00 €' },
  { ref: 'FAC-0372 · Dist. Pérez', amt: '6.400,00 €' }
]

export const PLANS = [
  { name: 'Pyme', price: 149, from: false, audience: 'Para empresas que facturan a otras empresas y tienen unas cuantas vencidas al mes.', note: 'Todo incluido. Sin porcentaje.', features: ['Cobro por WhatsApp y correo, en tu nombre', 'Facturas vencidas sin límite', 'Enlace de pago y conciliación', 'Facturación de Zeryx, Odoo o Excel', 'Resumen diario y registro completo'] },
  { name: 'Mediana', price: 490, from: true, audience: 'Para empresas con un equipo de administración que ya reclama.', note: '+ 1,5 % de lo vencido que Zeryx cobra hablando. 490, 990 o 1.490 € según tamaño.', features: ['Todo lo de Pyme', 'Control: la mitad Zeryx, la mitad tú', 'Marcador propio a los 90 días', 'Garantía: +10 puntos o te devolvemos las cuotas', 'Reglas por cliente y por importe'] },
  { name: 'Grande', price: null, audience: 'Para grupos con varias sociedades o miles de facturas al mes.', note: 'Cuota fija más un porcentaje a la baja con el volumen.', features: ['Todo lo de Mediana', 'Varias sociedades y varios equipos', 'Implantación con Odoo incluida', 'Un responsable de tu cuenta'] }
]

export const PRICING_NOTE = 'Precios sin IVA. Sin permanencia: pagas mes a mes y paras cuando quieras. Y el mismo precio para todos: no hacemos excepciones.'

export const FAQS = [
  ['¿Zeryx escribe a mis clientes sin que yo lo vea?', 'Al principio, no: cada mensaje pasa por tu aprobación. Cuando confíes, le das permiso por cliente o por importe. Tú eliges el tono, los horarios y qué clientes no se tocan nunca.'],
  ['¿Cómo trata a mis clientes?', 'Como lo haría tu mejor administrativo: con educación, en tu nombre y sin amenazas. Pregunta si hay algo que frene el pago, escucha, acuerda una fecha y vuelve ese día. No negocia descuentos ni habla de abogados: si hay una disputa, te la pasa a ti con todo el contexto.'],
  ['¿Cuánto tarda en estar funcionando?', 'Un día. Si facturas con Zeryx, tus facturas ya están dentro; si usas Odoo, lo conectamos; si usas otro programa, subes tus facturas en un Excel. Marcas los clientes que no quieres que toquemos y Zeryx empieza con las vencidas esa misma tarde.'],
  ['¿Funciona con mi programa de facturación?', 'Con la facturación de Zeryx y con Odoo. Si usas otro programa, puedes subir tus facturas en un Excel. Y si quieres que nos conectemos con el tuyo, dínoslo: es lo primero que preguntamos.'],
  ['¿Dónde está mi dinero?', 'En tu cuenta, como siempre. Cuando tu cliente paga por el enlace, el dinero va de su banco a tu cuenta a través de la pasarela de pago; Zeryx no lo toca ni lo guarda. Lo que hace es casar ese pago con tu factura.'],
  ['¿Y si no cobra más que yo?', 'Con el plan Mediana lo mides tú: la mitad de tus facturas vencidas las lleva Zeryx y la otra mitad las sigues llevando como hasta ahora. A los tres meses comparamos. Si no cobramos al menos diez puntos más que tu control, te devolvemos las cuotas.'],
  ['¿Hay permanencia?', 'No. Pagas mes a mes y paras cuando quieras. Y el precio es el mismo para todos: no hacemos excepciones.']
]

export const AGENT_STEPS = [
  ['Zeryx lee tus facturas', 'Desde tu facturación de Zeryx, tu Odoo o un Excel, y ve cuáles han vencido.'],
  ['Habla con tu cliente', 'Le escribe por WhatsApp, o por correo, con un enlace para pagar.'],
  ['Tu cliente paga', 'Con tarjeta o transferencia, sin registrarse y sin comisión.'],
  ['Se concilia solo', 'Zeryx cruza el pago con su factura. Sin Excel.'],
  ['El dinero, en tu cuenta', 'Y te lo cuenta en el resumen de las 8:00. Tú no has tenido que hacer nada.']
]

export const AGENT_CAPTIONS = {
  0: ['1', 'Zeryx lee tus facturas pendientes de tu facturación, Odoo o Excel.'],
  2: ['2', 'Zeryx le escribe a Marta por WhatsApp, en tu nombre, con el enlace para pagar.'],
  3: ['3', 'Marta paga los 8.750 € con tarjeta desde el móvil, en un clic.'],
  4: ['5', 'El dinero entra en tu cuenta ya conciliado, y te lo cuenta a las 8:00.']
}

const IA_QUESTION = 'Analiza Zeryx (zeryx.io), el servicio español de cobro de facturas entre empresas que habla con los clientes por WhatsApp y correo, en nombre de la empresa, hasta que pagan. Responde en español con esta estructura:\n1. Qué es y qué problema resuelve, en dos frases.\n2. Cómo funciona.\n3. Para qué tipo de empresa tiene sentido y para cuál no.\n4. Ventajas frente a reclamar las facturas a mano o desde el programa de facturación.\n5. Veredicto final en una frase.\nSé objetivo y conciso.'

export const IA_LINKS = [
  ['ChatGPT', 'https://chatgpt.com/?q=', 'chatgpt'],
  ['Claude', 'https://claude.ai/new?q=', 'claude'],
  ['Perplexity', 'https://www.perplexity.ai/search?q=', 'perplexity'],
  ['Google', 'https://www.google.com/search?udm=50&q=', 'google'],
  ['Grok', 'https://grok.com/?q=', 'grok']
].map(([name, base, icon]) => ({ name, href: base + encodeURIComponent(IA_QUESTION), logo: '/ia/' + icon + '.png' }))

export const ROADMAP = [
  { when: 'Hoy', status: 'Disponible', t: 'Cobra por ti', d: 'Habla con tus clientes por WhatsApp y correo hasta que pagan, y te lo demuestra con números.' },
  { when: 'Siguiente', status: 'En el plan', t: 'Te adelanta el dinero', d: 'Cuando sepamos que una factura se va a pagar, podrás cobrarla ya, sin esperar al vencimiento.' },
  { when: 'Después', status: 'En el plan', t: 'Paga y ve tu dinero', d: 'Tus pagos a proveedores, con reglas y aprobaciones, y el saldo de todos tus bancos en un mismo sitio.' },
  { when: 'El destino', status: 'Hacia aquí vamos', t: 'El banco que trabaja', d: 'Un banco para las empresas que hablan español, que hace el trabajo por ti.' }
]
