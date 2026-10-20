import { renderToString } from 'react-dom/server'
import Site from './site/Site.jsx'
import { LANDING_CONFIG } from './config.js'
import { ROUTES } from './routes.js'
import { headTags } from './seo/head.js'
import { robotsTxt, sitemapXml, llmsTxt, llmsFullTxt, webManifest } from './seo/files.js'

export const paths = ROUTES.map(r => r.path)

export function render(path) {
  const route = ROUTES.find(r => r.path === path)
  const html = renderToString(
    <Site
      {...LANDING_CONFIG}
      introCurtain={!!route.home && LANDING_CONFIG.introCurtain}
      home={!!route.home}
      page={route.page}
      pageProps={route.pageProps}
    />
  )
  return { html, head: headTags({ ...route.meta, path: route.path }) }
}

export { robotsTxt, sitemapXml, llmsTxt, llmsFullTxt, webManifest }
