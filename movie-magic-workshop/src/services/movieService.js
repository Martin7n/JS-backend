import express from "express";

import readWriteUtil from "../utilities-rw-db/readWriteUtil.js";
import Movie from "../models/Movies.js";

export default {

    getAll(filter = {}){

        let query = Movie.find({});

        // let movieList = await readWriteUtil.readJSON();

        // let matchedMovies = movieList.slice();   

        // // if (!filter) { return movies}
        if (filter.search) {
           query =  query.where({title: filter.search})
        };
        
        // if (filter.genre) {
        // const genre = filter.genre.toLowerCase()
        // matchedMovies =  matchedMovies.filter(movie => movie.genre.toLowerCase().includes(genre))
        // }  
        
        // if (filter.year) {
        //     matchedMovies = matchedMovies.filter(movie => Number(movie.year) === Number(filter.year));
        // }

        return query;

    },


    getOne(movieId){

        let query = Movie.findById(movieId);
        // let movieList = await readWriteUtil.readJSON();
        // const movie = movieList.find(movie => movie.id === movieId)
        // console.log(movie)  
        return query


    },


    async writeOne(data){
        await readWriteUtil.writeJSONall(data);

    }
    
}