import { readFileSync, writeFileSync, mkdirSync, rmSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { pathToFileURL } from 'node:url'

const root = resolve(import.meta.dirname, '..')
const dist = resolve(root, 'dist')
const ssrDir = resolve(root, '.ssr')
const ssr = await import(pathToFileURL(resolve(ssrDir, 'entry-server.js')).href)

const template = readFileSync(resolve(dist, 'index.html'), 'utf8')
const fill = (html, re, value, what) => {
  if (!re.test(html)) throw new Error('prerender: marker not found: ' + what)
  return html.replace(re, () => value)
}

for (const path of ssr.paths) {
  const { html, head } = ssr.render(path)
  let out = fill(template, /<!--seo:start-->[\s\S]*?<!--seo:end-->/, head, 'seo block')
  out = fill(out, /<div id="root"><\/div>/, `<div id="root">${html}</div>`, 'root')
  const file = resolve(dist, '.' + path, 'index.html')
  mkdirSync(dirname(file), { recursive: true })
  writeFileSync(file, out)
}

const today = new Date().toISOString().slice(0, 10)
writeFileSync(resolve(dist, 'robots.txt'), ssr.robotsTxt())
writeFileSync(resolve(dist, 'sitemap.xml'), ssr.sitemapXml(today))
writeFileSync(resolve(dist, 'llms.txt'), ssr.llmsTxt())
writeFileSync(resolve(dist, 'llms-full.txt'), ssr.llmsFullTxt())
writeFileSync(resolve(dist, 'site.webmanifest'), ssr.webManifest())
rmSync(ssrDir, { recursive: true, force: true })

console.log(`prerendered ${ssr.paths.length} pages + robots.txt, sitemap.xml, llms.txt, llms-full.txt, site.webmanifest`)
