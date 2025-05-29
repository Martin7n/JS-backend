import express from 'express';
import authservice from "../services/authservice.js"

const authcontroler = express.Router(); 

authcontroler.get("/register", async (req, res) => {

    res.render('auth/register')

});


authcontroler.post("/register", async (req, res) => {

    const userData = req.body;
    // const {email, password, repass} = req.body
    // console.log(email, password, repass)


    try{
        await authservice.register(userData);

    } catch (err){
        console.log(err);
        // const error = err.getErrorMessage(err)
        // res.redirect('auth/register', {error})

        const error = {error: err}
        res.redirect('auth/register')
    }



    res.redirect("/")
});


authcontroler.get("/login", async (req, res) => {

    res.render('auth/login')


});


authcontroler.post("/login", async (req, res) => {
    const {email, password} = req.body;
    
    try{
    const token = await authservice.login(email, password);
    res.cookie('auth', token, {httpOnly: true});
    res.redirect('/');

    } catch (err){
        console.error("not logged in")
        res.redirect("login")

    }


});


authcontroler.get("/logout", async (req, res) => {
    res.clearCookie('auth');
    res.redirect('/');
});



export default authcontroler;