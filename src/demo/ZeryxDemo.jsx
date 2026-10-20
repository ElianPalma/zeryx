import React from 'react'
import { CompositionStage, useComposition, Easing, interpolate, clamp } from './engine.jsx'
import { DEMO_SCENES, DEMO_PLAYBACK } from './scenes.js'
try {
  if (/embed/.test(location.search)) localStorage.setItem('animstage-v3:t', '0');
} catch (e) {}
const C = {
  p: '#7c3aed',
  p50: '#f3ebff',
  p100: '#ede9fe',
  pStrong: '#4d18a9',
  deep: '#280465',
  light: '#bc95ff',
  weak: '#d7c0ff',
  med: '#6427cb',
  g50: '#f8fafc',
  g100: '#f1f5f9',
  g200: '#e2e8f0',
  g300: '#cbd5e1',
  g400: '#94a3b8',
  g500: '#64748b',
  g600: '#475569',
  g700: '#334155',
  g800: '#1e293b',
  g900: '#0f172a',
  ok: '#16a34a',
  okBg: '#dcfce7',
  warn: '#d97706',
  warnBg: '#fef3c7',
  err: '#dc2626',
  errBg: '#fee2e2',
  info: '#2563eb',
  infoBg: '#dbeafe',
  amber7: '#b45309',
  red7: '#b91c1c',
  green7: '#15803d'
};
const MOTION = {
  enter: (T, s, d = 0.7) => Easing.easeOutCubic(clamp((T - s) / d, 0, 1)),
  pop: (T, s, d = 0.6) => Easing.easeOutBack(clamp((T - s) / d, 0, 1)),
  glide: (T, keys, vals) => interpolate(keys, vals, Easing.easeInOutCubic)(T)
};
const eur = n => Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') + ',00 €';
function useQ() {
  const {
    T,
    CUES
  } = useComposition();
  return {
    T,
    A: CUES.Apertura,
    F: CUES.Factura,
    Ap: CUES.Aprobacion,
    Ct: CUES.Contacta,
    Cb: CUES.Cobra,
    Cc: CUES.Concilia,
    Z: CUES.Informa,
    Ci: CUES.Cierre
  };
}
const IC = {
  search: ['c11,11,7', 'M20 20l-3.5-3.5'],
  home: ['M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z'],
  cart: ['M3 4h2l2.4 11h11L21 8H6.2', 'c9,19.5,1.3', 'c17,19.5,1.3'],
  users: ['c9,8,3.5', 'M2.5 20a6.5 6.5 0 0 1 13 0', 'M16 4.5a3.5 3.5 0 0 1 0 7', 'M21.5 20a6.5 6.5 0 0 0-3.5-5.8'],
  wallet: ['M4 7h15a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h12', 'c16,13.5,1.2'],
  bank: ['M3 10h18', 'M5 10v8M9.5 10v8M14.5 10v8M19 10v8', 'M3 20h18', 'M12 3l9 5H3z'],
  chart: ['M4 4v16h16', 'M8 15l3.5-4 3 2.5L19 8'],
  file: ['M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z', 'M14 3v5h5', 'M9 13h6M9 17h4'],
  chevL: ['M15 18l-6-6 6-6'],
  chevD: ['M6 9l6 6 6-6'],
  check: ['M5 12.5l4.5 4.5L19 7.5'],
  x: ['M6 6l12 12M18 6 6 18'],
  plus: ['M12 5v14M5 12h14'],
  shield: ['M12 3l8 3v6c0 4.8-3.4 8-8 9-4.6-1-8-4.2-8-9V6z'],
  rotate: ['M20 11a8 8 0 0 0-14.5-4.5L4 8', 'M4 3.5V8h4.5', 'M4 13a8 8 0 0 0 14.5 4.5L20 16', 'M20 20.5V16h-4.5'],
  sliders: ['M4 7h9M17 7h3M4 17h3M11 17h9', 'c15,7,2', 'c9,17,2'],
  send: ['M21 3 10 14', 'M21 3l-6.5 18-4-8.5L2 8.5z'],
  thumbD: ['M17 14V3', 'M7 14l3 7a2 2 0 0 0 2-2v-4h5.5a2 2 0 0 0 2-2.3l-1.2-8A2 2 0 0 0 16.3 3H7z'],
  chartPie: ['M12 3v9h9', 'M20.5 15.5A9 9 0 1 1 8.5 3.7'],
  list: ['M9 6h11M9 12h11M9 18h11', 'M4 6l1 1 2-2M4 12l1 1 2-2M4 18l1 1 2-2'],
  clip: ['M9 4h6v3H9z', 'M15 5h2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2'],
  chat: ['M21 12a8 8 0 0 1-11.5 7.2L4 20.5l1.3-5A8 8 0 1 1 21 12z'],
  briefcase: ['M4 8h16v11H4z', 'M9 8V5h6v3', 'M4 13h16'],
  dolly: ['M3 4h2.5l3 12', 'c10,19,2', 'M12.5 18H20', 'M11 7h7v7h-5.2z'],
  contact: ['M5 3h14v18H5z', 'c12,10,2.5', 'M8 17a4 4 0 0 1 8 0'],
  bars: ['M4 4v16h16', 'M8 16v-3M12 16V9M16 16v-6'],
  link: ['M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1', 'M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1'],
  box: ['M4 9h16v11H4z', 'M3 5h18v4H3z', 'M10 13h4'],
  coins: ['M4 7c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3z', 'M4 7v5c0 1.7 3.6 3 8 3s8-1.3 8-3V7', 'M4 12v5c0 1.7 3.6 3 8 3s8-1.3 8-3v-5'],
  panel: ['M4 4h16v16H4z', 'M9.5 4v16'],
  euro: ['M17 6.5A6.5 6.5 0 1 0 17 17.5', 'M4 10.5h9M4 14h9'],
  alert: ['M12 3l9.5 17h-19z', 'M12 10v4M12 17.5v.01'],
  trend: ['M3 17l6-6 4 4 8-8', 'M15 7h6v6'],
  clock: ['c12,12,9', 'M12 7v5l3 2'],
  video: ['M3 7.5A1.5 1.5 0 0 1 4.5 6h9A1.5 1.5 0 0 1 15 7.5v9a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 3 16.5z', 'M15 10.5l6-3.5v10l-6-3.5'],
  phone: ['M5 3.5h3.5l1.8 4.5-2.3 1.4a11 11 0 0 0 6.6 6.6l1.4-2.3 4.5 1.8V19a1.5 1.5 0 0 1-1.6 1.5A16.5 16.5 0 0 1 3.5 5.1 1.5 1.5 0 0 1 5 3.5z'],
  camera: ['M4 8h3l1.5-2.5h7L17 8h3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z', 'c12,13.5,3.5'],
  mic: ['M9 6a3 3 0 0 1 6 0v6a3 3 0 0 1-6 0z', 'M5.5 11.5a6.5 6.5 0 0 0 13 0', 'M12 18v3'],
  sticker: ['M20 12a8 8 0 1 1-8-8h8v8z', 'M9 10v.01M15 10v.01', 'M8.5 14.5a4.5 4.5 0 0 0 7 0'],
  lock: ['M6 11h12v10H6z', 'M8.5 11V8a3.5 3.5 0 0 1 7 0v3'],
  share: ['M12 15V3', 'M7.5 7.5 12 3l4.5 4.5', 'M5 12v8h14v-8'],
  reply: ['M10 8 4 13l6 5', 'M4 13h10a6 6 0 0 1 6 6']
};
function Icon({
  n,
  size = 18,
  color = 'currentColor',
  w = 2
}) {
  return React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: w,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      boxSizing: 'border-box',
      display: 'block',
      flex: 'none'
    }
  }, IC[n].map((d, i) => {
    if (d[0] === 'c') {
      const [x, y, r] = d.slice(1).split(',').map(Number);
      return React.createElement("circle", {
        key: i,
        cx: x,
        cy: y,
        r: r
      });
    }
    return React.createElement("path", {
      key: i,
      d: d
    });
  }));
}
function Ticks({
  read
}) {
  const c = read ? '#53bdeb' : '#8696a0';
  return React.createElement("svg", {
    width: "17",
    height: "11",
    viewBox: "0 0 17 11",
    fill: "none",
    stroke: c,
    strokeWidth: "1.6",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      boxSizing: 'border-box',
      display: 'block'
    }
  }, React.createElement("path", {
    d: "M1 6l3 3 6-7.5"
  }), React.createElement("path", {
    d: "M7 8.5 7.6 9l6-7.5"
  }));
}
const LOGO_P = [['M17.0454 12.0111L14.5783 9.41993V27.4746L17.0454 24.9672V12.0111Z', 0], ['M27.5868 14.3541V11.887H19.8491L22.3449 14.3541H27.5868Z', 1], ['M10.5413 15.4635L13.0084 18.0547V0L10.5413 2.50743V15.4635Z', 2], ['M0 13.1205V15.5876H7.73772L5.24187 13.1205H0Z', 3], ['M10.5412 6.11395L3.37316 13.1204H0H0.000844728L10.5404 2.5056V6.11311L10.5412 6.11395Z', 4], ['M17.0454 21.3605L24.2135 14.3541H27.5866H27.5858L17.0463 24.964V21.3614L17.0454 21.3605Z', 5]];
const LOGO_G = [[15.81, 27.47, 15.81, 9.42, 0], [20.1, 13.12, 27.67, 13.12, 0], [11.78, 0, 11.78, 18.05, 0], [7.49, 14.35, -0.08, 14.35, 0], [10.7, 4.13, 1.14, 13.75, 1], [16.89, 23.34, 26.45, 13.72, 1]];
function Logo({
  size,
  id,
  mono
}) {
  return React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 28 28",
    style: {
      boxSizing: 'border-box',
      display: 'block',
      flex: 'none'
    }
  }, React.createElement("defs", null, LOGO_G.map((g, i) => React.createElement("linearGradient", {
    key: i,
    id: id + i,
    x1: g[0],
    y1: g[1],
    x2: g[2],
    y2: g[3],
    gradientUnits: "userSpaceOnUse"
  }, React.createElement("stop", {
    stopColor: g[4] ? '#390C87' : '#4D18A9'
  }), React.createElement("stop", {
    offset: "0.5",
    stopColor: g[4] ? '#7C3AED' : '#A069FE'
  }), React.createElement("stop", {
    offset: "1",
    stopColor: g[4] ? '#390C87' : '#4D18A9'
  })))), LOGO_P.map((p, i) => React.createElement("path", {
    key: i,
    d: p[0],
    fill: mono || `url(#${id}${p[1]})`
  })));
}
const Badge = ({
  label,
  v,
  style
}) => {
  const m = {
    success: [C.okBg, C.ok],
    warning: [C.warnBg, C.warn],
    error: [C.errBg, C.err],
    info: [C.infoBg, C.info],
    primary: [C.p100, C.p],
    neutral: [C.g100, C.g700]
  }[v];
  return React.createElement("span", {
    style: Object.assign({
      boxSizing: 'border-box',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      whiteSpace: 'nowrap',
      borderRadius: 999,
      padding: '3px 11px',
      fontSize: 13,
      fontWeight: 500,
      background: m[0],
      color: m[1]
    }, style)
  }, label);
};
function Tap({
  T,
  at,
  x,
  y,
  size = 90,
  color = 'rgba(15,23,42,.18)'
}) {
  const k = clamp((T - at) / 0.5, 0, 1);
  if (k <= 0 || k >= 1) return null;
  return React.createElement("span", {
    style: {
      boxSizing: 'border-box',
      position: 'absolute',
      left: x - size / 2,
      top: y - size / 2,
      width: size,
      height: size,
      borderRadius: '50%',
      background: color,
      transform: `scale(${0.3 + 0.7 * Easing.easeOutCubic(k)})`,
      opacity: 1 - k,
      pointerEvents: 'none',
      zIndex: 20
    }
  });
}
function Intro() {
  const {
    T,
    A,
    F
  } = useQ();
  const out = MOTION.enter(T, F - 1.0, 0.8);
  if (out >= 1) return null;
  const lg = MOTION.pop(T, A + 0.2, 0.9),
    wm = MOTION.enter(T, A + 0.7, 0.9),
    tg = MOTION.enter(T, A + 1.4, 0.9);
  return React.createElement("div", {
    style: {
      boxSizing: 'border-box',
      position: 'absolute',
      inset: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 36,
      opacity: 1 - out,
      transform: `scale(${1 + 0.06 * out + 0.015 * clamp(T / 4, 0, 1)})`
    }
  }, React.createElement("div", {
    style: {
      boxSizing: 'border-box',
      display: 'flex',
      alignItems: 'center',
      gap: 30
    }
  }, React.createElement("div", {
    style: {
      boxSizing: 'border-box',
      transform: `scale(${lg}) rotate(${(1 - lg) * -30}deg)`,
      opacity: clamp(lg, 0, 1)
    }
  }, React.createElement(Logo, {
    size: 128,
    id: "lgI"
  })), React.createElement("div", {
    style: {
      boxSizing: 'border-box',
      fontSize: 144,
      fontWeight: 700,
      letterSpacing: '-.05em',
      color: C.g900,
      lineHeight: 1,
      opacity: wm,
      transform: `translateX(${(1 - wm) * -24}px)`
    }
  }, "zeryx")), React.createElement("div", {
    style: {
      boxSizing: 'border-box',
      fontSize: 40,
      fontWeight: 500,
      color: C.g500,
      letterSpacing: '-.02em',
      whiteSpace: 'nowrap',
      opacity: tg,
      transform: `translateY(${(1 - tg) * 20}px)`
    }
  }, "As\xED cobra Zeryx una factura vencida."));
}
const AX = 140,
  AY = 48,
  AW = 1640,
  AH = 864;
const ROWS = [['FAC-0379', '02/09/2026', 'Grupo Lumen', 'administracion@grupolumen.es', '02/10/2026', 'vencida hace 11 días', C.amber7, '3.120,00 €', '8-15 días', 'warning'], ['FAC-0381', '01/09/2026', 'Constructoras Norte', 'pagos@cnorte.es', '01/10/2026', 'vencida hace 12 días', C.amber7, '8.750,00 €', '8-15 días', 'warning'], ['FAC-0372', '20/08/2026', 'Dist. Pérez', 'facturas@distperez.com', '19/09/2026', 'vencida hace 24 días', C.red7, '6.400,00 €', '16-30 días', 'warning'], ['FAC-0384', '18/09/2026', 'Talleres Ebro', 'admin@talleresebro.es', '18/10/2026', 'vence en 5 días', C.green7, '1.940,00 €', 'Antes del vencimiento', 'info'], ['FAC-0388', '24/09/2026', 'Clínica Sol', 'contabilidad@clinicasol.es', '24/10/2026', 'vence en 11 días', C.green7, '2.215,00 €', 'Antes del vencimiento', 'info']];
const COLS = '200px 330px 250px 150px 170px 1fr';
function Sidebar() {
  const Sec = ({
    t,
    first
  }) => React.createElement("div", {
    style: {
      boxSizing: 'border-box',
      margin: first ? '10px 0 8px' : '30px 0 8px',
      padding: '0 12px',
      fontSize: 11,
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '.08em',
      color: C.g500
    }
  }, t);
  const Item = ({
    i,
    t,
    active,
    group
  }) => React.createElement("div", {
    style: {
      boxSizing: 'border-box',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '8px 12px',
      borderRadius: 8,
      fontSize: 14.5,
      whiteSpace: 'nowrap',
      fontWeight: active ? 500 : 400,
      background: active ? C.p50 : 'transparent',
      color: C.g800
    }
  }, active && React.createElement("span", {
    style: {
      boxSizing: 'border-box',
      position: 'absolute',
      left: -10,
      top: 6,
      bottom: 6,
      width: 3,
      borderRadius: 3,
      background: C.p
    }
  }), React.createElement("span", {
    style: {
      boxSizing: 'border-box',
      width: 20,
      display: 'flex',
      justifyContent: 'center',
      color: active ? C.p : C.g700
    }
  }, React.createElement(Icon, {
    n: i,
    size: 17,
    w: 1.7
  })), React.createElement("span", {
    style: {
      boxSizing: 'border-box',
      flex: 1
    }
  }, t), group && React.createElement("span", {
    style: {
      boxSizing: 'border-box',
      color: C.g500
    }
  }, React.createElement(Icon, {
    n: "chevD",
    size: 14
  })));
  return React.createElement("div", {
    style: {
      boxSizing: 'border-box',
      position: 'absolute',
      left: 0,
      top: 40,
      bottom: 0,
      width: 232,
      background: '#ffffff',
      borderRight: `1px solid ${C.g200}`,
      display: 'flex',
      flexDirection: 'column'
    }
  }, React.createElement("div", {
    style: {
      boxSizing: 'border-box',
      height: 64,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 16px'
    }
  }, React.createElement("div", {
    style: {
      boxSizing: 'border-box',
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, React.createElement(Logo, {
    size: 28,
    id: "lgS"
  }), React.createElement("span", {
    style: {
      boxSizing: 'border-box',
      fontSize: 20,
      fontWeight: 700,
      letterSpacing: '-.02em',
      color: C.g900
    }
  }, "zeryx")), React.createElement("span", {
    style: {
      boxSizing: 'border-box',
      color: C.g600
    }
  }, React.createElement(Icon, {
    n: "panel",
    size: 19,
    w: 1.7
  }))), React.createElement("div", {
    style: {
      boxSizing: 'border-box',
      padding: '4px 12px 4px'
    }
  }, React.createElement("div", {
    style: {
      boxSizing: 'border-box',
      height: 44,
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '0 12px',
      borderRadius: 10,
      border: `1px solid ${C.g200}`,
      boxShadow: '0 1px 2px rgba(0,0,0,.05)',
      fontSize: 14,
      color: C.g500,
      whiteSpace: 'nowrap'
    }
  }, React.createElement(Icon, {
    n: "search",
    size: 14
  }), React.createElement("span", {
    style: {
      boxSizing: 'border-box',
      flex: 1
    }
  }, "Buscar o crear\u2026"), React.createElement("span", {
    style: {
      boxSizing: 'border-box',
      fontSize: 11,
      padding: '2px 6px',
      borderRadius: 6,
      border: `1px solid ${C.g200}`,
      background: C.g50
    }
  }, "Ctrl K"))), React.createElement("div", {
    style: {
      boxSizing: 'border-box',
      padding: '0 10px',
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, React.createElement(Sec, {
    t: "Empresa",
    first: true
  }), React.createElement(Item, {
    i: "chartPie",
    t: "Panel"
  }), React.createElement(Item, {
    i: "briefcase",
    t: "Facturaci\xF3n",
    group: true
  }), React.createElement(Item, {
    i: "contact",
    t: "Clientes",
    group: true
  }), React.createElement(Sec, {
    t: "Cobro"
  }), React.createElement(Item, {
    i: "file",
    t: "Facturas",
    active: true
  }), React.createElement(Item, {
    i: "chat",
    t: "Conversaciones"
  }), React.createElement(Item, {
    i: "clock",
    t: "Promesas de pago"
  }), React.createElement(Item, {
    i: "link",
    t: "Enlaces de pago"
  }), React.createElement(Item, {
    i: "check",
    t: "Conciliaci\xF3n"
  }), React.createElement(Item, {
    i: "alert",
    t: "Para ti"
  })), React.createElement("div", {
    style: {
      boxSizing: 'border-box',
      marginTop: 'auto',
      padding: 12
    }
  }, React.createElement("div", {
    style: {
      boxSizing: 'border-box',
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: 8
    }
  }, React.createElement("span", {
    style: {
      boxSizing: 'border-box',
      width: 36,
      height: 36,
      borderRadius: '50%',
      background: `linear-gradient(135deg,${C.p},${C.med})`,
      color: '#ffffff',
      fontSize: 12,
      fontWeight: 600,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, "RA"), React.createElement("span", {
    style: {
      boxSizing: 'border-box',
      flex: 1,
      lineHeight: 1.25,
      whiteSpace: 'nowrap'
    }
  }, React.createElement("span", {
    style: {
      boxSizing: 'border-box',
      display: 'block',
      fontSize: 14,
      fontWeight: 500,
      color: C.g900
    }
  }, "Reformas Atlas"), React.createElement("span", {
    style: {
      boxSizing: 'border-box',
      display: 'block',
      fontSize: 12,
      color: C.g500
    }
  }, "company")), React.createElement("span", {
    style: {
      boxSizing: 'border-box',
      color: C.g500
    }
  }, React.createElement(Icon, {
    n: "chevD",
    size: 13
  })))));
}
function Btn({
  children,
  kind,
  press,
  style
}) {
  const k = {
    primary: [C.p, '#ffffff', C.p],
    outline: ['#ffffff', C.g700, C.g300],
    warn: ['#ffffff', C.warn, '#fcd34d'],
    ok: [C.ok, '#ffffff', C.ok],
    err: ['#ffffff', C.err, '#fca5a5']
  }[kind];
  return React.createElement("div", {
    style: Object.assign({
      boxSizing: 'border-box',
      position: 'relative',
      height: 40,
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      padding: '0 16px',
      borderRadius: 8,
      background: k[0],
      color: k[1],
      border: `1px solid ${k[2]}`,
      fontSize: 14,
      fontWeight: 500,
      whiteSpace: 'nowrap',
      transform: `scale(${press ? 0.95 : 1})`,
      overflow: 'hidden'
    }, style)
  }, children);
}
function AppPage() {
  const {
    T,
    F,
    Ap,
    Ct,
    Cc,
    Z
  } = useQ();
  const vis = MOTION.glide(T, [F - 0.8, F + 0.3, Ct - 0.6, Ct, Cc - 0.2, Cc + 0.5, Z - 0.6, Z], [0, 1, 1, 0, 0, 1, 1, 0]);
  const rise = 1 - MOTION.enter(T, F - 0.8, 1.1);
  const paid = T >= Cc + 1.0,
    kk = MOTION.enter(T, Cc + 2.2, 1.0);
  const hl = MOTION.enter(T, F + 1.8, 0.6) * (1 - MOTION.enter(T, Cc + 3.6, 0.8));
  const statPop = paid ? 0.6 + 0.4 * MOTION.pop(T, Cc + 1.0, 0.5) : 1;
  const apPress = T > Ap - 0.2 && T < Ap + 0.05;
  const pulse = T > F + 4.2 && T < Ap ? 1 + 0.08 * Math.max(0, Math.sin((T - F) * 7)) : 1;
  const kpis = [['Pendiente de cobro', eur(187250 - 8750 * kk), 'euro', 'primary', '14 facturas en seguimiento', C.g500], ['Vencido', eur(41380 - 8750 * kk), 'alert', 'error', '5 facturas vencidas', C.g500], ['Cobrado este mes', eur(62940 + 8750 * kk), 'trend', 'success', '3 pagadas hoy por el enlace', C.ok], ['Promesas de pago', '6 abiertas', 'clock', 'info', '3 vencen esta semana', C.g500]];
  const tone = {
    primary: [C.p100, C.p],
    error: [C.errBg, C.err],
    success: [C.okBg, C.ok],
    info: [C.infoBg, C.info]
  };
  const toast = MOTION.enter(T, Cc + 1.6, 0.6) * (1 - MOTION.enter(T, Z - 0.8, 0.4));
  if (vis <= 0) return null;
  return React.createElement("div", {
    style: {
      boxSizing: 'border-box',
      position: 'absolute',
      left: AX,
      top: AY,
      width: AW,
      height: AH,
      borderRadius: 16,
      overflow: 'hidden',
      background: C.g50,
      border: `1px solid ${C.g200}`,
      boxShadow: '0 50px 100px -30px rgba(40,4,101,.28), 0 10px 30px -10px rgba(15,23,42,.12)',
      opacity: vis,
      transform: `translateY(${rise * 120}px) scale(${0.98 + 0.02 * vis})`
    }
  }, React.createElement("div", {
    style: {
      boxSizing: 'border-box',
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      height: 40,
      background: '#ffffff',
      borderBottom: `1px solid ${C.g200}`,
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '0 16px'
    }
  }, ['#ff5f57', '#febc2e', '#28c840'].map(c => React.createElement("span", {
    key: c,
    style: {
      boxSizing: 'border-box',
      width: 12,
      height: 12,
      borderRadius: '50%',
      background: c
    }
  })), React.createElement("div", {
    style: {
      boxSizing: 'border-box',
      position: 'absolute',
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      whiteSpace: 'nowrap',
      padding: '5px 16px',
      borderRadius: 8,
      background: C.g100,
      fontSize: 13,
      color: C.g500
    }
  }, React.createElement(Icon, {
    n: "lock",
    size: 11
  }), "app.zeryx.io/cobro/facturas")), React.createElement(Sidebar, null), React.createElement("div", {
    style: {
      boxSizing: 'border-box',
      position: 'absolute',
      left: 264,
      top: 68,
      right: 32,
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, React.createElement("span", {
    style: {
      boxSizing: 'border-box',
      width: 40,
      height: 40,
      borderRadius: 8,
      background: '#ffffff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: C.g900,
      boxShadow: '0 1px 2px rgba(0,0,0,.05)'
    }
  }, React.createElement(Icon, {
    n: "chevL",
    size: 16
  })), React.createElement("div", null, React.createElement("div", {
    style: {
      boxSizing: 'border-box',
      fontSize: 26,
      fontWeight: 600,
      color: C.g900,
      letterSpacing: '-.01em'
    }
  }, "Cobro de facturas"), React.createElement("div", {
    style: {
      boxSizing: 'border-box',
      marginTop: 2,
      fontSize: 15,
      color: C.g500,
      whiteSpace: 'nowrap'
    }
  }, "Zeryx habla con cada cliente hasta que paga \xB7 WhatsApp y correo"))), React.createElement("div", {
    style: {
      boxSizing: 'border-box',
      position: 'absolute',
      right: 32,
      top: 148,
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, React.createElement(Badge, {
    label: "Supervisado",
    v: "warning"
  }), React.createElement(Btn, {
    kind: "warn",
    press: apPress,
    style: {
      boxSizing: 'border-box',
      transform: `scale(${apPress ? 0.95 : pulse})`
    }
  }, React.createElement(Icon, {
    n: "shield",
    size: 15
  }), "Aprobaciones", React.createElement("span", {
    style: {
      boxSizing: 'border-box',
      minWidth: 20,
      height: 20,
      borderRadius: 999,
      background: '#f59e0b',
      color: '#ffffff',
      fontSize: 11,
      fontWeight: 700,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 6px'
    }
  }, T < Ap + 5.0 ? 1 : 0)), React.createElement(Btn, {
    kind: "outline"
  }, React.createElement(Icon, {
    n: "rotate",
    size: 15
  }), "Actualizar"), React.createElement(Btn, {
    kind: "primary"
  }, React.createElement(Icon, {
    n: "sliders",
    size: 15
  }), "Configurar")), React.createElement("div", {
    style: {
      boxSizing: 'border-box',
      position: 'absolute',
      left: 264,
      right: 32,
      top: 204,
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 16
    }
  }, kpis.map(k => React.createElement("div", {
    key: k[0],
    style: {
      boxSizing: 'border-box',
      height: 136,
      padding: 20,
      borderRadius: 12,
      border: `1px solid ${C.g200}`,
      background: '#ffffff',
      boxShadow: '0 1px 2px rgba(0,0,0,.05)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }
  }, React.createElement("div", {
    style: {
      boxSizing: 'border-box',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, React.createElement("span", {
    style: {
      boxSizing: 'border-box',
      fontSize: 14,
      color: C.g500,
      whiteSpace: 'nowrap'
    }
  }, k[0]), React.createElement("span", {
    style: {
      boxSizing: 'border-box',
      width: 36,
      height: 36,
      borderRadius: '50%',
      background: tone[k[3]][0],
      color: tone[k[3]][1],
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, React.createElement(Icon, {
    n: k[2],
    size: 17
  }))), React.createElement("div", {
    style: {
      boxSizing: 'border-box',
      fontSize: 30,
      fontWeight: 700,
      letterSpacing: '-.02em',
      color: C.g900,
      fontVariantNumeric: 'tabular-nums',
      whiteSpace: 'nowrap'
    }
  }, k[1]), React.createElement("div", {
    style: {
      boxSizing: 'border-box',
      fontSize: 12,
      color: k[5],
      fontWeight: k[5] === C.ok ? 500 : 400
    }
  }, k[4])))), React.createElement("div", {
    style: {
      boxSizing: 'border-box',
      position: 'absolute',
      left: 264,
      right: 32,
      top: 364,
      height: 41,
      display: 'flex',
      gap: 4,
      borderBottom: `1px solid ${C.g200}`
    }
  }, [['chartPie', 'Resumen'], ['file', 'Facturas', '14'], ['chat', 'Conversaciones', '9'], ['clock', 'Promesas', '6'], ['clip', 'Registro', '38']].map((t, i) => React.createElement("div", {
    key: t[1],
    style: {
      boxSizing: 'border-box',
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '0 16px',
      whiteSpace: 'nowrap',
      fontSize: 14,
      fontWeight: i === 1 ? 600 : 400,
      color: i === 1 ? C.pStrong : C.g500,
      borderBottom: `2px solid ${i === 1 ? C.pStrong : 'transparent'}`,
      marginBottom: -1
    }
  }, React.createElement(Icon, {
    n: t[0],
    size: 15
  }), t[1], t[2] && React.createElement("span", {
    style: {
      boxSizing: 'border-box',
      fontSize: 12,
      color: C.g400,
      fontWeight: 400
    }
  }, "(", t[2], ")")))), React.createElement("div", {
    style: {
      boxSizing: 'border-box',
      position: 'absolute',
      left: 264,
      right: 32,
      top: 424,
      padding: 20,
      borderRadius: 8,
      background: '#ffffff',
      boxShadow: '0 4px 12px 0 rgba(32,27,40,.1)'
    }
  }, React.createElement("div", {
    style: {
      boxSizing: 'border-box',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      height: 56
    }
  }, React.createElement("div", null, React.createElement("div", {
    style: {
      boxSizing: 'border-box',
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontSize: 15,
      fontWeight: 600,
      color: C.g700
    }
  }, React.createElement(Icon, {
    n: "file",
    size: 15,
    color: C.pStrong
  }), "Facturas pendientes"), React.createElement("div", {
    style: {
      boxSizing: 'border-box',
      marginTop: 3,
      fontSize: 12,
      color: C.g500,
      whiteSpace: 'nowrap'
    }
  }, "Cada factura vencida tiene una conversaci\xF3n abierta con el cliente.")), React.createElement("div", {
    style: {
      boxSizing: 'border-box',
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, React.createElement("div", {
    style: {
      boxSizing: 'border-box',
      width: 220,
      height: 30,
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      padding: '0 8px',
      borderRadius: 4,
      border: `1px solid ${C.p}`,
      fontSize: 12,
      color: C.g400
    }
  }, React.createElement(Icon, {
    n: "search",
    size: 12
  }), "Cliente o n\xFAmero"), [['En seguimiento (14)', 1], ['Apartadas (2)'], ['Todas (16)']].map(c => React.createElement("span", {
    key: c[0],
    style: {
      boxSizing: 'border-box',
      whiteSpace: 'nowrap',
      padding: '5px 12px',
      borderRadius: 999,
      fontSize: 12,
      border: `1px solid ${c[1] ? C.p : C.g300}`,
      background: c[1] ? C.pStrong : '#ffffff',
      color: c[1] ? '#ffffff' : C.g600
    }
  }, c[0])))), React.createElement("div", {
    style: {
      boxSizing: 'border-box',
      display: 'grid',
      gridTemplateColumns: COLS,
      height: 36,
      alignItems: 'center',
      borderBottom: `1px solid ${C.g200}`,
      fontSize: 13,
      fontWeight: 500,
      color: C.g500
    }
  }, React.createElement("span", null, "Factura"), React.createElement("span", null, "Cliente"), React.createElement("span", null, "Vencimiento"), React.createElement("span", {
    style: {
      boxSizing: 'border-box',
      textAlign: 'right',
      paddingRight: 24
    }
  }, "Total"), React.createElement("span", {
    style: {
      boxSizing: 'border-box',
      textAlign: 'right',
      paddingRight: 24
    }
  }, "Pendiente"), React.createElement("span", null, "Estado")), ROWS.map((r, i) => {
    const tgt = i === 1,
      isPaid = tgt && paid;
    return React.createElement("div", {
      key: r[0],
      style: {
        boxSizing: 'border-box',
        position: 'relative',
        display: 'grid',
        gridTemplateColumns: COLS,
        height: 56,
        alignItems: 'center',
        borderBottom: `1px solid ${C.g100}`
      }
    }, tgt && React.createElement("div", {
      style: {
        boxSizing: 'border-box',
        position: 'absolute',
        left: -10,
        right: -10,
        top: 2,
        bottom: 2,
        borderRadius: 10,
        background: `rgba(124,58,237,${0.05 * hl})`,
        boxShadow: `inset 0 0 0 2px rgba(124,58,237,${0.9 * hl})`
      }
    }), React.createElement("span", {
      style: {
        boxSizing: 'border-box',
        position: 'relative',
        lineHeight: 1.3
      }
    }, React.createElement("span", {
      style: {
        boxSizing: 'border-box',
        display: 'block',
        fontSize: 14,
        fontWeight: 600,
        color: C.g800
      }
    }, r[0]), React.createElement("span", {
      style: {
        boxSizing: 'border-box',
        display: 'block',
        fontSize: 12,
        color: C.g400
      }
    }, "emitida ", r[1])), React.createElement("span", {
      style: {
        boxSizing: 'border-box',
        position: 'relative',
        lineHeight: 1.3
      }
    }, React.createElement("span", {
      style: {
        boxSizing: 'border-box',
        display: 'block',
        fontSize: 14,
        color: C.g800
      }
    }, r[2]), React.createElement("span", {
      style: {
        boxSizing: 'border-box',
        display: 'block',
        fontSize: 12,
        color: C.g400
      }
    }, r[3])), React.createElement("span", {
      style: {
        boxSizing: 'border-box',
        position: 'relative',
        lineHeight: 1.3
      }
    }, React.createElement("span", {
      style: {
        boxSizing: 'border-box',
        display: 'block',
        fontSize: 14,
        color: C.g800
      }
    }, r[4]), React.createElement("span", {
      style: {
        boxSizing: 'border-box',
        display: 'block',
        fontSize: 12,
        color: isPaid ? C.green7 : r[6]
      }
    }, isPaid ? 'pagada hoy' : r[5])), React.createElement("span", {
      style: {
        boxSizing: 'border-box',
        position: 'relative',
        textAlign: 'right',
        paddingRight: 24,
        fontSize: 14,
        color: C.g600
      }
    }, r[7]), React.createElement("span", {
      style: {
        boxSizing: 'border-box',
        position: 'relative',
        textAlign: 'right',
        paddingRight: 24,
        lineHeight: 1.3
      }
    }, React.createElement("span", {
      style: {
        boxSizing: 'border-box',
        display: 'block',
        fontSize: 14,
        fontWeight: 700,
        color: C.g900
      }
    }, isPaid ? '0,00 €' : r[7]), isPaid && React.createElement("span", {
      style: {
        boxSizing: 'border-box',
        display: 'block',
        fontSize: 12,
        color: C.green7
      }
    }, "pagado ", r[7])), React.createElement("span", {
      style: {
        boxSizing: 'border-box',
        position: 'relative'
      }
    }, isPaid ? React.createElement(Badge, {
      label: "Cobrada \xB7 conciliada",
      v: "success",
      style: {
        boxSizing: 'border-box',
        transform: `scale(${statPop})`,
        transformOrigin: '0 50%'
      }
    }) : React.createElement(Badge, {
      label: r[8],
      v: r[9]
    })));
  })), React.createElement("div", {
    style: {
      boxSizing: 'border-box',
      position: 'absolute',
      right: 32,
      top: 60,
      width: 340,
      padding: '14px 16px',
      borderRadius: 12,
      background: '#ffffff',
      border: `1px solid ${C.g200}`,
      boxShadow: '0 20px 40px -12px rgba(15,23,42,.25)',
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      opacity: toast,
      transform: `translateY(${(1 - toast) * -16}px)`
    }
  }, React.createElement("span", {
    style: {
      boxSizing: 'border-box',
      width: 36,
      height: 36,
      borderRadius: '50%',
      background: C.okBg,
      color: C.ok,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, React.createElement(Icon, {
    n: "check",
    size: 18,
    w: 2.5
  })), React.createElement("span", {
    style: {
      boxSizing: 'border-box',
      lineHeight: 1.3,
      whiteSpace: 'nowrap'
    }
  }, React.createElement("span", {
    style: {
      boxSizing: 'border-box',
      display: 'block',
      fontSize: 14,
      fontWeight: 600,
      color: C.g900
    }
  }, "Pago recibido y conciliado"), React.createElement("span", {
    style: {
      boxSizing: 'border-box',
      display: 'block',
      fontSize: 13,
      color: C.g500
    }
  }, "Constructoras Norte \xB7 8.750,00 \u20AC"))), React.createElement(ApprovalsDrawer, null));
}
const MSG = 'Hola Carlos, soy del equipo de cobro de Reformas Atlas. La factura FAC-0381, de 8.750,00 €, venció el 1 de octubre. ¿Hay algo que la esté frenando? Si quieres, puedes pagarla aquí: pay.zeryx.io/l/8K2P. Si ya está pagada, ignora este mensaje. ¡Gracias!';
function ApprovalsDrawer() {
  const {
    T,
    Ap,
    Ct
  } = useQ();
  const x = MOTION.glide(T, [Ap, Ap + 0.7], [780, 0]);
  const ov = MOTION.enter(T, Ap, 0.5);
  if (T < Ap - 0.1 || T > Ct + 0.5) return null;
  const chars = Math.round(MSG.length * clamp((T - Ap - 0.9) / 2.6, 0, 1));
  const press = T > Ap + 4.55 && T < Ap + 4.8,
    sent = MOTION.enter(T, Ap + 4.9, 0.45);
  return React.createElement(React.Fragment, null, React.createElement("div", {
    style: {
      boxSizing: 'border-box',
      position: 'absolute',
      left: 232,
      right: 0,
      top: 40,
      bottom: 0,
      background: `rgba(15,23,42,${0.32 * ov})`
    }
  }), React.createElement("div", {
    style: {
      boxSizing: 'border-box',
      position: 'absolute',
      left: 880,
      top: 40,
      width: 760,
      bottom: 0,
      background: '#ffffff',
      boxShadow: '-16px 0 40px rgba(15,23,42,.18)',
      transform: `translateX(${x}px)`
    }
  }, React.createElement("div", {
    style: {
      boxSizing: 'border-box',
      height: 64,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 24px',
      borderBottom: `1px solid ${C.g200}`
    }
  }, React.createElement("span", {
    style: {
      boxSizing: 'border-box',
      fontSize: 18,
      fontWeight: 600,
      color: C.g900,
      whiteSpace: 'nowrap'
    }
  }, "Mensajes que esperan tu aprobaci\xF3n"), React.createElement("span", {
    style: {
      boxSizing: 'border-box',
      color: C.g500
    }
  }, React.createElement(Icon, {
    n: "x",
    size: 18
  }))), React.createElement("div", {
    style: {
      boxSizing: 'border-box',
      position: 'absolute',
      left: 24,
      right: 24,
      top: 88,
      height: 460,
      borderRadius: 8,
      border: `1px solid ${C.g200}`,
      padding: 16
    }
  }, React.createElement("div", {
    style: {
      boxSizing: 'border-box',
      display: 'flex',
      justifyContent: 'space-between',
      gap: 12
    }
  }, React.createElement("div", {
    style: {
      boxSizing: 'border-box',
      lineHeight: 1.45
    }
  }, React.createElement("div", {
    style: {
      boxSizing: 'border-box',
      fontSize: 15,
      fontWeight: 600,
      color: C.g800
    }
  }, "Constructoras Norte"), React.createElement("div", {
    style: {
      boxSizing: 'border-box',
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      whiteSpace: 'nowrap',
      fontSize: 13,
      color: C.amber7
    }
  }, React.createElement(Icon, {
    n: "shield",
    size: 13
  }), "El importe pendiente supera el umbral de supervisi\xF3n."), React.createElement("div", {
    style: {
      boxSizing: 'border-box',
      fontSize: 13,
      color: C.g600
    }
  }, "WhatsApp a ", React.createElement("b", {
    style: {
      boxSizing: 'border-box',
      fontWeight: 500
    }
  }, "+34 612 48 90 21"), " \xB7 8-15 d\xEDas \xB7 tono Cordial")), React.createElement("div", {
    style: {
      boxSizing: 'border-box',
      textAlign: 'right',
      lineHeight: 1.4
    }
  }, React.createElement("div", {
    style: {
      boxSizing: 'border-box',
      fontSize: 15,
      fontWeight: 700,
      color: C.g900
    }
  }, "8.750,00 \u20AC"), React.createElement("div", {
    style: {
      boxSizing: 'border-box',
      fontSize: 11,
      color: C.g400,
      whiteSpace: 'nowrap'
    }
  }, "13/10/2026 18:42"))), React.createElement("div", {
    style: {
      boxSizing: 'border-box',
      marginTop: 10,
      display: 'flex'
    }
  }, React.createElement("span", {
    style: {
      boxSizing: 'border-box',
      whiteSpace: 'nowrap',
      padding: '3px 8px',
      borderRadius: 4,
      background: C.g100,
      fontSize: 12,
      color: C.g600
    }
  }, "FAC-0381: 8.750,00 \u20AC")), React.createElement("div", {
    style: {
      boxSizing: 'border-box',
      position: 'absolute',
      left: 16,
      right: 16,
      top: 132,
      height: 190,
      borderRadius: 8,
      background: C.g50,
      padding: 14
    }
  }, React.createElement("div", {
    style: {
      boxSizing: 'border-box',
      fontSize: 11,
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '.05em',
      color: C.g600
    }
  }, "Mensaje que se enviar\xEDa"), React.createElement("div", {
    style: {
      boxSizing: 'border-box',
      marginTop: 8,
      fontSize: 14,
      lineHeight: 1.55,
      color: C.g700,
      minHeight: 110
    }
  }, MSG.slice(0, chars), chars < MSG.length && chars > 0 && React.createElement("span", {
    style: {
      boxSizing: 'border-box',
      display: 'inline-block',
      width: 2,
      height: 16,
      marginLeft: 1,
      verticalAlign: '-3px',
      background: C.p,
      opacity: Math.sin(T * 12) > 0 ? 1 : 0
    }
  })), React.createElement("div", {
    style: {
      boxSizing: 'border-box',
      position: 'absolute',
      left: 14,
      bottom: 12,
      fontSize: 11,
      color: C.g400,
      whiteSpace: 'nowrap'
    }
  }, "Al aprobar se env\xEDa este texto tal cual, sin volver a generarlo.")), React.createElement("div", {
    style: {
      boxSizing: 'border-box',
      position: 'absolute',
      left: 16,
      right: 16,
      top: 336,
      height: 52,
      borderRadius: 4,
      border: `1px solid ${C.g300}`,
      padding: '6px 8px',
      fontSize: 12,
      color: C.g400
    }
  }, "Nota interna (opcional): por qu\xE9 apruebas o descartas"), React.createElement("div", {
    style: {
      boxSizing: 'border-box',
      position: 'absolute',
      right: 16,
      top: 404,
      display: 'flex',
      gap: 8,
      opacity: 1 - sent
    }
  }, React.createElement(Btn, {
    kind: "err",
    style: {
      boxSizing: 'border-box',
      height: 36,
      fontSize: 13
    }
  }, React.createElement(Icon, {
    n: "thumbD",
    size: 14
  }), "Descartar"), React.createElement(Btn, {
    kind: "ok",
    press: press,
    style: {
      boxSizing: 'border-box',
      height: 36,
      fontSize: 13,
      width: 170,
      justifyContent: 'center'
    }
  }, React.createElement(Icon, {
    n: "send",
    size: 14
  }), "Aprobar y enviar")), sent > 0 && React.createElement("div", {
    style: {
      boxSizing: 'border-box',
      position: 'absolute',
      left: 16,
      right: 16,
      top: 400,
      height: 44,
      borderRadius: 8,
      background: C.okBg,
      color: C.green7,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      fontSize: 14,
      fontWeight: 600,
      opacity: sent,
      transform: `scale(${0.96 + 0.04 * sent})`
    }
  }, React.createElement(Icon, {
    n: "check",
    size: 16,
    w: 2.5
  }), "Enviado por WhatsApp \xB7 18:43"))));
}
function Cursor() {
  const {
    T,
    F,
    Ap
  } = useQ();
  const o = MOTION.enter(T, F + 3.4, 0.4) * (1 - MOTION.enter(T, Ap + 5.6, 0.5));
  if (o <= 0) return null;
  const ks = [F + 3.4, Ap - 0.35, Ap + 1.2, Ap + 4.35, Ap + 6.2];
  const x = MOTION.glide(T, ks, [1120, 1383, 1383, 1655, 1700]),
    y = MOTION.glide(T, ks, [800, 216, 216, 562, 640]);
  const down = T > Ap - 0.2 && T < Ap + 0.05 || T > Ap + 4.55 && T < Ap + 4.8;
  return React.createElement("div", {
    style: {
      boxSizing: 'border-box',
      position: 'absolute',
      left: x - 4,
      top: y - 3,
      opacity: o,
      transform: `scale(${down ? 0.85 : 1})`,
      transformOrigin: '4px 3px',
      filter: 'drop-shadow(0 3px 6px rgba(0,0,0,.25))'
    }
  }, React.createElement("svg", {
    width: "30",
    height: "34",
    viewBox: "0 0 30 34"
  }, React.createElement("path", {
    d: "M4 3 L4 27 L10.5 21 L15 31 L19.5 29 L15 19.5 L24 19.5 Z",
    fill: "#0f172a",
    stroke: "#ffffff",
    strokeWidth: "2",
    strokeLinejoin: "round"
  })));
}
const PX = 1150,
  PY = 96,
  PW = 430,
  PH = 888,
  SW = 406,
  SH = 864;
const WA = {
  bg: '#efeae2',
  in: '#ffffff',
  out: '#d9fdd3',
  ink: '#111b21',
  time: '#667781',
  blue: '#007aff',
  link: '#027eb5',
  bar: '#f6f6f6'
};
function StatusBar({
  time,
  dark
}) {
  const c = dark ? '#ffffff' : '#000000';
  return React.createElement("div", {
    style: {
      boxSizing: 'border-box',
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      height: 52,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '6px 34px 0',
      zIndex: 30,
      color: c
    }
  }, React.createElement("span", {
    style: {
      boxSizing: 'border-box',
      fontSize: 17,
      fontWeight: 600,
      letterSpacing: '-.01em'
    }
  }, time), React.createElement("span", {
    style: {
      boxSizing: 'border-box',
      position: 'absolute',
      left: '50%',
      top: 11,
      width: 122,
      height: 35,
      marginLeft: -61,
      borderRadius: 20,
      background: '#000000'
    }
  }), React.createElement("span", {
    style: {
      boxSizing: 'border-box',
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, React.createElement("span", {
    style: {
      boxSizing: 'border-box',
      display: 'flex',
      gap: 2,
      alignItems: 'flex-end'
    }
  }, [4, 6.5, 9, 11.5].map(h => React.createElement("span", {
    key: h,
    style: {
      boxSizing: 'border-box',
      width: 3.5,
      height: h,
      borderRadius: 1,
      background: c
    }
  }))), React.createElement("span", {
    style: {
      boxSizing: 'border-box',
      width: 25,
      height: 12,
      borderRadius: 4,
      border: `1.3px solid ${dark ? 'rgba(255,255,255,.5)' : 'rgba(0,0,0,.4)'}`,
      padding: 1.5
    }
  }, React.createElement("span", {
    style: {
      boxSizing: 'border-box',
      display: 'block',
      width: '78%',
      height: '100%',
      borderRadius: 2,
      background: c
    }
  }))));
}
function WaHeader({
  avatar,
  name,
  sub,
  typing
}) {
  return React.createElement("div", {
    style: {
      boxSizing: 'border-box',
      position: 'absolute',
      left: 0,
      right: 0,
      top: 52,
      height: 60,
      background: WA.bar,
      borderBottom: '1px solid #d9d9d9',
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '0 14px 0 8px',
      zIndex: 5
    }
  }, React.createElement("span", {
    style: {
      boxSizing: 'border-box',
      display: 'flex',
      alignItems: 'center',
      color: WA.blue,
      fontSize: 17
    }
  }, React.createElement(Icon, {
    n: "chevL",
    size: 26,
    color: WA.blue,
    w: 2.4
  }), React.createElement("span", {
    style: {
      boxSizing: 'border-box',
      marginLeft: -4
    }
  }, "12")), avatar, React.createElement("span", {
    style: {
      boxSizing: 'border-box',
      flex: 1,
      minWidth: 0,
      lineHeight: 1.2
    }
  }, React.createElement("span", {
    style: {
      boxSizing: 'border-box',
      display: 'block',
      fontSize: 16.5,
      fontWeight: 600,
      color: '#000000',
      whiteSpace: 'nowrap'
    }
  }, name), React.createElement("span", {
    style: {
      boxSizing: 'border-box',
      display: 'block',
      fontSize: 12.5,
      color: typing ? '#1fa855' : '#8a8a8e',
      whiteSpace: 'nowrap'
    }
  }, typing ? 'escribiendo…' : sub)), React.createElement("span", {
    style: {
      boxSizing: 'border-box',
      display: 'flex',
      gap: 22,
      color: WA.blue
    }
  }, React.createElement(Icon, {
    n: "video",
    size: 23,
    color: WA.blue,
    w: 1.8
  }), React.createElement(Icon, {
    n: "phone",
    size: 20,
    color: WA.blue,
    w: 1.8
  })));
}
function InputBar({
  text,
  T
}) {
  const typing = !!text;
  return React.createElement("div", {
    style: {
      boxSizing: 'border-box',
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      height: 92,
      background: WA.bar,
      borderTop: '1px solid #e0e0e0',
      zIndex: 5
    }
  }, React.createElement("div", {
    style: {
      boxSizing: 'border-box',
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '9px 12px 0'
    }
  }, React.createElement(Icon, {
    n: "plus",
    size: 26,
    color: WA.blue,
    w: 1.8
  }), React.createElement("div", {
    style: {
      boxSizing: 'border-box',
      flex: 1,
      minHeight: 36,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '6px 12px',
      borderRadius: 20,
      background: '#ffffff',
      border: '1px solid #e2e2e2',
      fontSize: 16,
      color: WA.ink,
      lineHeight: 1.3
    }
  }, React.createElement("span", null, text, typing && React.createElement("span", {
    style: {
      boxSizing: 'border-box',
      display: 'inline-block',
      width: 2,
      height: 18,
      marginLeft: 1,
      verticalAlign: '-3px',
      background: WA.blue,
      opacity: Math.sin(T * 12) > 0 ? 1 : 0
    }
  })), !typing && React.createElement(Icon, {
    n: "sticker",
    size: 20,
    color: "#8a8a8e",
    w: 1.7
  })), typing ? React.createElement("span", {
    style: {
      boxSizing: 'border-box',
      width: 34,
      height: 34,
      borderRadius: '50%',
      background: '#1fa855',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, React.createElement(Icon, {
    n: "send",
    size: 17,
    color: "#ffffff",
    w: 2
  })) : React.createElement("span", {
    style: {
      boxSizing: 'border-box',
      display: 'flex',
      gap: 16
    }
  }, React.createElement(Icon, {
    n: "camera",
    size: 24,
    color: WA.blue,
    w: 1.7
  }), React.createElement(Icon, {
    n: "mic",
    size: 23,
    color: WA.blue,
    w: 1.7
  }))), React.createElement("span", {
    style: {
      boxSizing: 'border-box',
      position: 'absolute',
      left: '50%',
      bottom: 8,
      width: 136,
      height: 5,
      marginLeft: -68,
      borderRadius: 3,
      background: '#000000'
    }
  }));
}
function Bubble({
  T,
  at,
  out,
  children,
  time,
  read,
  first = true,
  pad = '7px 9px 7px 10px',
  maxW = '80%'
}) {
  if (T < at) return null;
  const k = MOTION.pop(T, at, 0.45),
    o = MOTION.enter(T, at, 0.22);
  const r = out ? first ? '10px 2px 10px 10px' : '10px' : first ? '2px 10px 10px 10px' : '10px';
  return React.createElement("div", {
    style: {
      boxSizing: 'border-box',
      alignSelf: out ? 'flex-end' : 'flex-start',
      maxWidth: maxW,
      opacity: o,
      transform: `translateY(${(1 - k) * 10}px) scale(${0.95 + 0.05 * k})`,
      transformOrigin: out ? '100% 0' : '0 0'
    }
  }, React.createElement("div", {
    style: {
      boxSizing: 'border-box',
      position: 'relative',
      padding: pad,
      borderRadius: r,
      background: out ? WA.out : WA.in,
      color: WA.ink,
      fontSize: 16,
      lineHeight: 1.36,
      boxShadow: '0 1px .5px rgba(11,20,26,.13)'
    }
  }, children, React.createElement("span", {
    style: {
      boxSizing: 'border-box',
      float: 'right',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 3,
      margin: '8px 0 -4px 10px',
      fontSize: 11.5,
      color: WA.time
    }
  }, time, out && React.createElement(Ticks, {
    read: read
  }))));
}
const ChatBg = {
  position: 'absolute',
  left: 0,
  right: 0,
  top: 112,
  bottom: 92,
  background: WA.bg,
  backgroundImage: 'radial-gradient(rgba(84,72,56,.07) 1.2px, transparent 1.4px)',
  backgroundSize: '22px 22px'
};
const SysChip = ({
  children,
  yellow
}) => React.createElement("div", {
  style: {
    boxSizing: 'border-box',
    alignSelf: 'center',
    maxWidth: '86%',
    textAlign: 'center',
    padding: '6px 12px',
    borderRadius: 8,
    background: yellow ? '#fdf4c5' : '#ffffff',
    fontSize: 12.5,
    lineHeight: 1.35,
    color: yellow ? '#54656f' : '#54656f',
    boxShadow: '0 1px .5px rgba(11,20,26,.1)'
  }
}, children);
const REPLY = 'Perdona, se nos pasó con el cierre. Lo pago ahora mismo.';
function CustomerChat() {
  const {
    T,
    Ct,
    Cb
  } = useQ();
  const tStart = Ct + 3.5,
    tEnd = Ct + 5.0;
  const typed = T >= tStart && T < tEnd + 0.25 ? REPLY.slice(0, Math.round(REPLY.length * clamp((T - tStart) / (tEnd - tStart), 0, 1))) : '';
  const oriTyping = T > Ct + 0.3 && T < Ct + 0.9 || T > Ct + 6.0 && T < Ct + 6.7;
  const linkPress = T > Cb + 0.25 && T < Cb + 0.5;
  return React.createElement("div", {
    style: {
      boxSizing: 'border-box',
      position: 'absolute',
      inset: 0,
      background: WA.bg
    }
  }, React.createElement(WaHeader, {
    name: "Reformas Atlas",
    sub: "Cuenta de empresa",
    typing: oriTyping,
    avatar: React.createElement("span", {
      style: {
        boxSizing: 'border-box',
        width: 38,
        height: 38,
        borderRadius: '50%',
        background: C.deep,
        color: '#ffffff',
        fontSize: 14,
        fontWeight: 700,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, "RA")
  }), React.createElement("div", {
    style: ChatBg
  }, React.createElement("div", {
    style: {
      boxSizing: 'border-box',
      position: 'absolute',
      left: 0,
      right: 0,
      top: 12,
      padding: '0 12px',
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, React.createElement(SysChip, null, "Hoy"), React.createElement(SysChip, {
    yellow: true
  }, "Este chat es con una cuenta de empresa. Toca para m\xE1s informaci\xF3n."), React.createElement("div", {
    style: {
      boxSizing: 'border-box',
      height: 6
    }
  }), React.createElement(Bubble, {
    T: T,
    at: Ct + 0.9,
    time: "18:43"
  }, "Hola Carlos, soy del equipo de cobro de Reformas Atlas. La factura FAC-0381, de 8.750,00 \u20AC, venci\xF3 el 1 de octubre. \xBFHay algo que la est\xE9 frenando?"), React.createElement(Bubble, {
    T: T,
    at: Ct + 1.8,
    time: "18:43",
    first: false,
    pad: "4px 4px 7px 4px"
  }, React.createElement("div", {
    style: {
      boxSizing: 'border-box',
      position: 'relative',
      borderRadius: 7,
      overflow: 'hidden',
      background: '#f0f2f5',
      transform: `scale(${linkPress ? 0.97 : 1})`
    }
  }, React.createElement("div", {
    style: {
      boxSizing: 'border-box',
      height: 112,
      background: `linear-gradient(135deg,${C.deep},${C.p})`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 10
    }
  }, React.createElement(Logo, {
    size: 34,
    id: "lgW",
    mono: "#ffffff"
  }), React.createElement("span", {
    style: {
      boxSizing: 'border-box',
      fontSize: 26,
      fontWeight: 700,
      color: '#ffffff',
      letterSpacing: '-.03em'
    }
  }, "zeryx")), React.createElement("div", {
    style: {
      boxSizing: 'border-box',
      padding: '8px 10px 9px',
      lineHeight: 1.3
    }
  }, React.createElement("div", {
    style: {
      boxSizing: 'border-box',
      fontSize: 14.5,
      fontWeight: 600,
      color: WA.ink
    }
  }, "Pagar factura FAC-0381 \xB7 Reformas Atlas"), React.createElement("div", {
    style: {
      boxSizing: 'border-box',
      fontSize: 13,
      color: WA.time
    }
  }, "8.750,00 \u20AC \xB7 tarjeta o transferencia"), React.createElement("div", {
    style: {
      boxSizing: 'border-box',
      fontSize: 12.5,
      color: WA.time,
      marginTop: 2
    }
  }, "pay.zeryx.io")), React.createElement(Tap, {
    T: T,
    at: Cb + 0.25,
    x: 180,
    y: 90,
    size: 120
  })), React.createElement("div", {
    style: {
      boxSizing: 'border-box',
      padding: '6px 6px 0'
    }
  }, "Si quieres, puedes pagarla aqu\xED: ", React.createElement("span", {
    style: {
      boxSizing: 'border-box',
      color: WA.link,
      textDecoration: 'underline'
    }
  }, "https://pay.zeryx.io/l/8K2P"))), React.createElement(Bubble, {
    T: T,
    at: tEnd + 0.3,
    out: true,
    time: "18:44",
    read: T > Ct + 5.9
  }, REPLY), React.createElement(Bubble, {
    T: T,
    at: Ct + 6.7,
    time: "18:44"
  }, "Gracias, Carlos. Te llegar\xE1 el justificante al momento."))), React.createElement(InputBar, {
    text: typed,
    T: T
  }));
}
function Checkout() {
  const {
    T,
    Cb
  } = useQ();
  const y = MOTION.glide(T, [Cb + 0.5, Cb + 1.2], [SH, 0]);
  if (y >= SH) return null;
  const sel = MOTION.enter(T, Cb + 2.0, 0.35),
    tap = Cb + 3.3,
    spin = T >= tap + 0.2 && T < tap + 1.0,
    ok = MOTION.enter(T, tap + 1.0, 0.4),
    ck = MOTION.pop(T, tap + 1.1, 0.7);
  const methods = [['Tarjeta', 'Visa, Mastercard, Amex'], ['Transferencia SEPA', '1-2 días hábiles'], ['Apple Pay', ''], ['Google Pay', '']];
  return React.createElement("div", {
    style: {
      boxSizing: 'border-box',
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      transform: `translateY(${y}px)`,
      background: '#ffffff',
      zIndex: 10,
      borderRadius: '14px 14px 0 0',
      boxShadow: '0 -10px 30px rgba(0,0,0,.15)'
    }
  }, React.createElement("div", {
    style: {
      boxSizing: 'border-box',
      position: 'absolute',
      left: 0,
      right: 0,
      top: 52,
      height: 48,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 16px',
      borderBottom: `1px solid ${C.g200}`,
      background: '#fafafa'
    }
  }, React.createElement("span", {
    style: {
      boxSizing: 'border-box',
      fontSize: 16,
      fontWeight: 600,
      color: WA.blue
    }
  }, "Hecho"), React.createElement("span", {
    style: {
      boxSizing: 'border-box',
      display: 'flex',
      alignItems: 'center',
      gap: 5,
      fontSize: 15,
      fontWeight: 500,
      color: '#000000'
    }
  }, React.createElement(Icon, {
    n: "lock",
    size: 12,
    color: "#000000"
  }), "pay.zeryx.io"), React.createElement(Icon, {
    n: "share",
    size: 19,
    color: WA.blue,
    w: 1.8
  })), React.createElement("div", {
    style: {
      boxSizing: 'border-box',
      position: 'absolute',
      left: 22,
      right: 22,
      top: 124
    }
  }, React.createElement("div", {
    style: {
      boxSizing: 'border-box',
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, React.createElement("span", {
    style: {
      boxSizing: 'border-box',
      width: 46,
      height: 46,
      borderRadius: 12,
      background: C.deep,
      color: '#ffffff',
      fontSize: 15,
      fontWeight: 700,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, "RA"), React.createElement("span", {
    style: {
      boxSizing: 'border-box',
      lineHeight: 1.3
    }
  }, React.createElement("span", {
    style: {
      boxSizing: 'border-box',
      display: 'block',
      fontSize: 17,
      fontWeight: 600,
      color: C.g900
    }
  }, "Reformas Atlas S.L."), React.createElement("span", {
    style: {
      boxSizing: 'border-box',
      display: 'block',
      fontSize: 14,
      color: C.g500
    }
  }, "Factura FAC-0381 \xB7 emitida 01/09/2026"))), React.createElement("div", {
    style: {
      boxSizing: 'border-box',
      marginTop: 26,
      padding: '18px 18px',
      borderRadius: 14,
      background: C.p50
    }
  }, React.createElement("div", {
    style: {
      boxSizing: 'border-box',
      fontSize: 14,
      color: C.g500
    }
  }, "Total a pagar"), React.createElement("div", {
    style: {
      boxSizing: 'border-box',
      marginTop: 2,
      fontSize: 44,
      fontWeight: 800,
      letterSpacing: '-.04em',
      color: C.g900
    }
  }, "8.750,00 \u20AC")), React.createElement("div", {
    style: {
      boxSizing: 'border-box',
      marginTop: 20,
      fontSize: 13,
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '.05em',
      color: C.g500
    }
  }, "M\xE9todo de pago"), React.createElement("div", {
    style: {
      boxSizing: 'border-box',
      marginTop: 10,
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, methods.map((m, i) => {
    const on = i === 0 ? sel : 0;
    return React.createElement("div", {
      key: m[0],
      style: {
        boxSizing: 'border-box',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        height: 56,
        padding: '0 14px',
        borderRadius: 12,
        border: `${on > 0.5 ? 2 : 1}px solid ${on > 0.5 ? C.p : C.g200}`,
        background: `rgba(243,235,255,${on})`
      }
    }, React.createElement("span", {
      style: {
        boxSizing: 'border-box',
        width: 22,
        height: 22,
        borderRadius: '50%',
        border: `2px solid ${on > 0.5 ? C.p : C.g300}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, React.createElement("span", {
      style: {
        boxSizing: 'border-box',
        width: 10,
        height: 10,
        borderRadius: '50%',
        background: C.p,
        transform: `scale(${on})`
      }
    })), React.createElement("span", {
      style: {
        boxSizing: 'border-box',
        lineHeight: 1.25
      }
    }, React.createElement("span", {
      style: {
        boxSizing: 'border-box',
        display: 'block',
        fontSize: 16,
        fontWeight: 600,
        color: C.g900
      }
    }, m[0]), m[1] && React.createElement("span", {
      style: {
        boxSizing: 'border-box',
        display: 'block',
        fontSize: 12.5,
        color: C.g500
      }
    }, m[1])), i === 0 && React.createElement(Tap, {
      T: T,
      at: Cb + 1.8,
      x: 60,
      y: 28,
      size: 90
    }));
  }))), React.createElement("div", {
    style: {
      boxSizing: 'border-box',
      position: 'absolute',
      left: 22,
      right: 22,
      bottom: 64,
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, React.createElement("div", {
    style: {
      boxSizing: 'border-box',
      position: 'relative',
      height: 56,
      borderRadius: 14,
      background: C.p,
      color: '#ffffff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 18,
      fontWeight: 700,
      overflow: 'hidden',
      transform: `scale(${T > tap && T < tap + 0.2 ? 0.96 : 1})`,
      boxShadow: '0 12px 24px -10px rgba(124,58,237,.6)'
    }
  }, spin ? React.createElement("span", {
    style: {
      boxSizing: 'border-box',
      width: 24,
      height: 24,
      borderRadius: '50%',
      border: '3px solid rgba(255,255,255,.35)',
      borderTopColor: '#ffffff',
      transform: `rotate(${T * 540}deg)`
    }
  }) : 'Pagar 8.750,00 €', React.createElement(Tap, {
    T: T,
    at: tap,
    x: 181,
    y: 28,
    size: 140,
    color: "rgba(255,255,255,.35)"
  })), React.createElement("div", {
    style: {
      boxSizing: 'border-box',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 6,
      fontSize: 12.5,
      color: C.g500
    }
  }, React.createElement(Icon, {
    n: "lock",
    size: 11
  }), "Pago seguro \xB7 el dinero va a la cuenta de ", React.createElement("b", {
    style: {
      boxSizing: 'border-box',
      color: C.g700
    }
  }, "Reformas Atlas"))), ok > 0 && React.createElement("div", {
    style: {
      boxSizing: 'border-box',
      position: 'absolute',
      left: 0,
      right: 0,
      top: 100,
      bottom: 0,
      background: '#ffffff',
      opacity: ok,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 14,
      padding: 30,
      textAlign: 'center'
    }
  }, React.createElement("span", {
    style: {
      boxSizing: 'border-box',
      width: 108,
      height: 108,
      borderRadius: '50%',
      background: C.ok,
      color: '#ffffff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transform: `scale(${ck})`,
      boxShadow: '0 20px 40px -12px rgba(22,163,74,.55)'
    }
  }, React.createElement(Icon, {
    n: "check",
    size: 54,
    color: "#ffffff",
    w: 3
  })), React.createElement("div", {
    style: {
      boxSizing: 'border-box',
      marginTop: 10,
      fontSize: 28,
      fontWeight: 800,
      letterSpacing: '-.03em',
      color: C.g900,
      whiteSpace: 'nowrap',
      opacity: MOTION.enter(T, tap + 1.4, 0.4)
    }
  }, "Pago completado"), React.createElement("div", {
    style: {
      boxSizing: 'border-box',
      fontSize: 16,
      lineHeight: 1.5,
      color: C.g500,
      opacity: MOTION.enter(T, tap + 1.7, 0.4)
    }
  }, "8.750,00 \u20AC \xB7 Tarjeta \xB7 18:45", React.createElement("br", null), "Te hemos enviado el justificante.")));
}
function ZeChat() {
  const {
    T,
    Z
  } = useQ();
  const tapAt = Z + 3.8,
    chosen = T >= tapAt + 0.15;
  const zeTyping = T > Z + 0.3 && T < Z + 0.8 || T > Z + 1.5 && T < Z + 2.0 || T > Z + 4.5 && T < Z + 5.0;
  return React.createElement("div", {
    style: {
      boxSizing: 'border-box',
      position: 'absolute',
      inset: 0,
      background: WA.bg
    }
  }, React.createElement(WaHeader, {
    name: "Zeryx",
    sub: "Tu equipo de cobro",
    typing: zeTyping,
    avatar: React.createElement("span", {
      style: {
        boxSizing: 'border-box',
        width: 38,
        height: 38,
        borderRadius: '50%',
        background: C.deep,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, React.createElement(Logo, {
      size: 22,
      id: "lgZ",
      mono: "#ffffff"
    }))
  }), React.createElement("div", {
    style: ChatBg
  }, React.createElement("div", {
    style: {
      boxSizing: 'border-box',
      position: 'absolute',
      left: 0,
      right: 0,
      top: 12,
      padding: '0 12px',
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, React.createElement(SysChip, null, "Hoy"), React.createElement("div", {
    style: {
      boxSizing: 'border-box',
      height: 6
    }
  }), React.createElement(Bubble, {
    T: T,
    at: Z + 0.8,
    time: "18:46"
  }, "Constructoras Norte acaba de pagar la FAC-0381: ", React.createElement("b", null, "8.750,00 \u20AC"), ". Ya est\xE1 cobrada en tu panel."), T >= Z + 2.0 && (() => {
    const k = MOTION.pop(T, Z + 2.0, 0.45),
      o = MOTION.enter(T, Z + 2.0, 0.22),
      bo = MOTION.enter(T, Z + 2.6, 0.35);
    return React.createElement("div", {
      style: {
        boxSizing: 'border-box',
        alignSelf: 'flex-start',
        width: '80%',
        opacity: o,
        transform: `translateY(${(1 - k) * 10}px) scale(${0.95 + 0.05 * k})`,
        transformOrigin: '0 0'
      }
    }, React.createElement("div", {
      style: {
        boxSizing: 'border-box',
        padding: '7px 9px 7px 10px',
        borderRadius: '10px 10px 4px 4px',
        background: WA.in,
        fontSize: 16,
        lineHeight: 1.36,
        color: WA.ink,
        boxShadow: '0 1px .5px rgba(11,20,26,.13)'
      }
    }, "Dist. P\xE9rez lleva ", React.createElement("b", null, "24 d\xEDas"), " vencida con ", React.createElement("b", null, "6.400,00 \u20AC"), " y no contesta. \xBFLe escribo otra vez por WhatsApp?", React.createElement("span", {
      style: {
        boxSizing: 'border-box',
        float: 'right',
        margin: '8px 0 -4px 10px',
        fontSize: 11.5,
        color: WA.time
      }
    }, "18:46")), ['Sí, envíalo', 'Ahora no'].map((t, i) => React.createElement("div", {
      key: t,
      style: {
        boxSizing: 'border-box',
        position: 'relative',
        overflow: 'hidden',
        marginTop: 2,
        height: 42,
        borderRadius: i === 1 ? '4px 4px 10px 10px' : 4,
        background: i === 0 && chosen ? '#eef7f2' : WA.in,
        color: WA.link,
        fontSize: 15.5,
        fontWeight: 500,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 6,
        opacity: bo,
        boxShadow: '0 1px .5px rgba(11,20,26,.13)'
      }
    }, React.createElement(Icon, {
      n: "reply",
      size: 15,
      color: WA.link,
      w: 2
    }), t, i === 0 && React.createElement(Tap, {
      T: T,
      at: tapAt,
      x: 150,
      y: 21,
      size: 110
    }))));
  })(), React.createElement(Bubble, {
    T: T,
    at: tapAt + 0.35,
    out: true,
    time: "18:46",
    read: T > Z + 4.6
  }, "S\xED, env\xEDalo"), React.createElement(Bubble, {
    T: T,
    at: Z + 5.0,
    time: "18:47"
  }, "Enviado, con el enlace de pago. Te aviso en cuanto conteste o pague."))), React.createElement(InputBar, {
    text: "",
    T: T
  }));
}
function PhoneScene() {
  const {
    T,
    Ct,
    Cb,
    Cc,
    Z,
    Ci
  } = useQ();
  const vis = MOTION.glide(T, [Ct - 0.3, Ct + 0.5, Cc - 0.6, Cc, Z - 0.2, Z + 0.6], [0, 1, 1, 0, 0, 1]);
  if (vis <= 0) return null;
  const ze = T >= Cc;
  const time = ze ? '18:46' : T < Cb + 1 ? '18:43' : '18:45';
  const heads = [[Ct, Cb, '03 · Pregunta', 'Zeryx escribe\npor WhatsApp.', 'En nombre de tu empresa, con el tono que aprobaste. Y sigue la conversación si el cliente contesta.'], [Cb, Cc, '04 · Cobra', 'El cliente paga\nen un clic.', 'Tarjeta o transferencia, sin salir de la conversación. El dinero va a tu cuenta.'], [Z, Ci + 1, '06 · Te informa', 'Zeryx te lo cuenta.\nTú decides.', 'Te avisa por WhatsApp de cada cobro y te pide permiso para el siguiente paso.']];
  return React.createElement("div", {
    style: {
      boxSizing: 'border-box',
      position: 'absolute',
      inset: 0,
      opacity: vis
    }
  }, heads.map(h => {
    const o = MOTION.enter(T, h[0] + 0.15, 0.7) * (1 - MOTION.enter(T, h[1] - 0.45, 0.4));
    if (o <= 0) return null;
    return React.createElement("div", {
      key: h[2],
      style: {
        boxSizing: 'border-box',
        position: 'absolute',
        left: 220,
        top: 0,
        bottom: 0,
        width: 800,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        opacity: o,
        transform: `translateY(${(1 - MOTION.enter(T, h[0] + 0.15, 0.7)) * 26}px)`
      }
    }, React.createElement("div", {
      style: {
        boxSizing: 'border-box',
        fontSize: 24,
        fontWeight: 600,
        color: C.p,
        letterSpacing: '.01em'
      }
    }, h[2]), React.createElement("div", {
      style: {
        boxSizing: 'border-box',
        marginTop: 18,
        fontSize: 84,
        fontWeight: 700,
        letterSpacing: '-.045em',
        lineHeight: 1,
        color: C.g900,
        whiteSpace: 'pre-line'
      }
    }, h[3]), React.createElement("div", {
      style: {
        boxSizing: 'border-box',
        marginTop: 26,
        maxWidth: 620,
        fontSize: 28,
        lineHeight: 1.45,
        color: C.g500
      }
    }, h[4]));
  }), React.createElement("div", {
    style: {
      boxSizing: 'border-box',
      position: 'absolute',
      left: PX,
      top: PY,
      width: PW,
      height: PH,
      borderRadius: 64,
      background: '#1c1c1e',
      padding: 12,
      boxShadow: '0 60px 120px -40px rgba(40,4,101,.5), 0 0 0 2px #3a3a3c inset',
      transform: `scale(${0.97 + 0.03 * vis})`
    }
  }, React.createElement("div", {
    style: {
      boxSizing: 'border-box',
      position: 'relative',
      width: SW,
      height: SH,
      borderRadius: 52,
      overflow: 'hidden',
      background: '#ffffff'
    }
  }, !ze && React.createElement(React.Fragment, null, React.createElement(CustomerChat, null), React.createElement(Checkout, null)), ze && React.createElement(ZeChat, null), React.createElement(StatusBar, {
    time: time
  }))));
}
function Caption() {
  const q = useQ(),
    T = q.T;
  const items = [[q.F + 0.8, q.Ap - 0.2, '01', 'Una factura de 8.750 € lleva 12 días vencida.'], [q.Ap + 0.2, q.Ct - 0.5, '02', 'Zeryx prepara el mensaje. Tú lo apruebas.'], [q.Cc + 0.5, q.Z - 0.5, '05', 'El pago entra y se concilia solo.']];
  const it = items.find(i => T >= i[0] && T < i[1]);
  if (!it) return null;
  const o = clamp(Math.min((T - it[0]) / 0.35, (it[1] - T) / 0.35), 0, 1);
  return React.createElement("div", {
    style: {
      boxSizing: 'border-box',
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 40,
      display: 'flex',
      justifyContent: 'center',
      opacity: o,
      transform: `translateY(${(1 - o) * 12}px)`
    }
  }, React.createElement("div", {
    style: {
      boxSizing: 'border-box',
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      padding: '15px 30px 15px 16px',
      borderRadius: 999,
      background: 'rgba(40,4,101,.94)',
      color: '#ffffff',
      fontSize: 30,
      fontWeight: 500,
      letterSpacing: '-.01em',
      whiteSpace: 'nowrap',
      boxShadow: '0 24px 48px -16px rgba(40,4,101,.5)'
    }
  }, React.createElement("span", {
    style: {
      boxSizing: 'border-box',
      padding: '4px 12px',
      borderRadius: 999,
      background: 'rgba(188,149,255,.22)',
      color: C.light,
      fontSize: 22,
      fontWeight: 600
    }
  }, it[2]), it[3]));
}
function Closing() {
  const {
    T,
    Ci
  } = useQ();
  const r = MOTION.enter(T, Ci, 1.0) * 1250;
  if (r <= 0) return null;
  const l1 = MOTION.enter(T, Ci + 0.5, 0.9),
    l2 = MOTION.enter(T, Ci + 0.9, 0.9),
    lg = MOTION.pop(T, Ci + 1.7, 0.7),
    cta = MOTION.enter(T, Ci + 2.3, 0.7),
    d = T - Ci;
  return React.createElement("div", {
    style: {
      boxSizing: 'border-box',
      position: 'absolute',
      inset: 0,
      background: C.deep,
      clipPath: `circle(${r}px at 50% 50%)`,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#ffffff',
      textAlign: 'center',
      overflow: 'hidden'
    }
  }, React.createElement("div", {
    style: {
      boxSizing: 'border-box',
      position: 'absolute',
      left: 260 + d * 30,
      top: -260,
      width: 1100,
      height: 1100,
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(124,58,237,.6), rgba(124,58,237,0) 65%)'
    }
  }), React.createElement("div", {
    style: {
      boxSizing: 'border-box',
      position: 'absolute',
      right: 120 + d * 24,
      bottom: -420,
      width: 1000,
      height: 1000,
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(73,125,238,.35), rgba(73,125,238,0) 65%)'
    }
  }), React.createElement("div", {
    style: {
      boxSizing: 'border-box',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      transform: `scale(${lg})`,
      opacity: clamp(lg, 0, 1)
    }
  }, React.createElement(Logo, {
    size: 60,
    id: "lgC",
    mono: "#ffffff"
  }), React.createElement("span", {
    style: {
      boxSizing: 'border-box',
      fontSize: 56,
      fontWeight: 700,
      letterSpacing: '-.04em'
    }
  }, "zeryx")), React.createElement("div", {
    style: {
      boxSizing: 'border-box',
      position: 'relative',
      marginTop: 48,
      fontSize: 112,
      fontWeight: 700,
      letterSpacing: '-.045em',
      lineHeight: 1,
      whiteSpace: 'nowrap',
      opacity: l1,
      transform: `translateY(${(1 - l1) * 40}px)`
    }
  }, "T\xFA vendes."), React.createElement("div", {
    style: {
      boxSizing: 'border-box',
      position: 'relative',
      marginTop: 14,
      fontSize: 112,
      fontWeight: 700,
      letterSpacing: '-.045em',
      lineHeight: 1,
      whiteSpace: 'nowrap',
      color: C.light,
      opacity: l2,
      transform: `translateY(${(1 - l2) * 40}px)`
    }
  }, "Zeryx cobra."), React.createElement("div", {
    style: {
      boxSizing: 'border-box',
      position: 'relative',
      marginTop: 56,
      padding: '18px 34px',
      borderRadius: 12,
      background: '#ffffff',
      color: C.pStrong,
      fontSize: 30,
      fontWeight: 600,
      whiteSpace: 'nowrap',
      opacity: cta,
      transform: `translateY(${(1 - cta) * 20}px)`
    }
  }, "Pide acceso \xB7 zeryx.io"));
}
function Piece() {
  const q = useQ(),
    T = q.T;
  const K = [[q.F - 1.0, 960, 470, 1], [q.F + 0.6, 960, 470, 1], [q.F + 2.0, 1000, 650, 1.42], [q.F + 3.6, 1010, 650, 1.44], [q.Ap - 0.6, 1180, 390, 1.1], [q.Ap + 0.4, 1180, 390, 1.1], [q.Ap + 1.8, 1390, 440, 1.48], [q.Ap + 4.0, 1460, 470, 1.55], [q.Ct - 0.2, 1450, 470, 1.5], [q.Cc - 0.6, 1000, 650, 1.4], [q.Cc + 1.4, 1000, 650, 1.42], [q.Cc + 2.6, 1180, 400, 1.13], [q.Z, 1180, 400, 1.1]];
  const ks = K.map(k => k[0]);
  const cx = MOTION.glide(T, ks, K.map(k => k[1])),
    cy = MOTION.glide(T, ks, K.map(k => k[2])),
    s = MOTION.glide(T, ks, K.map(k => k[3]));
  return React.createElement("div", {
    "data-screen-label": 't=' + Math.floor(T) + 's',
    style: {
      boxSizing: 'border-box',
      position: 'absolute',
      inset: 0,
      overflow: 'hidden',
      fontFamily: 'Inter, system-ui, sans-serif',
      WebkitFontSmoothing: 'antialiased',
      background: '#ffffff'
    }
  }, React.createElement("div", {
    style: {
      boxSizing: 'border-box',
      position: 'absolute',
      inset: 0,
      background: 'radial-gradient(ellipse 70% 60% at 85% 10%, #ede9fe 0%, rgba(237,233,254,0) 70%), radial-gradient(ellipse 60% 50% at 10% 100%, #f3ebff 0%, rgba(243,235,255,0) 70%)'
    }
  }), React.createElement("div", {
    style: {
      boxSizing: 'border-box',
      position: 'absolute',
      left: 0,
      top: 0,
      width: 1920,
      height: 1080,
      transformOrigin: '0 0',
      transform: `translate(${960 - cx * s}px,${540 - cy * s}px) scale(${s})`
    }
  }, React.createElement(AppPage, null), React.createElement(Cursor, null)), React.createElement(PhoneScene, null), React.createElement(Intro, null), React.createElement(Caption, null), React.createElement(Closing, null));
}
function ZeryxDemo() {
  return React.createElement(CompositionStage, {
    width: 1920,
    height: 1080,
    scenes: DEMO_SCENES,
    playback: DEMO_PLAYBACK,
    bg: "#ffffff"
  }, React.createElement(Piece, null));
}
export default ZeryxDemo;