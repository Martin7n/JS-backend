import http, { createServer } from "http";


const server = createServer(function(req, res) {

    console.log("new RQ")
    res.write("<h1>Pretty nice Hello request received into h1 output...</h1>")
    res.end();

});

server.listen(5111);

console.log('Server is running on http://localhost:5111...');
