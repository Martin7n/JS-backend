import User from "../models/User.js";


export default {



    async register(userData){

        const email = await User.findOne({email: userData.email}, "email");
        console.log(email)
        if (email) {
            throw new Error('Email already exists');
        }

        return User.create(userData)

    },

    login(userData){

    },

    logout(){

    }
};