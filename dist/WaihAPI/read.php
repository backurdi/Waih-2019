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
include_once 'Database.php';
include_once 'Podcast.php';

//instantiere db og podcast
$database = new WaihDB();
$db = $database->getConnection();
$podcast = new Podcast($db);

//hent data igennem sql kald
$stmt = $podcast->read();

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
            'picture' => "data:image/jpeg;base64," . base64_encode($picture),
            'audioPath' => $audioPath
        );

        array_push($podcast_arr['podcasts'], $podcast_item);

    }
        http_response_code(200);
        echo json_encode($podcast_arr);


} else {
    http_response_code(400);
    echo json_encode(array('message' => 'Tabel er tom'));
}