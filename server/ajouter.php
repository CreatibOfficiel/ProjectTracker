<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");

require_once "Project.php";
require_once "ProjectDAO.php";

$cadeauJSON = file_get_contents('php://input');
$cadeauObjet = json_decode( $cadeauJSON );
$cadeau = new Cadeau($cadeauObjet);

$id = CadeauDAO::ajouter($cadeau);
echo $id;

