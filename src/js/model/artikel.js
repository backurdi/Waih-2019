import axios from 'axios';
export default class Artikel {

    async getResults(id) {
        try {
            const artikelResults = await axios(`http://waih.dk/WaihAPI/readArtikel.php?id=`+id);
            this.results = artikelResults.data.article;
        } catch (error) {
            alert(error);
        }
    }
}
