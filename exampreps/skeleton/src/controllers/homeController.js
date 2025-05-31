import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {

    res.render("home")
    // res.render("home", {layout: false})
});


export default router;