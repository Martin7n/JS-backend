import { Router } from "express";
import { isAuth } from "../middlewares/auth-middleware.js";

const router = Router();

router.get("/", (req, res) => {
    // console.log(req.user)
    // console.log(req)
    res.render("home")
    // res.render("home", {layout: false})
});


router.get("/aaa", isAuth, (req, res) => {
    console.log("isAuth Redirect3")
    res.render("home")
    // res.render("home", {layout: false})
});


export default router;  