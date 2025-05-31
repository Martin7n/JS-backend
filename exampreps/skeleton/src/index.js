
import express from 'express';


import { SERVER_PORT } from './config.js';


const app = express();
app.use(express.static('./src/public'));
app.use(express.urlencoded());

app.use("/", (req, res) => {
    res.send("<h1>WXS</h1>")})

console.log("test1")

app.listen(SERVER_PORT, () => console.log(`Server is listening on http://localhost:${SERVER_PORT}....`));
