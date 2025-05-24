import fs from 'node:fs/promises'
// import Movie from '../models/Movies.js';


export default {

    async readJSON(){

        const data = await fs.readFile("./database.json", {encoding: "utf-8"});
        const dataList = JSON.parse(data)
        // console.log(dataList)
        return dataList

    },

    async  writeJSONall(data) {
    
            const movieList = JSON.stringify(data, null, 4);
    
            const writen = await fs.writeFile("./database.json", movieList, {encoding: "utf-8"});
            return writen;
        
    }

}

// export async function writeJsonObj(data) {

//     const obj = new Movie(data)
//     const dataWrite = await fs.writeFile("./database.json", obj, {encoding: "utf-8"});
    
// }

