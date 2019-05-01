<?php
/**
 * Created by IntelliJ IDEA.
 * User: muneebashraf
 * Date: 2019-04-25
 * Time: 23:44
 */
Class logic {
    function __construct()
    {
        include_once './Model/WaihDB.php';
        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Headers: X-Requested-With, content-type, access-control-allow-origin, access-control-allow-methods, access-control-allow-headers');
        header('Content-Type: application/json; charset=UTF-8');

    }

    function getSalahByDate() {
        include_once './Model/Salah.php';

        $database = new WaihDB();
        $db = $database->getConnection();
        $salah = new Salah($db);

        if(isset($_GET['dato'])) {
            $stmt = $salah->getByDate($_GET['dato']);
        } else {
            echo "<script>
                 alert('Kunne ikke hente dato fra forespørgsel!'); 
                 window.history.go(-1);
                 </script>";
        }

        $num = $stmt->rowCount();

        if ($num>0) {

            //opret arrays

            $salah_arr=array();
            $salah_arr['salah']=array();

            //hent inhold fra tabel
            while($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
                //hente rækker fra tabellen således at $row[title] bare bliver $title
                extract($row);

                $salah_item = array(
                    'dato' => $dato,
                    'fajr' => $fajr,
                    'shuruq' => $shuruq,
                    'dhuhr' => $dhuhr,
                    'asr' => $asr,
                    'maghrib' => $maghrib,
                    'isha' => $isha
                );

                array_push($salah_arr['salah'], $salah_item);

            }
            http_response_code(200);
            echo json_encode($salah_arr);


        } else {
            http_response_code(400);
            echo json_encode(array('message' => 'kunne ikke gennemføre salah forespørgsel', 'rows' => $num, 'dato' => $_GET['dato'], 'stmt' => $stmt));
        }

    }

    function deletePodcast() {
        include_once './Model/Podcast.php';

        $database = new WaihDB();
        $db = $database->getConnection();
        $podcast = new Podcast($db);

        if( isset($_GET['id']) )
        {
            $stmt = $podcast->getAudioPath($_GET['id']);
        }

        if (unlink($stmt))
        {
            unset($stmt);
            $stmt = $podcast->delete($_GET['id']);

        } else {

            echo "<script>
                 alert('Der skete en fejl, filen blev ikke slettet '); 
                 </script>";
        }

        $num = $stmt->rowCount();

        if ($num>0) {
            http_response_code(200);
            echo json_encode(array('isDeleted' => true, 'rowsAffected' => $num));
        } else{
            http_response_code(401);
            echo json_encode(array('isDeleted' => false, 'rowsAffected' => $num));
        }

    }

    function getPodcasts() {
        include_once './Model/Podcast.php';

        $database = new WaihDB();
        $db = $database->getConnection();
        $podcast = new Podcast($db);

        if( isset($_GET['id']) )
        {
            $stmt = $podcast->getById($_GET['id']);
        } else {
            $stmt = $podcast->getAll();
        }

        //se om respons er tom
        $num = $stmt->rowCount();

        if ($num>0) {

            //opret arrays

            $podcast_arr=array();
            $podcast_arr['podcasts']=array();

            //hent inhold fra tabel
            while($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
                //hente rækker fra tabellen således at $row[title] bare bliver $title
                extract($row);

                $podcast_item = array(
                    'id' => $id,
                    'title' => $title,
                    'hostname' => $hostname,
                    'guestname' => $guestname,
                    'description' => html_entity_decode($description),
                    'audioPath' => $audioPath,
                    'programId' => $programId
                );

                array_push($podcast_arr['podcasts'], $podcast_item);

            }
            http_response_code(200);
            echo json_encode($podcast_arr);


        } else {
            http_response_code(400);
            echo json_encode(array('message' => 'Tabel er tom'));
        }
    }


    function getArtikler() {
        include_once './Model/Article.php';

        //instantiere db og podcast
        $database = new WaihDB();
        $db = $database->getConnection();
        $article = new Article($db);

        //hent data igennem sql kald

        if( isset($_GET['id']) )
        {
            $stmt = $article->getById($_GET['id']);
        } else {
            $stmt = $article->getAll();
        }

        //se om respons er tom
        $num = $stmt->rowCount();

        if ($num>0) {

            //opret arrays

            $article_arr=array();
            $article_arr['articles']=array();

            //hent inhold fra tabel
            while($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
                //hente rækker fra tabellen således at $row[title] bare bliver $title
                extract($row);

                $article_item = array(
                    'id' => $id,
                    'author' => $author,
                    'title' => $title,
                    'subtitle' => $subtitle,
                    'body' => html_entity_decode($body),
                    'picture' => "data:image/jpeg;base64, " . base64_encode($picture),
                    'date' => $date
                );

                array_push($article_arr['articles'], $article_item);

            }
            http_response_code(200);
            echo json_encode($article_arr);


        } else {
            http_response_code(400);
            echo json_encode(array('message' => 'Tabel er tom'));
        }

    }

    function getProgrammer() {
        include_once './Model/Program.php';

        //instantiere db og podcast
        $database = new WaihDB();
        $db = $database->getConnection();
        $program = new Program($db);

        //hent data igennem sql kald

        if( isset($_GET['id']) )
        {
            $stmt = $program->getById($_GET['id']);
        } else {
            $stmt = $program->getAll();
        }

        //se om respons er tom
        $num = $stmt->rowCount();

        if ($num>0) {

            //opret arrays

            $program_arr=array();
            $program_arr['programs']=array();

            //hent inhold fra tabel
            while($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
                //hente rækker fra tabellen således at $row[title] bare bliver $title
                extract($row);

                $program_item = array(
                    'id' => $id,
                    'title' => $title,
                    'picture' => "data:image/jpeg;base64, " . base64_encode($picture),
                    'colorCode' => $colorCode
                );

                array_push($program_arr['programs'], $program_item);

            }
            http_response_code(200);
            echo json_encode($program_arr);


        } else {
            http_response_code(400);
            echo json_encode(array('message' => 'Tabel er tom'));
        }
    }

    function getLatest(){
        include_once './Model/Podcast.php';
        include_once './Model/Article.php';

        //instantiere db og podcast
        $database = new WaihDB();
        $db = $database->getConnection();

        $podcast = new Podcast($db);

        //hent data igennem sql kald
        $stmt = $podcast->getLatest();

        //se om respons er tom
        $num = $stmt->rowCount();

        if ($num>0) {
            //opret arrays
            $podcast_arr['podcasts']=array();
            //hent inhold fra tabel
            while($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
                //hente rækker fra tabellen således at $row[title] bare bliver $title
                extract($row);
                $podcast_item = array(
                    'id' => $id,
                    'title' => $title,
                    'hostname' => $hostname,
                    'guestname' => $guestname,
                    'description' => html_entity_decode($description),
                    'audioPath' => $audioPath,
                    'programId' => $programId
                );
                array_push($podcast_arr['podcasts'], $podcast_item);
            }
            if (sizeof($podcast_arr) > 0) {
                $artikel = new Article($db);
                $stmt = $artikel->getLatest();
                $num = $stmt->rowCount();
                if ($num>0) {
                    $article_arr['articles']=array();
                    //hent inhold fra tabel
                    while($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
                        //hente rækker fra tabellen således at $row[title] bare bliver $title
                        extract($row);
                        $article_item = array(
                            'id' => $id,
                            'author' => $author,
                            'title' => $title,
                            'subtitle' => $subtitle,
                            'body' => html_entity_decode($body),
                            'picture' => "data:image/jpeg;base64, " . base64_encode($picture),
                            'date' => $date
                        );
                        array_push($article_arr['articles'], $article_item);
                    }
                    if(sizeof($article_arr)  > 0) {
                        http_response_code(200);
                        echo json_encode($article_arr + $podcast_arr);
                    }
                } else {
                    http_response_code(400);
                    echo json_encode(array('message' => 'Kunne ikke hente Artikler'));
                }
            }
        } else {
            http_response_code(400);
            echo json_encode(array('message' => 'Kunne ikke hente podcasts'));
        }
    }
    function postPodcast() {
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
            echo "<script>
             alert('Filen blev ikke uploaded til serveren, prøv igen InshAllah!'); 
             window.history.go(-1);
             </script>";
        }
    }

    function postArtikel() {
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
    }


}
