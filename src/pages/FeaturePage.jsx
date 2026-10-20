import { waLink, waTarget, WA_TEXT } from '../config.js'
import { featureBySlug } from '../data/features.js'
import Silk from '../components/Silk.jsx'
import Roll from '../components/Roll.jsx'
import SplitWords from '../components/SplitWords.jsx'
import SectionLabel from '../components/SectionLabel.jsx'
import Accordion from '../components/Accordion.jsx'
import FinalCta from '../sections/FinalCta.jsx'

const wrap = { width: 'min(1180px,100%)' }
const section = { padding: '0 20px clamp(90px,12vw,160px)', display: 'flex', justifyContent: 'center' }
const h2 = { margin: '16px 0 0', fontSize: 'clamp(32px,4.6vw,60px)', lineHeight: 1.02, letterSpacing: '-.045em', fontWeight: 600, maxWidth: '900px' }
const reveal = (d = 0, y = 60) => ({ 'data-r': '1', 'data-d': d, style: { opacity: 0, transform: `translateY(${y}px)` } })
const soonTag = { display: 'inline-block', marginLeft: '8px', fontSize: '10px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.05em', padding: '3px 8px', borderRadius: '999px', background: '#fef3c7', color: '#b45309', verticalAlign: 'middle' }
export const Soon = () => <span style={soonTag}>En el plan</span>
const card = { height: '100%', padding: 'clamp(22px,3vw,32px)', borderRadius: '16px', border: '1px solid #e2e8f0', background: 'radial-gradient(360px circle at var(--x,50%) var(--y,0%),#f8fafc,#ffffff 60%)' }

export function Breadcrumbs({ items }) {
  return (
    <nav aria-label="Ruta de navegación" data-w="1" style={{ position: 'relative', opacity: 0 }}>
      <ol style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '8px', margin: 0, padding: 0, listStyle: 'none', fontSize: '13px', color: '#64748b' }}>
        {items.map((it, i) => (
          <li key={it.href} style={{ display: 'flex', gap: '8px' }}>
            {i > 0 && <span aria-hidden="true">/</span>}
            {i < items.length - 1
              ? <a href={it.href} className="hv-link" style={{ color: '#64748b' }}>{it.t}</a>
              : <span aria-current="page" style={{ color: '#0f172a', fontWeight: 500 }}>{it.t}</span>}
          </li>
        ))}
      </ol>
    </nav>
  )
}

export function PageHero({ v, crumbs, eyebrow, title, lead, children }) {
  return (
    <header data-hero="F" style={{ position: 'relative', overflow: 'clip', padding: 'clamp(120px,14vw,168px) 20px clamp(72px,9vw,120px)', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <Silk view={'{"floor":-1}'} style={{ position: 'absolute', inset: 0 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 75% 62% at 50% 46%,rgba(255,255,255,.97),rgba(255,255,255,.88) 58%,rgba(255,255,255,0) 100%)' }} />
        <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: '200px', background: 'linear-gradient(180deg,rgba(255,255,255,0),#ffffff)' }} />
      </div>
      <Breadcrumbs items={crumbs} />
      {eyebrow && (
        <div data-w="1" style={{ position: 'relative', marginTop: '22px', display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '6px 14px 6px 6px', borderRadius: '999px', border: '1px solid #e2e8f0', background: 'rgba(255,255,255,.8)', fontSize: '13px', color: '#475569', boxShadow: '0 1px 2px rgba(0,0,0,.05)', opacity: 0 }}>
          <span style={{ fontSize: '11px', fontWeight: 600, padding: '4px 9px', borderRadius: '999px', background: eyebrow.soon ? '#fef3c7' : '#7c3aed', color: eyebrow.soon ? '#b45309' : '#ffffff' }}>{eyebrow.tag}</span>
          {eyebrow.text}
        </div>
      )}
      <h1 data-w="1" style={{ position: 'relative', margin: '24px 0 0', maxWidth: '1000px', fontSize: 'clamp(40px,6.4vw,92px)', lineHeight: 0.98, letterSpacing: '-.045em', fontWeight: 700, textWrap: 'balance', opacity: 0 }}>{title}</h1>
      <p data-w="1" style={{ position: 'relative', margin: '24px 0 0', maxWidth: '660px', fontSize: 'clamp(16px,1.6vw,19px)', lineHeight: 1.6, color: '#64748b', textWrap: 'pretty', opacity: 0 }}>{lead}</p>
      {children}
    </header>
  )
}

export function HeroCtas({ v, feature }) {
  if (feature && feature.status === 'soon') return <SoonCtas v={v} feature={feature} />
  return (
    <div data-w="1" style={{ position: 'relative', marginTop: '34px', display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center', opacity: 0 }}>
      <a className="hv-primary" href={v.waLink} target={v.waTarget} rel="noopener" data-mag="1" onMouseMove={v.magnet} onMouseLeave={v.unmagnet} style={{ whiteSpace: 'nowrap', display: 'inline-flex', padding: '15px 24px', borderRadius: '8px', background: '#7c3aed', color: '#ffffff', fontWeight: 500, fontSize: '16px', boxShadow: '0 10px 30px -12px rgba(124,58,237,.6)', transition: 'transform .25s cubic-bezier(.2,.8,.2,1),background .3s,box-shadow .3s' }}>
        <Roll>Pedir acceso <span>→</span></Roll>
      </a>
      <a className="hv-secondary" href="/#demo" onClick={v.openVideo} data-mag="1" onMouseMove={v.magnet} onMouseLeave={v.unmagnet} style={{ whiteSpace: 'nowrap', display: 'inline-flex', padding: '15px 22px', borderRadius: '8px', border: '1px solid #e2e8f0', background: '#ffffff', color: '#334155', fontWeight: 500, fontSize: '16px', transition: 'transform .25s cubic-bezier(.2,.8,.2,1),background .3s' }}>
        <Roll><span style={{ width: '22px', height: '22px', borderRadius: '50%', background: '#7c3aed', color: '#fff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '9px' }}>▶</span>Ver demo · 0:50</Roll>
      </a>
    </div>
  )
}

function SoonCtas({ v, feature }) {
  return (
    <div data-w="1" style={{ position: 'relative', marginTop: '34px', display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center', opacity: 0 }}>
      <a className="hv-primary" href={waLink(WA_TEXT.notify(feature.name))} target={waTarget} rel="noopener" data-mag="1" onMouseMove={v.magnet} onMouseLeave={v.unmagnet} style={{ whiteSpace: 'nowrap', display: 'inline-flex', padding: '15px 24px', borderRadius: '8px', background: '#7c3aed', color: '#ffffff', fontWeight: 500, fontSize: '16px', boxShadow: '0 10px 30px -12px rgba(124,58,237,.6)', transition: 'transform .25s cubic-bezier(.2,.8,.2,1),background .3s,box-shadow .3s' }}>
        <Roll>Avísame cuando esté <span>→</span></Roll>
      </a>
      <a className="hv-secondary" href="/producto/" data-mag="1" onMouseMove={v.magnet} onMouseLeave={v.unmagnet} style={{ whiteSpace: 'nowrap', display: 'inline-flex', padding: '15px 22px', borderRadius: '8px', border: '1px solid #e2e8f0', background: '#ffffff', color: '#334155', fontWeight: 500, fontSize: '16px', transition: 'transform .25s cubic-bezier(.2,.8,.2,1),background .3s' }}>
        <Roll>Ver lo que ya funciona</Roll>
      </a>
    </div>
  )
}

export function RelatedCards({ v, slugs, title = 'Sigue explorando' }) {
  const items = slugs.map(featureBySlug).filter(Boolean)
  if (!items.length) return null
  return (
    <section style={section}>
      <div style={wrap}>
        <h2 style={{ ...h2, fontSize: 'clamp(26px,3vw,40px)', margin: 0 }}>{title}</h2>
        <div style={{ marginTop: '28px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,260px),1fr))', gap: '14px' }}>
          {items.map((f, i) => (
            <div key={f.slug} {...reveal(i * 90, 40)}>
              <a href={`/producto/${f.slug}/`} onMouseMove={v.spot} className="hv-card" style={{ ...card, display: 'flex', flexDirection: 'column', color: '#0f172a' }}>
                <span style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.05em', color: '#7c3aed' }}>{f.group}</span>
                <span style={{ marginTop: '10px', fontSize: '20px', fontWeight: 700, letterSpacing: '-.02em' }}>{f.name}{f.status === 'soon' && <Soon />}</span>
                <span style={{ marginTop: '8px', fontSize: '14px', lineHeight: 1.55, color: '#64748b' }}>{f.summary}</span>
                <span style={{ marginTop: 'auto', paddingTop: '18px', fontSize: '14px', fontWeight: 600, color: '#7c3aed' }}>Ver {f.name} →</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function FeaturePage({ v, feature: f }) {
  const soon = f.status === 'soon'
  return (
    <>
      <PageHero
        v={v}
        crumbs={[{ t: 'Inicio', href: '/' }, { t: 'Producto', href: '/producto/' }, { t: f.name, href: `/producto/${f.slug}/` }]}
        eyebrow={{ tag: soon ? 'En el plan' : f.group, text: f.eyebrow, soon }}
        title={f.h1}
        lead={f.lead}
      >
        <HeroCtas v={v} feature={f} />
      </PageHero>

      <section style={section}>
        <div style={{ ...wrap, display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,420px),1fr))', gap: 'clamp(28px,5vw,72px)', alignItems: 'start' }}>
          <div>
            <SectionLabel n="01">Qué es</SectionLabel>
            <h2 data-split="1" style={h2}><SplitWords text={f.definition.q} /></h2>
          </div>
          <div {...reveal(120, 40)}>
            <p style={{ margin: 0, fontSize: 'clamp(18px,1.8vw,22px)', lineHeight: 1.55, color: '#334155', textWrap: 'pretty' }}>{f.definition.a}</p>
            {f.highlights && (
              <ul style={{ margin: '24px 0 0', padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {f.highlights.map(h => (
                  <li key={h} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', fontSize: '15px', lineHeight: 1.5, color: '#475569' }}>
                    <span aria-hidden="true" style={{ color: '#7c3aed', fontWeight: 700 }}>✓</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </section>

      <section style={{ ...section, background: '#f8fafc', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0', padding: 'clamp(72px,10vw,130px) 20px', marginBottom: 'clamp(90px,12vw,160px)' }}>
        <div style={wrap}>
          <SectionLabel n="02">Cómo funciona</SectionLabel>
          <h2 data-split="1" style={h2}><SplitWords text={f.stepsTitle || (soon ? 'Así funcionará.' : 'Así funciona, paso a paso.')} /></h2>
          <ol style={{ margin: 'clamp(36px,5vw,56px) 0 0', padding: 0, listStyle: 'none', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,240px),1fr))', gap: '14px' }}>
            {f.steps.map((s, i) => (
              <li key={s.t} {...reveal(i * 90)}>
                <div style={{ height: '100%', padding: 'clamp(22px,2.6vw,30px)', borderRadius: '16px', background: '#ffffff', border: '1px solid #e2e8f0', boxShadow: '0 10px 15px -3px rgba(0,0,0,.06)', display: 'flex', flexDirection: 'column' }}>
                  <span aria-hidden="true" style={{ fontSize: 'clamp(44px,5vw,64px)', lineHeight: 0.8, fontWeight: 800, letterSpacing: '-.05em', color: '#ede9fe' }}>{String(i + 1).padStart(2, '0')}</span>
                  <h3 style={{ margin: '22px 0 0', fontSize: '20px', lineHeight: 1.2, letterSpacing: '-.02em', fontWeight: 700 }}>{s.t}</h3>
                  <p style={{ margin: '10px 0 0', fontSize: '15px', lineHeight: 1.6, color: '#64748b', textWrap: 'pretty' }}>{s.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section style={section}>
        <div style={wrap}>
          <SectionLabel n="03">Qué incluye</SectionLabel>
          <h2 data-split="1" style={h2}><SplitWords text={f.capabilitiesTitle || (soon ? 'Lo que incluirá.' : 'Todo lo que necesitas, sin montar nada.')} /></h2>
          <div style={{ marginTop: 'clamp(36px,5vw,56px)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,300px),1fr))', gap: '14px' }}>
            {f.capabilities.map((c, i) => (
              <div key={c.t} {...reveal((i % 3) * 100, 70)}>
                <div onMouseMove={v.spot} style={card}>
                  <h3 style={{ margin: 0, fontSize: 'clamp(19px,1.8vw,22px)', fontWeight: 700, letterSpacing: '-.02em' }}>{c.t}{c.soon && !soon && <Soon />}</h3>
                  <p style={{ margin: '10px 0 0', fontSize: '15px', lineHeight: 1.6, color: '#64748b', textWrap: 'pretty' }}>{c.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {f.chips && (
        <section style={section}>
          <div {...reveal(0, 60)} >
            <div style={{ position: 'relative', overflow: 'hidden', width: 'min(1180px,calc(100vw - 40px))', padding: 'clamp(40px,6vw,72px) clamp(22px,5vw,64px)', borderRadius: '20px', background: '#280465', color: '#ffffff' }}>
              <Silk view={'{"angle":0.9,"ox":0,"oy":0.1,"zoom":1.1,"sy":1.8,"scrollRef":0.5,"scrollK":0.5,"whiten":0,"maxL":1,"dark":1,"rim":0.9,"res":0.6}'} transparent nograin style={{ position: 'absolute', inset: 0 }} />
              <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: 'linear-gradient(90deg,rgba(40,4,101,.92) 30%,rgba(40,4,101,.4))' }} />
              <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,360px),1fr))', gap: '28px', alignItems: 'center' }}>
                <div>
                  <div style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.05em', color: '#d7c0ff' }}>{f.chips.label}</div>
                  <h2 style={{ margin: '12px 0 0', fontSize: 'clamp(26px,3.2vw,42px)', lineHeight: 1.05, letterSpacing: '-.035em', fontWeight: 700, textWrap: 'balance' }}>{f.chips.title}</h2>
                </div>
                <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {f.chips.items.map(c => (
                    <li key={c} style={{ fontSize: '14px', fontWeight: 500, padding: '9px 14px', borderRadius: '999px', border: '1px solid rgba(255,255,255,.25)', background: 'rgba(255,255,255,.08)', color: '#ffffff' }}>{c}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      <section style={section}>
        <div style={wrap}>
          <SectionLabel n="04">Para quién</SectionLabel>
          <h2 data-split="1" style={h2}><SplitWords text={f.audienceTitle || 'Pensado para empresas que facturan y cobran cada día.'} /></h2>
          <div style={{ marginTop: 'clamp(36px,5vw,56px)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,260px),1fr))', gap: '14px' }}>
            {f.audience.map((a, i) => (
              <div key={a.t} {...reveal(i * 100)} >
                <div style={{ height: '100%', paddingTop: '20px', borderTop: '1px solid #d7c0ff' }}>
                  <h3 style={{ margin: 0, fontSize: '19px', fontWeight: 700, letterSpacing: '-.02em' }}>{a.t}</h3>
                  <p style={{ margin: '10px 0 0', fontSize: '15px', lineHeight: 1.6, color: '#64748b', textWrap: 'pretty' }}>{a.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={section}>
        <div style={{ ...wrap, display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,360px),1fr))', gap: 'clamp(32px,5vw,72px)', alignItems: 'start' }}>
          <div>
            <SectionLabel n="05">Preguntas</SectionLabel>
            <h2 data-split="1" style={h2}><SplitWords text={`Preguntas sobre ${f.name}`} /></h2>
          </div>
          <Accordion items={f.faqs} />
        </div>
      </section>

      <RelatedCards v={v} slugs={f.related} />
      <FinalCta v={v} />
    </>
  )
}
