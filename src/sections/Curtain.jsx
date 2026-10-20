export const ICON_PIECES = [
  { d: 'M10.5413 15.4635L13.0084 18.0547V0L10.5413 2.50743V15.4635Z', g: 'v', from: { y: -22 } },
  { d: 'M17.0454 12.0111L14.5783 9.41993V27.4746L17.0454 24.9672V12.0111Z', g: 'v', from: { y: 22 } },
  { d: 'M0 13.1205V15.5876H7.73772L5.24187 13.1205H0Z', g: 'h', from: { x: -22 } },
  { d: 'M27.5868 14.3541V11.887H19.8491L22.3449 14.3541H27.5868Z', g: 'h', from: { x: 22 } },
  { d: 'M10.5412 6.11395L3.37316 13.1204H0H0.000844728L10.5404 2.5056V6.11311L10.5412 6.11395Z', g: 'd', from: { x: 14, y: -14 } },
  { d: 'M17.0454 21.3605L24.2135 14.3541H27.5866H27.5858L17.0463 24.964V21.3614L17.0454 21.3605Z', g: 'd', from: { x: -14, y: 14 } }
]

const GRADIENTS = {
  v: { x1: 0, y1: 0, x2: 0, y2: 1, stops: ['#7c3aed', '#d7c0ff', '#7c3aed'] },
  h: { x1: 0, y1: 0, x2: 1, y2: 0, stops: ['#7c3aed', '#d7c0ff', '#7c3aed'] },
  d: { x1: 1, y1: 0, x2: 0, y2: 1, stops: ['#5b21b6', '#a069fe', '#5b21b6'] }
}

const letter = { display: 'inline-block', transform: 'translateY(110%)' }

export default function Curtain({ v }) {
  if (!v.introOn) return null
  return (
    <div data-curtain="1" aria-hidden="true" style={{ position: 'fixed', inset: 0, zIndex: 100, background: '#280465', display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none', clipPath: 'inset(0 0 0 0)' }}>
      <div data-intro-glow="1" style={{ position: 'absolute', left: '50%', top: '50%', width: '60vmax', height: '60vmax', transform: 'translate(-50%,-50%)', borderRadius: '50%', background: 'radial-gradient(closest-side,rgba(124,58,237,.5),rgba(124,58,237,0))', opacity: 0.6 }} />
      <div data-intro="1" style={{ position: 'relative', display: 'flex', alignItems: 'center', fontSize: 'clamp(44px,7vw,76px)', fontWeight: 700, letterSpacing: '-.03em', color: '#ffffff', lineHeight: 1 }}>
        <svg data-intro-icon="1" viewBox="0 0 28 28" style={{ width: '1.2em', height: '1.2em', overflow: 'visible', flex: 'none' }}>
          <defs>
            {Object.entries(GRADIENTS).map(([k, gr]) => (
              <linearGradient key={k} id={'zx-intro-' + k} x1={gr.x1} y1={gr.y1} x2={gr.x2} y2={gr.y2}>
                {gr.stops.map((c, i) => <stop key={i} offset={i / 2} stopColor={c} />)}
              </linearGradient>
            ))}
            <linearGradient id="zx-intro-shine" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="#ffffff" stopOpacity="0" />
              <stop offset=".5" stopColor="#ffffff" stopOpacity=".85" />
              <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>
            <clipPath id="zx-intro-clip">
              {ICON_PIECES.map(p => <path key={p.d} d={p.d} />)}
            </clipPath>
          </defs>
          <g data-intro-mark="1">
            {ICON_PIECES.map(p => <path key={p.d} data-intro-piece="1" d={p.d} fill={'url(#zx-intro-' + p.g + ')'} style={{ opacity: 0 }} />)}
          </g>
          <g clipPath="url(#zx-intro-clip)">
            <rect data-intro-shine="1" x="-14" y="-4" width="12" height="36" fill="url(#zx-intro-shine)" transform="skewX(-20)" />
          </g>
        </svg>
        <div data-intro-word="1" style={{ width: 0, overflow: 'hidden', whiteSpace: 'nowrap' }}>
          <span style={{ display: 'inline-block', paddingLeft: '.28em', paddingBottom: '.12em', marginBottom: '-.12em', overflow: 'hidden' }}>
            {'zeryx'.split('').map((c, i) => <span key={i} data-intro-letter="1" style={letter}>{c}</span>)}
          </span>
        </div>
      </div>
    </div>
  )
}
