import fs from 'node:fs/promises'
import Movie from '../models/Movies.js';

export async function readJSON(){

    const data = await fs.readFile("./database.json", {encoding: "utf-8"});
    const dataList = JSON.parse(data)
    console.log(dataList)
    return dataList

}

// export async function writeJsonObj(data) {

//     const obj = new Movie(data)
//     const dataWrite = await fs.writeFile("./database.json", obj, {encoding: "utf-8"});
    
// }

