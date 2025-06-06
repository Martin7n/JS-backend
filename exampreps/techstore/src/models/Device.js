
import { Schema, model, Types } from "mongoose";


// !! Todo: set the minLengthValidator(?)
function minLengthValidator(min) {
  return {
    validator: function (v) {
      return typeof v === 'string' && v.length >= min;
    },
    message: props => `Must be at least ${min} characters long, got '${props.value}'`
  };
}


const devicelSchema = new Schema({
    brand:{
        type: String,
        minLength: [2, "At least $characters"]
    }, 
    // should be at least 2 characters
    model:{
        type: String,
        minLength: [5, "At least $characters"]
    }, 
    // should be at least 5 characters
    hardDisk:{
        type: String,
        minLength: [5, "At least $characters"]
    },
    //  Disk should be at least 5 characters
    screenSize:{
        type: String,
        minLength: [1, "At least $characters"]
    },
    //  Size should be at least 1 characters
    ram:{
        type: String,
        minLength: [2, "At least $characters"]
    }, 
    // should be at least 2 characters
    operatingSystem:{
        type: String,
        minLength: [5, "At least $characters"],
        maxLength: [20, "No more than $characters"]

    },  
    //  should be between 5 and 20 characters long
    cpu:{
        type: String,
        minLength: [10, "At least $characters"],
        maxLength: [50, "No more than $characters"]
    }, 
    // ould be between 10 and 50 characters long
    gpu:{
        type: String,
        minLength: [10, "At least $characters"],
        maxLength: [50, "No more than $characters"]  
    }, 
    // ould be between 10 and 50 characters long
    price:{
        type: Number,
        min: [0, "Must be positive number"]
    },  
    color:{
        type: String,
        minLength: [10, "At least $characters"],
        maxLength: [50, "No more than $characters"]
    }, 
    // hould be between 2 and 10 characters long
    weight:{
        type: String,
        minLength: [1, "At least $characters"]
    }, 
    // should be at least 1 characters long
    image:{
        type: String,
        validate: {
      validator: function (v) {
        return /^https?:\/\//.test(v);  
      },
      message: props => `'${props.value}' is not a valid URL. Must start with http:// or https://`
    },
    preferredList: [{
                    type:Types.ObjectId,
                    ref: "User"
                }],
    owner: {
                    type:Types.ObjectId,
                    ref: "User"
                }
  },
    
});


const Device = model("Device", devicelSchema);



export default Device;



