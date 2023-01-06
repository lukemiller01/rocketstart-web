import express from "express";
import mongoose from "mongoose";

const router = express.Router();

const userSchema = mongoose.Schema({
    email: String,
    password: String,
})

// Turn schema into a model using Mongoose
const User = mongoose.model('User', userSchema); // Name of model and schema

export default User;