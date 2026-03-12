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

$subject = 'Nueva solicitud de revisión de factura - Belón Energy';
// Cuerpo de texto del mensaje (parte principal)
$textBody  = "Nueva solicitud de revisión de factura - Belón Energy\n";
$textBody .= "------------------------------------------------------\n";
$textBody .= "Segmento: $segmento\n";
$textBody .= "Nombre: $nombre\n";
$textBody .= "Teléfono: $telefono\n";
$textBody .= "Email: $email\n";
$textBody .= "Tipo de suministro: $tipo_suministro\n";
$textBody .= "Factura mensual aproximada: $factura_mensual\n";
$textBody .= "Mensaje adicional:\n$mensaje\n";

// Preparamos cabeceras comunes
$headers = [
    'X-Mailer: PHP/' . phpversion(),
];
if ($email !== '') {
    $headers[] = 'Reply-To: ' . $email;
}

// ¿Hay archivo de factura para adjuntar?
if (!empty($_FILES['factura']['name']) && $_FILES['factura']['error'] === UPLOAD_ERR_OK) {
    $fileTmpPath = $_FILES['factura']['tmp_name'];
    $fileName    = basename($_FILES['factura']['name']);
    $fileSize    = (int) $_FILES['factura']['size'];

    // Límite de tamaño (5 MB)
    if ($fileSize > 5 * 1024 * 1024) {
        json_error(400, 'La factura es demasiado grande (máx. 5 MB).');
    }

    $fileContent = file_get_contents($fileTmpPath);
    if ($fileContent === false) {
        json_error(500, 'No se pudo leer la factura adjunta.');
    }

    $fileContentEncoded = chunk_split(base64_encode($fileContent));
    $boundary = '==Multipart_Boundary_x' . md5((string) time()) . 'x';

    $headers[] = 'MIME-Version: 1.0';
    $headers[] = 'Content-Type: multipart/mixed; boundary="' . $boundary . '"';

    $body  = "This is a multi-part message in MIME format.\r\n\r\n";
    $body .= "--{$boundary}\r\n";
    $body .= "Content-Type: text/plain; charset=\"UTF-8\"\r\n";
    $body .= "Content-Transfer-Encoding: 7bit\r\n\r\n";
    $body .= $textBody . "\r\n\r\n";

    $body .= "--{$boundary}\r\n";
    $body .= "Content-Type: application/octet-stream; name=\"{$fileName}\"\r\n";
    $body .= "Content-Transfer-Encoding: base64\r\n";
    $body .= "Content-Disposition: attachment; filename=\"{$fileName}\"\r\n\r\n";
    $body .= $fileContentEncoded . "\r\n\r\n";
    $body .= "--{$boundary}--";
} else {
    // Sin adjunto: correo de sólo texto
    $headers[] = 'Content-Type: text/plain; charset=UTF-8';
    $body = $textBody;
}

$sent = @mail($EMAIL_TO, $subject, $body, implode("\r\n", $headers));

if (!$sent) {
    json_error(500, 'No se pudo enviar. Inténtelo más tarde.');
}

echo json_encode(['success' => true]);
