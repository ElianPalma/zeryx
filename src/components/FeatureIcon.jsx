const PATHS = {
  'zeryx-pay': ['M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1', 'M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1'],
  'cobros-b2b': ['M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z', 'M14 3v5h5', 'M9 13h6M9 17h4'],
  'carritos-abandonados': ['M3 4h2l2.4 11h11L21 8H6.2', 'M9 19.5a1.3 1.3 0 1 0 0 .01', 'M17 19.5a1.3 1.3 0 1 0 0 .01'],
  'pagos-fallidos': ['M4 7h16v11H4z', 'M4 11h16', 'M15.5 15l3 3M18.5 15l-3 3'],
  'postventa': ['M12 3l2.6 5.6 6.1.7-4.5 4.2 1.2 6L12 16.6l-5.4 2.9 1.2-6-4.5-4.2 6.1-.7z'],
  'seguimiento-presupuestos': ['M9 3h6v3H9z', 'M7 4.5H5V21h14V4.5h-2', 'M9 12h6M9 16h4'],
  'ze-cfo-digital': ['M4 5h16v11H9l-5 4z', 'M8 9.5h8M8 12.5h5'],
  'zeryx-id': ['M3 5h18v14H3z', 'M9 10.5a2 2 0 1 0 0 .01', 'M6 16a3 3 0 0 1 6 0', 'M14.5 10h4M14.5 14h3'],
  'conciliacion-bancaria': ['M2.5 12.5l4.5 4.5 8.5-8.5', 'M10.5 16l1 1L21 7.5'],
  'tesoreria': ['M3 10h18', 'M5 10v8M9.5 10v8M14.5 10v8M19 10v8', 'M3 20h18', 'M12 3l9 5H3z'],
  'integraciones': ['M9 7V3M15 7V3', 'M6 7h12v5a6 6 0 0 1-12 0z', 'M12 18v3'],
  'all': ['M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z']
}

export default function FeatureIcon({ slug, size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ display: 'block', flex: 'none' }}>
      {(PATHS[slug] || PATHS.all).map(d => <path key={d} d={d} />)}
    </svg>
  )
}
