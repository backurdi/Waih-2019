<?php
/**
 * Created by IntelliJ IDEA.
 * User: muneebashraf
 * Date: 11/02/2019
 * Time: 12.26
 */

class Database
{
private $host = 'mysql21.unoeuro.com';
private $db_name = 'waih_dk_db';
private $username = 'waih_dk';
private $password = 'W0rkhardforjannah';
public $conn;


    public function getConnection(){
        $this->conn=null;

        try{
            $this->conn = new PDO('mysql:host=' . $this->host . ';dbname=' . $this->db_name,$this->username, $this->password);
            $this->conn ->exec('set names utf8');
        }catch (PDOException $exception) {
            echo 'Connection error: ' . $exception->getMessage();
        }

        return $this->conn;
    }


}