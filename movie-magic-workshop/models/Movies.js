import fs from 'node:fs/promises'
import {v4 as uid} from "uuid";


const readMovies = fs.readFile('')

export default class Movie {

    constructor(data){
        this.data = data;

    }


    async save(data){

        this.data.id = uid();
        this.data.rating = Math.floor(Number(data.rating));
        
    }


}

// task requirments:id – number
// title => string
// category => string
// genre => string
// director => string
// year => number
// imageURL => string
// rating => number
// description => string



