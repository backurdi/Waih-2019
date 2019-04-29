import axios from 'axios';

export default class Salah {
    async getResults(dato) {
        try {
            const programsResults = await axios(`http://waih.dk/WaihAPI/program/?dato=`+ dato);
            this.results = programsResults.data.programs;
        } catch (error) {
            alert(error);
        }
    }

}
