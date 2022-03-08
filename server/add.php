<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");

require_once "project.php";
require_once "projectDAO.php";

$projectJSON = file_get_contents('php://input');
$projectObjet = json_decode( $projectJSON );
$project = new project($projectObjet);

echo $project;

$id = projectDAO::ajouter($project);
echo $id;

