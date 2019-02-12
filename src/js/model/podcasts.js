import axios from 'axios';
export default class podcast {
    async getResults(){
        try{
            const podcastResults = await axios(`http://waih.dk/WaihAPI/read.php`);
            console.log(podcastResults.data.podcasts);
        } catch (error) {
            alert(error);
        }
    }

}