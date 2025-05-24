import addBreed from "../views/home copy/addBreed.html";


export default {

    async readBreed(){

        const breeds = await jsonHandler.readJsonBase("breeds")
        return breeds;

    },

    async addBreed(obj){
        const breeds = await jsonHandler.readJsonBase("breeds")
        breeds.push(obj);
        const written = await jsonHandler.writeJsonBase("breeds", breeds, 4);
        
    }




}