<?php
/**
 * Created by IntelliJ IDEA.
 * User: muneebashraf
 * Date: 11/02/2019
 * Time: 15.09
 */

// sætter headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include_once 'Database.php';
include_once 'Podcast.php';

$database = new Database();
$db = $database->getConnection();

$podcast = new Podcast($db);


$file = $_FILES['audio'];
$name = $file['name'];
$path = "../audio/" . basename($name);
$data = json_decode(file_get_contents('php://input'));

if (move_uploaded_file($file['tmp_name'], $path)) {

    if (!empty($data->$title) &&
        !empty($data->$hostname) &&
        !empty($data->$guestname) &&
        !empty($data->$description) &&
        !empty($data->$picture)
    ){
      $podcast->title = $data->$title;
      $podcast->hostname = $data->$hostname;
      $podcast->guestname = $data->$guestname;
      $podcast->description = $data->$description;
      $podcast->picture = $data->$picture;

      if ($podcast->upload($path)) {
          http_response_code(201);
          echo json_encode(array('message' => 'Upload er gennemført Alhamdulillah!'));

      } else {
          http_response_code(503);
          echo json_encode(array('message' => 'Der skete en fejl under upload, prøv igen inshallah'));
      }

    } else {
        http_response_code(400);
        echo json_encode(array('message' => 'Der skete en fejl under upload, prøv igen inshallah'));
    }

} else {
    http_response_code(401);
    echo json_encode(array('message' => 'Ikke alle felter er udfyldt, prøv igen inshallah!'));
}