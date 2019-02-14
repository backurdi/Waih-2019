<?php
/**
 * Created by IntelliJ IDEA.
 * User: muneebashraf
 * Date: 11/02/2019
 * Time: 15.09
 */

include_once 'WaihDB.php';
include_once 'Podcast.php';

$database = new WaihDB();
$db = $database->getConnection();

$podcast = new Podcast($db);


$audiofile = $_FILES['audioPath'];
$picture = $_FILES['picture'];
$name = $audiofile['name'];
$path = "../audio/" . basename($name);
$uploadComplete = false;


if (move_uploaded_file($audiofile['tmp_name'], $path)) {

    if (isset($_POST['title']) &&
        isset($_POST['hostname']) &&
        isset($_POST['guestname']) &&
        isset($_POST['description']) &&
        isset($_POST['guestname']) &&
        $picture['size']>0
    ){
            
      $podcast->title = $_POST['title'];
      $podcast->hostname = $_POST['hostname'];
      $podcast->guestname = $_POST['guestname'];
      $podcast->description = $_POST['description'];
      $podcast->picture = file_get_contents($picture['tmp_name']);

      if ($podcast->upload($path)) {
          http_response_code(201);
          $uploadComplete = true;
          echo json_encode( array('uploadSucess'=> $uploadComplete));

      } else {
          http_response_code(503);
          echo json_encode(array('message' => 'Der skete en fejl under upload, prøv igen inshallah', 'uploadSucess' =>$uploadComplete));
      }

    } else {
        http_response_code(400);
        echo json_encode(array('message' => 'Udfyld venligtst alle felter, prøv igen inshallah', 'uploadSucess' =>$uploadComplete));
    }

} else {
    http_response_code(401);
    echo json_encode(array('message' => 'Filen blev ikke uploaded til serveren, prøv igen inshallah!', 'uploadSucess' =>$uploadComplete));
}