import mongoose from "mongoose";
import User from "../models/user.js";
import firebaseAdmin from "../firebase.js";

export const getUser = async (req, res) => {
    try {
        res.status(200).json(req.user);
    }
    catch (error) {
        console.log(error)
    }
};

export const createUser = async (req, res) => {
    const {email, password} = req.body;

    try {

        const user = await User.create({
            email,
            password,
        });
        return res.status(200).json({message: "Success!"});
    }
    catch (error) {
        if(error.code === 'auth/email-already-exists') {
            return res.status(400).json({error: "An account with that email already exists."})
        }
        console.log(error);
        return res.status(500).json(error);
    }
};