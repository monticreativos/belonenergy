/**
 * Backend del formulario de contacto – versión segura.
 * Validación estricta, saneamiento contra inyección y límites de tamaño.
 *
 * Variables de entorno en Netlify:
 *   RESEND_API_KEY   → API key de resend.com
 *   EMAIL_TO         → Correo donde recibir solicitudes
 *   FROM_EMAIL       → (opcional) Remitente verificado en Resend
 *   ALLOWED_ORIGINS  → (opcional) Orígenes CORS permitidos, separados por coma
 */

const MAX_BODY_BYTES = 4096;
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
const LENGTHS = { nombre: 200, email: 254, telefono: 50, tipo_propiedad: 50, gasto_mensual: 50, tipo_tejado: 50 };
const ALLOWED = {
  tipo_propiedad: ['Vivienda', 'Empresa', 'Comunidad'],
  gasto_mensual: ['<50€', '50–100€', '100–200€', '+200€'],
  tipo_tejado: ['Tejado inclinado', 'Cubierta plana', 'No lo sé']
};

function sanitize(str, maxLen) {
  if (typeof str !== 'string') return '';
  let s = str.replace(/[\r\n\x00-\x1f]/g, '').trim();
  return s.slice(0, maxLen);
}

function jsonResponse(statusCode, body, headers) {
  return {
    statusCode,
    headers: { 'Content-Type': 'application/json', ...headers },
    body: JSON.stringify(body)
  };
}

exports.handler = async function (event, context) {
  const requestOrigin = event.headers.origin || event.headers.Origin || '';
  const allowedOrigins = process.env.ALLOWED_ORIGINS
    ? process.env.ALLOWED_ORIGINS.split(',').map(o => o.trim()).filter(Boolean)
    : [];
  const corsOrigin = allowedOrigins.length > 0 && allowedOrigins.includes(requestOrigin)
    ? requestOrigin
    : (allowedOrigins.length === 0 ? requestOrigin || '*' : allowedOrigins[0]);
  const corsHeaders = {
    'Access-Control-Allow-Origin': corsOrigin,
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS'
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 204, headers: corsHeaders, body: '' };
  }
  if (event.httpMethod !== 'POST') {
    return jsonResponse(405, { success: false, message: 'Método no permitido' }, corsHeaders);
  }

  const rawBody = event.body || '';
  if (Buffer.byteLength(rawBody, 'utf8') > MAX_BODY_BYTES) {
    return jsonResponse(400, { success: false, message: 'Solicitud demasiado grande' }, corsHeaders);
  }

  let body;
  try {
    body = JSON.parse(rawBody);
  } catch (e) {
    return jsonResponse(400, { success: false, message: 'Datos no válidos' }, corsHeaders);
  }

  const nombre = sanitize(body.nombre, LENGTHS.nombre);
  const email = sanitize(body.email, LENGTHS.email);
  const telefono = sanitize(body.telefono, LENGTHS.telefono);
  const tipo_propiedad = sanitize(body.tipo_propiedad, LENGTHS.tipo_propiedad);
  const gasto_mensual = sanitize(body.gasto_mensual, LENGTHS.gasto_mensual);
  const tipo_tejado = sanitize(body.tipo_tejado, LENGTHS.tipo_tejado);

  if (!nombre) {
    return jsonResponse(400, { success: false, message: 'El nombre es obligatorio' }, corsHeaders);
  }
  if (!email) {
    return jsonResponse(400, { success: false, message: 'El email es obligatorio' }, corsHeaders);
  }
  if (!EMAIL_REGEX.test(email)) {
    return jsonResponse(400, { success: false, message: 'El email no es válido' }, corsHeaders);
  }
  if (ALLOWED.tipo_propiedad.length && !ALLOWED.tipo_propiedad.includes(tipo_propiedad)) {
    return jsonResponse(400, { success: false, message: 'Tipo de propiedad no válido' }, corsHeaders);
  }
  if (ALLOWED.gasto_mensual.length && !ALLOWED.gasto_mensual.includes(gasto_mensual)) {
    return jsonResponse(400, { success: false, message: 'Gasto mensual no válido' }, corsHeaders);
  }
  if (ALLOWED.tipo_tejado.length && !ALLOWED.tipo_tejado.includes(tipo_tejado)) {
    return jsonResponse(400, { success: false, message: 'Tipo de tejado no válido' }, corsHeaders);
  }

  const apiKey = process.env.RESEND_API_KEY;
  const emailTo = process.env.EMAIL_TO;
  const fromEmail = process.env.FROM_EMAIL || 'Belón Energy <onboarding@resend.dev>';

  if (!apiKey || !emailTo) {
    return jsonResponse(500, { success: false, message: 'Error de configuración del servidor' }, corsHeaders);
  }

  const text = [
    'Nueva solicitud de estudio - Belón Energy',
    '----------------------------------------',
    'Nombre: ' + nombre,
    'Email: ' + email,
    'Teléfono: ' + telefono,
    'Tipo de propiedad: ' + tipo_propiedad,
    'Gasto mensual: ' + gasto_mensual,
    'Tipo de tejado: ' + tipo_tejado
  ].join('\n');

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + apiKey,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [emailTo],
        subject: 'Solicitud de estudio - Belón Energy',
        text: text,
        reply_to: email
      })
    });

    const data = await res.json();

    if (!res.ok) {
      return jsonResponse(502, { success: false, message: 'No se pudo enviar el correo. Inténtelo más tarde.' }, corsHeaders);
    }

    return jsonResponse(200, { success: true }, corsHeaders);
  } catch (err) {
    return jsonResponse(500, { success: false, message: 'Error temporal. Inténtelo más tarde.' }, corsHeaders);
  }
};
