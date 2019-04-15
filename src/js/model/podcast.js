import axios from 'axios';

export default class Podcast {
    async getResults() {
        try {
            const podcastResults = await axios(`http://waih.dk/WaihAPI/readPodcasts.php`);
            this.results = podcastResults.data.podcasts;
        } catch (error) {
            alert(error);
        }
    }

}
