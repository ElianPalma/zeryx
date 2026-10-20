import { readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs'
import { join, relative, sep } from 'node:path'
import { crc32, deflateRawSync } from 'node:zlib'

const root = new URL('..', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1')
const src = join(root, 'dist')
const out = join(root, 'zeryx-landing-plesk.zip')

const walk = dir => readdirSync(dir).flatMap(n => {
  const p = join(dir, n)
  return statSync(p).isDirectory() ? walk(p) : [p]
})

const dosTime = d => ((d.getHours() << 11) | (d.getMinutes() << 5) | (d.getSeconds() >> 1)) & 0xffff
const dosDate = d => (((d.getFullYear() - 1980) << 9) | ((d.getMonth() + 1) << 5) | d.getDate()) & 0xffff

const locals = []
const centrals = []
let offset = 0

for (const file of walk(src).sort()) {
  const name = Buffer.from(relative(src, file).split(sep).join('/'))
  const data = readFileSync(file)
  const packed = deflateRawSync(data, { level: 9 })
  const store = packed.length >= data.length
  const body = store ? data : packed
  const now = statSync(file).mtime
  const head = Buffer.alloc(30)
  head.writeUInt32LE(0x04034b50, 0)
  head.writeUInt16LE(20, 4)
  head.writeUInt16LE(0x0800, 6)
  head.writeUInt16LE(store ? 0 : 8, 8)
  head.writeUInt16LE(dosTime(now), 10)
  head.writeUInt16LE(dosDate(now), 12)
  head.writeUInt32LE(crc32(data), 14)
  head.writeUInt32LE(body.length, 18)
  head.writeUInt32LE(data.length, 22)
  head.writeUInt16LE(name.length, 26)
  const cen = Buffer.alloc(46)
  cen.writeUInt32LE(0x02014b50, 0)
  cen.writeUInt16LE(0x0314, 4)
  head.copy(cen, 6, 4, 30)
  cen.writeUInt32LE((0o100644 << 16) >>> 0, 38)
  cen.writeUInt32LE(offset, 42)
  locals.push(head, name, body)
  centrals.push(cen, name)
  offset += head.length + name.length + body.length
}

const dir = Buffer.concat(centrals)
const end = Buffer.alloc(22)
end.writeUInt32LE(0x06054b50, 0)
end.writeUInt16LE(centrals.length / 2, 8)
end.writeUInt16LE(centrals.length / 2, 10)
end.writeUInt32LE(dir.length, 12)
end.writeUInt32LE(offset, 16)
writeFileSync(out, Buffer.concat([...locals, dir, end]))
console.log(`zeryx-landing-plesk.zip: ${centrals.length / 2} ficheros`)
