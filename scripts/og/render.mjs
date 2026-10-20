import { execFileSync } from 'node:child_process'
import { mkdirSync, existsSync } from 'node:fs'
import { resolve } from 'node:path'
import { pathToFileURL } from 'node:url'
import { FEATURES } from '../../src/data/features.js'

const here = import.meta.dirname
const pub = resolve(here, '../../public')
const edge = ['C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe', 'C:/Program Files/Google/Chrome/Application/chrome.exe'].find(existsSync)
if (!edge) throw new Error('Edge or Chrome not found')
mkdirSync(resolve(pub, 'og'), { recursive: true })

const shot = (out, size, page, params = {}) => {
  const url = pathToFileURL(resolve(here, page)).href + '?' + new URLSearchParams(params)
  execFileSync(edge, ['--headless', '--disable-gpu', '--hide-scrollbars', '--force-device-scale-factor=1', `--window-size=${size}`, `--screenshot=${resolve(pub, out)}`, url], { stdio: 'ignore' })
  console.log('wrote', out)
}

shot('og-image.png', '1200,630', 'og.html')
shot('apple-touch-icon.png', '180,180', 'icon.html')
shot('og/producto.png', '1200,630', 'og.html', { k: 'Producto', t: 'Cómo cobra Zeryx|tus facturas', s: 'WhatsApp y correo, promesas de pago, enlace de pago, conciliación y garantía' })
for (const f of FEATURES) {
  const soon = f.status === 'soon'
  shot(`og/${f.slug}.png`, '1200,630', 'og.html', { k: soon ? 'En el plan' : f.group, ...(soon ? { soon: '1' } : {}), t: f.h1, s: f.summary })
}
