<?php
interface projectSQL
{
    const SQL_LISTER          = "SELECT * FROM projects;";
    const SQL_CHERCHER_PAR_ID = "SELECT * FROM projects WHERE id = :id;";
    const SQL_AJOUTER         = "INSERT INTO projects (name, author, description, projectTechnologiesList, projectLink) VALUES (:name, :author, :description, :projectTechnologiesList, :projectLink);";
    const SQL_MODIFIER        = ""; //TODO
}
