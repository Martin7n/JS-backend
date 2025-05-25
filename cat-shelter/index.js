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
        "/":  indexContent(cats),
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

            // const postUrlMapper = {
            //     '/cats/add-breed': 1

            // }
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
                } else if (req.url.includes('edit')){
                    console.log(newData)
                    const catId = idExtractor(req.url)
                    deleteCat(catId);
                    writeJsonBase("cats", newData, 4);

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
            const urlString = req.url;

            if (req.url.includes('delete')){
                    const catId = idExtractor(req.url)
                    deleteCat(catId);
                        res.writeHead(302, { Location: "/" });
                     res.end();
                } else {
            // const content = urls[req.url] ? urls[req.url] : routeIdHandler(req.url);
            const content = urls[req.url] ? urls[req.url] : editCat((catFinder(req.url)), breeds);
            res.write(content);}
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




const idExtractor = (urlRq) => {
    
    if (urlRq.includes("delete") || urlRq.includes("edit")) {
        const catId =  urlRq.split("/").pop()
        return catId
    }
    return ("/")

}

async function deleteCat(catId){
    try {
    const catList = await readJsonBase("cats");
    console.log(catList)
    // console.log(catList)
    const updatedCatList = catList.filter(
        cat => Number(cat.id) !== Number(catId));
    const json = JSON.stringify(updatedCatList, null, 4);    
    const writingToJson = await fspromise.writeFile('./resources/db/cats.json', json,  { encoding: 'utf-8' });
    // await writeJsonBase("cats", updatedCatList, 4);

    } catch (err) {console.log(err)};
    
}

function catFinder(urlRq){

    const catId = idExtractor(urlRq)
    console.log(`aaaaaaaaaaa ${catId}`)
    
    console.log(`ID => ${catId}`)
    let ctt = {}

    const ct = cats.map( (cat) => {
    if (Number(cat.id) === Number(catId))
    {
        return ctt = {"name":cat.name,
            "id": cat.id,
            "description": cat.description,
            "imageUrl": cat.imageUrl,
            "breed": cat.breed}
     } 
        });

    if (!ctt.id){
        ctt = {"name":"no cat detected",
            "id": "no cat detected",
            "description": "no cat detected",
            "imageUrl": "no cat detected",
            "breed": "no cat detected"}
    }

    console.log(ctt)
    return(ctt)

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