import { Router } from "express";
import { isAuth } from "../middlewares/auth-middleware.js";
import mainmodservice from "../services/mainmodservice.js"
import { getErrorMessage } from "../utils/errorutils.js";
import planetService from "../services/planetService.js";


const router = Router();

router.get("/catalog", async (req, res) => {

    try {
    const data = await planetService.getAll();
    
    } catch (err) {
        const error = getErrorMessage(err)

        return res.render("home", {error})

    }

    res.render("planets/catalog");
});


router.get("/create", (req, res) => {

    res.render("planets/create")
});


router.post("/create", (req, res) => {

    const data = req.body;
    const userId = req.user?.id;
    console.log(data)

    res.render("planets/create")
});




export default router;