<?php
/**
 * Created by IntelliJ IDEA.
 * User: muneebashraf
 * Date: 11/02/2019
 * Time: 13.11
 */

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: X-Requested-With, content-type, access-control-allow-origin, access-control-allow-methods, access-control-allow-headers');
header('Content-Type: application/json; charset=UTF-8');

//includes
include_once './Model/WaihDB.php';
include_once './Model/Podcast.php';

//instantiere db og podcast
$database = new WaihDB();
$db = $database->getConnection();

$podcast = new Podcast($db);
$idFromRequest = $_GET['id'];

//hent data igennem sql kald
if( isset($idFromRequest) )
{
    $stmt = $podcast->getById($idFromRequest);
} else {
    $stmt = $podcast->GetAll();
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
