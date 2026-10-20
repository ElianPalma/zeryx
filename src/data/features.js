import { LINKS } from '../config.js'

export const FEATURE_GROUPS = [
  { name: 'Cobrar', title: 'Tu departamento de cobro, completo desde el primer día.' },
  { name: 'Controlar', title: 'Tú decides. Zeryx lo deja todo escrito.' },
  { name: 'Conectar', title: 'Se conecta a lo que ya usas.' },
  { name: 'Hacia dónde vamos', title: 'Empezamos cobrando. Acabaremos siendo tu banco.' }
]

export const FEATURES = [
  {
    slug: 'cobro-por-whatsapp',
    name: 'Cobro por WhatsApp y correo',
    menuName: 'WhatsApp y correo',
    tagline: 'Habla con cada cliente hasta que paga',
    group: 'Cobrar',
    status: 'live',
    serviceType: 'Gestión de cobro de facturas entre empresas',
    metaTitle: 'Cobro de facturas por WhatsApp y correo, en tu nombre · Zeryx',
    metaDescription: 'Zeryx escribe a tus clientes por WhatsApp y correo en nombre de tu empresa, pregunta qué frena el pago, acuerda una fecha y vuelve ese día. Sin plantillas frías ni amenazas.',
    summary: 'Zeryx escribe a cada cliente en tu nombre, pregunta qué frena el pago y no lo suelta hasta que paga.',
    eyebrow: 'Habla · en tu nombre',
    h1: 'Habla con cada cliente hasta que paga',
    lead: 'Zeryx escribe por WhatsApp y correo en nombre de tu empresa, con tu tono. Pregunta si hay algo que frene el pago, escucha la respuesta, acuerda una fecha y vuelve ese día. Tú no persigues a nadie.',
    definition: {
      q: '¿Cómo cobra Zeryx una factura vencida?',
      a: 'Zeryx hace el trabajo de un buen administrativo de cobro. Cuando una factura vence, escribe al cliente por WhatsApp, y por correo si no responde o no tiene WhatsApp, en nombre de tu empresa. No manda un recordatorio y se olvida: pregunta qué pasa, escucha, acuerda una fecha de pago y vuelve ese día. Cada mensaje queda en tu panel.'
    },
    highlights: [
      'WhatsApp primero; correo si no responde o no lo tiene',
      'En nombre de tu empresa y con tu tono',
      'Pregunta, escucha y acuerda una fecha',
      'Sin plantillas frías, sin amenazas, sin descuentos'
    ],
    steps: [
      { t: 'Detecta la factura vencida', d: 'Zeryx sabe qué factura está vencida, de quién y desde cuándo, a partir de tu facturación de Zeryx, tu Odoo o tu Excel.' },
      { t: 'Escribe en tu nombre', d: 'Por WhatsApp, y por correo si no responde. Con tu tono: «¿hay algo que esté frenando el pago?».' },
      { t: 'Escucha la respuesta', d: 'Si el cliente dice «el viernes», lo apunta. Si dice «ahora», le da un enlace para pagar.' },
      { t: 'Vuelve el día acordado', d: 'Si la promesa no se cumple, vuelve a escribir ese día. Si hay una disputa, te la pasa con todo el contexto.' }
    ],
    capabilities: [
      { t: 'Conversación, no recordatorios', d: 'Zeryx pregunta y responde como lo haría una persona de tu equipo. Si el cliente pide una factura, un dato o una fecha, lo atiende.' },
      { t: 'Tu tono', d: 'Cercano con unos clientes y más formal con los grupos. Tú decides cómo habla Zeryx en tu nombre.' },
      { t: 'WhatsApp y correo', d: 'WhatsApp primero, porque es donde se contesta. Correo si el cliente no responde o no lo tiene.' },
      { t: 'Promesas de pago', d: 'Cada fecha que da un cliente queda apuntada, y Zeryx vuelve ese día si no ha pagado.' },
      { t: 'Disputas, para ti', d: 'Si el cliente dice que falta un albarán o pide un descuento, Zeryx no negocia: te lo pasa con toda la conversación.' },
      { t: 'Todo queda escrito', d: 'Cada mensaje enviado y recibido, con fecha y hora, en tu panel.' }
    ],
    chips: { label: 'Lo que nunca hace', title: 'Pregunta, acuerda y cobra. Nada más.', items: ['No amenaza', 'No negocia descuentos', 'No habla de abogados', 'No escribe a tus clientes intocables', 'No pasa de un mensaje cada 3 días'] },
    audience: [
      { t: 'Empresas que facturan a empresas', d: 'Con clientes que pagan a 30, 60 o 90 días y unas cuantas facturas vencidas cada mes.' },
      { t: 'Equipos de administración', d: 'Que hoy reclaman a mano, por teléfono y correo, y quieren dedicar ese tiempo a otra cosa.' },
      { t: 'Dueños de pyme', d: 'Que no quieren contratar a nadie para cobrar ni tensar la relación con sus clientes.' }
    ],
    faqs: [
      ['¿Zeryx escribe a mis clientes sin que yo lo vea?', 'Al principio, no: cada mensaje pasa por tu aprobación. Cuando confíes, le das permiso por cliente o por importe.'],
      ['¿Cómo trata a mis clientes?', 'Como lo haría tu mejor administrativo: con educación, en tu nombre y sin amenazas. Pregunta si hay algo que frene el pago, escucha, acuerda una fecha y vuelve ese día.'],
      ['¿Qué pasa si el cliente no tiene WhatsApp?', 'Zeryx le escribe por correo. También pasa al correo si no responde por WhatsApp.'],
      ['¿Y si el cliente dice que la factura está mal?', 'Zeryx no discute ni negocia. Te pasa la disputa a ti, con toda la conversación, para que decidas.']
    ],
    related: ['promesas-de-pago', 'reglas', 'resumen-diario']
  },
  {
    slug: 'promesas-de-pago',
    name: 'Promesas de pago',
    tagline: 'Una fecha acordada, y vuelve ese día',
    group: 'Cobrar',
    status: 'live',
    serviceType: 'Seguimiento de promesas de pago',
    metaTitle: 'Promesas de pago: cada fecha acordada, apuntada y cumplida · Zeryx',
    metaDescription: 'Cuando tu cliente dice «el viernes», Zeryx lo apunta y vuelve el viernes. Todas las promesas de pago de tus clientes, con fecha e importe, en un solo panel.',
    summary: 'Cuando el cliente dice «el viernes», Zeryx lo apunta y vuelve el viernes.',
    eyebrow: 'Acuerda · y no pierde el hilo',
    h1: 'Una fecha acordada. Y Zeryx vuelve ese día.',
    lead: 'Cuando tu cliente dice «el viernes», Zeryx lo apunta y vuelve el viernes. Cuando dice «ahora», le da un enlace para pagar. Sin perseguir y sin perder el hilo.',
    definition: {
      q: '¿Qué es una promesa de pago en Zeryx?',
      a: 'Es la fecha que tu cliente se compromete a pagar durante la conversación con Zeryx. Zeryx la apunta con su importe y su factura, te la enseña en el panel y en el resumen diario, y si llega el día y no ha pagado, vuelve a escribirle.'
    },
    highlights: [
      'Cada promesa con fecha, importe y factura',
      'Zeryx vuelve el día acordado si no ha pagado',
      'Ves las que vencen esta semana',
      'Enlace de pago por si quiere adelantarlo'
    ],
    steps: [
      { t: 'El cliente da una fecha', d: '«Perdona, se nos pasó con el cierre. El viernes os la pagamos.»' },
      { t: 'Zeryx la apunta', d: 'La promesa queda registrada con su factura e importe, y se lo confirma al cliente con el enlace por si quiere adelantarlo.' },
      { t: 'Te lo cuenta', d: 'Las promesas nuevas y las que vencen esta semana salen en tu resumen de las 8:00.' },
      { t: 'Vuelve ese día', d: 'Si llega el día y no ha pagado, Zeryx le vuelve a escribir.' }
    ],
    capabilities: [
      { t: 'Panel de promesas', d: 'Todas las promesas abiertas, con su fecha, su importe y el cliente que la hizo.' },
      { t: 'Recordatorio el día acordado', d: 'Zeryx no deja pasar la fecha: vuelve ese mismo día si el pago no ha llegado.' },
      { t: 'Enlace para adelantarlo', d: 'Con cada promesa, Zeryx deja el enlace de pago por si el cliente prefiere pagar antes.' },
      { t: 'En tu resumen diario', d: 'Qué promesas son nuevas y cuáles vencen esta semana, cada mañana en tu WhatsApp.' }
    ],
    chips: { label: 'Estados de cada factura', title: 'Sabes en qué punto está cada una.', items: ['Hablando', 'Promesa', 'Vuelve mañana', 'Cobrada', 'Para ti'] },
    audience: [
      { t: 'Empresas con clientes que pagan tarde', d: 'Que pagan, pero cuando se acuerdan, y necesitan a alguien que se lo recuerde el día justo.' },
      { t: 'Quien lleva las promesas en la cabeza', d: 'O en un Excel, y se le escapa alguna.' }
    ],
    faqs: [
      ['¿Qué pasa si el cliente no cumple la promesa?', 'Zeryx le vuelve a escribir el día acordado. Si sigue sin pagar, sigue la conversación según tus reglas, y si hace falta te lo pasa.'],
      ['¿Dónde veo las promesas?', 'En tu panel, con fecha e importe, y en el resumen que recibes cada mañana por WhatsApp.']
    ],
    related: ['cobro-por-whatsapp', 'enlace-de-pago', 'resumen-diario']
  },
  {
    slug: 'enlace-de-pago',
    name: 'Enlace de pago',
    tagline: 'Tu cliente paga en un clic y sin coste',
    group: 'Cobrar',
    status: 'live',
    serviceType: 'Enlace de pago de facturas',
    metaTitle: 'Enlace de pago para facturas: sin registro y sin comisión para tu cliente · Zeryx',
    metaDescription: 'Tu cliente abre el enlace, ve la factura y paga con tarjeta, transferencia, Apple Pay o Google Pay. Sin registrarse y sin comisión. El dinero va de su banco a tu cuenta.',
    summary: 'Tu cliente abre el enlace, ve la factura y paga. Sin registrarse y sin pagar nada de más.',
    eyebrow: 'Cobra · un enlace, sin registro',
    h1: 'Un enlace. Sin registrarse. Pagar le cuesta 0 €.',
    lead: 'Tu cliente abre el enlace, ve la factura y paga con tarjeta o transferencia. El dinero va de su banco a tu cuenta; Zeryx solo lo casa con la factura y le envía su recibo.',
    definition: {
      q: '¿Cómo paga tu cliente con Zeryx?',
      a: 'Con un enlace que Zeryx le envía en la conversación. Al abrirlo ve la factura, la puede descargar y la paga con tarjeta, transferencia, Apple Pay o Google Pay, sin crear ninguna cuenta. Pagar no le cuesta nada. Cuando paga, la factura queda cobrada en tu panel y él recibe su recibo al momento.'
    },
    highlights: [
      'Sin registro ni app',
      'Sin comisión por pagar',
      'Ve y descarga su factura',
      'Recibo al instante'
    ],
    steps: [
      { t: 'Recibe el enlace', d: 'En la conversación de WhatsApp o en el correo, por ejemplo pay.zeryx.io/l/8K2P.' },
      { t: 'Ve su factura', d: 'Con el importe, su número y tu empresa. La puede descargar.' },
      { t: 'Paga', d: 'Con tarjeta, transferencia, Apple Pay o Google Pay, sin registrarse.' },
      { t: 'Queda conciliado', d: 'La factura pasa a cobrada en tu panel y tu cliente recibe su recibo.' }
    ],
    capabilities: [
      { t: 'Gratis para tu cliente', d: 'Pagar por el enlace no le cuesta nada a quien te debe dinero.' },
      { t: 'Sin registro', d: 'Ni cuentas ni apps. Abre el enlace y paga.' },
      { t: 'Factura descargable', d: 'Tu cliente ve y descarga la factura que está pagando.' },
      { t: 'Recibo al instante', d: 'En cuanto paga, recibe su justificante.' },
      { t: 'Tu dinero, en tu cuenta', d: 'El pago va de su banco a tu cuenta a través de la pasarela de pago. Zeryx no lo toca ni lo guarda.' },
      { t: 'Conciliado solo', d: 'El cobro se casa con su factura sin que tengas que hacer nada.' }
    ],
    chips: { label: 'Cómo puede pagar', title: 'Como le resulte más cómodo.', items: ['Tarjeta', 'Transferencia', 'Apple Pay', 'Google Pay'] },
    audience: [
      { t: 'Clientes que quieren pagar ya', d: 'Y solo necesitan que se lo pongas fácil.' },
      { t: 'Empresas que cobran por transferencia', d: 'Y quieren dejar de buscar a quién corresponde cada ingreso.' }
    ],
    faqs: [
      ['¿Le cuesta algo a mi cliente pagar por el enlace?', 'No. Pagar nunca le cuesta nada: sin registro, sin app y sin comisión.'],
      ['¿Dónde va el dinero?', 'A tu cuenta. El pago va del banco de tu cliente a tu cuenta a través de la pasarela de pago; Zeryx no lo toca ni lo guarda.'],
      ['¿Qué ve mi cliente al abrir el enlace?', 'Tu empresa, la factura con su importe, un botón para pagar y la opción de descargarla.']
    ],
    related: ['conciliacion', 'promesas-de-pago', 'cobro-por-whatsapp']
  },
  {
    slug: 'conciliacion',
    name: 'Conciliación',
    tagline: 'Cada cobro vuelve a su factura',
    group: 'Cobrar',
    status: 'live',
    serviceType: 'Conciliación de cobros con facturas',
    metaTitle: 'Conciliación de cobros: cada pago vuelve a su factura · Zeryx',
    metaDescription: 'Cuando tu cliente paga por el enlace, la factura se marca como cobrada sola. Las transferencias, en cuanto las concilias en Odoo o las marcas en Zeryx.',
    summary: 'Cuando tu cliente paga por el enlace, la factura se marca como cobrada sola.',
    eyebrow: 'Concilia · sin Excel',
    h1: 'Cada cobro vuelve a su factura',
    lead: 'Cuando tu cliente paga por el enlace, la factura se marca como cobrada sola. Las transferencias, en cuanto las concilias en Odoo o las marcas en Zeryx. Y Zeryx deja de reclamar lo que ya está pagado.',
    definition: {
      q: '¿Qué concilia Zeryx?',
      a: 'Zeryx cruza cada cobro con la factura que paga. Los pagos que entran por el enlace se concilian solos y tu cliente recibe su recibo. Las transferencias quedan conciliadas en cuanto las concilias en Odoo o las marcas en Zeryx. Así Zeryx nunca reclama una factura que ya está pagada.'
    },
    highlights: [
      'Pagos por el enlace: conciliados solos',
      'Transferencias: desde Odoo o marcándolas en Zeryx',
      'Recibo al cliente al momento',
      'Nunca reclama lo que ya está pagado'
    ],
    steps: [
      { t: 'Entra un pago', d: 'Por el enlace, o una transferencia a tu cuenta.' },
      { t: 'Se casa con su factura', d: 'Los pagos del enlace, al instante. Las transferencias, al conciliarlas en Odoo o marcarlas en Zeryx.' },
      { t: 'La factura queda cobrada', d: 'En tu panel, y Zeryx deja de escribir a ese cliente por esa factura.' }
    ],
    capabilities: [
      { t: 'Automática por el enlace', d: 'Lo que se paga por el enlace llega ya conciliado.' },
      { t: 'Con Odoo', d: 'Si concilias tus transferencias en Odoo, Zeryx lo lee y da la factura por cobrada.' },
      { t: 'En tu panel', d: 'Puedes marcar una transferencia como cobrada en Zeryx en un clic.' },
      { t: 'Recibo para tu cliente', d: 'Cada pago conciliado genera su recibo al momento.' }
    ],
    chips: { label: 'De dónde se concilia', title: 'Cada cobro, en su sitio.', items: ['Enlace de pago', 'Odoo', 'Tu panel', 'Recibo al cliente'] },
    audience: [
      { t: 'Administraciones que cruzan cobros a mano', d: 'Y quieren dejar de buscar qué factura paga cada ingreso.' },
      { t: 'Empresas con Odoo', d: 'Que ya concilian allí y quieren que el cobro lo sepa al momento.' }
    ],
    faqs: [
      ['¿Qué se concilia automáticamente?', 'Los pagos que entran por el enlace de Zeryx. Las transferencias quedan conciliadas cuando las concilias en Odoo o las marcas en Zeryx.'],
      ['¿Zeryx puede seguir reclamando una factura ya pagada?', 'No. En cuanto el cobro está conciliado, la factura queda cobrada y Zeryx deja de escribir por ella.']
    ],
    related: ['enlace-de-pago', 'integraciones', 'resumen-diario']
  },
  {
    slug: 'resumen-diario',
    name: 'Resumen diario',
    tagline: 'A las 8:00, dónde está tu dinero',
    group: 'Controlar',
    status: 'live',
    serviceType: 'Informe diario de cobros',
    metaTitle: 'Resumen diario de cobros en tu WhatsApp a las 8:00 · Zeryx',
    metaDescription: 'Cada mañana a las 8:00, en tu WhatsApp: qué se ha cobrado, qué se ha prometido, quién no contesta y qué necesita tu decisión. Y en el panel, cada mensaje con fecha y hora.',
    summary: 'Cada mañana a las 8:00, en tu WhatsApp: qué se cobró, qué se prometió y qué necesita tu decisión.',
    eyebrow: 'Te informa · cada mañana',
    h1: 'Cada mañana sabes dónde está tu dinero',
    lead: 'A las 8:00 recibes un resumen en tu WhatsApp: qué se ha cobrado, qué se ha prometido, quién no contesta y qué necesita tu decisión. Y en el panel, cada factura, cada mensaje y cada promesa, con fecha y hora.',
    definition: {
      q: '¿Qué te cuenta el resumen diario?',
      a: 'Es un mensaje que Zeryx te envía cada mañana a las 8:00 por WhatsApp con lo que pasó ayer: facturas cobradas e importe, promesas nuevas, clientes que no contestan y casos que necesitan tu decisión. Puedes responder ahí mismo, por ejemplo «llamo yo» o «dale otra semana».'
    },
    highlights: [
      'Facturas cobradas e importe',
      'Promesas nuevas y las que vencen',
      'Quién no contesta',
      'Lo que necesita tu decisión'
    ],
    steps: [
      { t: 'Zeryx trabaja durante el día', d: 'Escribe, escucha, apunta promesas y concilia cobros.' },
      { t: 'A las 8:00, el resumen', d: 'En tu WhatsApp, con lo cobrado, lo prometido y lo pendiente.' },
      { t: 'Decides en un mensaje', d: '«Llamo yo a Mármoles», «dale otra semana a Pérez» o «ver el detalle».' }
    ],
    capabilities: [
      { t: 'Resumen en WhatsApp', d: 'Sin abrir ninguna app: lo lees mientras desayunas.' },
      { t: 'Lo que necesita tu decisión', d: 'Disputas, descuentos o facturas que llevan demasiado tiempo, marcadas para ti.' },
      { t: 'Registro completo', d: 'En el panel, cada mensaje enviado y recibido, cada promesa y cada cobro, con fecha y hora.' },
      { t: 'Panel de cobro', d: 'Pendiente de cobro, vencido, cobrado este mes y promesas abiertas, de un vistazo.' }
    ],
    chips: { label: 'En el panel', title: 'Todo lo que pasa, escrito.', items: ['Facturas', 'Conversaciones', 'Promesas', 'Registro', 'Resumen'] },
    audience: [
      { t: 'Dueños y gerentes', d: 'Que quieren saber cómo va el cobro sin pedir un informe.' },
      { t: 'Responsables de administración', d: 'Que necesitan saber cada mañana qué casos les tocan a ellos.' }
    ],
    faqs: [
      ['¿A qué hora llega el resumen?', 'Cada mañana a las 8:00, en tu WhatsApp.'],
      ['¿Puedo ver el detalle de cada conversación?', 'Sí. En el panel tienes cada mensaje, cada promesa y cada cobro, con fecha y hora.']
    ],
    related: ['reglas', 'cobro-por-whatsapp', 'garantia']
  },
  {
    slug: 'reglas',
    name: 'Tus reglas',
    tagline: 'Tú decides hasta dónde llega',
    group: 'Controlar',
    status: 'live',
    serviceType: 'Control y límites del cobro automatizado',
    metaTitle: 'Tú pones las reglas del cobro: clientes, importes y tono · Zeryx',
    metaDescription: 'Qué clientes no se tocan, qué tono, cuántos mensajes y cuándo parar. Al principio apruebas cada mensaje; cuando confías, das permiso por cliente o por importe.',
    summary: 'Qué clientes no se tocan, qué tono, cuántos mensajes y cuándo parar. Lo decides tú.',
    eyebrow: 'Tú mandas · límites claros',
    h1: 'Tú decides hasta dónde llega',
    lead: 'Qué clientes no se tocan, qué tono, cuántos mensajes y cuándo parar. Al principio apruebas cada mensaje; cuando confías, das permiso por cliente o por importe. Y todo lo que hace queda escrito.',
    definition: {
      q: '¿Qué puedes controlar?',
      a: 'Todo lo que Zeryx hace en tu nombre. Marcas los clientes intocables, fijas a partir de qué importe quieres aprobar cada mensaje, el tono con cada tipo de cliente, el ritmo de los mensajes y cuándo te pasa el caso. Cada cambio queda registrado.'
    },
    highlights: [
      'Clientes intocables: ni un mensaje',
      'Aprobación previa por encima del importe que fijes',
      'Como máximo un mensaje cada tres días por factura',
      'Te avisa si hay disputa, piden descuento o pasan 60 días'
    ],
    steps: [
      { t: 'Empiezas aprobándolo todo', d: 'Cada mensaje pasa por ti antes de salir.' },
      { t: 'Das permiso poco a poco', d: 'Por cliente o por importe, cuando confíes.' },
      { t: 'Zeryx respeta tus límites', d: 'Y te pasa lo que no le toca decidir.' }
    ],
    capabilities: [
      { t: 'Clientes intocables', d: 'Tus cuentas clave no reciben ni un mensaje de Zeryx.' },
      { t: 'Aprobación por importe', d: 'Por encima del importe que fijes, cada mensaje espera tu visto bueno.' },
      { t: 'Ritmo de mensajes', d: 'Como máximo un mensaje cada tres días por factura.' },
      { t: 'Cuándo te lo pasa', d: 'Si hay disputa, si piden un descuento o si la factura pasa de 60 días.' },
      { t: 'Tono por cliente', d: 'Cercano con unos, formal con los grupos.' },
      { t: 'Cambios registrados', d: 'Cambias los límites cuando quieras y cada cambio queda escrito.' }
    ],
    chips: { label: 'Lo que Zeryx no hace nunca', title: 'Pregunta, acuerda y cobra.', items: ['Amenazar', 'Negociar descuentos', 'Hablar de abogados', 'Escribir a tus intocables'] },
    audience: [
      { t: 'Empresas con clientes clave', d: 'Que no quieren que nadie les escriba sin su permiso.' },
      { t: 'Quien quiere empezar con cuidado', d: 'Aprobando cada mensaje y soltando poco a poco.' }
    ],
    faqs: [
      ['¿Puedo aprobar cada mensaje antes de que salga?', 'Sí. Es como empieza todo el mundo. Cuando confíes, das permiso por cliente o por importe.'],
      ['¿Puedo excluir clientes?', 'Sí. Los marcas como intocables y Zeryx no les escribe nunca.'],
      ['¿Qué pasa si un cliente pide un descuento?', 'Zeryx no negocia. Te pasa la conversación para que decidas tú.']
    ],
    related: ['resumen-diario', 'cobro-por-whatsapp', 'garantia']
  },
  {
    slug: 'garantia',
    name: 'Garantía',
    tagline: '+10 puntos sobre tu control, o te devolvemos las cuotas',
    group: 'Controlar',
    status: 'live',
    serviceType: 'Garantía de resultado en el cobro de facturas',
    metaTitle: 'Garantía de resultado: +10 puntos sobre tu control o te devolvemos las cuotas · Zeryx',
    metaDescription: 'Repartimos tus facturas vencidas al azar: Zeryx lleva una mitad y tú la otra. A los 90 días comparamos. Si Zeryx no cobra al menos diez puntos más, te devolvemos las cuotas.',
    summary: 'La mitad para Zeryx, la mitad para ti. Si no cobra diez puntos más, te devolvemos las cuotas.',
    eyebrow: 'Garantía · lo medimos',
    h1: 'No te pedimos que nos creas. Lo medimos.',
    lead: 'Repartimos tus facturas vencidas al azar: Zeryx lleva una mitad y tú sigues con la otra. A los 90 días comparamos. Si Zeryx no cobra al menos diez puntos más que tu control, te devolvemos lo pagado.',
    definition: {
      q: '¿Cómo funciona la garantía?',
      a: 'Con un grupo de control. Repartimos tus facturas vencidas al azar en dos mitades: una la lleva Zeryx y la otra la sigues llevando como hasta ahora, con los mismos clientes y en el mismo mes. A los 90 días comparamos qué parte del dinero vencido se ha cobrado en cada mitad. Si Zeryx no cobra al menos diez puntos más, te devolvemos las cuotas. Está incluida en el plan Mediana.'
    },
    highlights: [
      'Reparto al azar, mismos clientes, mismo mes',
      'Comparación a los 90 días',
      '+10 puntos o devolución de las cuotas',
      'Incluida en el plan Mediana'
    ],
    steps: [
      { t: 'Control', d: 'Repartimos tus facturas vencidas al azar. Zeryx lleva una mitad; la otra la sigues llevando tú.' },
      { t: 'Marcador', d: 'A los 90 días comparamos el dinero cobrado en cada mitad, cuánto entró por el enlace y los días hasta el cobro.' },
      { t: 'Garantía', d: 'Si Zeryx no cobra al menos diez puntos más que tu control, te devolvemos lo pagado. Sin discusión.' }
    ],
    capabilities: [
      { t: 'Grupo de control', d: 'La única forma honesta de saber si Zeryx cobra más: comparar con lo que habrías cobrado tú.' },
      { t: 'Marcador propio', d: 'A los 90 días tienes tu número: puntos de cobro sobre tu control.' },
      { t: 'Devolución', d: 'Si no llega a +10 puntos en tres meses, te devolvemos las cuotas.' },
      { t: 'Marcador público', d: 'Con los datos de las primeras empresas publicaremos el resultado en diciembre de 2026, salga como salga.' }
    ],
    chips: { label: 'Qué se mide', title: 'Un número, no una opinión.', items: ['Dinero cobrado', 'Dinero entrado por el enlace', 'Días hasta el cobro', 'Facturas medidas'] },
    audience: [
      { t: 'Empresas con equipo de administración', d: 'Que ya reclaman y quieren saber si Zeryx lo hace mejor.' },
      { t: 'Quien necesita números para decidir', d: 'Y prefiere medirlo antes que creérselo.' }
    ],
    faqs: [
      ['¿Y si Zeryx no cobra más que yo?', 'Con el plan Mediana lo mides tú: la mitad de tus facturas vencidas las lleva Zeryx y la otra mitad tú. A los tres meses comparamos. Si no cobramos al menos diez puntos más que tu control, te devolvemos las cuotas.'],
      ['¿Cómo se reparten las facturas?', 'Al azar, para que las dos mitades tengan los mismos clientes y el mismo tipo de facturas en el mismo mes.'],
      ['¿Cuándo publicáis el marcador?', 'En diciembre de 2026, con los datos de las primeras empresas. Hasta entonces no damos cifras.']
    ],
    related: ['resumen-diario', 'reglas', 'cobro-por-whatsapp']
  },
  {
    slug: 'integraciones',
    name: 'Integraciones',
    tagline: 'Facturación de Zeryx, Odoo y Excel',
    group: 'Conectar',
    status: 'live',
    serviceType: 'Integración con programas de facturación',
    metaTitle: 'Integraciones: facturación de Zeryx, Odoo y Excel/CSV · Zeryx',
    metaDescription: 'Si facturas con Zeryx, tus facturas ya están dentro. Si usas Odoo, Zeryx lee cada día tus facturas, vencimientos y cobros. Si usas otro programa, subes un Excel.',
    summary: 'Facturación de Zeryx, Odoo o un Excel. En marcha en un día.',
    eyebrow: 'Conecta · en un día',
    h1: 'Se conecta a lo que ya usas',
    lead: 'Si facturas con Zeryx, tus facturas ya están dentro. Si usas Odoo, Zeryx lee cada día tus facturas, vencimientos y cobros. Si usas otro programa, subes tus facturas en un Excel. Y empiezas a cobrar ese mismo día.',
    definition: {
      q: '¿Con qué programas funciona Zeryx?',
      a: 'Con la facturación de Zeryx, con Odoo y con cualquier programa del que puedas sacar un Excel o un CSV. Venimos de AIT, partner de Odoo, así que la conexión con Odoo está hecha para leer cada día tus facturas, vencimientos y cobros.'
    },
    highlights: [
      'Facturación de Zeryx: tus facturas ya están dentro',
      'Odoo: lectura diaria de facturas, vencimientos y cobros',
      'Excel / CSV para cualquier otro programa',
      'En marcha en un día'
    ],
    steps: [
      { t: 'Conecta tus facturas', d: 'Zeryx, Odoo o un Excel.' },
      { t: 'Marca tus límites', d: 'Clientes que no se tocan e importes que quieres aprobar.' },
      { t: 'Empieza a cobrar', d: 'Zeryx empieza con las vencidas esa misma tarde.' }
    ],
    capabilities: [
      { t: 'Facturación de Zeryx', d: 'Si ya facturas con Zeryx, no hay nada que conectar.' },
      { t: 'Odoo', d: 'Lectura diaria de facturas, vencimientos y cobros. Implantación incluida en el plan Grande.' },
      { t: 'Excel / CSV', d: 'Para cualquier otro programa: subes tus facturas y listo.' },
      { t: 'WhatsApp y correo', d: 'Los canales por los que Zeryx habla con tus clientes.' },
      { t: 'Portal de tu cliente', d: 'Donde ve y descarga su factura y paga por el enlace.' },
      { t: 'Tu programa', d: 'Si quieres que nos conectemos con el tuyo, dínoslo: es lo primero que preguntamos.' }
    ],
    chips: { label: 'Conecta con', title: 'Lo que ya usas, conectado.', items: ['Facturación de Zeryx', 'Odoo', 'Excel / CSV', 'WhatsApp', 'Correo', 'Portal de tu cliente'] },
    audience: [
      { t: 'Empresas con Odoo', d: 'Que quieren cobrar sin cambiar de programa.' },
      { t: 'Empresas con otro programa', d: 'Que pueden exportar sus facturas a un Excel.' }
    ],
    faqs: [
      ['¿Funciona con mi programa de facturación?', 'Con la facturación de Zeryx y con Odoo. Si usas otro programa, puedes subir tus facturas en un Excel. Y si quieres que nos conectemos con el tuyo, dínoslo.'],
      ['¿Cuánto tarda en estar funcionando?', 'Un día. Marcas los clientes que no quieres que toquemos y Zeryx empieza con las vencidas esa misma tarde.']
    ],
    related: ['conciliacion', 'cobro-por-whatsapp', 'enlace-de-pago']
  },
  {
    slug: 'adelanto-de-facturas',
    name: 'Adelanto de facturas',
    tagline: 'Cobra hoy lo que vence mañana',
    group: 'Hacia dónde vamos',
    status: 'soon',
    serviceType: 'Anticipo de facturas',
    metaTitle: 'Adelanto de facturas: cobra sin esperar al vencimiento (en el plan) · Zeryx',
    metaDescription: 'Cuando sepamos que una factura se va a pagar, podrás cobrarla ya, sin esperar al vencimiento. Es el siguiente paso de Zeryx; llegará cuando el cobro funcione.',
    summary: 'En el plan: cobrar ya las facturas que sabemos que se van a pagar.',
    eyebrow: 'Siguiente · te adelanta el dinero',
    h1: 'Cobra ya lo que sabes que vas a cobrar',
    lead: 'Cuando sepamos que una factura se va a pagar, podrás cobrarla ya, sin esperar al vencimiento. Es el siguiente paso de Zeryx, y llegará cuando el anterior funcione, no antes.',
    definition: {
      q: '¿Qué será el adelanto de facturas?',
      a: 'Será la posibilidad de cobrar una factura antes de su vencimiento cuando Zeryx sepa, por cómo paga ese cliente, que se va a pagar. Hoy no está disponible: Zeryx solo cobra por ti.'
    },
    steps: [
      { t: 'Zeryx conoce cómo paga cada cliente', d: 'Gracias a las conversaciones, las promesas y los cobros.' },
      { t: 'Sabe qué facturas se van a pagar', d: 'Y cuándo.' },
      { t: 'Te ofrece cobrarlas ya', d: 'Sin esperar al vencimiento.' }
    ],
    capabilities: [
      { t: 'Liquidez sin esperar', d: 'El dinero de una factura antes de su vencimiento.' },
      { t: 'Basado en datos reales', d: 'En cómo paga de verdad cada cliente.' }
    ],
    audience: [
      { t: 'Empresas que cobran a 60 o 90 días', d: 'Y necesitan liquidez antes.' }
    ],
    faqs: [
      ['¿Está disponible?', 'Todavía no. Hoy solo está disponible el cobro. Cada paso llega cuando el anterior funciona.'],
      ['¿Zeryx guarda mi dinero?', 'No. Hoy Zeryx no es un banco ni guarda tu dinero. El pago va de tu cliente a tu cuenta.']
    ],
    related: ['pagos-y-saldos', 'garantia', 'cobro-por-whatsapp']
  },
  {
    slug: 'pagos-y-saldos',
    name: 'Pagos y saldos',
    tagline: 'Paga a proveedores y ve todos tus bancos',
    group: 'Hacia dónde vamos',
    status: 'soon',
    serviceType: 'Pagos a proveedores y posición bancaria',
    metaTitle: 'Pagos a proveedores y saldo de todos tus bancos (en el plan) · Zeryx',
    metaDescription: 'Tus pagos a proveedores, con reglas y aprobaciones, y el saldo de todos tus bancos en un mismo sitio. Es uno de los próximos pasos de Zeryx.',
    summary: 'En el plan: pagos a proveedores con aprobaciones y el saldo de todos tus bancos juntos.',
    eyebrow: 'Después · paga y ve tu dinero',
    h1: 'Paga a tus proveedores y ve todo tu dinero en un sitio',
    lead: 'Tus pagos a proveedores, con reglas y aprobaciones, y el saldo de todos tus bancos en un mismo sitio. Es uno de los próximos pasos de Zeryx, camino de ser el banco que trabaja por ti.',
    definition: {
      q: '¿Qué será Pagos y saldos?',
      a: 'Será la parte de Zeryx para pagar a tus proveedores con reglas y aprobaciones y ver el saldo de todos tus bancos juntos. Hoy no está disponible: Zeryx solo cobra por ti.'
    },
    steps: [
      { t: 'Conectas tus bancos', d: 'Y ves todos los saldos en un sitio.' },
      { t: 'Preparas los pagos', d: 'A tus proveedores, con reglas.' },
      { t: 'Apruebas', d: 'Quien tenga que aprobar, aprueba.' }
    ],
    capabilities: [
      { t: 'Pagos con aprobaciones', d: 'Reglas sobre quién aprueba qué.' },
      { t: 'Saldo de todos tus bancos', d: 'En un mismo sitio.' }
    ],
    audience: [
      { t: 'Empresas con varios bancos', d: 'Que hoy entran en cada uno para saber cuánto tienen.' }
    ],
    faqs: [
      ['¿Está disponible?', 'Todavía no. Hoy solo está disponible el cobro. Cada paso llega cuando el anterior funciona.']
    ],
    related: ['adelanto-de-facturas', 'conciliacion', 'resumen-diario']
  }
]

export const featureBySlug = slug => FEATURES.find(f => f.slug === slug)

export const FOOTER_COLUMNS = [
  {
    title: 'Cobrar',
    links: [
      { t: 'Todas las funciones', href: '/producto/' },
      ...['cobro-por-whatsapp', 'promesas-de-pago', 'enlace-de-pago', 'conciliacion'].map(s => ({ t: featureBySlug(s).name, href: `/producto/${s}/` }))
    ]
  },
  {
    title: 'Controlar y conectar',
    links: ['resumen-diario', 'reglas', 'garantia', 'integraciones', 'adelanto-de-facturas', 'pagos-y-saldos'].map(s => ({ t: featureBySlug(s).name, href: `/producto/${s}/` }))
  },
  {
    title: 'Zeryx',
    links: [
      { t: 'Cómo funciona', href: '/#ciclo' },
      { t: 'La prueba', href: '/#prueba' },
      { t: 'Precios', href: '/#precios' },
      { t: 'Preguntas frecuentes', href: '/#faq' },
      { t: 'Hacia dónde vamos', href: '/#rumbo' },
      { t: 'info@zeryx.io', href: LINKS.email }
    ]
  }
]
