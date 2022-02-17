<?php
require_once("Project.php");
require_once("ProjectSQL.php");

class Accesseur
{
    public static $baseDeDonnees = null;

    public static function initialiser()
    {
        $base = 'app-cadeau';
        $hote = 'app-cadeau.cgg5r0ryyehp.us-east-1.rds.amazonaws.com';
        $usager = 'sebastien';
        $motDePasse = 'cegep2022';
        $nomDeSourceDeDonnees = 'mysql:dbname=' . $base . ';host=' . $hote;
        CadeauDAO::$baseDeDonnees = new PDO($nomDeSourceDeDonnees, $usager, $motDePasse);
        CadeauDAO::$baseDeDonnees->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    }
}

class CadeauDAO extends Accesseur implements CadeauSQL
{
    public static function lister()
    {
        CadeauDAO::initialiser();

        $demandeListeCadeau = CadeauDAO::$baseDeDonnees->prepare(CadeauDAO::SQL_LISTER);
        $demandeListeCadeau->execute();
        $listeCadeauObjet = $demandeListeCadeau->fetchAll(PDO::FETCH_OBJ);
        //$contratsTableau = $demandeListeCadeau->fetchAll(PDO::FETCH_ASSOC);
        $listeCadeau = null;
        foreach($listeCadeauObjet as $cadeauObjet) $listeCadeau[] = new Cadeau($cadeauObjet);
        return $listeCadeau;
    }

    public static function chercherParId($id)
    {
        CadeauDAO::initialiser();

        $demandeCadeau = CadeauDAO::$baseDeDonnees->prepare(CadeauDAO::SQL_CHERCHER_PAR_ID);
        $demandeCadeau->bindParam(':id', $id, PDO::PARAM_INT);
        $demandeCadeau->execute();
        $cadeauObjet = $demandeCadeau->fetchAll(PDO::FETCH_OBJ)[0];
        //$contrat = $demandeCadeau->fetch(PDO::FETCH_ASSOC);
        return new Cadeau($cadeauObjet);
    }

    public static function ajouter($cadeau)
    {
        CadeauDAO::initialiser();

        $demandeAjoutCadeau = CadeauDAO::$baseDeDonnees->prepare(CadeauDAO::SQL_AJOUTER);
        $demandeAjoutCadeau->bindValue(':nom', $cadeau->nom, PDO::PARAM_STR);
        $demandeAjoutCadeau->bindValue(':marque', $cadeau->marque, PDO::PARAM_STR);
        $demandeAjoutCadeau->bindValue(':description', $cadeau->description, PDO::PARAM_STR);
        $demandeAjoutCadeau->execute();
        return CadeauDAO::$baseDeDonnees->lastInsertId();
    }

    public static function modifier($cadeau)
    {
        //TODO
    }
}
