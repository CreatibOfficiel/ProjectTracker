<?php
class project implements JsonSerializable
{
    public static $filtres =
        array(
            'id' => FILTER_VALIDATE_INT,
            'project_name' => FILTER_SANITIZE_ENCODED,
            'author' => FILTER_SANITIZE_ENCODED,
            'project_description' => FILTER_SANITIZE_ENCODED,
            'project_tech' => FILTER_SANITIZE_ENCODED,
            'project_link' => FILTER_SANITIZE_ENCODED
        );

    protected $id;
    protected $projectName;
    protected $author;
    protected $description;
    protected $projectTechnologiesList;
    protected $projectLink;

    public function __construct($projectObjet)
    {
        $tableau = filter_var_array((array) $projectObjet, project::$filtres);
        $this->id = $tableau['id'];
        $this->author = $tableau['author'];
        $this->projectName = $tableau['project_name'];
        $this->description = $tableau['project_description'];
        $this->projectTechnologiesList = $tableau['project_tech'];
        $this->projectLink = $tableau['project_link'];
    }

    public function __set($propriete, $valeur)
    {
        switch($propriete)
        {
            case 'id':
                $this->id = $valeur;
                break;
            case 'project_name':
                $this->projectName = $valeur;
                break;
            case 'author':
                $this->author = $valeur;
                break;
            case 'project_description':
                $this->description = $valeur;
                break;
            case 'project_tech':
                $this->projectTechnologiesList = $valeur;
                break;
            case 'project_link':
                $this->projectLink = $valeur;
                break;
        }
    }

    public function __get($propriete)
    {
        $self = get_object_vars($this);
        return $self[$propriete];
    }

    public function jsonSerialize()
    {
        //Define the fields we need
        return array(
            "id"=>$this->id,
            "name"=>$this->projectName,
            "author"=>$this->author,
            "description"=>$this->description,
            "technologies"=>$this->projectTechnologiesList,
            "link"=>$this->projectLink
        );
    }
}
