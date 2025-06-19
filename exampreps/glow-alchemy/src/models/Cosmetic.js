




import { Schema, model, Types } from "mongoose";
import { minMaxLenValidator, minMaxValidatorObj } from "../utils/validators.js";



const cosmeticlSchema = new Schema({

        name:           { type: String, required: true, validate: minMaxLenValidator(2) },
        skin:           { type: String, required: true, validate: minMaxLenValidator(10, 100) },
        description:    { type: String, required: true, validate: minMaxLenValidator(20, 200)},
        ingredients:    { type: String, required: true, validate: minMaxLenValidator(2, 50) },
        benefits:       { type: String, required: true, validate: minMaxLenValidator(10, 100)},
        price:          { type: Number, required: true, min: [0, "Must be a positive number"] },
        image:          { type: String, required: true, 
                        validate: {
                        validator: 
                        val => /^https?:\/\//.test(val),
                        message: (props) => `${props.value} is invalid image url!`
                        }
        },
        recommendList:  [{ type:Types.ObjectId, ref: "User"}],
        owner:          { type: Types.ObjectId, ref: "User", required: true }
    
    },
          {
            timestamps: true
          }
    );

const Cosmetic = model("Cosmetic", cosmeticlSchema);
    


