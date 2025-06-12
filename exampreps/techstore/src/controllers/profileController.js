import { Router } from "express";
import { isAuth } from "../middlewares/auth-middleware.js";
import profileservice from "../services/profileservice.js";
import { getErrorMessage } from "../utils/errorutils.js";
import devicesservice from "../services/devicesservice.js";

const router = Router();

router.get("/", isAuth, async (req, res) => {
    
   
    if (!req.user?.id){
        return res.render("home", {error: "unauth"})
    }

    const userId = req.user.id;
    console.log(userId)
     
    // try {
    //     const profile = await profileservice.getProfileDetails(userId)
    //         res.render("profile/profile", {profile})

    // } catch(err) {
    //     return res.render("/login", {error: "please login"})
    // };

    try {
         const profile = await profileservice.getProfileDetails(userId)
        const createdDevices = await devicesservice.getAll({owner:userId});

        console.log(createdDevices)

        const preferedDevices = await devicesservice.getAll({preferedDevices:userId});
            res.render("profile/profile", {profile, createdDevices, preferedDevices})


    } catch(err){
        const error = getErrorMessage(err);
        return res.render("404", {error})
    }

    // res.render("profile/profile", {profile, createdDevices, preferedDevices})






});

export default router;  