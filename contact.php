<?php
require 'PHPMailer/PHPMailerAutoload.php';

$mail = new PHPMailer;

	if (isset($_POST["submit"])) {
		$name = $_POST['name'];
		$email = $_POST['email'];
		$message = $_POST['message'];
		$from = 'Coordial saludo, este mensaje viene de parte de Konecta Indígena'; 
		$to = 'kevinstikbernalbaccapro@gmail.com';
		$subject = $_POST['subject']; 
		$body = "From: $name\n E-Mail: $email\n Subject: $subject\n Message:\n $message";
	mail($to, $subject, $body, $from) or die("Error!");
	header("location: gracias.html");
	}
?>

