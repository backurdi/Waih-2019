import axios from 'axios';

export default class Artikler {
    async getResults(id) {
        try {
            id = id ? '?id=' + id : '';
            const artiklerResults = await axios(`http://waih.dk/WaihAPI/artikel/get/` + id);
            this.results = artiklerResults.data.articles;
            console.log(this.results);
            const monthNames = ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"];
            for (let artikel of this.results) {
                let date = new Date(artikel.date.replace(' ', 'T'));
                artikel.date = `${date.getDate() > 9 ? date.getDate():'0'+date.getDate()}. ${monthNames[date.getMonth()]} ${date.getFullYear()} ${date.getHours()}:${date.getMinutes()===0?'0'+date.getMinutes():date.getMinutes()}`;
            }
        } catch (err) {
            alert(err)
        }

    }

    async updateAttr(id, attr, newValue) {
        let formData = new FormData()
        formData.append('id', id);
        formData.append('attr', attr);
        formData.append('newValue', newValue);
        try {
            const artiklerResults = await axios.post(`http://waih.dk/WaihAPI/artikel/updateAttr/`,
                formData);
            this.results = artiklerResults.data.update;
            console.log(this.results);

        } catch (err) {
            alert(err)
        }
    }

    async updatePic(id, data) {
        try {
            id = id ? '?id=' + id : '';
            const artiklerResults = await axios.post(`http://waih.dk/WaihAPI/artikel/updatePic/${id}`, data,
            {headers: {
                    contentType: false,
                    processData: false,}
                });
            this.results = artiklerResults.data.update;
            console.log(this.results);

        } catch (err) {
            alert(err)
        }
    }

    async deleteArtikel(id) {
        try {
            id = id ? '?id=' + id : '';
            const artiklerResults = await axios(`http://waih.dk/WaihAPI/artikel/delete/${id}`);
            this.results = artiklerResults.data;
            console.log(this.results);

        } catch (err) {
            alert(err)
        }
    }

}
