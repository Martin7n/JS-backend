import { Router } from "express";
import { isAuth } from "../middlewares/auth-middleware.js";

const router = Router();

router.get("/create", (req, res) => {
    res.render("devices/create")

});

router.post("/create",  (req, res) => {
    const data = req.body;

    console.log(data)
    res.render("devices/create", data)



});






export default router;