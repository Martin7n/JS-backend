import express from 'express';
import { readJSON } from '../utilities-rw-db/readUtil.js';

const homeControler = express.Router();

import {v4 as uid} from "uuid";

homeControler.get("/", (req, res) => {
    readJSON()
    const context = {
        "name": uid()
    }

    res.render("home", {context})

});


export default homeControler;