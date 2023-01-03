import firebase from "../firebase.js";
import User from "../models/user.js";

export default async function (req, res, next) {
    try {
        const token = req.headers.authorization?.split(" ")[1];

        let firebaseUser;
        if(token) {
            const decodeValue = await firebase.auth.verifyIdToken(token);
        }

        if(!firebaseUser) {
            // Unauthorized
            return res.sendStatus(401);
        }

        const user = await User.findOne({
            firebaseId: firebaseUser.user_id
        });

        if(!user) {
            // Unauthorized
            return res.sendStatus(401);
        }

        req.user = user;

        next();
    }
    catch (e) {
        //Unauthorized
        console.log(e)
        res.sendStatus(401);
    }
};

