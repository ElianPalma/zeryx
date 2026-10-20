export const DEMO_SCENES = JSON.stringify([
  { name: 'Apertura', dur: 4, desc: 'Aparece el logo de Zeryx y el titular' },
  { name: 'Factura', dur: 6, desc: 'Cobro de facturas en la app; zoom a la factura vencida de Constructoras Norte' },
  { name: 'Aprobacion', dur: 7, desc: 'Se abre Aprobaciones: Zeryx redacta el mensaje y el usuario pulsa Aprobar y enviar' },
  { name: 'Contacta', dur: 8, desc: 'WhatsApp del cliente: llega el mensaje con el enlace, él responde y Zeryx contesta' },
  { name: 'Cobra', dur: 7, desc: 'El cliente toca el enlace y paga con tarjeta' },
  { name: 'Concilia', dur: 6, desc: 'De vuelta en el panel: la factura pasa a cobrada y conciliada y cambian los números' },
  { name: 'Informa', dur: 7, desc: 'Zeryx avisa al dueño del cobro y le pide permiso para el siguiente paso' },
  { name: 'Cierre', dur: 5, desc: 'Cortinilla morada con el claim y la llamada a la acción' }
])

export const DEMO_PLAYBACK = JSON.stringify({ mode: 'times', count: 1 })
