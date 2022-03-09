<?php
require_once("project.php");
require_once("projectSQL.php");

class Accesseur
{
    public static $baseDeDonnees = null;

    public static function initialiser()
    {
        $base = 'project-tracker';
        $hote = 'db-projecttracker.c5edxctf0dwc.us-east-1.rds.amazonaws.com';
        $usager = 'admin';
        $motDePasse = 'KhWjc7oNd!';
        $nomDeSourceDeDonnees = 'mysql:dbname=' . $base . ';host=' . $hote;
        projectDAO::$baseDeDonnees = new PDO($nomDeSourceDeDonnees, $usager, $motDePasse);
        projectDAO::$baseDeDonnees->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    }
}

class projectDAO extends Accesseur implements projectSQL
{
    public static function lister()
    {
        projectDAO::initialiser();

        $demandeListeProject = projectDAO::$baseDeDonnees->prepare(projectDAO::SQL_LISTER);
        $demandeListeProject->execute();
        $listeProjectObjet = $demandeListeProject->fetchAll(PDO::FETCH_OBJ);
        //$contratsTableau = $demandeListeProject->fetchAll(PDO::FETCH_ASSOC);
        $listProject = null;
        foreach($listeProjectObjet as $projectObjet) $listProject[] = new project($projectObjet);
        return $listProject;
    }

    public static function chercherParId($id)
    {
        projectDAO::initialiser();

        $demandeProject = projectDAO::$baseDeDonnees->prepare(projectDAO::SQL_CHERCHER_PAR_ID);
        $demandeProject->bindParam(':id', $id, PDO::PARAM_INT);
        $demandeProject->execute();
        $projectObjet = $demandeProject->fetchAll(PDO::FETCH_OBJ)[0];
        //$contrat = $demandeProject->fetch(PDO::FETCH_ASSOC);
        return new project($projectObjet);
    }

    public static function ajouter($project)
    {
        projectDAO::initialiser();
        $demandeAjoutProject = projectDAO::$baseDeDonnees->prepare(projectDAO::SQL_AJOUTER);
        $demandeAjoutProject->bindValue(':name', $project->project_name, PDO::PARAM_STR);
        $demandeAjoutProject->bindValue(':author', $project->project_author, PDO::PARAM_STR);
        $demandeAjoutProject->bindValue(':description', $project->project_description, PDO::PARAM_STR);
        $demandeAjoutProject->bindValue(':technology', $project->project_tech, PDO::PARAM_STR);
        $demandeAjoutProject->bindValue(':link', $project->project_link, PDO::PARAM_STR);
        $demandeAjoutProject->execute();
        return projectDAO::$baseDeDonnees->lastInsertId();
    }

    public static function modifier($project)
    {
        //TODO
    }
}
