import axios from 'axios';

export default class Podcast {
    async getResults(id) {
        try {
            id = id ? '?id=' + id : '';
            const podcastResults = await axios(`http://waih.dk/WaihAPI/readPodcasts.php`+id);
            this.results = podcastResults.data.podcasts;
        } catch (error) {
            alert(error);
        }
    }

}
