<?php
    $name=$_REQUEST['name'];
    $email=$_REQUEST['email'];
    $comment=$_REQUEST['comment'];
    $phone=$_REQUEST['phone'];
    $subject=$_REQUEST['subject'];
    if (($name=="")||($email=="")||($comment=="")||($phone=="")||($subject==""))
    {
        echo "\nВсе поля обязательны для заполнения";
    }
    else
    {		
        $from="From: $name<$email>\r\nReturn-path: $email";
        $phone="Номер: $phone";
        $comment="$comment \n$phone";
        $test=mail("minskfotomail@gmail.com", $subject, $comment, $from);
        echo "Ваше письмо отправлено";
    }
?>
