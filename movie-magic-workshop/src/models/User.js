import { Schema, model, Types } from "mongoose";
import bcrypt from "bcrypt";

const UserSchema = new Schema({
    email: {
        type: String,
        minLength: [3, "At least 3 symbols"],
        lowercase: true,
        // match: most used regex for emails :) 
    },
    password: {
        type: String,
        minLength: [8, "Minimum password lenght: 8 symbols"],
        trim: true
        // match: //,
    }    
})

const User = model("User", UserSchema);


UserSchema.pre("save", async function () {
    
    

});

export default User;