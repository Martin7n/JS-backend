
import { Schema, model, Types } from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new Schema({
    name: {
            type: String,
            required: true,
            minLength: [2, "Minimum lenght ot 2 required."],
            maxLength: [20, "Maximum lenght of 20."]
          
    },
    email:{
            type: String,
            required: true,
            minLength: [3, "At least 3 symbols"],
            //TODO -> min.len: 10
            // lowercase: true,
            // match: most used regex for emails :) 
    },
   password: {
        type: String,
        required: true,
        minLength: [4, "Minimum password lenght: 8 symbols"],
        trim: true,
    }    
    
});


userSchema.pre("save", async function () {
    this.password = await bcrypt.hash(this.password, 10)
    
});

const User = model("User", userSchema);



export default User;