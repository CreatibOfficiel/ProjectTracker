<?php
class Project implements JsonSerializable
{
    public static $filtres =
        array(
            'id' => FILTER_VALIDATE_INT,
            'nom' => FILTER_SANITIZE_ENCODED,
            'marque' => FILTER_SANITIZE_ENCODED,
            'description' => FILTER_SANITIZE_ENCODED
        );

    protected $id;
    protected $nom;
    protected $marque;
    protected $description;

    public function __construct($cadeauObjet)
    {
        $tableau = filter_var_array((array) $cadeauObjet, Cadeau::$filtres);
        $this->id = $tableau['id'];
        $this->nom = $tableau['nom'];
        $this->marque = $tableau['marque'];
        $this->description = $tableau['description'];
    }

    public function __set($propriete, $valeur)
    {
        switch($propriete)
        {
            case 'id':
                $this->id = $valeur;
                break;
            case 'nom':
                $this->nom = $valeur;
                break;
            case 'marque':
                $this->marque = $valeur;
                break;
            case 'description':
                $this->description = $valeur;
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
            "nom"=>$this->nom,
            "marque"=>$this->marque,
            "description"=>$this->description
        );
    }
}
