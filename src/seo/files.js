import { SITE } from '../config.js'
import { PLANS, PRICING_NOTE, FAQS } from '../data/content.js'
import { FEATURES as FEATURE_PAGES } from '../data/features.js'
import { SUMMARY, TAGLINE, AUDIENCE, FEATURES, HOW_IT_WORKS, INTEGRATIONS, MONEY, ACCESS, PROOF, ROADMAP } from './facts.js'

const AI_CRAWLERS = [
  'GPTBot', 'OAI-SearchBot', 'ChatGPT-User',
  'ClaudeBot', 'Claude-User', 'Claude-SearchBot', 'anthropic-ai',
  'PerplexityBot', 'Perplexity-User',
  'Google-Extended', 'Applebot-Extended', 'Bingbot',
  'Meta-ExternalAgent', 'Amazonbot', 'DuckAssistBot', 'MistralAI-User', 'cohere-ai', 'CCBot'
]

const LIVE = FEATURE_PAGES.filter(f => f.status !== 'soon')
const SOON = FEATURE_PAGES.filter(f => f.status === 'soon')
const pageUrl = f => `${SITE.url}/producto/${f.slug}/`

export function robotsTxt() {
  return [
    'User-agent: *',
    'Allow: /',
    '',
    ...AI_CRAWLERS.map(b => 'User-agent: ' + b),
    'Allow: /',
    '',
    'Sitemap: ' + SITE.url + '/sitemap.xml',
    ''
  ].join('\n')
}

const PAGES = [['/', '1.0'], ['/producto/', '0.9'], ...FEATURE_PAGES.map(f => ['/producto/' + f.slug + '/', f.status === 'soon' ? '0.5' : '0.8'])]

export function sitemapXml(lastmod) {
  const urls = PAGES.map(([p, prio]) => `  <url>
    <loc>${SITE.url}${p}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${prio}</priority>
    <xhtml:link rel="alternate" hreflang="es" href="${SITE.url}${p}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE.url}${p}" />
  </url>`).join('\n')
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`
}

const planMd = p => `- **${p.name}** — ${p.price ? (p.from ? 'desde ' : '') + p.price + ' €/mes' : 'a propuesta'}. ${p.audience} ${p.note} Incluye: ${p.features.join(', ')}.`
const plansMd = () => PLANS.map(planMd).join('\n') + '\n- **Tu cliente** — 0 €, siempre. Pagar por el enlace nunca le cuesta nada: sin registro, sin app y sin comisión.\n\n' + PRICING_NOTE
const faqMd = () => FAQS.map(([q, a]) => `### ${q}\n\n${a}`).join('\n\n')

const featureMd = f => [
  `### ${f.name}`,
  '',
  `Página: ${pageUrl(f)}`,
  '',
  f.definition.a,
  '',
  'Cómo funciona:',
  ...f.steps.map((s, i) => `${i + 1}. ${s.t}: ${s.d}`),
  '',
  'Qué incluye:',
  ...f.capabilities.map(c => `- ${c.t}: ${c.d}`),
  '',
  'Preguntas frecuentes:',
  ...f.faqs.map(([q, a]) => `- ${q} ${a}`)
].join('\n')

export function llmsTxt() {
  const u = SITE.url
  return `# Zeryx

> ${SUMMARY}

- Lema: ${TAGLINE}
- Web: ${u}
- Mercado: España, facturas entre empresas
- Para quién: ${AUDIENCE}
- Precio: Pyme 149 €/mes; Mediana desde 490 €/mes + 1,5 % de lo vencido cobrado; Grande a propuesta. Para el cliente que paga, 0 €.
- Acceso: ${ACCESS}
- Dinero: ${MONEY}

## Funciones

- [Todas las funciones](${u}/producto/): índice del producto.
${LIVE.map(f => `- [${f.name}](${pageUrl(f)}): ${f.summary}`).join('\n')}

## En el plan (todavía no disponible)

${SOON.map(f => `- [${f.name}](${pageUrl(f)}): ${f.summary}`).join('\n')}

## Precios

${plansMd()}

## Preguntas frecuentes

- [Preguntas frecuentes](${u}/#faq): aprobación de mensajes, trato a los clientes, puesta en marcha, programas compatibles, dónde está el dinero, garantía y permanencia.

## Optional

- [Versión completa para modelos de lenguaje](${u}/llms-full.txt)
`
}

export function llmsFullTxt() {
  const u = SITE.url
  const integ = Object.entries(INTEGRATIONS).map(([k, list]) => `- **${k}:** ${list.join(', ')}`).join('\n')
  return `# Zeryx — información completa

> ${SUMMARY}

Fuente: ${u}

## Qué es Zeryx

${TAGLINE} Zeryx es el departamento de cobro de una empresa, sin contratar a nadie. Habla con los clientes que deben dinero por WhatsApp y correo, en nombre de la empresa, hasta que pagan. No manda recordatorios fríos ni amenaza: pregunta si hay algo que frene el pago, escucha, acuerda una fecha y vuelve ese día. Cuando el cliente quiere pagar, le da un enlace; cuando paga, el cobro se casa con su factura.

## Para quién es

${AUDIENCE}

## Qué hace

${FEATURES.map(f => '- ' + f).join('\n')}

## Cómo funciona, paso a paso

${HOW_IT_WORKS.map((s, i) => `${i + 1}. ${s}`).join('\n')}

## Funciones en detalle

${LIVE.map(featureMd).join('\n\n')}

## Garantía y prueba pública

${PROOF}

## Integraciones

${integ}

## Precios

${plansMd()}

## Dónde está el dinero

${MONEY}

## Cómo empezar

${ACCESS}

## Hacia dónde va Zeryx

${ROADMAP.map(r => '- ' + r).join('\n')}

## Preguntas frecuentes

${faqMd()}

## Enlaces

- Web: ${u}
- Funciones: ${u}/producto/
- Contacto: info@zeryx.io
`
}

export function webManifest() {
  return JSON.stringify({
    name: SITE.name,
    short_name: SITE.name,
    description: SITE.description,
    lang: 'es',
    start_url: '/',
    display: 'browser',
    background_color: '#ffffff',
    theme_color: '#280465',
    icons: [
      { src: '/favicon.svg', type: 'image/svg+xml', sizes: 'any' },
      { src: '/apple-touch-icon.png', type: 'image/png', sizes: '180x180' }
    ]
  }, null, 2) + '\n'
}
