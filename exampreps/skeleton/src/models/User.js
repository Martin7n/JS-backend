
import { Schema, model, Types } from "mongoose";
import bcrypt from "bcrypt";
import { minMaxLenValidator } from "../../../glow-alchemy/src/utils/validators.js";


const userSchema = new Schema({
    username: { type: String, validate: minMaxLenValidator(2, 20),trim: true, },
    email:{ type: String, validate: minMaxLenValidator(10),lowercase: true,  
            match: /\@[a-zA-Z]+.[a-zA-Z]+$/, },
    password: {type: String, validate: minMaxLenValidator(4), trim: true,}
},
    {
    timestamps: true
    }
);


// const userSchema = new Schema({
//     username: {
//             type: String,
          
//     },

//     email:{
//             type: String,
//             minLength: [3, "At least 3 symbols"],
//             // lowercase: true,
//             // match: most used regex for emails :) 
//     },
//    password: {
//         type: String,
//         // minLength: [6, "Minimum password lenght: 8 symbols"],
//         trim: true,
//     }    
    
// });


userSchema.pre("save", async function () {
    this.password = await bcrypt.hash(this.password, 10)
    
});

const User = model("User", userSchema);



export default User;