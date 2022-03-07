<?php
require_once("project.php");
require_once("projectSQL.php");

class Accesseur
{
    public static $baseDeDonnees = null;

    public static function initialiser()
    {
        $base = 'app-liste';
        $hote = 'app-liste.colgz3q3rmtd.us-east-1.rds.amazonaws.com';
        $usager = 'admin';
        $motDePasse = '7E&TpAPhoSM344YX';
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
        $demandeAjoutProject->bindValue(':project_name', $project->name, PDO::PARAM_STR);
        $demandeAjoutProject->bindValue(':author', $project->author, PDO::PARAM_STR);
        $demandeAjoutProject->bindValue(':project_description', $project->description, PDO::PARAM_STR);
        $demandeAjoutProject->bindValue(':project_tech', $project->technologies, PDO::PARAM_STR);
        $demandeAjoutProject->bindValue(':project_link', $project->link, PDO::PARAM_STR);
        $demandeAjoutProject->execute();
        return projectDAO::$baseDeDonnees->lastInsertId();
    }

    public static function modifier($project)
    {
        //TODO
    }
}
