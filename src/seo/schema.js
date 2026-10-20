import { SITE } from '../config.js'
import { PLANS, FAQS } from '../data/content.js'
import { FEATURES as FEATURE_PAGES } from '../data/features.js'
import { SUMMARY, FEATURES, AUDIENCE } from './facts.js'

const U = SITE.url
const ORG = U + '/#organization'
const SITE_ID = U + '/#website'
const APP = U + '/#software'

const organization = () => ({
  '@type': 'Organization',
  '@id': ORG,
  name: SITE.name,
  url: U + '/',
  logo: { '@type': 'ImageObject', url: U + SITE.logo },
  description: SUMMARY,
  areaServed: { '@type': 'Country', name: 'España' },
  knowsAbout: ['Cobro de facturas', 'Gestión de impagos entre empresas', 'Cobro por WhatsApp', 'Promesas de pago', 'Enlaces de pago', 'Conciliación de cobros'],
  ...(SITE.sameAs.length ? { sameAs: SITE.sameAs } : {})
})

const website = () => ({
  '@type': 'WebSite',
  '@id': SITE_ID,
  url: U + '/',
  name: SITE.name,
  inLanguage: 'es-ES',
  publisher: { '@id': ORG }
})

const software = () => ({
  '@type': 'SoftwareApplication',
  '@id': APP,
  name: SITE.name,
  url: U + '/',
  applicationCategory: 'FinanceApplication',
  applicationSubCategory: 'Cobro de facturas entre empresas',
  operatingSystem: 'Web',
  inLanguage: 'es-ES',
  description: SUMMARY,
  audience: { '@type': 'BusinessAudience', audienceType: AUDIENCE },
  featureList: FEATURES,
  publisher: { '@id': ORG },
  offers: PLANS.filter(p => p.price).map(p => ({
    '@type': 'Offer',
    name: p.name,
    description: p.audience + ' ' + p.note,
    price: String(p.price),
    priceCurrency: 'EUR',
    url: U + '/#precios',
    availability: 'https://schema.org/InStock',
    priceSpecification: {
      '@type': 'UnitPriceSpecification',
      price: String(p.price),
      priceCurrency: 'EUR',
      unitText: 'MONTH',
      referenceQuantity: { '@type': 'QuantitativeValue', value: 1, unitCode: 'MON' }
    }
  }))
})

const faqPage = (id, faqs) => ({
  '@type': 'FAQPage',
  '@id': id,
  inLanguage: 'es-ES',
  mainEntity: faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } }))
})

const breadcrumbs = (id, items) => ({
  '@type': 'BreadcrumbList',
  '@id': id,
  itemListElement: items.map(([name, path], i) => ({ '@type': 'ListItem', position: i + 1, name, item: U + path }))
})

const webPage = ({ type = 'WebPage', path, name, description, image, extra = {} }) => ({
  '@type': type,
  '@id': U + path + '#webpage',
  url: U + path,
  name,
  description,
  inLanguage: 'es-ES',
  isPartOf: { '@id': SITE_ID },
  primaryImageOfPage: { '@type': 'ImageObject', url: U + image },
  ...extra
})

export function homeJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      organization(),
      website(),
      webPage({ path: '/', name: SITE.title, description: SITE.description, image: SITE.ogImage, extra: { about: { '@id': APP } } }),
      software(),
      faqPage(U + '/#faq', FAQS)
    ]
  }
}

export function indexJsonLd() {
  const path = '/producto/'
  return {
    '@context': 'https://schema.org',
    '@graph': [
      organization(),
      website(),
      webPage({
        type: 'CollectionPage',
        path,
        name: 'Producto · Todas las funciones de Zeryx',
        description: 'Todas las funciones de Zeryx: cobro por WhatsApp y correo, promesas de pago, enlace de pago, conciliación, resumen diario, reglas, garantía e integraciones.',
        image: '/og/producto.png',
        extra: {
          about: { '@id': APP },
          breadcrumb: { '@id': U + path + '#breadcrumb' },
          mainEntity: {
            '@type': 'ItemList',
            itemListElement: FEATURE_PAGES.map((f, i) => ({ '@type': 'ListItem', position: i + 1, name: f.name, url: `${U}/producto/${f.slug}/` }))
          }
        }
      }),
      breadcrumbs(U + path + '#breadcrumb', [['Inicio', '/'], ['Producto', path]])
    ]
  }
}

export function featureJsonLd(f) {
  const path = `/producto/${f.slug}/`
  return {
    '@context': 'https://schema.org',
    '@graph': [
      organization(),
      website(),
      webPage({
        path,
        name: f.metaTitle,
        description: f.metaDescription,
        image: `/og/${f.slug}.png`,
        extra: {
          about: { '@id': APP },
          breadcrumb: { '@id': U + path + '#breadcrumb' },
          ...(f.status === 'soon' ? {} : { mainEntity: { '@id': U + path + '#feature' } })
        }
      }),
      ...(f.status === 'soon' ? [] : [{
        '@type': 'Service',
        '@id': U + path + '#feature',
        name: f.name,
        serviceType: f.serviceType,
        description: f.definition.a,
        provider: { '@id': ORG },
        areaServed: { '@type': 'Country', name: 'España' },
        isRelatedTo: { '@id': APP },
        url: U + path
      }]),
      breadcrumbs(U + path + '#breadcrumb', [['Inicio', '/'], ['Producto', '/producto/'], [f.name, path]]),
      faqPage(U + path + '#faq', f.faqs)
    ]
  }
}
