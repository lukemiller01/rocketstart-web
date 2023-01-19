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
        return res.status(500).json(error);
    }
};

export const createUser = async (req, res) => {
    const {email: email, name: name, broadcast: broadcast} = req.body;

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
            link: link,
            name: name
       };
       var finalHTML = template(replacements);

        // Send user the verification email
        client.sendEmail({
            "From": '"Luke at Rocketstart" <luke@rocketstart.careers>',
            "To": `${email}`,
            "Subject": "[Rocketstart] Please Verify Your Email",
            "HtmlBody": finalHTML,
            "MessageStream": "outbound",
            "Attachments": [
                {
                    "Name": "rocketstart.png",
                    "Content": fs.readFileSync("../server/public/images/rocketstartLogo256.png").toString('base64'),
                    "ContentType": "image/png",
                    "ContentID": "cid:logo"
                }
            ]
        });

        // Create user in MongoDB
        const user = await User.create({
            name,
            email,
            uid,
            broadcast,
        });
        return res.status(200).json({message: "Success!"});
    }
    catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
};

export const resendVerification = async (req, res) => {
    const { id: uid } = req.params;
    const {email: email} = req.body;

    try {
        // Get new email:
        var updatedEmail = email;
        var name = '';

        // Generate verification link
        var link = await firebaseAdmin.firebase.generateEmailVerificationLink(updatedEmail);

        // Update the user in MongoDB
        const user = await User.findOneAndUpdate({uid: uid}, function (err, user) {
            if(user) {
                user.email = updatedEmail;

                user.save(function (err) {
                    if(err) {
                        console.error('DB error');
                    }
                });
            }
            else { // If the user isn't in DB, add
                const newUser = User.create({
                    name: '',
                    email: updatedEmail,
                    uid: uid,
                });
            }
        });
        name = user.name;

        // Set up postmark client
        var client = new postmark.ServerClient(process.env.POSTMARK_KEY);

        // Get the correct HTML file & replace content.
        const html = fs.readFileSync(path.resolve("../server/public/html/new-verification.html"),"utf-8");
        var template = Handlebars.compile(html);
        var replacements = {
            link: link,
            name: name,
       };
       var finalHTML = template(replacements);

        // Send user the verification email
        client.sendEmail({
            "From": '"Luke at Rocketstart" <luke@rocketstart.careers>',
            "To": `${updatedEmail}`,
            "Subject": "[Rocketstart] Please Verify Your Email",
            "HtmlBody": finalHTML,
            "MessageStream": "outbound",
            "Attachments": [
                {
                    "Name": "rocketstart.png",
                    "Content": fs.readFileSync("../server/public/images/rocketstartLogo256.png").toString('base64'),
                    "ContentType": "image/png",
                    "ContentID": "cid:logo"
                }
            ]
          });

        return res.status(200).json({message: "Success!"});
    }
    catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
};

export const resetPassword = async (req, res) => {
    const {email: email} = req.body;

    try {
        var name = '';

        // Generate verification link
        var link = await firebaseAdmin.firebase.generatePasswordResetLink(email);

        // Find the user in MongoDB by email
        const user = await User.findOne({email: email}).clone();
        name = user.name;

        // Set up postmark client
        var client = new postmark.ServerClient(process.env.POSTMARK_KEY);

        // Get the correct HTML file & replace content.
        const html = fs.readFileSync(path.resolve("../server/public/html/reset-password.html"),"utf-8");
        var template = Handlebars.compile(html);
        var replacements = {
            link: link,
            name: name
       };
       var finalHTML = template(replacements);

        // Send user the password reset email
        client.sendEmail({
            "From": '"Luke at Rocketstart" <luke@rocketstart.careers>',
            "To": `${email}`,
            "Subject": "[Rocketstart] Please Reset Your Password",
            "HtmlBody": finalHTML,
            "MessageStream": "outbound",
            "Attachments": [
                {
                    "Name": "rocketstart.png",
                    "Content": fs.readFileSync("../server/public/images/rocketstartLogo256.png").toString('base64'),
                    "ContentType": "image/png",
                    "ContentID": "cid:logo"
                }
            ]
        });

        return res.status(200).json({message: "Success!"});
    }
    catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
}