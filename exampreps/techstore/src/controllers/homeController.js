import { Router } from "express";
import { isAuth } from "../middlewares/auth-middleware.js";
import devicesservice from "../services/devicesservice.js";

const router = Router();

router.get("/", async (req, res) => {
    const numberOfObj = 3;
    const sorting = "desc"
    const device = await devicesservice.getLasttripple(numberOfObj, sorting)
    const user = req.user;
    console.log(user)
    res.render("home", {device, user}, )
    // res.render("home", {layout: false})
});


router.get("/aaa", isAuth, (req, res) => {
    console.log("isAuth Redirect")
    res.render("home")
    // res.render("home", {layout: false})
});


router.get("/about", (req, res) =>{
    res.render('about')
})


export default router;  