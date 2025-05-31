import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    console.log(req.user)
    res.render("home")
    // res.render("home", {layout: false})
});


export default router;  