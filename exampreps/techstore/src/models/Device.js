
import { Schema, model, Types } from "mongoose";
import { minMaxLenValidator } from "../utils/validators.js";


const devicelSchema = new Schema({
    brand:          { type: String, required: true, validate: minMaxLenValidator(3),}, 
    model:          { type: String, required: true, validate: minMaxLenValidator(5),}, 
    hardDisk:       { type: String, required: true, validate: minMaxLenValidator(5),},
    screenSize:     { type: String, required: true, validate: minMaxLenValidator(1),},
    ram:            { type: String, required: true, validate: minMaxLenValidator(2),}, 
    operatingSystem:{ type: String, required: true, validate: minMaxLenValidator(5, 20),},  
    cpu:            { type: String, required: true, validate: minMaxLenValidator(10, 50),}, 
    gpu:            { type: String, required: true, validate: minMaxLenValidator(10, 50),}, 
    price:          { type: Number, required: true, min: [0, "Must be positive number"]},  
    color:          { type: String, required: true, validate: minMaxLenValidator(2, 10),}, 
    weight:         { type: String, required: true, validate: minMaxLenValidator(1),}, 
    image:          { type: String, required: true, validate: 
                    {validator: function (v) { return /^https?:\/\//.test(v);},
                    message: props => 
                    `'${props.value}' is not a valid URL. Must start with http:// or https://`
                    },
    preferredList: [{ type:Types.ObjectId, ref: "User"}],
    owner:         {  type:Types.ObjectId, ref: "User"}},
    
},
  { timestamps: true, }
);


const Device = model("Device", devicelSchema);



export default Device;



