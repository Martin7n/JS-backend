import { Schema, model, Types } from "mongoose";

const User = new Schema({
    email: String,
    password: String
})