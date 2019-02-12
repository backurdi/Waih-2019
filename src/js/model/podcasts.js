import axios from 'axios';
import {key, proxy} from '../config'
export default class Search {
    constructor(query){
        this.query = query;
    }

    async getResults(){
        try{
            const res = await axios(`waih.dk/WaihAPI/read.php`);
            console.log(this.results);
        } catch (error) {
            alert(error);
        };
    }

}