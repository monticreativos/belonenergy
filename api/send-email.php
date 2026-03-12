<?php
/**
 * Backend del formulario de contacto (PHP nativo).
 * Adaptado al formulario actual que envía datos mediante FormData (multipart/form-data)
 * y campos: nombre, telefono, email, tipo_suministro, factura_mensual, segmento, mensaje.
 *
 * Configura únicamente $EMAIL_TO.
 */

header('Content-Type: application/json; charset=utf-8');

// Configuración: correo donde recibir las solicitudes
$EMAIL_TO = 'hola@belonenergy.com';
//$EMAIL_TO = 'dvdmontalba@gmail.com';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Método no permitido']);
    exit;
}

$LENGTHS = [
    'nombre'          => 200,
    'email'           => 254,
    'telefono'        => 50,
    'tipo_suministro' => 50,
    'factura_mensual' => 50,
    'segmento'        => 50,
    'mensaje'         => 1000,
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

$nombre          = sanitize($_POST['nombre'] ?? '',          $LENGTHS['nombre']);
$email           = sanitize($_POST['email'] ?? '',           $LENGTHS['email']);
$telefono        = sanitize($_POST['telefono'] ?? '',        $LENGTHS['telefono']);
$tipo_suministro = sanitize($_POST['tipo_suministro'] ?? '', $LENGTHS['tipo_suministro']);
$factura_mensual = sanitize($_POST['factura_mensual'] ?? '', $LENGTHS['factura_mensual']);
$segmento        = sanitize($_POST['segmento'] ?? '',        $LENGTHS['segmento']);
$mensaje         = sanitize($_POST['mensaje'] ?? '',         $LENGTHS['mensaje']);

// Validaciones básicas: nombre obligatorio y al menos un dato de contacto (teléfono o email)
if ($nombre === '') {
    json_error(400, 'El nombre es obligatorio');
}
if ($telefono === '' && $email === '') {
    json_error(400, 'Debes indicar teléfono o email');
}
if ($email !== '' && !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    json_error(400, 'El email no es válido');
}

// Información sobre si se adjuntó factura (el propio contenido no se adjunta con mail() en esta versión)
$tieneFactura = (!empty($_FILES['factura']['name']) && $_FILES['factura']['error'] === UPLOAD_ERR_OK) ? 'Sí' : 'No';

$subject = 'Nueva solicitud de revisión de factura - Belón Energy';
$body  = "Nueva solicitud de revisión de factura - Belón Energy\n";
$body .= "------------------------------------------------------\n";
$body .= "Segmento: $segmento\n";
$body .= "Nombre: $nombre\n";
$body .= "Teléfono: $telefono\n";
$body .= "Email: $email\n";
$body .= "Tipo de suministro: $tipo_suministro\n";
$body .= "Factura mensual aproximada: $factura_mensual\n";
$body .= "Factura adjunta: $tieneFactura\n";
$body .= "Mensaje adicional:\n$mensaje\n";

$headers = [
    'X-Mailer: PHP/' . phpversion(),
    'Content-Type: text/plain; charset=UTF-8',
];
if ($email !== '') {
    $headers[] = 'Reply-To: ' . $email;
}

$sent = @mail($EMAIL_TO, $subject, $body, implode("\r\n", $headers));

if (!$sent) {
    json_error(500, 'No se pudo enviar. Inténtelo más tarde.');
}

echo json_encode(['success' => true]);
