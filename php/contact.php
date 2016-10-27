<?php

    $to = "myemail@mail.com"; // ENTER YOUR E-MAIL ADDRESS
    $from = $_REQUEST['email'];
    $headers = "From: $from";
    $subject = $_REQUEST['subject'];

    $fields = array();
    $fields{"name"} = "name";
    $fields{"email"} = "email";
    $fields{"subject"} = "subject";
    $fields{"message"} = "message";

    $body = "Here is what was sent:\n\n"; foreach($fields as $a => $b){   $body .= sprintf("%20s: %s\n",$b,$_REQUEST[$a]); }

    $send = mail($to, $subject, $body, $headers);

?>
