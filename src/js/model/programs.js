import axios from 'axios';
export default class Program {
    async getResults(){
        try{
            const programsResults = await axios(`http://waih.dk/WaihAPI/readPrograms.php`);
            this.results = programsResults.data.programs;
        } catch (error) {
            alert(error);
        }
    }

}