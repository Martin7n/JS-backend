import http, { createServer } from "http";
import { indexContent } from "./resources/views/index.html.js";


console.log(indexContent)

const server = createServer(function(req, res) {

    console.log("new RQ")
    res.write(indexContent)
    res.end();

});

server.listen(5111);

console.log('Server is running on http://localhost:5111...');
