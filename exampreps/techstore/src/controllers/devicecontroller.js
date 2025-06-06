import { Router } from "express";
import { isAuth } from "../middlewares/auth-middleware.js";
import { getErrorMessage } from "../utils/errorutils.js";
import devicesservice from "../services/devicesservice.js";

const router = Router();


router.get("/catalog", async (req, res) => {

    try {
        const devices = await devicesservice.getAll();
        return res.render("devices/catalog", {devices})

    } catch(err) {
        return res.render("devices/catalog", {error})

    };  

});

router.get("/details/:deviceId", async (req, res) => {

    const deviceId = req.params.deviceId;

    const device = await devicesservice.getOne(deviceId);

    res.render("devices/details", {device})


});




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