<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");
header('Content-Type: application/json; charset=utf-8');

require_once "project.php";
require_once("projectDAO.php");

$project = new project($_GET);
$project = projectDAO::chercherParId($project->id);
echo json_encode($project);
