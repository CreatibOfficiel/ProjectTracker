<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");
header('Content-Type: application/json; charset=utf-8');

require_once "Project.php";
require_once("ProjectDAO.php");

$cadeau = new Cadeau($_GET);
$cadeau = CadeauDAO::chercherParId($cadeau->id);
echo json_encode($cadeau);
