<?php
/**
 * Created by IntelliJ IDEA.
 * User: muneebashraf
 * Date: 2019-04-23
 * Time: 10:09
 */

//henter url fra den der laver request
$url = explode('/', parse_url($_SERVER['REQUEST_URI'])['path']);
//checker request som der står i headeren, om det er get eller post osv
$requestMethod = $_SERVER['REQUEST_METHOD'];
//ser hvilket object der vil hentes eks. podcast/artikel/program
$requestObject = $url[count($url) -2];
//ser om det er get eller post er defineret i url'en
$requestSQL = end($url);
//check om der overhovet er nogen request
if ($requestMethod) {

    include_once './logic.php';
    $logic = new Logic();

    switch ($requestObject) {
        case 'podcast':

            switch ($requestSQL) {
                case 'get':
                    $logic->getPodcasts();
                break;
                case 'post':
                    $logic->postPodcast();
                break;
                default:
                    $logic->getPodcasts();
                break;
            }
        break;
        case 'artikel':

            switch ($requestSQL) {
                case 'get':
                    $logic->getArtikler();
                break;
                case 'post':
                    $logic->postArtikel();
                break;
                default:
                    $logic->getArtikler();
                break;
            }
        break;
        case 'program':

            switch ($requestSQL) {
                case 'get':
                    $logic->getProgrammer();
                break;
                default:
                    $logic->getProgrammer();
                break;

            }
        break;
        case 'index':
            $logic->getLatest();
        break;
        case 'salah':
            $logic->getSalahByDate();
        break;
        default:
            http_response_code(404);
            echo json_encode(array('message' =>  'Fejl i forspørgsel, vælg mellem følgende parametre: program/podcast/artikel/index efterfulgt af /get eller /post. tilføj id ved at skrive ?id=(her indsættes id)', 'url' => $url));
            break;
    }
}

