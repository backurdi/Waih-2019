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
    public $token;

    public function __construct($db)
    {
        $this->conn = $db;
    }

    function checkToken($token) {
        $this->token = $token;

        $query = 'SELECT * FROM ' . $this->table_name . ' WHERE token=:token';

        $stmt = $this->conn->prepare($query);

        $this->token=htmlentities(strip_tags($this->token));

        $stmt->bindParam(':token',$this->token);

        $stmt->execute();

        return $stmt;

    }

    function authUser($username, $password){
        $this->username = $username;
        $this->password = $password;

        $query = 'SELECT * FROM ' . $this->table_name . ' WHERE username=:username';

        $stmt = $this->conn->prepare($query);

        $this->username=htmlentities(strip_tags($this->username));

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
                'admin' => $admin,
                'token' => $token
            );
        }

        if(password_verify($this->password, $user['password'])){
            return $user['token'];
        } else {
            return false;
        }


    }

    function createUser($username, $password) {

        $this->username = $username;
        $this->password = $password;
        $length = 32;
        $this->token = bin2hex(random_bytes($length));

        $query = 'INSERT INTO ' . $this->table_name . ' SET username=:username, password=:password, token:=token';

        $stmt = $this->conn->prepare($query);

        $this->username=htmlspecialchars(strip_tags($this->username));

        $stmt->bindParam(':username',$this->username);
        $stmt->bindParam(':password',$this->password);
        $stmt->bindParam(':token',$this->token);

        $stmt->execute();

        return $stmt;
        }
}
