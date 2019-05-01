import axios from 'axios';

export default class Podcast {
    async get(id) {
        try {
            id = id ? '?id=' + id : '';
            const podcastResults = await axios(`http://waih.dk/WaihAPI/podcast/get/`+id);
            this.results = podcastResults.data.podcasts;
        } catch (error) {
            alert(error);
        }
    }
    async delete(id) {
        try {
            id = id ? '?id=' + id : '';
            const podcastResults = await axios(`http://waih.dk/WaihAPI/podcast/delete/`+id);
            this.results = podcastResults.data.podcasts;
        } catch (error) {
            alert(error);
        }
    }
}
