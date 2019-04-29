<?php
/**
 * Created by IntelliJ IDEA.
 * User: muneebashraf
 * Date: 2019-04-29
 * Time: 02:52
 */

class Salah
{
    private $conn;
    private $table_name = 'salah';

    //article egenskaber
    public $dato;
    public $fajr;
    public $shuruq;
    public $dhuhr;
    public $asr;
    public $maghrib;
    public $isha;

    public function __construct($db)
    {
        $this->conn = $db;

    }

    function getByDate($dato){
        $this->dato = $dato;

        $query = 'SELECT * FROM ' . $this->table_name . ' WHERE dato = "' . $this->dato . '"';

        $stmt = $this->conn->prepare($query);

        $stmt->execute();

        return $stmt;

    }
}
