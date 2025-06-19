import { Router } from "express";
import { isAuth } from "../middlewares/auth-middleware.js";
import cosmeService from "../services/cosmeService.js";
import Cosmetic from "../models/Cosmetic.js";
import { getErrorMessage } from "../utils/errorutils.js";

const router = Router();


router.get("/catalog", async(req, res) => {
    
    try {
            const data = await cosmeService.getAll()
            console.log(data)
            res.render("cosmetic/catalog", {data})
        } catch (err){
            const error = getErrorMessage(err)
            return res.render("cosmetic/catalog", {error})
    
        }
    
    });



router.get("/create", isAuth, (req, res) => {
    const user = req.user?.id
    res.render("cosmetic/create")
});


router.post("/create", isAuth, async (req, res) => {

    const data = req.body
    const user = req.user?.id
    const cosme = {...data, owner: user}
    console.log(cosme)

     try {
        await cosmeService.create(cosme);
     } catch (err) {
        const error = getErrorMessage(err);
        
        return res.render("cosmetic/create", {error})
     }
    
     res.redirect("/cosmetic/catalog")
});

    router.get("/details/:cosmeId", isAuth, async (req, res) => {
        const cosmeId =  req.params.cosmeId
        try{
            const data = await cosmeService.getOne(cosmeId);
            res.render("cosmetic/details", {data})


        } catch(e){
            const error = getErrorMessage(err)
            return res.render("cosmetic/catalog", {error})
        }
    });





export default router;