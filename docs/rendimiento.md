# Rendimiento

Optimización de octubre de 2026. Ningún cambio altera lo que ve o hace el usuario; todos van a
cuánto trabaja el navegador para producirlo. Si tocas estas zonas, conserva estas reglas.

## Seda WebGL (`src/lib/silk-bg.js`)

Era la causa de casi todo el tiempo de bloqueo (TBT de ~20 s en Lighthouse).

- **Compuerta de arranque** (`releaseSilk`). Ninguna `<zeryx-silk>` crea su contexto WebGL hasta
  que Site la libera: cuando la cortina de intro empieza a levantarse o, sin intro, tras el `load`
  y un momento ocioso. Antes la seda se renderizaba tapada por la cortina. Hay un seguro a los 8 s.
- **Malla de 160×192** (antes 320×384): 61.440 triángulos en vez de 245.760. El canvas va al 60 %
  de resolución y con `blur(3px)`, así que la diferencia no se aprecia.
- **Sin `antialias` ni `preserveDrawingBuffer`**: el blur hace invisible el antialiasing y nada lee
  el canvas.
- **Sin sondeo**: se quitaron el `setInterval` de 400 ms y el listener de scroll; los
  IntersectionObserver ya activan y liberan cada instancia.
- **Registro tras hidratar** (`defineSilk`, desde `Site.componentDidMount`). Si el custom element se
  registra antes, el navegador modifica los `<zeryx-silk>` del HTML prerenderizado y la hidratación
  de React falla.

## Hidratación (`src/main.jsx`)

El HTML viene prerenderizado (`scripts/prerender.mjs`) y ahora se **hidrata** (`hydrateRoot`) en vez
de tirarlo y rehacerlo. Para que encaje, el primer render del cliente tiene que ser idéntico al del
servidor:

- `Site` empieza con `w: 1280` (como el servidor) y lo corrige al ancho real en `componentDidMount`,
  antes del primer pintado.
- La cortina se renderiza igual que en el servidor; si la intro ya se vio (`introSeen`), Site la
  retira en `componentDidMount`. `index.html` además la oculta por CSS desde el primer byte
  (clase `zx-nointro`), así que el visitante recurrente no la ve nunca.
- **Nada en el render puede depender de `window`, `localStorage`, la fecha o el azar.** Eso va en
  `componentDidMount`/efectos. Si React registra los errores #418/#423 en consola, algo de esto se
  ha roto.
- En `npm run dev` no hay prerender y se monta con `createRoot` como antes.

## Coreografía (`src/site/Site.jsx`)

- **Agents** tiene su estado en `agStore`, no en el estado de Site; `Agents.jsx` se suscribe con
  `useSyncExternalStore`. Antes cada paso de la animación re-renderizaba la página entera.
- Agents y los resaltados que rotan (canales, PSP, reglas, conciliación) **no escriben en el DOM
  fuera de pantalla**. Sus relojes siguen corriendo igual y, al volver a verse, se repintan en el
  estado que les toca.
- `onScroll` hace **primero todas las lecturas** (`getBoundingClientRect`, `offsetLeft`…) **y luego
  todas las escrituras**, para no forzar un reflow por elemento, y no se repite si la posición de
  scroll no cambió en ese frame (Lenis y el evento nativo lo llamaban dos veces).
- El bucle del cursor personalizado se detiene al alcanzar al ratón y se reanuda al moverlo.

## Recursos

- SVG de `public/` optimizados con SVGO conservando `viewBox` (comparados píxel a píxel: idénticos).
  Para nuevos logos: `npx svgo --multipass` con `removeViewBox` desactivado.
- La imagen del mockup del hero apuntaba a una ruta inexistente (404); ahora usa `/logo-zeryx.svg`.
