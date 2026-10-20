export const LANDING_CONFIG = {
  heroVariant: 'A',
  introCurtain: true,
  videoUrl: import.meta.env?.VITE_DEMO_VIDEO_URL || ''
}

export const SITE = {
  name: 'Zeryx',
  url: 'https://zeryx.io',
  locale: 'es_ES',
  lang: 'es',
  title: 'Zeryx · Tú vendes. Zeryx cobra.',
  description: 'Zeryx habla con tus clientes por WhatsApp y correo, en tu nombre, hasta que pagan. Tu departamento de cobro, sin contratar a nadie.',
  ogImage: '/og-image.png',
  logo: '/logo-zeryx.svg',
  sameAs: []
}

export const INTRO_KEY = 'zx-intro-visto'

export const introAlreadySeen = () => {
  try {
    return localStorage.getItem(INTRO_KEY) === '1' && !/[?&]intro=1/.test(window.location.search)
  } catch (e) {
    return false
  }
}

export const WHATSAPP_NUMBER = ''

export const LINKS = {
  email: 'mailto:info@zeryx.io'
}

const WA_OK = /^\d{9,15}$/.test(WHATSAPP_NUMBER)

export const waTarget = WA_OK ? '_blank' : '_self'

export const waLink = text => WA_OK
  ? 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(text)
  : '#empezar'

export const WA_TEXT = {
  access: 'Hola, quiero entrar en la prueba de Zeryx.',
  talk: 'Hola, quiero hablar con vosotros sobre Zeryx.',
  notify: name => 'Hola, avisadme cuando esté disponible: ' + name + '.'
}
