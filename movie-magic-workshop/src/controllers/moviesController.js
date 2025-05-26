import express from 'express';
import movieService from '../services/movieService.js';
import Movie from '../models/Movies.js';
import castservice from '../services/castservice.js';


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
    

    const movie = await movieService.getMovieWithCast(movieId);

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

moviesController.get("/:movieId/attach-cast", async (req, res) =>{
    const movieId = req.params.movieId;

   const movie = await movieService.getOne(movieId)
   const cast = await castservice.getAllCasts();
   res.render('casts/cast-attach', {movie, cast})


});

moviesController.post("/:movieId/attach-cast", async (req, res) =>{
    const castId = req.body.cast;
    console.log(castId)
    const movieId = req.params.movieId;
    const movie = await movieService.getOne(movieId)
    await movieService.addCastToMovie(movieId, castId);

   
   res.redirect(`/movies/details/${movieId}/`)


});


export default moviesController;
