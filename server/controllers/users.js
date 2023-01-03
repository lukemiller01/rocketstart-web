import mongoose from "mongoose";
import User from "../models/user.js";

export const getUser = async (req, res) => {
    res.status(200).json(req.user);
};

export const createUser = async (req, res) => {
    const {email, password} = req.body;
    console.log(req.body);
    // const newPost = new PostMessage(post);

    if(!email || !password ) {
        return res.status(400).json({
            error: "Please enter an email & password"
        });
    }

    try {
        // await newPost.save()
        const newFirebaseUser = await firebase.auth.createUser({
            email,
            password
        });

        if(newFirebaseUser) {
            const user = await User.create({
                email,
                password,
                firebaseId: newFirebaseUser.uid
            });
        }
        return res.status(200).json({success: "Account created"})
    }
    catch (error) {
        if(error.code === 'auth/email-already-exists') {
            return res.status(400).json({error: "An account with that email already exists."})
        }
        return res.status(500).json({ error: "Please try again." });
    }
};