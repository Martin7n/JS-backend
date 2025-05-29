import User from "../models/User.js"


export default {

    register(userData){
        // const email = userData.email;
        // const password = userData.password;
        // const repass = userData.repass
        //repass check
        if (userData.password !== userData.password){ throw new Error("Pass-repass issue")};

        return User.create(userData.email, userData.password);

    },
    login(){},
    logout(){},


};