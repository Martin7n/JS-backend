import { Router } from "express";
import { isAuth } from "../middlewares/auth-middleware.js";
import mainmodservice from "../services/mainmodservice.js"
import { getErrorMessage } from "../utils/errorutils.js";
import planetService from "../services/planetService.js";
import { get } from "mongoose";


const router = Router();

router.get("/catalog", async (req, res) => {

    try {
    const data = await planetService.getAll();

    return res.render("planets/catalog", {data});
    
    } catch (err) {
        const error = getErrorMessage(err)

        return res.render("home", {error})

    }

});


router.get("/create", (req, res) => {

    res.render("planets/create")
});


router.post("/create", async (req, res) => {

    const data = req.body;
    const userId = req.user?.id;
    try{
        await planetService.create(data, userId)
    } catch(err){
        const error = getErrorMessage(err)
        return res.render("home", {error})
    }
});

    
    
router.get("/search", (req,res) => {

    res.render("planets/search")

});

router.post("/search", async (req,res) => {
    const filter = req.body;
    console.log(filter)
    
    try {
        const data = await planetService.getAll(filter)

        res.render("planets/search", {data})
    } catch (err) {
        const error = getErrorMessage(err);
        return res.redirect("/", {error})
    }
    
});





export default router;