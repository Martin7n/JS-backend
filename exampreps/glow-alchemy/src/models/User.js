
import { Schema, model, Types } from "mongoose";
import bcrypt from "bcrypt";
import { minMaxLenValidator } from "../utils/validators.js";

const userSchema = new Schema({
    username: { type: String, validate: minMaxLenValidator(2, 20),trim: true, },
    email:{ type: String, validate: minMaxLenValidator(10),lowercase: true, },
    password: {type: String, validate: minMaxLenValidator(4), trim: true,}
},
    {
    timestamps: true
    });


userSchema.pre("save", async function () {
    this.password = await bcrypt.hash(this.password, 10)
    
});

const User = model("User", userSchema);



export default User;