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


router.get("/create", isAuth, (req, res) => {

    res.render("planets/create")
});


router.post("/create", isAuth, async (req, res) => {

    const data = req.body;
    const userId = req.user?.id;
    try{
        await planetService.create(data, userId)
    } catch(err){
        const error = getErrorMessage(err)
        return res.render("home", {error})
    }
});

    
    
router.get("/search", isAuth, (req,res) => {

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
    const userId = req.user?.id
    

    try {
        const data = await planetService.getOneDetails(planetId)

        // if (!userId){
        //     return res.render("planets/details", {data, userId})
        // }
        
        const owner = data.owner.equals(userId)
        const ownerLiked = await planetService.ownerOrLiked(planetId, userId)
        console.log(!!ownerLiked)
        
        res.render("planets/details", {data, owner, ownerLiked: Boolean(!!ownerLiked), userId})

    } catch(err) {
        const error = getErrorMessage(err)
        return res.render("404", {error})

    }

});


router.get("/edit/:planetId", isAuth, async (req, res) => {
    const userId = req.user?.id;
    const planetId = req.params.planetId;

    try {
        const data = await planetService.getOneDetails(planetId)
        
        if (!data.owner.equals(userId)) {
            return res.redirect("/")
        }

        res.render("planets/edit", {data})

    } catch(err) {
        const error = getErrorMessage(err)
        return res.render("404", {error})

    }


});
router.post("/edit/:planetId", isAuth,  async (req, res) => {
    const planetId = req.params.planetId;
    const data = req.body;
    const userId = req.user?.id; 


    try { 
        await planetService.updatePlanet(planetId, data)

        res.redirect("/planet/catalog")

    } catch(err){
        const error = getErrorMessage(err);
        return res.render('planets/edit', {data: data, error})
    }

});



router.get("/like/:planetId", async (req, res) => {
    const planetId = req.params.planetId;
    const userId = req.user?.id;

    try { 

        await planetService.likePlanet(planetId, userId)

        res.redirect(`/planet/details/${planetId}`)

    } catch(err){
        const error = getErrorMessage(err);
        return res.render(`404`, { error})
    }

});

router.get("/delete/:planetId", isAuth, async (req, res) => {
    const planetId = req.params.planetId;
    const userId = req.user?.id;

    try {
        const deleted = await planetService.removePlanet(planetId, userId)
        if (deleted.deletedCount > 0) {return res.redirect("/planet/catalog")}
  
            const error = "unauthorized"
            return res.render("404", {error})

        

    } catch(err){
        const error = getErrorMessage(err);
        return res.render("404", {error})
    }
});








export default router;