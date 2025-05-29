import jwt from "jsonwebtoken";

const SECRET = process.env.SECRET ?? "secretlySecretNonProductionDeSecret12377731999-1"


export const authMiddleware = (req, res, next) => {

    const token = req.cookies['auth']
    console.log(token)

    if (!token){ return next()};

    try {
        const decodedToken = jwt.verify(token, SECRET);
        req.user =  decodedToken;
        // console.log(req.user)
        res.locals.user = decodedToken;
        next()

    } catch (err) {
        console.log(`jwt decode ${err}`)
        res.clearCookie("auth");
        res.redirect("/");
    }


 
};