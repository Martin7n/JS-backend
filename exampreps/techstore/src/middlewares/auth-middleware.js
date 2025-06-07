import jwt from 'jsonwebtoken';
import { AUTH_COOKIE_NAME, JSON_WEBTOKEN_SECRET } from '../config.js';
import { getErrorMessage } from '../utils/errorutils.js';
import devicesservice from '../services/devicesservice.js';



export const authMiddleware = (req, res, next) => {
    
    const token = req.cookies[AUTH_COOKIE_NAME];
    if (!token){
        return next()
    }

    try {
        const decodedToken = jwt.verify(token, JSON_WEBTOKEN_SECRET);
        req.user = decodedToken;
        req.isAuthenticated = true;
        res.locals.user = decodedToken;
        res.locals.isAuthenticated = true;
        next()
    } catch (err) {
        // console.log(err)
        res.clearCookie(AUTH_COOKIE_NAME);
        res.redirect('/login');
    }
   
};

export const isAuth = (req, res, next) => {
    if (!req.user){
          
        return res.redirect('/login');
    }
    next();
};



export const isGuest = (req, res, next) => {
    if (req.user){
          
res.setError("You are already logged in");
        return res.redirect("/")    }
    next();
};



export const isOwner = async (req, res, next) => {
    
        const deviceId = req.params.deviceId;
        const userId = req.user.id
        const device = await devicesservice.getOne(deviceId);
        const isOwner = device.owner.equals(userId);

        if (!isOwner){
        res.setError("You are not owner");
        return res.redirect("/")    }
    next();
};
