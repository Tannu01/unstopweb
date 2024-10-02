<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $message = htmlspecialchars(trim($_POST['message']));

    // Email details
    $to = "support@unstoptechnosolution.com";
    $subject = "Contact Form Submission from $name";
    $body = "You have received a new message from the contact form.\n\n".
            "Name: $name\n".
            "Email: $email\n\n".
            "Message:\n$message";

    $headers = "From: $email";

    // Send email
    if (mail($to, $subject, $body, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "Failed to send message.";
    }
}
?>
