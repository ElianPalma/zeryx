import { SITE, INTRO_KEY } from '../config.js'

const esc = s => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

export function headTags({ title, description, path, ogImage, jsonLd }) {
  const u = SITE.url + path
  const img = SITE.url + (ogImage || SITE.ogImage)
  const json = JSON.stringify(jsonLd()).replace(/</g, '\\u003c')
  return [
    `<title>${esc(title)}</title>`,
    `<meta name="description" content="${esc(description)}" />`,
    `<link rel="canonical" href="${u}" />`,
    `<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />`,
    `<link rel="alternate" hreflang="es" href="${u}" />`,
    `<link rel="alternate" hreflang="x-default" href="${u}" />`,
    `<meta name="theme-color" content="#280465" />`,
    `<link rel="icon" type="image/svg+xml" href="/favicon.svg" />`,
    `<link rel="apple-touch-icon" href="/apple-touch-icon.png" />`,
    `<link rel="manifest" href="/site.webmanifest" />`,
    `<link rel="alternate" type="text/plain" title="llms.txt" href="/llms.txt" />`,
    `<link rel="preload" href="/fonts/inter-latin-wght-normal.woff2" as="font" type="font/woff2" crossorigin />`,
    `<link rel="dns-prefetch" href="https://www.google.com" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="${esc(SITE.name)}" />`,
    `<meta property="og:locale" content="${SITE.locale}" />`,
    `<meta property="og:url" content="${u}" />`,
    `<meta property="og:title" content="${esc(title)}" />`,
    `<meta property="og:description" content="${esc(description)}" />`,
    `<meta property="og:image" content="${img}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="og:image:alt" content="${esc(title)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(title)}" />`,
    `<meta name="twitter:description" content="${esc(description)}" />`,
    `<meta name="twitter:image" content="${img}" />`,
    `<script>try{if(localStorage.getItem('${INTRO_KEY}')==='1'&&!/[?&]intro=1/.test(location.search))document.documentElement.classList.add('zx-intro-visto')}catch(e){}</script>`,
    `<style>.zx-intro-visto [data-curtain]{display:none!important}</style>`,
    `<script type="application/ld+json">${json}</script>`,
    `<noscript><style>[data-r],[data-w],[data-sl]{opacity:1!important;transform:none!important}[data-wl]{transform:none!important}[data-curtain],[data-cursor]{display:none!important}</style></noscript>`
  ].join('\n    ')
}
