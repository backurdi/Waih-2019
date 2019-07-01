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

        $query = 'SELECT * FROM ' . $this->table_name . ' WHERE username=:username';

        $stmt = $this->conn->prepare($query);

        $this->username=htmlspecialchars(strip_tags($this->username));

        $stmt->bindParam(':username',$this->username);

        $stmt->execute();

        $user = null;

        while($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            //hente rækker fra tabellen således at $row[title] bare bliver $title
            extract($row);

            $user = array(
                'id' => $id,
                'username' => $username,
                'password' => $password,
                'admin' => $admin
            );
        }

        if(password_verify($this->password, $user['password'])){
            return true;
        } else {
            return false;
        }


    }

    function createUser($username, $password) {

        $this->username = $username;
        $this->password = $password;

        $query = 'INSERT INTO ' . $this->table_name . ' SET username=:username, password=:password';

        $stmt = $this->conn->prepare($query);

        $this->username=htmlspecialchars(strip_tags($this->username));

        $stmt->bindParam(':username',$this->username);
        $stmt->bindParam(':password',$this->password);

        $stmt->execute();

        return $stmt;
        }
}
