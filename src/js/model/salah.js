import axios from 'axios';

export default class Salah {
    async getResults() {
    let today = new Date();
    today =
    `${today.getDate()<10?'0'+today.getDate():today.getDate()}/${today.getMonth()+1<10?'0'+(today.getMonth()+1):today.getMonth()+1}/${today.getFullYear()}`;
        try {
            const salahResults = await axios(`http://waih.dk/WaihAPI/salah/?dato=`+ today);
            this.results = salahResults.data.salah;
        } catch (error) {
            alert(error);
        }
    }

}