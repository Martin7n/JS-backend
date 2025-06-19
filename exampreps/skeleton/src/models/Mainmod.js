
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
    },
    
    image:          { type: String, required: true,
            validate: {
            validator: 
            val => /^https?:\/\//.test(val),
            message: (props) => `${props.value} is invalid image url!`

        }
    },
          {
            timestamps: true
          }
    );

const MainModel = model("MainModel", mainModelSchema);



export default MainModel;