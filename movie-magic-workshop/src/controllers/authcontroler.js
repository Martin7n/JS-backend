import express from 'express';

const authcontroler = express.Router(); 

authcontroler.get("/register", async (req, res) => {

    res.render('auth/register')


});


authcontroler.post("/register", async (req, res) => {


});


authcontroler.get("/logout", async (req, res) => {


});



export default authcontroler;