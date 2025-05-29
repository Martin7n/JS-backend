import express from 'express';
import movieService from '../services/movieService.js';
import Movie from '../models/Movies.js';
import castservice from '../services/castservice.js';
import { isAuth } from '../middlewares/auth-middleware.js'


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

    console.log(req.user)

    console.log(movie)

    res.render('movie/details', {movie})

});


moviesController.get('/create', isAuth, async (req, res) => {
    res.render('movie/create')

});

moviesController.post('/create', async (req, res) => {
    const movieData = req.body;
    const userID = req.user?.id;
    const newMovie = await movieService.createMovie(movieData, userID)
    // new Movie(movieData, userID)
    res.redirect('/')
 
});

moviesController.get("/:movieId/attach-cast", isAuth, async (req, res) =>{
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


moviesController.get("/:movieId/edit", async (req, res) => {

    const user = req.user;
    
    const movieId = req.params.movieId;
    const movie = await movieService.getOne(movieId);


    if (!movie.createdBy) {return res.redirect("/")}
    if (!user || !!movie.createdBy.equals(user.id)) {return res.redirect("/")};

    res.render('movie/edit', {movie})
});

moviesController.post("/:movieId/edit", async (req, res) => {

    const movieId = req.params.movieId;
    const movieData = req.body;

    console.log(movieId)
    await movieService.updateMovie(movieId, movieData)

    
    return res.redirect(`/movies/details/${movieId}`)


});



export default moviesController;
