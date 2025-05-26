import {v4 as uid} from "uuid";
import movieService from "../services/movieService.js";

import { Schema, model, Types } from "mongoose";


const movieSchema = new Schema({
                title: String,
                category: String,
                genre: String,
                director: String,
                year: Number,
                imageUrl: String,
                rating: Number,
                description: String,
});

const Movie = model("Movie", movieSchema);
export default Movie;


// export default class Movie {

//     constructor(data){
//         this.data = data;
//     }

//     async addMovie(data){
//         const movieList = await movieService.getAll();
//         this.data.id = uid();
//         this.data.rating = Math.floor(Number(this.data.rating));
//         movieList.push(this.data)

//         const result = await movieService.writeOne(movieList)

//         console.log(result)

//     }


    // for the JSON i will use method - read-write
    // only save => next with the DB
    // async save(data){
    //     this.data.id = uid();
    //     this.data.rating = Math.floor(Number(this.data.rating));
    //     console.log(this.data)
    // }


// }

// task requirments:id – number
// title => string
// category => string
// genre => string
// director => string
// year => number
// imageURL => string
// rating => number
// description => string



