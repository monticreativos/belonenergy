# Backend del formulario (100 % tuyo, seguro y profesional)

El formulario envía los datos a **tu propio** backend. Dos opciones: Netlify + Resend o PHP.

---

## Opción A: Netlify + Resend (recomendada)

1. **Resend** (gratis): [resend.com](https://resend.com) → API Keys → crea una clave.
2. **Despliega en Netlify**: conecta el repo. La función `netlify/functions/send-email.js` se publica sola.
3. **Variables de entorno en Netlify** (Site settings → Environment variables):
   - `RESEND_API_KEY` → tu API key de Resend
   - `EMAIL_TO` → correo donde recibir solicitudes (ej: `hola@belonenergy.com`)
   - `FROM_EMAIL` (opcional) → remitente verificado en Resend
   - `ALLOWED_ORIGINS` (opcional) → orígenes CORS permitidos, separados por coma (ej: `https://www.belonenergy.com,https://belonenergy.com`)
4. En `landing.html` el formulario usa `data-form-endpoint="/.netlify/functions/send-email"`. No cambies nada si despliegas en Netlify.

---

## Opción B: Hosting con PHP

1. Sube la carpeta `api/` a tu servidor (ej: `https://tudominio.com/api/send-email.php`).
2. Edita `api/send-email.php`: cambia `$EMAIL_TO` y `$ALLOWED_ORIGIN` (dominio de tu landing).
3. En `landing.html`: `data-form-endpoint="https://tudominio.com/api/send-email.php"`

---

## Medidas de seguridad implementadas

- **HTTPS**: El frontend solo envía el formulario si la página se sirve por HTTPS (o en localhost para pruebas). En producción evita enviar datos por HTTP.
- **Validación en backend**: Nombre y email obligatorios; email con formato válido; longitud máxima en todos los campos (nombre 200, email 254, teléfono 50, etc.).
- **Whitelist**: Los desplegables (tipo de propiedad, gasto mensual, tipo de tejado) solo aceptan valores permitidos en el servidor. Cualquier otro valor se rechaza.
- **Saneamiento**: Se eliminan caracteres de control y saltos de línea (`\r`, `\n`, etc.) en todos los textos para evitar inyección en cabeceras de correo.
- **Límite de tamaño**: El cuerpo del POST está limitado a 4 KB. Peticiones más grandes se rechazan.
- **CORS**: En Netlify puedes restringir orígenes con `ALLOWED_ORIGINS`. En PHP se usa `$ALLOWED_ORIGIN`.
- **Respuestas genéricas**: En errores del servidor o del envío de correo no se exponen detalles internos; el usuario ve un mensaje genérico.
- **Honeypot**: Campo oculto anti-bots; si viene rellenado, el frontend no envía.

El correo de destino **nunca** va en el HTML; solo en variables de entorno (Netlify) o en el archivo PHP en el servidor.
