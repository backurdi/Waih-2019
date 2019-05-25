import axios from 'axios';

export default class Latest {
    async getResults() {
        try {
            const Seneste = await axios(`http://waih.dk/WaihAPI/index/get/`);
            this.results = Seneste.data;
            const monthNames = ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun",
                "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"
            ];
            for(let artikel of this.results.articles) {
                let date = new Date(artikel.date);
                artikel.date = `${date.getDate() > 9 ? date.getDate():'0'+date.getDate()}. ${monthNames[date.getMonth()]} ${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
            }
        } catch (error) {
            alert(error);
        }
    }

}
