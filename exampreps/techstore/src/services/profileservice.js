import User from "../models/User.js";

export default {

    getProfileDetails(userId,){

        return User.findById(userId)


    },




};