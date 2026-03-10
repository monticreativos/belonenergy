<?php
/**
 * Backend del formulario de contacto – versión segura.
 * Validación estricta, saneamiento contra inyección en cabeceras y whitelist de valores.
 *
 * Configura: $EMAIL_TO y, si usas CORS, $ALLOWED_ORIGIN.
 */

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Configuración: correo donde recibir las solicitudes
$EMAIL_TO = 'hola@belonenergy.com';
// Si tu landing está en otro dominio, pon aquí ese origen (ej: https://www.belonenergy.com)
$ALLOWED_ORIGIN = 'https://www.belonenergy.com';
if (!empty($ALLOWED_ORIGIN)) {
    header('Access-Control-Allow-Origin: ' . $ALLOWED_ORIGIN);
}

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Método no permitido']);
    exit;
}

define('MAX_INPUT_BYTES', 4096);
$LENGTHS = ['nombre' => 200, 'email' => 254, 'telefono' => 50, 'tipo_propiedad' => 50, 'gasto_mensual' => 50, 'tipo_tejado' => 50];
$ALLOWED_VALUES = [
    'tipo_propiedad' => ['Vivienda', 'Empresa', 'Comunidad'],
    'gasto_mensual' => ['<50€', '50–100€', '100–200€', '+200€'],
    'tipo_tejado' => ['Tejado inclinado', 'Cubierta plana', 'No lo sé']
];

function sanitize($str, $maxLen) {
    if (!is_string($str)) return '';
    $s = preg_replace('/[\r\n\x00-\x1f]/u', '', $str);
    $s = trim($s);
    return mb_substr($s, 0, $maxLen, 'UTF-8');
}

function json_error($code, $message) {
    http_response_code($code);
    echo json_encode(['success' => false, 'message' => $message]);
    exit;
}

$raw = file_get_contents('php://input');
if (strlen($raw) > MAX_INPUT_BYTES) {
    json_error(400, 'Solicitud demasiado grande');
}

$data = json_decode($raw, true);
if (!is_array($data)) {
    json_error(400, 'Datos no válidos');
}

$nombre = sanitize($data['nombre'] ?? '', $LENGTHS['nombre']);
$email = sanitize($data['email'] ?? '', $LENGTHS['email']);
$telefono = sanitize($data['telefono'] ?? '', $LENGTHS['telefono']);
$tipo_propiedad = sanitize($data['tipo_propiedad'] ?? '', $LENGTHS['tipo_propiedad']);
$gasto_mensual = sanitize($data['gasto_mensual'] ?? '', $LENGTHS['gasto_mensual']);
$tipo_tejado = sanitize($data['tipo_tejado'] ?? '', $LENGTHS['tipo_tejado']);

if ($nombre === '') {
    json_error(400, 'El nombre es obligatorio');
}
if ($email === '') {
    json_error(400, 'El email es obligatorio');
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    json_error(400, 'El email no es válido');
}
if (!in_array($tipo_propiedad, $ALLOWED_VALUES['tipo_propiedad'], true)) {
    json_error(400, 'Tipo de propiedad no válido');
}
if (!in_array($gasto_mensual, $ALLOWED_VALUES['gasto_mensual'], true)) {
    json_error(400, 'Gasto mensual no válido');
}
if (!in_array($tipo_tejado, $ALLOWED_VALUES['tipo_tejado'], true)) {
    json_error(400, 'Tipo de tejado no válido');
}

$subject = 'Solicitud de estudio - Belón Energy';
$body = "Nueva solicitud de estudio - Belón Energy\n";
$body .= "----------------------------------------\n";
$body .= "Nombre: $nombre\n";
$body .= "Email: $email\n";
$body .= "Teléfono: $telefono\n";
$body .= "Tipo de propiedad: $tipo_propiedad\n";
$body .= "Gasto mensual: $gasto_mensual\n";
$body .= "Tipo de tejado: $tipo_tejado\n";

$mailHeaders = [
    'Reply-To: ' . $email,
    'X-Mailer: PHP/' . phpversion(),
    'Content-Type: text/plain; charset=UTF-8'
];

$sent = @mail($EMAIL_TO, $subject, $body, implode("\r\n", $mailHeaders));

if (!$sent) {
    json_error(500, 'No se pudo enviar. Inténtelo más tarde.');
}

echo json_encode(['success' => true]);
