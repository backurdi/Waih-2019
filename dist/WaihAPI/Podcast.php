<?php
/**
 * Created by IntelliJ IDEA.
 * User: muneebashraf
 * Date: 11/02/2019
 * Time: 12.26
 */

class Podcast
{
    //database forbindelse samt database navn
    private $conn;
    private $table_name = 'podcasts';

    //podcast egenskaber
    public $id ;
    public $title;
    public $hostname;
    public $guestname;
    public $description;
    public $picture;
    public $audioPath;


    public function __construct($db)
    {
        $this->conn = $db;
    }

    function read(){
    $query = 'SELECT * FROM ' . $this->table_name;

    $stmt = $this->conn->prepare($query);

    $stmt->execute();

    return $stmt;
    }

    function upload($path){
        //hent path fra upload filen
        $this->audioPath=$path;

        //opret query
        $query = 'INSERT INTO ' . $this->table_name . ' SET title=:title, hostname=:hostname, guestname=:guestname, description=:description, picture=:picture, audioPath=:audioPath';

        //gør klar til at køre query
        $stmt =$this->conn->prepare($query);

        //rens for sql angreb
        $this->title=htmlspecialchars(strip_tags($this->title));
        $this->hostname=htmlspecialchars(strip_tags($this->hostname));
        $this->guestname=htmlspecialchars(strip_tags($this->guestname));
        $this->description=htmlspecialchars(strip_tags($this->description));
        $this->picture=htmlspecialchars(strip_tags($this->picture));
        $this->audioPath=htmlspecialchars(strip_tags($this->audioPath));

        //erstat placeholders i query
        $stmt->bindParam(':title',$this->title);
        $stmt->bindParam(':hostname',$this->hostname);
        $stmt->bindParam(':guestname',$this->guestname);
        $stmt->bindParam(':description',$this->description);
        $stmt->bindParam(':picture',$this->picture);
        $stmt->bindParam(':audioPath',$this->audioPath);

        //kør query
        if ($stmt->execute()){
            return true;
        } else {
            return false;
        }
    }
}