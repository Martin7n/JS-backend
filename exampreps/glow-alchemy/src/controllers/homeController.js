import { Router } from "express";
import { isAuth } from "../middlewares/auth-middleware.js";
import cosmeService from "../services/cosmeService.js";
import { getErrorMessage } from "../utils/errorutils.js";

const router = Router();

router.get("/", async(req, res) => {
    console.log(`registered user check=>${req.user?.id}`)

    const num = "3";
    const sort = {createdAt: -1}

    try{
        const data = await cosmeService.getLast(sort, num)
        return res.render('home', {data})

    } catch(err){
        const error = getErrorMessage(err)
        return res.render('home', {error})
    }
    
    res.render("home") 
    // res.render("home", {layout: false})
});


router.get("/aaa", isAuth, (req, res) => {
    console.log("isAuth Redirect")
    res.render("home")
    // res.render("home", {layout: false})
});


export default router;  