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
    const {first, last, email, password} = req.body;

    if(!email || !password || !first || !last) {
        return res.status(400).json({
            error: "Please enter all fields"
        });
    }

    try {
        const newFirebaseUser = await firebaseAdmin.firebase.createUser({
            email,
            password
        });

        if(newFirebaseUser) {
            const user = await User.create({
                first,
                last,
                email,
                password,
                firebaseId: newFirebaseUser.uid
            });
        }
        return res.status(200).json({success: "Account created"});
    }
    catch (error) {
        if(error.code === 'auth/email-already-exists') {
            return res.status(400).json({error: "An account with that email already exists."})
        }
        console.log(error);
        return res.status(500).json({ error: "Please try again." });
    }
};