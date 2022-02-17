<?php
interface CadeauSQL
{
    const SQL_LISTER          = "SELECT * FROM cadeau;";
    const SQL_CHERCHER_PAR_ID = "SELECT * FROM cadeau WHERE id = :id;";
    const SQL_AJOUTER         = "INSERT INTO cadeau (nom, marque, description) VALUES (:nom, :marque, :description);";
    const SQL_MODIFIER        = ""; //TODO
}
