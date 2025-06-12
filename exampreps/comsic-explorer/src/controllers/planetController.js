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


router.get("/details/:planetId", async (req, res) => {
    
    const planetId = req.params.planetId;

    try {
        const data = await planetService.getOneDetails(planetId)
        res.render("planets/details", {data})

    } catch(err) {
        const error = getErrorMessage(err)
        return res.redirect("/", {error})

    }

});


router.get("/edit/:planetId", async (req, res) => {

    const planetId = req.params.planetId;

    try {
        const data = await planetService.getOneDetails(planetId)
        res.render("planets/edit", {data})

    } catch(err) {
        const error = getErrorMessage(err)
        return res.redirect("/", {error})

    }


});
router.post("/edit/:planetId", async (req, res) => {
    const planetId = req.params.planetId;
    const planet = req.body;

    try { 
        await planetService.updatePlanet(planetId, planet )

        res.redirect("/planet/catalog")

    } catch(err){
        const error = getErrorMessage(err);
        res.redirect(`planet/edit/${planetId}`)
    }


});







export default router;