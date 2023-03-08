// import mongoose from "mongoose";
// import User from "../models/user.js";
import dotenv from "dotenv";
// import postmark from 'postmark';
// import Handlebars from "handlebars";
// import fs from 'fs';
// import path from "path";

dotenv.config();
import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_TEST_KEY);

export const createCheckout = async (req, res) => {
  const { priceID: priceID } = req.body;

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      line_items: [
        {
          price: priceID,
          quantity: 1,
        },
      ],
      // ?session_id={CHECKOUT_SESSION_ID} means the redirect will have the session ID set as a query param
      success_url: `http://localhost:3000/thank-you?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `http://localhost:3000/error?session_id={CHECKOUT_SESSION_ID}`,
      automatic_tax: { enabled: true },
    }); // TODO: change back to RS after code has been pushed!

    // return res.redirect(303, session.url);
    return res.json({ url: session.url });
  } catch (e) {
    res.status(400);
    console.log(e.message);
    return res.send({
      error: {
        message: e.message,
      },
    });
  }
};
