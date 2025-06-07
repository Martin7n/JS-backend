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
         const error = getErrorMessage(err);
        return res.render("devices/catalog", {error})

    };  

});

router.get("/details/:deviceId", async (req, res) => {

    const deviceId = req.params.deviceId;
    const userId = req.user.id
   
    const device = await devicesservice.getOne(deviceId);
    const isOwner = device.owner.equals(userId);

    res.render("devices/details", {device, isOwner})


});


router.get("/edit/:deviceId", isAuth, async (req, res) => {

    const deviceId = req.params.deviceId;
    const userId = req.user.id

    try{

        const device = await devicesservice.getOne(deviceId);
        const isOwner = device.owner.equals(userId);
        if (!isOwner) {throw new Error("Unauthorized")}
       
        return res.render("devices/edit", {device})

    } catch(err){
        const error = getErrorMessage(err);        
        return res.redirect("/")
    }

});

router.post("/edit/:deviceId", isAuth, async (req, res) => {
    const deviceId = req.params.deviceId;
    const device = req.body;

    try {

        console.log(deviceId,  device)
        await devicesservice.edit(deviceId, device);

    } catch(err){
        const error = getErrorMessage(err)

        return res.render("/devices/edit", {device, error})
    }

    res.redirect("/devices/catalog")
});





router.get("/create", isAuth, (req, res) => {
    res.render("devices/create")

});

router.post("/create",  isAuth, async (req, res) => {
    const device = req.body;
    const userId = req.user.id

    try{
        await devicesservice.create(device, userId);
        console.log("userId:", userId);

    } catch(err) {
        const error = getErrorMessage(err);
        return res.render("devices/create", {device, error})
    }


    res.redirect("/devices/catalog")

});






export default router;