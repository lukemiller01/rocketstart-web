import mongoose from "mongoose";
import User from "../models/user.js";
import firebaseAdmin from "../firebase.js";
import dotenv from 'dotenv';
import postmark from 'postmark';
import Handlebars from "handlebars";
import fs from 'fs';
import path from "path";

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
        // Include Firebase ID in MongoDB so the user can be updated later
        var newAccount = await firebaseAdmin.firebase.getUserByEmail(email);
        var uid = newAccount.uid;

        // Generate verification link
        var link = await firebaseAdmin.firebase.generateEmailVerificationLink(email);

        // Set up postmark client
        var client = new postmark.ServerClient(process.env.POSTMARK_KEY);

        // Get the correct HTML file & replace content.
        const html = fs.readFileSync(path.resolve("../server/public/html/verification.html"),"utf-8");
        var template = Handlebars.compile(html);
        var replacements = {
            link: link
       };
       var finalHTML = template(replacements);

       // TODO: fix "Hello from Postmark!"
        // Send user the verification email
        client.sendEmail({
            "From": '"Luke at Rocketstart" <luke@rocketstart.careers>',
            "To": `${email}`,
            "Subject": "[Rocketstart] Please Verify Your Email",
            "HtmlBody": finalHTML,
            "TextBody": "Hello from Postmark!",
            "MessageStream": "outbound",
            "Attachments": [
                {
                    "Name": "rocketstart.jpep",
                    "Content": fs.readFileSync("../server/public/images/rocketstart.jpeg").toString('base64'),
                    "ContentType": "image/jpeg",
                    "ContentID": "cid:logo"
                }
            ]
          });

        // Create user in MongoDB
        const user = await User.create({
            email,
            password,
            uid,
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

export const resendVerification = async (req, res) => {
    const { id: uid } = req.params;
    const {email: user} = req.body;

    try {
        // Get new email:
        var updatedEmail = user;

        // Generate verification link
        var link = await firebaseAdmin.firebase.generateEmailVerificationLink(updatedEmail);

        // Set up postmark client
        var client = new postmark.ServerClient(process.env.POSTMARK_KEY);

        // Get the correct HTML file & replace content.
        const html = fs.readFileSync(path.resolve("../server/public/html/verification.html"),"utf-8");
        var template = Handlebars.compile(html);
        var replacements = {
            link: link
       };
       var finalHTML = template(replacements);

       // TODO: fix "Hello from Postmark!"
        // Send user the verification email
        client.sendEmail({
            "From": '"Luke at Rocketstart" <luke@rocketstart.careers>',
            "To": `${updatedEmail}`,
            "Subject": "[Rocketstart] Please Verify Your Email",
            "HtmlBody": finalHTML,
            "TextBody": "Hello from Postmark!",
            "MessageStream": "outbound",
            "Attachments": [
                {
                    "Name": "rocketstart.jpep",
                    "Content": fs.readFileSync("../server/public/images/rocketstart.jpeg").toString('base64'),
                    "ContentType": "image/jpeg",
                    "ContentID": "cid:logo"
                }
            ]
          });

        // Update the user in MongoDB
        User.findOne({id: uid}, function (err, user) {
            user.email = updatedEmail;

            user.save(function (err) {
                if(err) {
                    console.error('ERROR!');
                }
            });
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