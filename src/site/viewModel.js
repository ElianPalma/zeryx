import ZMotion from '../lib/motion.js'
import { waLink, waTarget, WA_TEXT } from '../config.js'
import {
  LOGOS_A, LOGOS_B, MANIFESTO, HERO_CARDS, ESTADOS, MEDIMOS, RULE, CYCLE_STEPS, PSPS, CHANNELS, RECON, FAQS,
  AGENT_STEPS, AGENT_CAPTIONS, IA_LINKS
} from '../data/content.js'

const NAV_HOME = [
  { t: 'Cómo funciona', href: '#ciclo' },
  { t: 'Garantía', href: '#garantia' },
  { t: 'Integraciones', href: '/producto/integraciones/' },
  { t: 'Precios', href: '#precios' }
]

const NAV_INNER = [
  { t: 'Cómo funciona', href: '/#ciclo' },
  { t: 'Garantía', href: '/producto/garantia/' },
  { t: 'Integraciones', href: '/producto/integraciones/' },
  { t: 'Precios', href: '/#precios' }
]

const AG_SRC = [0, 1, 2, 3, 1]
const AG_TGT = [1, 2, 3, 1, 4]

export function agentsView(state, w, landing) {
  const S = state.agS ?? -1
  const arr = !!state.agArr
  const act = S < 0 ? 0 : (arr ? AG_TGT[S] : AG_SRC[S])
  const seen = n => S < 0 ? n === 0 : [0].concat(AG_TGT.slice(0, S + (arr ? 1 : 0)), [AG_SRC[S]]).includes(n)
  const o = {}
  ;[0, 1, 2, 3, 4].forEach(n => {
    const on = n === act
    o['agN' + n + 's'] = on ? 1.04 : 1
    o['agN' + n + 'z'] = on ? 3 : 1
    o['agN' + n + 'o'] = on ? 1 : seen(n) ? 0.85 : 0.55
    o['agN' + n + 'b'] = on ? '#c4b5fd' : '#e2e8f0'
    o['agN' + n + 'h'] = on ? '0 0 0 5px rgba(167,139,250,.16), 0 26px 50px -20px rgba(124,58,237,.55)' : '0 1px 2px rgba(15,23,42,.05), 0 8px 20px -14px rgba(76,29,149,.18)'
  })
  ;[0, 2, 3, 4].forEach(n => {
    const on = n === act && !(n === 0 && S > 0)
    o['agC' + n + 'o'] = on ? 1 : 0
    o['agC' + n + 'y'] = on ? 'none' : (n === 0 || n === 2 ? 'translateY(6px)' : 'translateY(-6px)')
    o['agC' + n + 'n'] = AGENT_CAPTIONS[n][0]
    o['agC' + n + 't'] = AGENT_CAPTIONS[n][1]
  })
  const paid = S > 2 || (S === 2 && arr)
  const banked = S === 4 && arr
  const hubOn = (S === 0 || S === 3) && arr
  const wide = w >= 900
  return Object.assign(o, {
    agWide: wide,
    agStepsMt: wide ? '64px' : '0',
    agStepCols: wide ? 'repeat(5,minmax(0,1fr))' : 'minmax(0,1fr)',
    agStepGap: wide ? '20px' : '22px',
    agHubT: S === 0 && arr ? 'Zeryx ve que FAC-0381 lleva un día vencida y prepara el mensaje' : S === 3 && arr ? 'Zeryx cruza el pago con FAC-0381 y la marca como cobrada' : 'Zeryx',
    agHubBg: hubOn ? '#7c3aed' : '#ffffff',
    agHubC: hubOn ? '#ffffff' : '#334155',
    agHubBd: hubOn ? '#7c3aed' : '#e2e8f0',
    agPayT: paid ? 'Pagado ✓' : 'Pendiente',
    agPayC: paid ? '#16a34a' : '#d97706',
    agBizB: paid ? '#7c3aed' : '#e2e8f0',
    agBizBg: paid ? '#f3ebff' : '#ffffff',
    agBankC: banked ? '#16a34a' : '#cbd5e1',
    agBankS: banked ? 'Conciliado con FAC-0381' : 'Esperando cobro',
    agBankDot: banked ? '#dcfce7' : '#f1f5f9',
    agSteps: AGENT_STEPS.map(([t, d], i) => {
      const on = i === S
      return {
        n: '0' + (i + 1), t, d,
        nc: on ? '#7c3aed' : '#94a3b8',
        tc: on || i < S ? '#0f172a' : '#94a3b8',
        op: on ? 1 : (wide ? 0.55 : 0.7),
        go: () => { landing.agOn = 1; landing.agStart(i) }
      }
    })
  })
}

function videoSource(url) {
  const vu = (url || '').trim()
  const yt = vu.match(/(?:youtu\.be\/|v=|embed\/|shorts\/)([\w-]{11})/)
  const vm = vu.match(/vimeo\.com\/(?:video\/)?(\d+)/)
  const kind = yt || vm ? 'if' : vu ? 'file' : 'none'
  const embed = yt ? 'https://www.youtube.com/embed/' + yt[1] + '?autoplay=1&rel=0' : vm ? 'https://player.vimeo.com/video/' + vm[1] + '?autoplay=1' : vu
  return { kind, embed }
}

export function buildView(landing) {
  const { props, state } = landing
  const variant = props.heroVariant ?? 'A'
  const w = state.w
  const mobile = w < 720
  const wide = w >= 980
  const menu = state.menu && !wide
  const cols = w < 720 ? 1 : w < 1000 ? 2 : 3
  const video = videoSource(props.videoUrl)
  const home = props.home !== false

  return {
    navItems: home ? NAV_HOME : NAV_INNER,
    waLink: waLink(WA_TEXT.access),
    waLink2: waLink(WA_TEXT.talk),
    waTarget,
    introOn: (props.introCurtain ?? true) && !state.introGone,
    isA: variant === 'A',
    isB: variant === 'B',
    wide,
    notWide: !wide,
    notMobile: !mobile,
    menuOpen: menu,
    bar1: menu ? 'translateY(6px) rotate(45deg)' : 'none',
    bar2: menu ? 0 : 1,
    bar3: menu ? 'translateY(-6px) rotate(-45deg)' : 'none',
    toggleMenu: () => landing.setState(s => ({ menu: !s.menu })),
    closeMenu: () => landing.setState({ menu: false }),

    videoOpen: !!state.video,
    vRatio: video.kind === 'none' ? '1920 / 1124' : '16 / 9',
    vIframe: video.kind === 'if',
    vFile: video.kind === 'file',
    vNone: video.kind === 'none',
    vEmbed: video.embed,
    openVideo: e => landing.openVideo(e),
    closeVideo: () => landing.closeVideo(),
    stop: e => e.stopPropagation(),

    faqs: FAQS.map(([q, a], i) => {
      const on = state.faq === i
      return {
        q, a, d: i * 70,
        rows: on ? '1fr' : '0fr',
        op: on ? 1 : 0,
        rot: on ? 'rotate(45deg)' : 'none',
        ibg: on ? '#7c3aed' : '#ffffff',
        ic: on ? '#ffffff' : '#7c3aed',
        toggle: () => landing.setState(s => ({ faq: s.faq === i ? -1 : i }))
      }
    }),

    pilePos: mobile ? 'static' : 'sticky',
    pileMinH: mobile ? 'auto' : 'min(560px,76vh)',
    tblCols: mobile ? 'minmax(0,1fr) minmax(0,1.2fr) minmax(0,.9fr) minmax(0,.8fr)' : 'minmax(0,1fr) minmax(0,1.3fr) minmax(0,1fr) minmax(0,.9fr) minmax(0,.9fr)',
    vencDisp: mobile ? 'none' : 'block',
    kpiCols: w >= 1100 ? 'repeat(4,minmax(0,1fr))' : 'repeat(2,minmax(0,1fr))',
    mockCols: mobile ? 'minmax(0,1fr)' : '210px minmax(0,1fr)',
    bentoCols: `repeat(${cols},minmax(0,1fr))`,
    spanWide: cols === 1 ? 'span 1' : 'span 2',
    spanAuto: cols === 3 ? 'span 2' : 'span 1',
    priceCols: `repeat(${w < 640 ? 1 : w < 1100 ? 2 : 4},minmax(0,1fr))`,

    logosA: LOGOS_A.concat(LOGOS_A),
    logosB: LOGOS_B.concat(LOGOS_B),
    manifesto: MANIFESTO,
    heroCards: HERO_CARDS,
    estados: ESTADOS,
    medimos: MEDIMOS,
    rule: RULE,
    steps: CYCLE_STEPS,
    psps: PSPS,
    channels: CHANNELS,
    recon: RECON,
    iaLinks: IA_LINKS,

    // Agents se suscribe a landing.agStore y calcula aquí sus valores (ver Agents.jsx).
    agStore: landing.agStore,
    agW: w,
    agLanding: landing,

    tilt: e => ZMotion.tilt(e.currentTarget, e),
    untilt: e => ZMotion.untilt(e.currentTarget),
    magnet: e => ZMotion.magnet(e.currentTarget, e),
    unmagnet: e => ZMotion.unmagnet(e.currentTarget),
    spot: e => {
      const r = e.currentTarget.getBoundingClientRect()
      e.currentTarget.style.setProperty('--x', (e.clientX - r.left) + 'px')
      e.currentTarget.style.setProperty('--y', (e.clientY - r.top) + 'px')
    }
  }
}
