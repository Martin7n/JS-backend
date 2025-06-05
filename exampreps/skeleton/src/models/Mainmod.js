
import { Schema, model, Types } from "mongoose";


const mainModelSchema = new Schema({
    itemName: {
            type: String,
          
    },

    imageUrl:{
            type: String,
            minLength: [3, "At least 3 symbols"],
            // lowercase: true,
            // match: most used regex for emails :) 
    },
    description: {
         type: String,
    }
    
});


const MainModel = model("MainModel", mainModelSchema);



export default MainModel;