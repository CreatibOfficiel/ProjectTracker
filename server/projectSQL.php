<?php
interface projectSQL
{
    const SQL_LISTER          = "SELECT * FROM project;";
    const SQL_CHERCHER_PAR_ID = "SELECT * FROM project WHERE id = :id;";
    const SQL_AJOUTER         = "INSERT INTO project (nom, marque, description) VALUES (:name, :author, :description, :technologies, :link);";
    const SQL_MODIFIER        = ""; //TODO
}
