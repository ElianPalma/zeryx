# Afirmaciones por confirmar

El contenido de la web es el de Pedro ("Zeryx Landing VERSION 4_2", octubre de 2026), y los datos para buscadores e IA (`llms.txt`, `llms-full.txt` y datos estructurados) lo repiten tal cual, por decisión de Andrés.

Esta lista compara ese contenido con lo que se veía en el código el 19-oct-2026 (zeryx-frontend y zeryx-pay, worktree de `origin/dev`). El servicio de agentes (zeryx-agents) no estaba en local, así que parte de esto puede existir ya ahí. Conviene confirmarlo antes de publicar.

| Afirmación | Qué se veía en el código |
|---|---|
| Zeryx cobra por WhatsApp, y por correo si no responde | El agente de cobro de facturas solo enviaba correo; WhatsApp existía para carritos y pagos fallidos |
| Resumen diario a las 8:00 por WhatsApp | Había un aviso diario por correo de aprobaciones y alertas al equipo por Slack y Telegram |
| Conecta con Odoo y lee cada día facturas, vencimientos y cobros | No había conector de Odoo; el único ERP era la facturación de Zeryx |
| Subir las facturas en un Excel / CSV | No había importación |
| Portal donde el cliente ve y descarga su factura | El checkout solo tenía pago, éxito, cancelación y baja |
| Pago por transferencia desde el enlace | SEPA existía pero estaba apagado por defecto; el checkout tenía tarjeta, Apple Pay, Google Pay, PayPal y Bizum |
| Transferencias conciliadas "en cuanto las concilias en Odoo" | Depende del conector de Odoo |
| Tono elegido por el cliente | El tono lo elegía el agente según la antigüedad de la deuda |
| Como máximo un mensaje cada tres días por factura | El límite configurable era de contactos por cliente y semana (2 por defecto) |
| Grupo de control, marcador y garantía de +10 puntos | No había nada en el código; es una condición comercial |

Coincide con el código: aprobación de cada mensaje, aprobación obligatoria por encima de un importe, clientes excluidos ("no reclamar"), paso al comercio de disputas y morosidad avanzada, promesas de pago, enlace de pago en cada mensaje y cobro registrado en su factura.

Pendiente de configurar: el número de WhatsApp de "Pedir acceso" (`WHATSAPP_NUMBER` en `src/config.js`). Mientras esté vacío, los botones llevan a la sección final de la página.
