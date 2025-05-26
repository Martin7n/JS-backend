import express from 'express';
import moviesService from '../services/movieService.js';

const homeController = express.Router();
homeController.get("/", async (req, res) => {
    const context = await moviesService.getAll().lean()
    res.render("home", {context})

});


homeController.get('/about', (req, res) => {
    res.render('about');
});


export default homeController;