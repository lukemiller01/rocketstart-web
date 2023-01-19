import express from "express";
import mongoose from "mongoose";

const router = express.Router();

const userSchema = mongoose.Schema({
    name: {
        type: String,
        default: '',
        required: true,
    },
    email: {
        type: String,
        default: '',
        required: true,
    },
    uid: {
        type: String,
        default: '',
        required: true,
    },
    broadcast: {
        type: Boolean,
        default: false,
        required: true,
    }
})

// Turn schema into a model using Mongoose
const User = mongoose.model('User', userSchema); // Name of model and schema

export default User;