import express from 'express';


const homeControler = express.Router();

import {v4 as uid} from "uuid";

homeControler.get("/", (req, res) => {
    const context = {
        "name": uid()
    }

    res.render("home", {context})

});


export default homeControler;