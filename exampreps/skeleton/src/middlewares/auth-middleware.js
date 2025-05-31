import jwt from 'jsonwebtoken';
import { JSON_WEBTOKEN } from '../config.js';



export const authMiddleware = (req, res, next) => {
    
    const token = req.cookies['auth'];
    if (!token){
        return next()
    }

    try {
        const decodedToken = jwt.verify(token, JSON_WEBTOKEN);
        req.user = decodedToken;
        res.locals.user = decodedToken;
        next()
    } catch (err) {
        console.log(err)
        res.clearCookie('auth');
        res.redirect('/auth/login');
    }
    next()
}

export const isAuth = (req, res, next) => {
        if (!req.user){
            console.log("not auth")
            return res.redirect('/auth/login');
            }
    next();
};

