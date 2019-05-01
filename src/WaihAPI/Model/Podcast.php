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
    public $audioPath;
    public $programId;


    public function __construct($db)
    {
        $this->conn = $db;
    }

    function getAudioPath($id)
    {
        $this->id = $id;

        $query = 'SELECT audioPath FROM ' . $this->table_name . ' WHERE id = ' . $this->id;

        $stmt = $this->conn->prepare($query);

        $stmt->execute();

        return $stmt;
    }

    function delete($id)
    {
        $this->id = $id;

        $query = 'DELETE FROM ' . $this->table_name . ' WHERE id = ' . $this->id;

        $stmt = $this->conn->prepare($query);

        $stmt->execute();

        return $stmt;
    }

    function getAll(){
    $query = 'SELECT * FROM ' . $this->table_name . ' ORDER BY id DESC';

    $stmt = $this->conn->prepare($query);

    $stmt->execute();

    return $stmt;
    }

    function getLatest(){
        $query = 'SELECT * FROM ' . $this->table_name . ' ORDER BY id DESC LIMIT 6';

        $stmt = $this->conn->prepare($query);

        $stmt->execute();

        return $stmt;
    }

    function getById($id){
        $this->programId = $id;

        $query = 'SELECT * FROM ' . $this->table_name . ' WHERE programId = ' . $this->programId;

        $stmt = $this->conn->prepare($query);

        $stmt->execute();

        return $stmt;
    }

    function upload($path){
        //hent path fra upload filen
        $this->audioPath=$path;

        //opret query
        $query = 'INSERT INTO ' . $this->table_name . ' SET title=:title, hostname=:hostname, guestname=:guestname, description=:description, audioPath=:audioPath, programId=:programId';

        //gør klar til at køre query
        $stmt =$this->conn->prepare($query);

        //rens for sql angreb
        $this->title=htmlspecialchars(strip_tags($this->title));
        $this->hostname=htmlspecialchars(strip_tags($this->hostname));
        $this->guestname=htmlspecialchars(strip_tags($this->guestname));
        $this->description=htmlspecialchars(strip_tags($this->description));
        $this->audioPath=htmlspecialchars(strip_tags($this->audioPath));
        $this->programId=htmlspecialchars(strip_tags($this->programId));

        //erstat placeholders i query
        $stmt->bindParam(':title',$this->title);
        $stmt->bindParam(':hostname',$this->hostname);
        $stmt->bindParam(':guestname',$this->guestname);
        $stmt->bindParam(':description',$this->description);
        $stmt->bindParam(':audioPath',$this->audioPath);
        $stmt->bindParam(':programId',$this->programId);

        //kør query
        if ($stmt->execute()){
            return true;
        } else {
            return false;
        }
    }
}
