import axios from 'axios';

export default class token {
    async getResults() {
        try {
            const Token = await axios({
                url:`http://waih.dk/WaihAPI/users/token/`,
                method:'get',
                withCredentials:true});

            this.results = Token.data;
        } catch (error) {
            alert(error);
        }
    }

}
