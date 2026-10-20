export default function Roll({ gap = '10px', children }) {
  const row = { display: 'flex', alignItems: 'center', justifyContent: 'center', gap }
  return (
    <span className="roll">
      <span className="roll-a" style={row}>{children}</span>
      <span className="roll-b" aria-hidden="true" style={row}>{children}</span>
    </span>
  )
}
