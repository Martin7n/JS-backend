import jwt from 'jsonwebtoken';
import { AUTH_COOKIE_NAME, JSON_WEBTOKEN_SECRET } from '../config.js';
import { getErrorMessage } from '../utils/errorutils.js';



export const authMiddleware = (req, res, next) => {
    
    const token = req.cookies[AUTH_COOKIE_NAME];
    if (!token){

        console.log("no token")
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
        console.log(err)
        res.clearCookie(AUTH_COOKIE_NAME);
        res.redirect('/login');
    }
   
}

export const isAuth = (req, res, next) => {
    if (!req.user){
          
        return res.redirect('/auth/login');
    }
    next();
};

