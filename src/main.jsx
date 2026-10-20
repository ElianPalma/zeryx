import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import Site from './site/Site.jsx'
import { LANDING_CONFIG, introAlreadySeen } from './config.js'
import { findRoute } from './routes.js'
import './styles/base.css'
import './styles/hover.css'
import './styles/roadmap.css'

const route = findRoute(window.location.pathname)
if (import.meta.env.DEV) document.title = route.meta.title

// En producción el HTML ya viene prerenderizado (scripts/prerender.mjs): se hidrata en vez de
// rehacerlo. introCurtain se pasa igual que en el servidor para que el marcado coincida; si la
// intro ya se vio, Site retira la cortina en componentDidMount (antes del primer pintado) e
// index.html la oculta por CSS desde el primer byte. En `npm run dev` no hay prerender: se monta
// de cero como antes.
const container = document.getElementById('root')
const app = (
  <StrictMode>
    <Site
      {...LANDING_CONFIG}
      introCurtain={!!route.home && LANDING_CONFIG.introCurtain}
      introSeen={introAlreadySeen()}
      home={!!route.home}
      page={route.page}
      pageProps={route.pageProps}
    />
  </StrictMode>
)
if (container.hasChildNodes()) hydrateRoot(container, app)
else createRoot(container).render(app)
