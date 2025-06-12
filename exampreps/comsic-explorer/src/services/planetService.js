import Planet from "../models/Planet.js";


export default {

    getAll(filter = {}){

        // throw new Error("errrrrrrrrrr")

        return Planet.find(filter);

    },


    create(data){

        return Planet.create(data);


    }


};