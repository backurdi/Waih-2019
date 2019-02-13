import axios from 'axios';
export default class Podcast {
    async getResults(){
        try{
            const podcastResults = await axios(`http://waih.dk/WaihAPI/read.php`);
            this.results = podcastResults.data.podcasts;
        } catch (error) {
            alert(error);
        }
    }

}