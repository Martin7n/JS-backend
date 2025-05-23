import express from "express";
import { readJSON } from "../utilities-rw-db/readWriteUtil.js";
export default {

   async getAll(filter = {}){

        let movieList = await readJSON();

        let matchedMovies = movieList.slice();   

        // if (!filter) { return movies}
        if (filter.search) {
           matchedMovies =  matchedMovies.filter( movie => movie.title.toLowerCase().includes(filter.search.toLowerCase()))
        };
        
        if (filter.genre) {
        const genre = filter.genre.toLowerCase()
        matchedMovies =  matchedMovies.filter(movie => movie.genre.toLowerCase().includes(genre))
        }  
        
        if (filter.year) {
            matchedMovies = matchedMovies.filter(movie => Number(movie.year) === Number(filter.year));
        }

        return matchedMovies;

    },


    async getOne(movieId){
        let movieList = await readJSON();
        const movie = movieList.find(movie => movie.id === movieId)
        console.log(movie)  
        return movie


    }
    





    
}