import BrandIcon from '../components/BrandIcon.jsx'

const row = { display: 'flex', gap: '12px', width: 'max-content', willChange: 'transform', padding: '6px 0' }
const chip = { display: 'flex', alignItems: 'center', gap: '12px', padding: '7px 20px 7px 7px', borderRadius: '18px', border: '1px solid #e9e3f5', background: 'linear-gradient(180deg,#ffffff,#fbf9ff)', boxShadow: '0 1px 2px rgba(15,23,42,.04), 0 10px 24px -16px rgba(40,4,101,.22)', fontSize: 'clamp(15px,1.5vw,17px)', fontWeight: 600, letterSpacing: '-.01em', color: '#0f172a', whiteSpace: 'nowrap' }

function Row({ items, dir }) {
  return (
    <div data-marquee="1" data-dir={dir} style={row}>
      {items.map((l, i) => (
        <div key={i} className="mq-chip" style={chip}>
          <BrandIcon logos={l.logos} />
          <span>{l.t}</span>
        </div>
      ))}
    </div>
  )
}

export default function LogoMarquee({ v }) {
  return (
    <section style={{ position: 'relative', padding: 'clamp(48px,6vw,80px) 0', background: 'linear-gradient(180deg,#ffffff,#faf7ff 50%,#ffffff)' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px', padding: '0 20px', fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.08em', color: '#64748b' }}>
        <span aria-hidden="true" style={{ width: '32px', height: '1px', background: 'linear-gradient(90deg,transparent,#c4b5fd)' }} />
        Funciona con lo que ya usas
        <span aria-hidden="true" style={{ width: '32px', height: '1px', background: 'linear-gradient(90deg,#c4b5fd,transparent)' }} />
      </div>
      <div style={{ marginTop: '30px', display: 'flex', flexDirection: 'column', gap: '12px', overflow: 'hidden', WebkitMaskImage: 'linear-gradient(90deg,transparent,#000 12%,#000 88%,transparent)', maskImage: 'linear-gradient(90deg,transparent,#000 12%,#000 88%,transparent)' }}>
        <Row items={v.logosA} dir="-1" />
        <Row items={v.logosB} dir="1" />
      </div>
    </section>
  )
}
