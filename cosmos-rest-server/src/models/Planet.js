
import { Schema, model, Types } from "mongoose";
import { minMaxLenValidator } from "../utils/validators.js";



const planetSchema = new Schema({


    name:           { type: String, required: true, },
    age:            { type: String, required: true, },
    solarSystem:    { type: String, required: true, },
    type:           { type: String, required: true, enum: ["Inner", "Outer", "Dwarf"]},
    moons:          { type: Number, required: true, },
    size:           { type: Number, required: true, },
    rings:          { type: String, required: true, enum: ['Yes', 'No'], },
    description:    { type: String, required: true, },
    image:          { type: String, required: true, },
    likedList:      [{ type:Types.ObjectId, ref: "User"}],
    owner:          { type: Types.ObjectId, ref: "User", required: true },

},
      {
        timestamps: true
      }
);


const Planet = model("Planet", planetSchema);

export default Planet;