import express from 'express';
import movieService from '../services/movieService.js';
import Movie from '../models/Movies.js';

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


moviesController.get('/create',  async (req, res) => {
    
    res.render('create')

});

moviesController.post('/create', (req, res) => {
    const data = req.body
    const newMovie = new Movie(data).addMovie()
    res.redirect('/')
 
});


export default moviesController;
