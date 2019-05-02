import axios from 'axios';

export default class Podcast {
    async get(id) {
        try {
            console.log(id)
            id = id ? '?id=' + id : '';
            console.log(id)
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
    async update(id, param, newValue) {
        try {
            let query = `?id=${id}&param=${param}&newValue=${newValue}`;
            const podcastResults = await axios(`http://waih.dk/WaihAPI/podcast/update/${query}`);
            this.results = podcastResults.data.podcasts;
        } catch (error) {
            alert(error);
        }
    }
}
