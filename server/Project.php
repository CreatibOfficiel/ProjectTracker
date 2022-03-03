<?php
class Project implements JsonSerializable
{
    public static $filtres =
        array(
            'id' => FILTER_VALIDATE_INT,
            'name' => FILTER_SANITIZE_ENCODED,
            'author' => FILTER_SANITIZE_ENCODED,
            'description' => FILTER_SANITIZE_ENCODED,
            'technologies' => FILTER_SANITIZE_ENCODED,
            'link' => FILTER_SANITIZE_ENCODED
        );

    protected $id;
    protected $projectName;
    protected $author;
    protected $description;
    protected $projectTechnologiesList;
    protected $projectLink;

    public function __construct($projectObjet)
    {
        $tableau = filter_var_array((array) $projectObjet, Project::$filtres);
        $this->id = $tableau['id'];
        $this->projectName = $tableau['name'];
        $this->author = $tableau['author'];
        $this->description = $tableau['description'];
        $this->projectTechnologiesList = $tableau['technologies'];
        $this->projectLink = $tableau['link'];
    }

    public function __set($propriete, $valeur)
    {
        switch($propriete)
        {
            case 'id':
                $this->id = $valeur;
                break;
            case 'name':
                $this->projectName = $valeur;
                break;
            case 'author':
                $this->author = $valeur;
                break;
            case 'description':
                $this->description = $valeur;
                break;
            case 'technologies':
                $this->projectTechnologiesList = $valeur;
                break;
            case 'link':
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
