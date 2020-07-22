<?php

$data = $_POST ?? [];

if (! $data) {
    echo 'Заполните, пожалуйста, поля.';
    die();
}

if (! empty($data['email']) && ! filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
    echo 'Введите корректный e-mail.';
    die();
}

$address = '';
$whoAmI = getWhoAmI()[$data['who_am_i']] ?? '';

if (! empty($data['answer']) && $data['answer'] == 'email' && ! empty($data['email'])) {
    $address = 'E-mail: ' . $data['email'];
} elseif (! empty($data['answer']) && $data['answer'] != 'email' && ! empty($data['phone'])) {
    $address = (getAnswerLabel()[$data['answer']] ?? '') . ': ' . $data['phone'];
}

$subject = 'E-stado';
$to = 'volohovich_project@leadme.agency';

$message = "Дойных коров: {$_POST['count_cows']}\n";
$message .= "Молока в сутки: {$_POST['count_milk']}\n";
$message .= "Я являюсь: {$whoAmI}\n";

if ($address) {
    $message .= $address;
}

try {
    mail($to, $subject, $message);

    echo 'Успешно отправлено.';
    die();
} catch (Exception $e) {
    echo 'Произошла ошибка при отправке.';
    die();
}

function getWhoAmI()
{
    return [
        'director' => 'руководителем фермы',
        'zootechnician' => 'зоотехником',
        'veterinarian' => 'ветеренаром'
    ];
}

function getAnswerLabel()
{
    return [
        'phone' => 'Телефон',
        'email' => 'E-mail',
        'viber' => 'Viber',
        'telegram' => 'Telegram',
        'whatsaap' => 'Whatsaap'
    ];
}
