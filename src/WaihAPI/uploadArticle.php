<?php
/**
 * Created by IntelliJ IDEA.
 * User: muneebashraf
 * Date: 11/02/2019
 * Time: 15.09
 */

include_once './Model/WaihDB.php';
include_once './Model/Article.php';

$database = new WaihDB();
$db = $database->getConnection();

$article = new Article($db);


$picture = $_FILES['picture'];
$uploadComplete = false;


    if (isset($_POST['author']) &&
        isset($_POST['title']) &&
        isset($_POST['subtitle']) &&
        isset($_POST['body']) &&
        $picture['size']>0
    ){
            
      $podcast->author= $_POST['author'];
      $podcast->title= $_POST['title'];
      $podcast->subtitle= $_POST['subtitle'];
      $podcast->body= $_POST['body'];
      $podcast->picture = file_get_contents($picture['tmp_name']);

      if ($podcast->upload($path)) {
          http_response_code(201);
          $uploadComplete = true;
          echo json_encode(array('uploadSucess'=> $uploadComplete));

      } else {
          http_response_code(503);
          echo json_encode(array('message' => 'Der skete en fejl under upload, prøv igen inshallah', 'uploadSucess' =>$uploadComplete));
      }

    } else {
        http_response_code(400);
        echo json_encode(array('message' => 'Udfyld venligtst alle felter, prøv igen inshallah', 'uploadSucess' =>$uploadComplete));
    }
