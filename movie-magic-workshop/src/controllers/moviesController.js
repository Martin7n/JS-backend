import express from 'express';
import movieService from '../services/movieService.js';

const moviesController = express.Router();

moviesController.get('/search',  async (req, res) => {
    const filter = req.query;
    console.log(filter)
    const context = await movieService.getAll(filter);
    // console.log("----------------------")
    // console.log(context)
    
    res.render('search', {context})
})


moviesController.get('/details/:movieId/',  async (req, res) => {
    const movieId = req.params.movieId;
    console.log(movieId)
    

    const movie = await movieService.getOne(movieId)

    res.render('details', {movie})

});


export default moviesController;
