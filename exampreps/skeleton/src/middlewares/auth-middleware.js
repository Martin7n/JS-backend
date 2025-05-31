import jwt from 'jsonwebtoken';
import { JSON_WEBTOKEN_SECRET } from '../config.js';
import { getErrorMessage } from '../utils/errorutils.js';



export const authMiddleware = (req, res, next) => {
    
    const token = req.cookies['auth'];
    if (!token){

        console.log("no token")
        return next()
    }

    try {
        const decodedToken = jwt.verify(token, JSON_WEBTOKEN_SECRET);
        req.user = decodedToken;
        res.locals.user = decodedToken;
        next()
    } catch (err) {
        console.log(err)
        res.clearCookie('auth');
        res.redirect('/auth/login');
    }
   
}

export const isAuth = (req, res, next) => {
    if (!req.user){
          
        return res.redirect('/auth/login');
    }
    next();
};

