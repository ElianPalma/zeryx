const outer = { display: 'inline-block', overflow: 'hidden', verticalAlign: 'top', paddingBottom: '.1em', marginBottom: '-.1em' }
const inner = { display: 'inline-block', transform: 'translateY(110%) rotate(5deg)', transformOrigin: '0 100%', opacity: 0 }

export default function SplitWords({ text }) {
  const words = text.split(/\s+/)
  return words.map((w, i) => (
    <span key={i}>
      <span style={outer}>
        <span data-sl="1" style={inner}>{w}</span>
      </span>
      {i < words.length - 1 ? ' ' : null}
    </span>
  ))
}
