import { FEATURES, FEATURE_GROUPS } from '../data/features.js'
import { PageHero, HeroCtas, Soon } from './FeaturePage.jsx'
import SectionLabel from '../components/SectionLabel.jsx'
import FinalCta from '../sections/FinalCta.jsx'

const card = { height: '100%', padding: 'clamp(22px,3vw,30px)', borderRadius: '16px', border: '1px solid #e2e8f0', background: 'radial-gradient(360px circle at var(--x,50%) var(--y,0%),#f8fafc,#ffffff 60%)', display: 'flex', flexDirection: 'column', color: '#0f172a' }

export default function ProductIndex({ v }) {
  return (
    <>
      <PageHero
        v={v}
        crumbs={[{ t: 'Inicio', href: '/' }, { t: 'Producto', href: '/producto/' }]}
        eyebrow={{ tag: 'Producto', text: 'Tu departamento de cobro, sin contratar a nadie' }}
        title="Cómo cobra Zeryx tus facturas"
        lead="Zeryx habla con tus clientes por WhatsApp y correo, en tu nombre, hasta que pagan. Esto es todo lo que hace, y lo que viene después."
      >
        <HeroCtas v={v} />
      </PageHero>

      {FEATURE_GROUPS.map((g, gi) => (
        <section key={g.name} style={{ padding: '0 20px clamp(72px,9vw,120px)', display: 'flex', justifyContent: 'center' }}>
          <div style={{ width: 'min(1180px,100%)' }}>
            <SectionLabel n={String(gi + 1).padStart(2, '0')}>{g.name}</SectionLabel>
            <h2 style={{ margin: '14px 0 0', fontSize: 'clamp(28px,3.6vw,48px)', lineHeight: 1.05, letterSpacing: '-.04em', fontWeight: 600, maxWidth: '820px' }}>{g.title}</h2>
            <div style={{ marginTop: '28px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,280px),1fr))', gap: '14px' }}>
              {FEATURES.filter(f => f.group === g.name).map((f, i) => (
                <div key={f.slug} data-r="1" data-d={i * 90} style={{ opacity: 0, transform: 'translateY(50px)' }}>
                  <a href={`/producto/${f.slug}/`} onMouseMove={v.spot} className="hv-card" style={card}>
                    <h3 style={{ margin: 0, fontSize: '21px', fontWeight: 700, letterSpacing: '-.02em' }}>{f.name}{f.status === 'soon' && <Soon />}</h3>
                    <p style={{ margin: '10px 0 0', fontSize: '15px', lineHeight: 1.6, color: '#64748b' }}>{f.summary}</p>
                    <span style={{ marginTop: 'auto', paddingTop: '18px', fontSize: '14px', fontWeight: 600, color: '#7c3aed' }}>Ver {f.name} →</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <FinalCta v={v} />
    </>
  )
}
