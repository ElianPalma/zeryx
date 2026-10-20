import { SITE } from './config.js'
import { FEATURES } from './data/features.js'
import HomePage from './pages/HomePage.jsx'
import ProductIndex from './pages/ProductIndex.jsx'
import FeaturePage from './pages/FeaturePage.jsx'
import { homeJsonLd, indexJsonLd, featureJsonLd } from './seo/schema.js'

export const ROUTES = [
  {
    path: '/',
    page: HomePage,
    home: true,
    meta: { title: SITE.title, description: SITE.description, ogImage: SITE.ogImage, jsonLd: homeJsonLd, priority: '1.0' }
  },
  {
    path: '/producto/',
    page: ProductIndex,
    meta: {
      title: 'Producto · Cómo cobra Zeryx tus facturas',
      description: 'Cobro por WhatsApp y correo en tu nombre, promesas de pago, enlace de pago sin comisión, conciliación, resumen diario, reglas y garantía de resultado. Todas las funciones de Zeryx.',
      ogImage: '/og/producto.png',
      jsonLd: indexJsonLd,
      priority: '0.9'
    }
  },
  ...FEATURES.map(f => ({
    path: `/producto/${f.slug}/`,
    page: FeaturePage,
    pageProps: { feature: f },
    meta: { title: f.metaTitle, description: f.metaDescription, ogImage: `/og/${f.slug}.png`, jsonLd: () => featureJsonLd(f), priority: '0.8' }
  }))
]

export function findRoute(pathname) {
  const p = (pathname || '/').replace(/\/index\.html$/, '/').replace(/\/?$/, '/')
  return ROUTES.find(r => r.path === p) || ROUTES[0]
}
