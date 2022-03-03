<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");
header('Content-Type: application/json; charset=utf-8');

require_once "Project.php";
require_once("ProjectDAO.php");

$project = new Project($_GET);
$project = ProjectDAO::chercherParId($project->id);
echo json_encode($project);
