<?php
require 'PHPMailer/PHPMailerAutoload.php';

$mail = new PHPMailer;

$to = "kevinstikbernalbaccapro@gmail.com"; // Nuestro correo de contacto

// recogeremos los datos del formulario
$name = $_POST['name'];
$email = $_POST['email'];
$message = nl2br($_POST['message']);

if($name == "" || $email == "" || $message == ""):

	echo '<div class="alert alert-danger">Todos los campos son requeridos para el envio</div>';
else:

	$mail->from = $email;
	$mail->addAddress($to);
	$mail->isHtml(true);
	$mail->Body = '<strong>'.$name.'</strong> le ha contactado desde su web, y le ha enviado el siguiente mensaje: <br><p>'.$message.'</p>';

	$mail->CharSet = 'UTF-8';
	$mail->send();

endif;

?>
