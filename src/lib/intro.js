import { gsap } from 'gsap'
import { ICON_PIECES } from '../sections/Curtain.jsx'
import { INTRO_KEY } from '../config.js'

const lift = (curtain, content) => gsap.timeline({ onComplete: () => { curtain.style.display = 'none' } })
  .to(content, { y: -28, opacity: 0, duration: 0.45, ease: 'power2.in' })
  .to(curtain, { clipPath: 'inset(0 0 100% 0)', duration: 0.9, ease: 'expo.inOut' }, '-=0.2')

// onLift (opcional) se llama justo cuando la cortina empieza a levantarse.
export function playIntro(onLift) {
  const lifting = () => { if (onLift) onLift() }
  const curtain = document.querySelector('[data-curtain]')
  if (!curtain) { lifting(); return }
  try { localStorage.setItem(INTRO_KEY, '1') } catch (e) { void e }
  const content = curtain.querySelector('[data-intro]')
  const pieces = curtain.querySelectorAll('[data-intro-piece]')
  const mark = curtain.querySelector('[data-intro-mark]')
  const icon = curtain.querySelector('[data-intro-icon]')
  const shine = curtain.querySelector('[data-intro-shine]')
  const word = curtain.querySelector('[data-intro-word]')
  const letters = curtain.querySelectorAll('[data-intro-letter]')
  const glow = curtain.querySelector('[data-intro-glow]')

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    gsap.set(pieces, { opacity: 1 })
    gsap.set(word, { width: 'auto' })
    gsap.set(letters, { y: 0 })
    gsap.delayedCall(0.6, () => { lifting(); lift(curtain, content) })
    return
  }

  const tl = gsap.timeline({ delay: 0.15 })
  pieces.forEach((p, i) => {
    tl.fromTo(p, { opacity: 0, ...ICON_PIECES[i].from }, { opacity: 1, x: 0, y: 0, duration: 0.8, ease: 'expo.out' }, i * 0.07)
  })
  tl.fromTo(glow, { scale: 0.7, opacity: 0.3 }, { scale: 1, opacity: 0.9, duration: 1.2, ease: 'power2.out' }, 0)
    .addLabel('lock', 0.72)
    .fromTo(mark, { scale: 1 }, { keyframes: [{ scale: 1.08, duration: 0.14, ease: 'power2.out' }, { scale: 1, duration: 0.4, ease: 'back.out(3)' }], svgOrigin: '14 14' }, 'lock')
    .fromTo(shine, { x: -6 }, { x: 46, duration: 0.7, ease: 'power2.inOut' }, 'lock')
    .fromTo(icon, { rotate: -8 }, { rotate: 0, duration: 0.6, ease: 'expo.out' }, 'lock')
    .addLabel('word', 'lock+=0.25')
    .to(word, { width: 'auto', duration: 0.75, ease: 'expo.inOut' }, 'word')
    .to(letters, { y: 0, duration: 0.9, ease: 'expo.out', stagger: 0.05 }, 'word+=0.15')
    .addLabel('lift', '+=0.3')
    .call(lifting, null, 'lift')
    .add(lift(curtain, content), 'lift')
}
