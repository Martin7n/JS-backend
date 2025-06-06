import { Router } from "express";
import { isAuth } from "../middlewares/auth-middleware.js";
import devicesservice from "../services/devicesservice.js";

const router = Router();

router.get("/", async (req, res) => {

    const device = await devicesservice.getAll()
    console.log(req.user)
    res.render("home", {device})
    // res.render("home", {layout: false})
});


router.get("/aaa", isAuth, (req, res) => {
    console.log("isAuth Redirect")
    res.render("home")
    // res.render("home", {layout: false})
});


export default router;  