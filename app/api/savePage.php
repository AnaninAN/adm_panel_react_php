<?php
$_POST = json_decode(file_get_contents('php://input'), true);

$file = '../../' . $_POST['pageName'];
$newHTML = $_POST['html'];

if ($newHTML && $file) {
    file_put_contents($file, $newHTML);
} else {
    header('http/1.0 400 Bad Request');
}