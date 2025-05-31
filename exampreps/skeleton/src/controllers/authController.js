import { Router } from "express";
import authservice from "../services/authservice.js";
import jwt from "jsonwebtoken";

const router = Router();

router.get("/register",  (req, res) => {

    res.render('auth/register')


});


router.post("/register", async (req, res) => {
    const userData = req.body;

    console.log(userData)

    // if (userData.password !== userData.repass)
    // { throw new Error("Password and re-password are not the same.")}

    try{
        await authservice.register(userData);

    } catch (e) {
        throw new Error(`Registry issue ${e}`)
    };

    const token = await authService.login(email, password);
    res.cookie('auth', token, { httpOnly: true });

    res.redirect("/")
});


router.get("/login", async (req, res) => {
        res.render('auth/login')
});

router.post("/login", async (req, res) => {
    const userData = req.body;

    try{
        const token = await authservice.login(userData);        
        res.cookie('auth', token, { httpOnly: true });
        res.redirect('/');

    } catch (e) {
        throw new Error(`Registry issue ${e}`)
    };
    res.redirect("/")
});


router.get("/logout", (req, res) => {
    if (req.user)
    {   
        res.clearCookie('auth');
        res.redirect('/')
    }
});





export default router;