<?php
interface projectSQL
{
    const SQL_LISTER          = "SELECT * FROM projects;";
    const SQL_CHERCHER_PAR_ID = "SELECT * FROM projects WHERE id = :id;";
    const SQL_AJOUTER         = "INSERT INTO projects (project_name, author, project_description, project_tech, project_link) VALUES (:project_name, :author, :project_description, :project_tech, :project_link);";
    const SQL_MODIFIER        = ""; //TODO
}
