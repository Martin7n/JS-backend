import express from 'express';
import authservice from "../services/authservice.js"

const authcontroler = express.Router(); 

authcontroler.get("/register", async (req, res) => {

    res.render('auth/register')

});


authcontroler.post("/register", async (req, res) => {

    const userData = req.body
    console.log(email, password, repass)


    try{
        await authservice.register(userData);

    } catch (err){
        console.log(err);
        const error = err.getErrorMessage(err)
        res.redirect('auth/register', {error})
    }



    res.redirect("/")
});


authcontroler.get("/login", async (req, res) => {

    res.render('auth/login')


});


authcontroler.post("/login", async (req, res) => {


});


authcontroler.get("/logout", async (req, res) => {


});



export default authcontroler;