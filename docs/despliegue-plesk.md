# Despliegue en Plesk

La landing es estática: HTML ya renderizado por página, sin Node en el servidor.

## 1. Generar el paquete

```bash
npm ci
npm run release
```

Deja `dist/` y `zeryx-landing-plesk.zip` (el contenido de `dist/`, con `.htaccess` incluido).

## 2. Preparar el dominio en Plesk (una sola vez)

1. **Sitios web y dominios** → el dominio (`zeryx.io`) → **Configuración de hosting**:
   - Raíz del documento: `httpdocs`.
   - Marcar **Redirección permanente 301 de HTTP a HTTPS** (apto para SEO).
   - **Dominio preferido**: `zeryx.io` (sin www), igual que la URL canónica del sitio.
2. **Certificados SSL/TLS** → emitir Let's Encrypt para `zeryx.io` y `www.zeryx.io`.
3. **Configuración de Apache y nginx**: dejar Apache activo (el `.htaccess` se encarga del 404, la compresión y la caché). PHP no hace falta.

## 3. Subir

1. **Archivos** → `httpdocs` → borrar lo que haya (página por defecto de Plesk, `index.html` antiguo).
2. **Cargar** → `zeryx-landing-plesk.zip`.
3. Clic derecho en el zip → **Extraer archivos** en `httpdocs` (marcar sobrescribir) → borrar el zip.

`httpdocs` debe quedar con `index.html`, `.htaccess`, `assets/`, `producto/`, `robots.txt`, `sitemap.xml`… directamente, no dentro de una subcarpeta `dist/`.

## 4. Comprobar

- `https://zeryx.io/` carga, la intro sale solo la primera vez.
- `https://zeryx.io/producto/garantia/` carga directamente (recarga incluida).
- `https://zeryx.io/robots.txt`, `/sitemap.xml` y `/llms.txt` responden.
- Una URL inventada devuelve la portada (404 con contenido).
- `http://` y `www.` redirigen a `https://zeryx.io/`.

## Cabeceras de seguridad (nginx)

En Plesk, nginx sirve los ficheros estáticos directamente y Apache no llega a leer el `.htaccess`,
así que sus cabeceras (`X-Frame-Options`, `nosniff`…) no se envían; PageSpeed lo marca. Añádelas en
**Configuración de Apache y nginx → Directivas adicionales de nginx**:

```nginx
add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
add_header X-Frame-Options "SAMEORIGIN" always;
add_header X-Content-Type-Options "nosniff" always;
add_header Referrer-Policy "strict-origin-when-cross-origin" always;
add_header Cross-Origin-Opener-Policy "same-origin" always;
```

Una CSP requiere más cuidado (la página usa `<script>` y estilos en línea): si se añade, empezar con
`Content-Security-Policy-Report-Only` y revisar qué bloquearía antes de activarla.

## 5. Después de publicar

- Google Search Console: añadir la propiedad `zeryx.io` y enviar `https://zeryx.io/sitemap.xml`.
- Bing Webmaster Tools: importar desde Search Console.

## Actualizar

Repetir `npm run release` y los pasos 3 y 4. Los ficheros de `assets/` llevan hash en el nombre, así que se pueden borrar los antiguos sin riesgo.
