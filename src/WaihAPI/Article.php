<?php
/**
 * Created by IntelliJ IDEA.
 * User: muneebashraf
 * Date: 2019-03-20
 * Time: 08:49
 */

class Article
{
    //database forbindelse samt database navn
    private $conn;
    private $table_name = 'articles';

    //article egenskaber
    public $id;
    public $author;
    public $title;
    public $subtitle;
    public $body;
    public $date;
    public $picture;


    public function __construct($db)
    {
        $this->conn = $db;

    }

    function read(){
        $query = 'SELECT * FROM ' . $this->table_name . ' ORDER BY id DESC';

        $stmt = $this->conn->prepare($query);

        $stmt->execute();

        return $stmt;
    }

    function upload(){
        
        //opret query
        $query = 'INSERT INTO ' . $this->table_name . ' SET author=:author, title=:title, subtitle=:subtitle, body=:body, picture=:picture, date=:date';

        //gør klar til at køre query
        $stmt =$this->conn->prepare($query);

        //rens for sql angreb
        $this->author=htmlspecialchars(strip_tags($this->author));
        $this->title=htmlspecialchars(strip_tags($this->title));
        $this->subtitle=htmlspecialchars(strip_tags($this->subtitle));
        $this->body=htmlspecialchars(strip_tags($this->body));

        //erstat placeholders i query
        $stmt->bindParam(':author',$this->author);
        $stmt->bindParam(':title',$this->title);
        $stmt->bindParam(':subtitle',$this->subtitle);
        $stmt->bindParam(':body',$this->body);
        $stmt->bindParam(':picture',$this->picture);
        $stmt->bindParam(':date',$this->date);

        //kør query
        if ($stmt->execute()){
            return true;
        } else {
            return false;
        }
    }
    
    
}

