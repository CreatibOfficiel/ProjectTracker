<?php
class project implements JsonSerializable
{
    public static $filtres =
        array(
            'project_id' => FILTER_VALIDATE_INT,
            'project_name' => FILTER_SANITIZE_ENCODED,
            'project_author' => FILTER_SANITIZE_ENCODED,
            'project_description' => FILTER_SANITIZE_ENCODED,
            'project_tech' => FILTER_SANITIZE_ENCODED,
            'project_link' => FILTER_SANITIZE_ENCODED
        );

    protected $project_id;
    protected $project_name;
    protected $project_author;
    protected $project_description;
    protected $project_tech;
    protected $project_link;

    public function __construct($projectObjet)
    {
        $tableau = filter_var_array((array) $projectObjet, project::$filtres);
        $this->project_id = $tableau['project_id'];
        $this->project_author = $tableau['project_author'];
        $this->project_name = $tableau['project_name'];
        $this->project_description = $tableau['project_description'];
        $this->project_tech = $tableau['project_tech'];
        $this->project_link = $tableau['project_link'];
    }

    public function __set($propriete, $valeur)
    {
        switch($propriete)
        {
            case 'project_id':
                $this->project_id = $valeur;
                break;
            case 'project_name':
                $this->project_name = $valeur;
                break;
            case 'project_author':
                $this->project_author = $valeur;
                break;
            case 'project_description':
                $this->project_description = $valeur;
                break;
            case 'project_tech':
                $this->project_tech = $valeur;
                break;
            case 'project_link':
                $this->project_link = $valeur;
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
            "id"=>$this->project_id,
            "name"=>$this->project_name,
            "author"=>$this->project_author,
            "description"=>$this->project_description,
            "technology"=>$this->project_tech,
            "link"=>$this->project_link
        );
    }
}
