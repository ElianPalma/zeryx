export default function SectionLabel({ n, children, light, reveal = true }) {
  const style = { display: 'flex', alignItems: 'baseline', gap: '10px', fontSize: '15px', fontWeight: '500', color: light ? '#ede9fe' : '#334155' }
  if (reveal) Object.assign(style, { opacity: 0, transform: 'translateY(24px)' })
  return (
    <div data-r={reveal ? '1' : undefined} style={style}>
      <span style={{ fontSize: '13px', fontVariantNumeric: 'tabular-nums', color: light ? '#bc95ff' : '#7c3aed' }}>({n})</span>
      {children}
    </div>
  )
}
