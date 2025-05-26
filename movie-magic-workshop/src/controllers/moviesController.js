import express from 'express';
import movieService from '../services/movieService.js';
import Movie from '../models/Movies.js';

const moviesController = express.Router();

moviesController.get('/search',  async (req, res) => {
    const filter = req.query;
    console.log(filter)
    const context = await movieService.getAll(filter).lean();

    
    res.render('search', {context})
})


moviesController.get('/details/:movieId/',  async (req, res) => {
    const movieId = req.params.movieId;
    console.log(movieId)
    

    const movie = await movieService.getOne(movieId).populate("casts");

    res.render('movie/details', {movie})

});


moviesController.get('/create',  async (req, res) => {
    res.render('movie/create')

});

moviesController.post('/create', (req, res) => {
    const data = req.body
    const newMovie = new Movie(data).save()
    res.redirect('/')
 
});


export default moviesController;
