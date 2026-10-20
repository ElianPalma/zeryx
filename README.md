# zeryx-landing

Landing de Zeryx como proyecto Vite + React. Diseño y animaciones de "Zeryx Landing Motion v8"; contenido de "Zeryx Landing VERSION 4_2" de Pedro.

## Comandos

```bash
npm install
npm run dev      # http://localhost:5280
npm run build    # estático en dist/
npm run preview
```

## Estructura

- `src/site/Site.jsx`: armazón de todas las páginas. Estado (menú, vídeo, FAQ) y toda la coreografía de scroll (Lenis, revelados, pila de producto, conversación de WhatsApp, ciclo horizontal, marquesinas, contadores, cursor).
- `src/site/viewModel.js`: valores derivados del estado y del ancho de pantalla que consumen las secciones.
- `src/sections/*.jsx`: una sección por fichero, en el orden de la página.
- `src/data/content.js`: textos y listas de la home (pasos, garantía, reglas, precios, FAQ, hoja de ruta).
- `src/components/`: `Silk` (fondo WebGL), `SplitWords` (titulares por palabras), `Counter` (odómetro), `Roll` (texto que rueda en botones).
- `src/lib/silk-bg.js`: web component `<zeryx-silk>` (WebGL2). `src/lib/motion.js`: springs de tilt/imán, odómetro y cortinilla.
- `src/demo/`: animación "Zeryx en 50 segundos" que se abre en el modal de "Ver demo" (se carga bajo demanda).
- `src/config.js`: variante del hero (`A`/`B`), cortinilla de entrada, vídeo de la demo y número de WhatsApp de "Pedir acceso" (`WHATSAPP_NUMBER`, solo dígitos con 34 delante).

## Páginas

- `/`: la home (`src/pages/HomePage.jsx`).
- `/producto/`: índice de funciones (`src/pages/ProductIndex.jsx`).
- `/producto/<slug>/`: una página por función (`src/pages/FeaturePage.jsx`), con el contenido en `src/data/features.js`. `status: 'soon'` la marca como "En el plan" y cambia los botones a "Avísame cuando esté"; `soon: true` en una capacidad le pone la etiqueta.

Las rutas están en `src/routes.js`. `src/site/Site.jsx` es el armazón común (nav, cursor, modal de la demo, pie y toda la coreografía de scroll). En `docs/afirmaciones-por-confirmar.md` está lo que el contenido afirma y no se vio en el código.

## SEO y SEO para IA

`npm run build` genera el cliente, renderiza la página en el servidor (`src/entry-server.jsx`) y `scripts/prerender.mjs` escribe en `dist/`:

- `index.html` con todo el contenido ya en el HTML (los rastreadores de IA no ejecutan JavaScript), metadatos, canonical, Open Graph y JSON-LD (`Organization`, `WebSite`, `WebPage`, `SoftwareApplication` con los planes y `FAQPage`).
- `robots.txt` (abierto a Google, Bing y a los rastreadores de IA: GPTBot, ClaudeBot, PerplexityBot, Google-Extended…), `sitemap.xml`, `site.webmanifest`.
- `llms.txt` y `llms-full.txt`: resumen y ficha completa del producto para modelos de lenguaje.

Todo sale de `src/config.js` (`SITE`, `LINKS`), `src/data/content.js` (planes, FAQ) y `src/seo/facts.js` (descripción, funciones, integraciones, regulación). Si cambia un precio o una pregunta, se cambia ahí y se regenera todo.

`npm run og` regenera `public/og-image.png` y `public/apple-touch-icon.png` desde `scripts/og/` con Edge en modo headless.

## Configuración

`VITE_DEMO_VIDEO_URL` (opcional): URL de YouTube, Vimeo o un fichero de vídeo. Sin ella, el modal muestra la animación de `src/demo/`.

La fuente Inter va autoalojada en `public/fonts/`. Los logos de integraciones y de "Pregúntale a tu IA" salen del servicio de favicons de Google.
