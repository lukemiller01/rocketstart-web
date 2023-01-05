import express from "express";
import cors from 'cors';
import mongoose from "mongoose";
import dotenv from 'dotenv';
import bodyParser from "body-parser";
import VerifyToken from "./middleware/VerifyToken.js";

import userRoutes from './routes/user.js'

dotenv.config();
const app = express();

app.use(express.json());
app.use(bodyParser.json({limit: "30mb", extended: true})); // Sending images, which can be large in size
app.use(bodyParser.urlencoded({limit: "30mb", extended: true})); // Setting up body parser to send requests
app.use(express.urlencoded({ extended: false }));
app.use(cors());
// app.use(VerifyToken);
app.use('/users', userRoutes); // Every route is going to start with users, using the imported posts.js router

app.get('/', (req, res) => {
    res.send('Hello New...');
})

// const PORT = process.env.PORT || 5001;
const PORT = 5001;

mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT} `)))
    .catch((error) => console.log(error.message));