<?php
$htmlfiles = glob('../../*.html');
$responce = [];

foreach ($htmlfiles as $file) {
  array_push($responce, basename($file));
}

echo json_encode($responce);