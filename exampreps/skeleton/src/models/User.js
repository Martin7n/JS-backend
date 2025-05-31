
import { Schema, model, Types } from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new Schema({

    email:{
        type: String,
        // minLength: [3, "At least 3 symbols"],
        // lowercase: true,
        // match: most used regex for emails :) 
    },
   password: {
        type: String,
        // minLength: [6, "Minimum password lenght: 8 symbols"],
        trim: true,
    }    
    
});


// userSchema.pre("save", async function () {
//     this.password = await bcrypt.hash(this.password, 10)
    
// });


const User = model("User", userSchema);



export default User;