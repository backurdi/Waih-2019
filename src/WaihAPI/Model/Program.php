<?php
/**
 * Created by IntelliJ IDEA.
 * User: muneebashraf
 * colorCode: 2019-04-14
 * Time: 16:09
 */

class Program
{
    //database forbindelse samt database navn
    private $conn;
    private $table_name = 'programs';

    //article egenskaber
    public $id;
    public $title;
    public $picture;
    public $colorCode;


    public function __construct($db)
    {
        $this->conn = $db;

    }

    function getAll(){
        $query = 'SELECT * FROM ' . $this->table_name . ' ORDER BY id DESC';

        $stmt = $this->conn->prepare($query);

        $stmt->execute();

        return $stmt;
    }

    function getById($id){
        $this->id = $id;

        $query = 'SELECT * FROM ' . $this->table_name . ' WHERE id = ' . $this->id;

        $stmt = $this->conn->prepare($query);

        $stmt->execute();

        return $stmt;
    }

    function upload(){

        //opret query
        $query = 'INSERT INTO ' . $this->table_name . ' SET title=:title, picture=:picture, colorCode=:colorCode';

        //gør klar til at køre query
        $stmt =$this->conn->prepare($query);

        //rens for sql angreb
        $this->title=htmlspecialchars(strip_tags($this->title));
        $this->colorCode=htmlspecialchars(strip_tags($this->colorCode));

        //erstat placeholders i query
        $stmt->bindParam(':title',$this->title);
        $stmt->bindParam(':picture',$this->picture);
        $stmt->bindParam(':colorCode',$this->colorCode);

        //kør query
        if ($stmt->execute()){
            return true;
        } else {
            return false;
        }
    }


}
