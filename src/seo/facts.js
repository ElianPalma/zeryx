export const SUMMARY = 'Zeryx es un servicio español de cobro de facturas entre empresas. Habla con los clientes de la empresa por WhatsApp y correo, en su nombre, hasta que pagan: pregunta qué frena el pago, acuerda una fecha, vuelve ese día y envía un enlace para pagar sin registro ni comisión. Cada cobro se concilia con su factura y el dueño recibe un resumen diario por WhatsApp. Es, en sus palabras, tu departamento de cobro sin contratar a nadie.'

export const TAGLINE = 'Tú vendes. Zeryx cobra.'

export const AUDIENCE = 'Empresas en España que facturan a otras empresas y tienen facturas vencidas cada mes: desde pymes sin nadie dedicado al cobro hasta empresas medianas con un equipo de administración y grupos con varias sociedades.'

export const FEATURES = [
  'Cobro por WhatsApp y correo en nombre de la empresa y con su tono: pregunta qué frena el pago, escucha y acuerda una fecha. WhatsApp primero; correo si no responde o no lo tiene.',
  'Promesas de pago: cada fecha que da el cliente queda apuntada y Zeryx vuelve ese día si no ha pagado.',
  'Enlace de pago para el cliente: ve y descarga su factura y paga con tarjeta, transferencia, Apple Pay o Google Pay, sin registro y sin comisión; recibo al instante.',
  'Conciliación: los pagos por el enlace marcan la factura como cobrada solos; las transferencias, al conciliarlas en Odoo o marcarlas en Zeryx.',
  'Resumen diario a las 8:00 por WhatsApp: qué se cobró, qué se prometió, quién no contesta y qué necesita la decisión del dueño.',
  'Registro completo de cada mensaje, promesa y cobro, con fecha y hora, en un panel.',
  'Reglas: clientes intocables, aprobación previa por encima del importe que se fije, como máximo un mensaje cada tres días por factura y aviso al dueño si hay disputa, petición de descuento o más de 60 días.',
  'Nunca amenaza, no negocia descuentos ni habla de abogados: las disputas pasan al dueño con todo el contexto.',
  'Garantía con grupo de control: las facturas vencidas se reparten al azar entre Zeryx y el equipo de la empresa; si a los tres meses Zeryx no cobra al menos diez puntos más, devuelve las cuotas (plan Mediana).'
]

export const HOW_IT_WORKS = [
  'Importa: las facturas hechas con la facturación de Zeryx, las de Odoo o un Excel. La empresa marca qué clientes no se tocan y qué importes quiere aprobar antes.',
  'Pregunta: escribe en nombre de la empresa por WhatsApp, y por correo si no responde, preguntando si hay algo que frene el pago.',
  'Acuerda: escucha la respuesta y apunta la fecha prometida; si hay una disputa, la pasa al dueño.',
  'Cobra: envía un enlace para pagar con tarjeta o transferencia; al pagar, la factura queda cobrada y el cliente recibe su recibo.',
  'Te informa: cada mañana, un resumen por WhatsApp; siempre, el registro completo.'
]

export const INTEGRATIONS = {
  'Facturación': ['Facturación de Zeryx', 'Odoo', 'Excel / CSV'],
  'Canales con tus clientes': ['WhatsApp', 'Correo electrónico', 'Portal de tu cliente'],
  'Cómo paga tu cliente': ['Tarjeta', 'Transferencia', 'Apple Pay', 'Google Pay']
}

export const MONEY = 'Zeryx no es un banco ni guarda el dinero: el pago va del banco del cliente a la cuenta de la empresa a través de la pasarela de pago, y Zeryx lo casa con la factura.'

export const ACCESS = 'Zeryx arranca con pocas empresas en España. El acceso se pide por WhatsApp y contesta una persona. Sin permanencia: se paga mes a mes.'

export const PROOF = 'Con las primeras empresas (otoño de 2026, España, facturas entre empresas) Zeryx cobra la mitad de las facturas vencidas y la empresa la otra mitad durante noventa días. El resultado se publica en diciembre de 2026, salga como salga.'

export const ROADMAP = [
  'Hoy (disponible): cobra por ti, por WhatsApp y correo, y lo demuestra con números.',
  'Siguiente (en el plan): adelanto de facturas que se sabe que se van a pagar.',
  'Después (en el plan): pagos a proveedores con reglas y aprobaciones, y el saldo de todos los bancos en un sitio.',
  'Destino: un banco para las empresas que hablan español, que hace el trabajo por ellas.'
]
