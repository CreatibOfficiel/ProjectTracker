<?php
require_once("Project.php");
require_once("ProjectSQL.php");

class Accesseur
{
    public static $baseDeDonnees = null;

    public static function initialiser()
    {
        $base = 'app-liste';
        $hote = 'ec2-34-234-85-178.compute-1.amazonaws.com';
        $usager = 'admin';
        $motDePasse = '7E&TpAPhoSM344YX';
        $nomDeSourceDeDonnees = 'mysql:dbname=' . $base . ';host=' . $hote;
        ProjectDAO::$baseDeDonnees = new PDO($nomDeSourceDeDonnees, $usager, $motDePasse);
        ProjectDAO::$baseDeDonnees->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    }
}

class ProjectDAO extends Accesseur implements ProjectSQL
{
    public static function lister()
    {
        ProjectDAO::initialiser();

        $demandeListeProject = ProjectDAO::$baseDeDonnees->prepare(ProjectDAO::SQL_LISTER);
        $demandeListeProject->execute();
        $listeProjectObjet = $demandeListeProject->fetchAll(PDO::FETCH_OBJ);
        //$contratsTableau = $demandeListeProject->fetchAll(PDO::FETCH_ASSOC);
        $listProject = null;
        foreach($listeProjectObjet as $projectObjet) $listProject[] = new Project($projectObjet);
        return $listProject;
    }

    public static function chercherParId($id)
    {
        ProjectDAO::initialiser();

        $demandeProject = ProjectDAO::$baseDeDonnees->prepare(ProjectDAO::SQL_CHERCHER_PAR_ID);
        $demandeProject->bindParam(':id', $id, PDO::PARAM_INT);
        $demandeProject->execute();
        $projectObjet = $demandeProject->fetchAll(PDO::FETCH_OBJ)[0];
        //$contrat = $demandeProject->fetch(PDO::FETCH_ASSOC);
        return new Project($projectObjet);
    }

    public static function ajouter($project)
    {
        ProjectDAO::initialiser();

        $demandeAjoutProject = ProjectDAO::$baseDeDonnees->prepare(ProjectDAO::SQL_AJOUTER);
        $demandeAjoutProject->bindValue(':name', $project->name, PDO::PARAM_STR);
        $demandeAjoutProject->bindValue(':author', $project->author, PDO::PARAM_STR);
        $demandeAjoutProject->bindValue(':description', $project->description, PDO::PARAM_STR);
        $demandeAjoutProject->bindValue(':technologies', $project->technologies, PDO::PARAM_STR);
        $demandeAjoutProject->bindValue(':link', $project->link, PDO::PARAM_STR);
        $demandeAjoutProject->execute();
        return ProjectDAO::$baseDeDonnees->lastInsertId();
    }

    public static function modifier($project)
    {
        //TODO
    }
}
