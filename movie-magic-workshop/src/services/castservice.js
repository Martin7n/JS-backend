
import Cast from "../models/Cast.js";

export default {

    createCast(data){

        try{
              return Cast.create(data)
        } catch (err){
            console.log(err)
        }

    },

    getAllCasts(){
        return Cast.find({});

    },

    getOneCast(){
        return true
    },





}

