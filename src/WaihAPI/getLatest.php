<?php
/**
 * Created by IntelliJ IDEA.
 * User: muneebashraf
 * Date: 2019-04-19
 * Time: 04:13
 */
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: X-Requested-With, content-type, access-control-allow-origin, access-control-allow-methods, access-control-allow-headers');
header('Content-Type: application/json; charset=UTF-8');

//includes
include_once './Model/WaihDB.php';
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
