
import { Schema, model, Types } from "mongoose";
import bcrypt from "bcrypt";
import { minMaxLenValidator } from "../utils/validators.js";


const userSchema = new Schema({
    username: { 
                type: String, 
                validate: minMaxLenValidator(2, 3), 
                required: true },

    email:{ 
                type: String, validate:  minMaxLenValidator(3, 5), 
                required: true, 
                lowercase: true, 
                match: /\@[a-zA-Z]+.[a-zA-Z]+$/,

    },
   password: { 
                type: String,
                required: true,  
                validate: minMaxLenValidator(3, 5), 
                trim: true, match: /^\w+$/, 
             }
},
      {
        timestamps: true
      }

);


userSchema.pre("save", async function () {
    this.password = await bcrypt.hash(this.password, 10)
    
});

const User = model("User", userSchema);



export default User;