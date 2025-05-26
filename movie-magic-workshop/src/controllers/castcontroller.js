import express from 'express';
import castservice from '../services/castservice.js';

const castcontroller = express.Router(); 


castcontroller.get("/create", (req, res) =>{

    res.render('casts/cast-create')

});

castcontroller.post("/create", async (req, res) =>{
    const data = req.body;  

    const result = await castservice.createCast(data).catch(e => console.error(e.message) );
    res.redirect("/")
    
    // res.render('casts/cast-create')

});


castcontroller.get("/attach", async (req, res) =>{

   const cast = await castservice.getAllCasts();

    res.render('casts/cast-attach', {cast})

});




export default castcontroller;