import User from "../models/User.js"
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';

const SECRET = process.env.SECRET ?? "secretlySecretNonProductionDeSecret12377731999-1"

export default {

    async register(userData){
        // const email = userData.email;
        // const password = userData.password;
        // const repass = userData.repass
        //repass check
        if (userData.password !== userData.password){ throw new Error("Pass-repass issue")};

        return  User.create(userData);

    },
    async login(email, password){
        const user = await User.findOne({email})

        // console.log(user)

        if (!user) { 
            throw new Error("Invalid user or pass #1")
        }

        const isValid = await bcrypt.compare(password, user.password);

        console.log(`valiadtion +> ${isValid}`)
        if (!isValid) { 
            throw new Error("Invalid user or pass #2")
        }

        const payload = {
            id: user.id,
            email: user.email,
        };

        const token = jwt.sign(payload, SECRET, { expiresIn: "2h" });
        return token;

    },
    logout(){},


};