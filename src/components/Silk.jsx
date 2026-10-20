// El custom element <zeryx-silk> lo registra Site (defineSilk) tras hidratar.

export default function Silk({ view, transparent, nograin, style }) {
  return (
    <zeryx-silk
      view={view}
      transparent={transparent ? '' : undefined}
      nograin={nograin ? '' : undefined}
      style={style}
    />
  )
}
