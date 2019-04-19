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


    if (isset($_POST['author']) &&
        isset($_POST['title']) &&
        isset($_POST['subtitle']) &&
        isset($_POST['body']) &&
        $picture['size']>0
    ){
            
      $article->title= $_POST['title'];
      $article->subtitle= $_POST['subtitle'];
      $article->author= $_POST['author'];
      $article->body= $_POST['body'];
      $article->picture = file_get_contents($picture['tmp_name']);

      if ($article->upload()) {
          echo "<script>
                 alert('Artiklen er uploaded Alhamdulillah!'); 
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
