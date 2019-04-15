import axios from 'axios';

export default class Program {
    async getResults(id) {
        try {
            id = id ? '?id=' + id : '';
            const programsResults = await axios(`http://waih.dk/WaihAPI/readPrograms.php`+ id);
            this.results = programsResults.data.programs;
        } catch (error) {
            alert(error);
        }
    }

}
