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
include_once './Model/Program.php';

//instantiere db og podcast
$database = new WaihDB();
$db = $database->getConnection();
$program = new Program($db);
$idFromRequest = $_GET['id'];

//hent data igennem sql kald

if( isset($idFromRequest) )
{
    $stmt = $program->read($idFromRequest);
} else {
    $stmt = $program->readAll();
}

//se om respons er tom
$num = $stmt->rowCount();

if ($num>0) {

    //opret arrays

    $program_arr=array();
    $program_arr['program']=array();

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

        array_push($program_arr['articles'], $program_item);

    }
        http_response_code(200);
        echo json_encode($program_arr);


} else {
    http_response_code(400);
    echo json_encode(array('message' => 'Tabel er tom'));
}
