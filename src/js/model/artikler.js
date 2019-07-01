import axios from 'axios';

export default class Artikler {
    async getResults(id) {
        try {
            id = id ? '?id=' + id : '';
            const artiklerResults = await axios(`http://waih.dk/WaihAPI/artikel/get/` + id);
            this.results = artiklerResults.data.articles;
            const monthNames = ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"];
            for(let artikel of this.results) {
                let date = new Date(artikel.date.replace(' ', 'T'));
                artikel.date = `${date.getDate() > 9 ? date.getDate():'0'+date.getDate()}. ${monthNames[date.getMonth()]} ${date.getFullYear()} ${date.getHours()}:${date.getMinutes()===0?'0'+date.getMinutes():date.getMinutes()}`;
            }
        } catch (error) {
            alert(error)
        }
    }

}
