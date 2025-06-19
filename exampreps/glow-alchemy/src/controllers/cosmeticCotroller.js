import { Router } from "express";
import { isAuth } from "../middlewares/auth-middleware.js";

const router = Router();


router.get("/catalog", (req, res) => {
    
    res.render("cosmetic/catalog")
});



router.get("/create", (req, res) => {
    res.render("cosmetic/create")
});



router.post("/create", async (req, res) => {

    const data = req.body
    console.log(data)

     try {
        await mainmodservice.create(data);
     } catch (err) {
        const error = getErrorMessage(err);
        
        return res.render("/main/create", {error})
     }
    
     res.redirect("/main")
});


export default router;