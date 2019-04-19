<?php
/**
 * Created by IntelliJ IDEA.
 * User: muneebashraf
 * Date: 11/02/2019
 * Time: 15.09
 */

include_once './Model/WaihDB.php';
include_once './Model/Podcast.php';

$database = new WaihDB();
$db = $database->getConnection();

$podcast = new Podcast($db);


$audiofile = $_FILES['audioPath'];
$name = $audiofile['name'];
$path = "/audio/" . basename($name);


if (move_uploaded_file($audiofile['tmp_name'], '..' . $path)) {

    if (isset($_POST['title']) &&
        isset($_POST['hostname']) &&
        isset($_POST['guestname']) &&
        isset($_POST['description']) &&
        isset($_POST['guestname']) &&
        isset($_POST['programId'])
    ){
            
      $podcast->title = $_POST['title'];
      $podcast->hostname = $_POST['hostname'];
      $podcast->guestname = $_POST['guestname'];
      $podcast->description = $_POST['description'];
      $podcast->programId = $_POST['programId'];

      if ($podcast->upload($path)) {
          $uploadComplete = true;
          echo "<script>
             alert('Podcasten er uploaded Alhamdulillah!'); 
             window.history.go(-1);
                 </script>";

      } else {
          echo "<script>
             alert('Der skete en fejl under upload, prøv igen InshAllah!'); 
             window.history.go(-1);
                 </script>";
      }

    } else {
        echo "<script>
             alert('Udfyld venligtst alle felter, prøv igen InshAllah!'); 
             window.history.go(-1);
             </script>";
    }

} else {
    echo    "<script>
             alert('Filen blev ikke uploaded til serveren, prøv igen InshAllah!'); 
             window.history.go(-1);
             </script>";
}
