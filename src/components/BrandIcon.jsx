const LOGOS = {
  whatsapp: { src: '/marcas/whatsapp.svg', w: 26, h: 26 },
  gmail: { src: '/marcas/gmail.svg', w: 25, h: 19 },
  outlook: { src: '/marcas/outlook.svg', w: 25, h: 24 },
  visa: { src: '/marcas/visa.svg', w: 40, h: 13 },
  mastercard: { src: '/marcas/mastercard.svg', w: 28, h: 22 },
  sepa: { src: '/marcas/sepa.svg', w: 42, h: 18 },
  applepay: { src: '/marcas/applepay.svg', w: 49, h: 20 },
  googlepay: { src: '/marcas/googlepay.svg', w: 48, h: 18 },
  odoo: { src: '/marcas/odoo.svg', w: 47, h: 15 },
  excel: { src: '/marcas/excel.svg', w: 24, h: 25 },
  zeryx: { src: '/logo-zeryx.svg', w: 24, h: 24 }
}

export default function BrandIcon({ logos }) {
  return (
    <span style={{ flex: 'none', height: '44px', minWidth: '44px', padding: '0 10px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', background: '#ffffff', border: '1px solid #eef0f4', boxShadow: 'inset 0 -1px 0 rgba(15,23,42,.04)' }}>
      {logos.map(k => {
        const l = LOGOS[k]
        return <img key={k} src={l.src} alt="" width={l.w} height={l.h} decoding="async" style={{ display: 'block', width: l.w + 'px', height: l.h + 'px' }} />
      })}
    </span>
  )
}
