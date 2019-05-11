import axios from 'axios';

export default class Artikler {
    async getResults(id) {
        try {
            id = id ? '?id=' + id : '';
            const artiklerResults = await axios(`http://waih.dk/WaihAPI/artikel/get/` + id);
            this.results = artiklerResults.data.articles;
            console.log(this.results[0].type);
        } catch (error) {
            alert(error);
        }
    }

}
