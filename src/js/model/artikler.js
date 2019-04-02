import axios from 'axios';
export default class Artikler {
    async getResults() {
        try{
            const artiklerResults = await axios(`http://waih.dk/WaihAPI/readArtikler.php`);
            this.results = artiklerResults.data.articles;
        } catch (error) {
            alert(error);
        }
    }

}
