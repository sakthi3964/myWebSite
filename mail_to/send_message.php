<?php
// use PHPMailer;
// use Exception;
// require 'Exception.php';
// require 'PHPMailer.php';
// require 'SMTP.php';
// require 'vendor/autoload.php';
require('class.phpmailer.php');
$mail = new PHPMailer();

$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];


$mail->IsSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'contactsakthimurugan@gmail.com';                 // SMTP username
$mail->Password = 'Vthink@123';                           // SMTP password
$mail->SMTPSecure = 'tls';                            // Enable encryption, 'ssl' also accepted

$mail->From = 'sakthi3964@gmail.com';
$mail->FromName = 'Sakthi Website';
$mail->addAddress('sakthi3964@gmail.com', 'sakthi');   

$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = $subject;
$mail->Body    = "<html>
<head>
	<title>Sample</title>
</head>
<body>
	<table>
		<tr>
			<td>Name : </td>
			<td>$name</td>
		</tr>
		<tr>
			<td>Email : </td>
			<td>$email</td>
		</tr>
		<tr>
			<td>Message : </td>
			<td>$message</td>
		</tr>
	</table>
</body>
</html>";

if(!$mail->send()) {
    // echo 'Message could not be sent.';
	// echo 'Mailer Error: ' . $mail->ErrorInfo;
	echo 'fail';
} else {
	echo 'success';
    // echo 'Message has been sent';
}