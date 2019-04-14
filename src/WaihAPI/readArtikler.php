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
include_once './Model/Article.php';

//instantiere db og podcast
$database = new WaihDB();
$db = $database->getConnection();
$article = new Article($db);
$idFromRequest = $_GET['id'];

//hent data igennem sql kald

if( isset($idFromRequest) )
{
    $stmt = $article->read($idFromRequest);
} else {
    $stmt = $article->readAll();
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
