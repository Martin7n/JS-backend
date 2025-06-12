import Router from "express";
import { isAuth } from "../middlewares/auth-middleware.js";
import profileservice from "../services/profileservice.js";
import { getErrorMessage } from "../utils/errorutils.js";
import devicesservice from "../services/devicesservice.js";

const router = Router();

router.get("/profile", isAuth, async (req, rres) => {
    
    
    if (!req.user?.id){
        return res.render("home", {error: "unauth"})
    }

    const userId = req.user.id;
    try {
        const profile = await profileservice.getProfileDetails(userId)
    } catch(err) {
        return res.render("/login", {error: "please login"})
    };

    try {
        const createdDevices = await devicesservice.getAll();

        const preferedDevices = await devicesservice.getAll();


    } catch(err){
        const error = getErrorMessage(err);
        return res.render("404", {error})
    }

    res.render("profile", profile, createdDevices, preferedDevices)


});