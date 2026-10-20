import { useEffect, useRef } from 'react'
import ZMotion from '../lib/motion.js'

const fmt = (n, dec) => n.toLocaleString('es-ES', { minimumFractionDigits: dec, maximumFractionDigits: dec })

export default function Counter({ to, prefix = '', suffix = '', dec = 0 }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    el.textContent = prefix + fmt(0, dec) + suffix
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return
      io.disconnect()
      setTimeout(() => ZMotion.odometer(el, prefix + fmt(to, dec) + suffix), 200)
    }, { threshold: 0.5 })
    io.observe(el)
    return () => io.disconnect()
  }, [to, prefix, suffix, dec])

  const final = prefix + fmt(to, dec) + suffix
  return (
    <>
      <span className="sr-only">{final}</span>
      <span ref={ref} aria-hidden="true" />
    </>
  )
}
