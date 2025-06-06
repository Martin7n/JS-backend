import { Router } from "express";
import { isAuth } from "../middlewares/auth-middleware.js";
import { getErrorMessage } from "../utils/errorutils.js";
import devicesservice from "../services/devicesservice.js";

const router = Router();

router.get("/create", (req, res) => {
    res.render("devices/create")

});

router.post("/create",  async (req, res) => {
    const device = req.body;

    try{
        await devicesservice.create(device);

    } catch(err) {
        const error = getErrorMessage(err);
        return res.render("devices/create", {device, error})
    }


    res.render("devices/create", {device})



});






export default router;