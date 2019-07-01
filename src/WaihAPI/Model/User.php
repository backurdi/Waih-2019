<?php
/**
 * Created by IntelliJ IDEA.
 * User: muneebashraf
 * Date: 2019-07-01
 * Time: 16:26
 */

class User
{
    private $conn;
    private $table_name = 'users';

    public $id;
    public $username;
    public $password;

    public function __construct($db)
    {
        $this->conn = $db;
    }

    function AuthUser($username, $password){
        $this->username = $username;
        $this->password = $password;

        $query = 'SELECT * FROM ' . $this->table_name . ' WHERE username=:username, password=:password';

        $stmt = $this->conn->prepare($query);

        $this->username=htmlspecialchars(strip_tags($this->username));
        $this->password=htmlspecialchars(strip_tags($this->password));

        $stmt->bindParam(':username',$this->username);
        $stmt->bindParam(':password',$this->password);

        $stmt->execute();

        return $stmt->rowCount();
    }

    function createUser($username, $password) {

        if (!($this->AuthUser($username, $password) > 0)){

            $this->username = $username;
            $this->password = $password;

            $query = 'INSERT INTO ' . $this->table_name . ' SET username=:username, password=:password';

            $stmt = $this->conn->prepare($query);

            $this->username=htmlspecialchars(strip_tags($this->username));
            $this->password=htmlspecialchars(strip_tags($this->password));

            $stmt->bindParam(':username',$this->username);
            $stmt->bindParam(':password',$this->password);

            $stmt->execute();
        }
    }
}
