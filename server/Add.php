<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");

require_once "Project.php";
require_once "ProjectDAO.php";

$projectJSON = file_get_contents('php://input');
$projectObjet = json_decode( $projectJSON );
$project = new Project($projectObjet);

$id = CadeauDAO::ajouter($project);
echo $id;

