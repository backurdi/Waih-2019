import axios from 'axios';

export default class Latest {
    async getResults() {
        try {
            const Seneste = await axios(`http://waih.dk/WaihAPI/getLatest.php`);
            this.results = Seneste.data;
        } catch (error) {
            alert(error);
        }
    }

}
