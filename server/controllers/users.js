import mongoose from "mongoose";
import User from "../models/user.js";
import firebaseAdmin from "../firebase.js";
import dotenv from 'dotenv';
import postmark from 'postmark';


dotenv.config();

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
        // Generate verification link
        var link = await firebaseAdmin.firebase.generateEmailVerificationLink(email);
        console.log(link);

        // Set up postmark client
        var client = new postmark.ServerClient(process.env.POSTMARK_KEY);

        // Send user the verification email
        client.sendEmail({
            "From": '"Luke" <luke@rocketstart.careers>',
            "To": `${email}`,
            "Subject": "[Rocketstart] Please Verify Your Email",
            "HtmlBody": `<strong>Hello!</strong> Please verify your email using this link: ${link}`,
            "TextBody": "Hello from Postmark!",
            "MessageStream": "outbound"
          });

        // Create user in MongoDB
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