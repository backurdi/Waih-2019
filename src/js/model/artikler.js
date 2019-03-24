import axios from 'axios';
export default class Artikler {
    async getResults(){
        try{
            const artikelResults = await axios(`http://waih.dk/WaihAPI/readArtikler.php`);
            this.results = artikelResults.data.articles;
        } catch (error) {
            alert(error);
        }
    }

}
