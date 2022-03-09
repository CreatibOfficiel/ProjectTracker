<?php
interface projectSQL
{
    const SQL_LISTER          = "SELECT `project_id`, `project_author`, `project_name`, `project_description`, `project_tech`, `project_link` FROM projects;";
    const SQL_CHERCHER_PAR_ID = "SELECT `project_id`, `project_author`, `project_name`, `project_description`, `project_tech`, `project_link` FROM projects WHERE `project_id` = :id;";
    const SQL_AJOUTER         = "INSERT INTO projects (`project_author`, `project_name`, `project_description`, `project_tech`, `project_link`) VALUES (:author, :name, :description, :technology, :link);";
    const SQL_MODIFIER        = ""; //TODO
}
