import { Schema, model, Types } from "mongoose";

const castSchema = new Schema({

    name:{
        type: String, 
        required: [true, "Name is required!!!"],
        minLength: ["3", "Name should be at least 3 characters"],
        match: [/^[A-Za-z]+$/, "Only letters are accepted."]
    },
    age: {
        type: Number, 
        min: 0, 
        max: 120
    }, 
    born: {
        type: String, 
        required: [true, "Required."]
    },
    // nameInMovie: {
    //     type: String,
    //     required: [true, "Totally required..."]
    //     },
    imageUrl: {
        String, 
        required: [true, "Yep. Required"],
        validate: {
            validator: 
            // function(value) {
            // return value.startsWith("http://") || value.startsWith("https://");
            // },
            // message: (props) => `${props.value} is invalid image url!`
            val => /^https?:\/\//.test(val),
            message: (props) => `${props.value} is invalid image url!`

        }
    }, 
    // movie:ObjectId, ref Movie Model,

});

