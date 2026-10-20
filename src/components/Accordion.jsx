import { useState } from 'react'

export default function Accordion({ items }) {
  const [open, setOpen] = useState(0)
  return (
    <div style={{ display: 'flex', flexDirection: 'column', borderTop: '1px solid #e2e8f0' }}>
      {items.map(([q, a], i) => {
        const on = open === i
        return (
          <div key={q} data-r="1" data-d={i * 70} style={{ borderBottom: '1px solid #e2e8f0', opacity: 0, transform: 'translateY(30px)' }}>
            <h3 style={{ margin: 0 }}>
              <button onClick={() => setOpen(on ? -1 : i)} aria-expanded={on} style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '20px', padding: '22px 0', border: 0, background: 'transparent', fontFamily: 'inherit', fontSize: 'clamp(16px,1.5vw,19px)', fontWeight: 600, color: '#0f172a', textAlign: 'left', cursor: 'pointer' }}>
                <span>{q}</span>
                <span aria-hidden="true" style={{ flex: 'none', width: '32px', height: '32px', borderRadius: '50%', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', color: on ? '#ffffff' : '#7c3aed', fontSize: '18px', fontWeight: 400, transition: 'transform .5s cubic-bezier(.34,1.56,.64,1),background .3s,color .3s', transform: on ? 'rotate(45deg)' : 'none', background: on ? '#7c3aed' : '#ffffff' }}>+</span>
              </button>
            </h3>
            <div style={{ display: 'grid', gridTemplateRows: on ? '1fr' : '0fr', transition: 'grid-template-rows .6s cubic-bezier(.2,.8,.2,1)' }}>
              <div style={{ overflow: 'hidden' }}>
                <p style={{ margin: 0, padding: '0 52px 24px 0', fontSize: '15px', lineHeight: 1.65, color: '#64748b', textWrap: 'pretty', opacity: on ? 1 : 0, transition: 'opacity .5s ease' }}>{a}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
