import { Router } from "express";
import complexService from "../services/complexService.js";


const router = Router();

router.get("", (req, res) => {

    complexService.createExercise()

    res.send("Ok")
})

router.get("/to", (req, res) => {

    complexService.createComplex()
     res.send("new")

})

export default router;

