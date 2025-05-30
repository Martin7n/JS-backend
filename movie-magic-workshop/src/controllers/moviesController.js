import express from 'express';
import movieService from '../services/movieService.js';
import Movie from '../models/Movies.js';
import castservice from '../services/castservice.js';
import { isAuth } from '../middlewares/auth-middleware.js'


const moviesController = express.Router();

moviesController.get('/search',  async (req, res) => {
    const filter = req.query;
    console.log(filter)
    try {
    const context = await movieService.getAll(filter).lean();
    return res.render('search', {context})
    } catch (err){
        console.log(err)
        return res.redirect("/home")
    }
    
   
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
    try {
        const newMovie = await movieService.createMovie(movieData, userID)
        // new Movie(movieData, userID)
        return res.redirect('/')
    } catch (err){
        console.log(err)
        res.redirect(`movies/create`)
    }
 
});

moviesController.get("/:movieId/attach-cast", isAuth, async (req, res) =>{
    const movieId = req.params.movieId;

    try {
    const movie = await movieService.getOne(movieId)
    const cast = await castservice.getAllCasts();
    return res.render('casts/cast-attach', {movie, cast})
    } catch (err){
        console.log(err)
        return res.redirect('404')
    }
    


});

moviesController.post("/:movieId/attach-cast", async (req, res) =>{
    const castId = req.body.cast;
    console.log(castId)
    const movieId = req.params.movieId;
    try {
    const movie = await movieService.getOne(movieId)
    await movieService.addCastToMovie(movieId, castId);
    return res.redirect(`/movies/details/${movieId}`)

    } catch (err){
        console.log(err)
        return res.redirect("/")
    }



});


moviesController.get("/:movieId/edit", isAuth, async (req, res) => {

    const user = req.user;
    const movieId = req.params.movieId;

    try {
        const movie = await movieService.getOne(movieId);
                    //for the previous data without owner:
                    if (!movie.createdBy) {
                        console.log("no owner")
                        return res.redirect("/")}
                    //TODO//    
            if (!user || !movie.createdBy.equals(user.id)) {
                console.log("not owner")
                return res.redirect("/")};
        res.render('movie/edit', {movie})

    } catch (err){
        console.log(err)
        return res.redirect("/")
    }
    
   

  
});

moviesController.post("/:movieId/edit", async (req, res) => {

    const movieId = req.params.movieId;
    const movieData = req.body;

    console.log(movieId)
    try {
    await movieService.updateMovie(movieId, movieData)
    } catch (err) {
        console.log(err)
    }
    
    return res.redirect(`/movies/details/${movieId}`)


});

moviesController.get('/:movieId/delete', isAuth, async (req, res) => {

    const user = req.user;
    const movieId = req.params.movieId;
    const movie = await movieService.getOne(movieId);
    if (!movie.createdBy) {
            console.log("unauthorized 26355")
            
            return res.redirect('/')
    }

    if (!user || !movie.createdBy.equals(user.id)) {return res.redirect("/")};
     try { 
        const movie = await movieService.deleteOne(movieId);
     } catch (err) {
        console.log(err)
     }
     res.redirect(`/`)
});



export default moviesController;
