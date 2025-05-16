import http, { createServer } from "http";
import { indexContent } from "./resources/views/home copy/index.html.js";
import  cssContent  from "./resources/content/styles/site copy.js";
import addcat from "./resources/views/home copy/addCat.html.js";
import addBreed from "./resources/views/home copy/addBreed.html.js";
import fspromise from "node:fs/promises";


const cats = await readJsonBase("cats");
// console.log(cats);

const breeds = await readJsonBase('breeds');
// console.log(breeds);


const server = createServer(function(req, res) {

    const urlRequest = req.url;

    const urls = {
        '/content/styles/site.css': cssContent,
        '/cats/add-cat': addcat(breeds),
        '/cats/add-breed': addBreed(breeds),
        "/": indexContent(cats)
        
    }

    const methodRq = req.method;
    
    switch (methodRq) {
        case "POST":
            let urlEncodedData = '';
            req.on('data', (chunk) => {
            urlEncodedData += chunk;
            });

            req.on('end', () =>{
                const data = new URLSearchParams(urlEncodedData);
                // console.log(data)
                const newCategory = Object.fromEntries(data.entries())
                console.log(newCategory)
                writeJsonBase(urls[req.url], newCategory)


            }
            )

            // // const pload = new URLSearchParams(req.payload); Nope. Payload isn't real here
            // console.log(methodRq, req.url, req.headers)
        
            break;
    
        default:
            const content = urls[req.url] ? urls[req.url] : "<h1>error</h1>";
            res.write(content)
            break;
    }

    // if (req.url === '/content/styles/site.css')
    // { res.write(cssContent)}
    

    // console.log("new RQ")
    // res.write(indexContent)
    res.end();

});

server.listen(5111);

console.log('Server is running on http://localhost:5111...');




const pathnames = {
        "cats": './resources/db/cats.json',
        "breeds": './resources/db/cat-breed.json',
    }


async function writeJsonBase(fields, data) {
    
}



async function readJsonBase(field) {


    console.log(pathnames[field])
    const path = pathnames[field];
    // Probably a good idea to handle wrong forms, but not like that.
    // let path;
    // if (!pathnames[field]) 
    // {path = pathnames["cats"];
        
    //     console.error(`No such field ${field}`)
    // } else{
    //     path = pathnames[field];
    // };
     
    const readresult = await fspromise.readFile(`${path}`, { encoding: 'utf-8' });
    const objectList = JSON.parse(readresult);

    return objectList
}





// Not in use

// async function readJson(){

//     const catJson = await fspromise.readFile('./resources/db/cats.json', { encoding: 'utf-8' });
//     const catList = JSON.parse(catJson);
//     return catList
    
// };
// const cats = await readJson();
// console.log(cats)
