// import { Router } from "express";
// import authservice from "../services/authservice.js";
// import jwt from "jsonwebtoken";
// import { getErrorMessage } from "../utils/errorutils.js";
// import { AUTH_COOKIE_NAME } from "../config.js";
// import { isAuth, isNotGuest } from "../middlewares/auth-middleware.js";

// const router = Router();

// router.get("/register", isNotGuest,  (req, res) => {
//     const title = {title: "register"}

//     res.render('auth/register')

// });


// router.post("/register", isNotGuest, async (req, res) => {
//     const userData = req.body;
//     const title = {title: "register"}

//     try{
//         await authservice.register(userData);

//     } catch (err) {
//         const error = getErrorMessage(err); 
//         return res.render('auth/register',  {error, user: userData, title} );

//     };

//      const token = await authservice.login(userData);
//         res.cookie(AUTH_COOKIE_NAME, token, { httpOnly: true });



//     res.redirect("/")
// });


// router.get("/login", isNotGuest, async (req, res) => {
//         res.render('auth/login')
// });

// router.post("/login", isNotGuest, async (req, res) => {
//     const userData = req.body;

//     try{
//         const token = await authservice.login(userData);        
//         res.cookie(AUTH_COOKIE_NAME, token, { httpOnly: true });
//         return res.redirect('/');

//     } catch (err) {
//         return res.render('auth/login', { error: getErrorMessage(err), user: userData });
//     };
//     res.redirect("/")
// });


// router.get("/logout", isAuth, (req, res) => {
//     if (req.user)
//     {   
//         res.clearCookie(AUTH_COOKIE_NAME);
//         res.redirect('/')
//     }
// });


// export default router;