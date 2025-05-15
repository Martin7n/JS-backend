import http, { createServer } from "http";
import { indexContent } from "./resources/views/home copy/index.html.js";
import  cssContent  from "./resources/content/styles/site copy.js";
import addcat from "./resources/views/home copy/addCat.html.js";
import addBreed from "./resources/views/home copy/addBreed.html.js";
import fspromise from "node:fs/promises";


const cats = await readJson();
console.log(cats)

async function readJson(){

    const catJson = await fspromise.readFile('./resources/db/cats.json', { encoding: 'utf-8' });
    const catList = JSON.parse(catJson);
    return catList
    
};


const server = createServer(function(req, res) {

    const urlRequest = req.url;

    const urls = {
        '/content/styles/site.css': cssContent,
        '/cats/add-cat': addcat,
        '/cats/add-breed': addBreed,
        "/": indexContent(cats)
        
    }

    const content = urls[req.url] ? urls[req.url] : "<h1>error</h1>";

    res.write(content)

    

    // if (req.url === '/content/styles/site.css')
    // { res.write(cssContent)}
    

    // console.log("new RQ")
    // res.write(indexContent)
    res.end();

});

server.listen(5111);

console.log('Server is running on http://localhost:5111...');
