import { Router } from "express";
import authservice from "../services/authservice.js";

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

    res.redirect("/")
});


router.get("/login", (req, res) => {
    res.send("<h1>AuthOk</h1>")
});

router.post("/login", (req, res) => {
    res.send("<h1>AuthOk</h1>")
});


router.get("/logout", (req, res) => {
    res.send("<h1>AuthOk</h1>")
});





export default router;