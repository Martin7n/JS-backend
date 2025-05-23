import express from 'express';
import { readJSON } from '../utilities-rw-db/readUtil.js';

const homeControler = express.Router();

import {v4 as uid} from "uuid";

homeControler.get("/", async (req, res) => {
    // readJSON()
    // const context = {
    //     "name": uid()
    // }

    const context = await readJSON();
    console.log(context[0])

    res.render("home", {context})

});


export default homeControler;