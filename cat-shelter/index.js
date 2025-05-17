import http, { createServer } from "http";
import { indexContent } from "./resources/views/home copy/index.html.js";
import  cssContent  from "./resources/content/styles/site copy.js";
import addcat from "./resources/views/home copy/addCat.html.js";
import addBreed from "./resources/views/home copy/addBreed.html.js";
import fspromise from "node:fs/promises";
import editCat from "./resources/views/home copy/editCat.html.js";


const pathnames = {
        "cats": './resources/db/cats.json',
        "breeds": './resources/db/cat-breed.json',
    };


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
    }


    // const routes = [
    // { method: 'GET', path: /^\/$/, handler: () => indexContent(cats) },
    // { method: 'GET', path: /^\/cats\/add-cat$/, handler: () => addcat(breeds) },
    // { method: 'GET', path: /^\/cats\/add-breed$/, handler: () => addBreed(breeds) },
    // { method: 'GET', path: /^\/cats\/edit\/([a-zA-Z0-9_-]+)$/, handler: (id) => edit(id) },
    // ];
    const methodRq = req.method;
    
    switch (methodRq) {
        case "POST":
            let urlEncodedData = '';
            req.on('data', (chunk) => {
            urlEncodedData += chunk;
            });

            req.on('end', () =>{
                const data = new URLSearchParams(urlEncodedData);
                const newData = Object.fromEntries(data.entries())

                // console.log(data)
                console.log(req.url )
                if (req.url === '/cats/cats/add-cat'){
                    // const newData = Object.fromEntries(data.entries())
                    writeJsonBase("cats", newData, 4);
                    
                } else if (req.url === '/cats/add-breed')
                
                {
                writeJsonBase("breeds", newData, 4)
                }
            }
            )
            res.writeHead(301, {
                            'location': '/'
                        });
                        res.end();

            // // const pload = new URLSearchParams(req.payload); Nope. Payload isn't real here
            // console.log(methodRq, req.url, req.headers)
        
            break;
    
        default:
            const content = urls[req.url] ? urls[req.url] : routeIdHandler(req.url);
            // console.log(content)
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




function routeIdHandler(urlRq){

    if (!urlRq.includes("edit")){ return ("/")}
        
    const catId =  (urlRq.split("/").pop())
    console.log(catId)

    const ct = cats.map( (cat) => {
    if (Number(cat.id) === Number(catId))
    {
        return cat
    }
        });
    
    return(editCat(ct))
}
    


async function writeJsonBase(fields, data, sep) {
    const currentData =  (fields==="cats") ? cats  : breeds;

    console.log(currentData)
    if (fields==="cats") 
    {
    data.id = currentData.length +1;
    };
    currentData.push(data)
    // // console.log(currentData)
    const dataToWrite = JSON.stringify(currentData, null, sep);
    // console.log(dataToWrite)
    const writingToJson = await fspromise.writeFile(pathnames[fields], dataToWrite, { encoding: 'utf-8' });

    }


async function readJsonBase(field) {
    console.log(pathnames[field])
    const path = pathnames[field];
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
