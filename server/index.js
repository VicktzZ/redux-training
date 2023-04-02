import bodyParser from "body-parser";
import express from 'express';
import mongoose from "mongoose";
import dotenv from 'dotenv';
import cors from 'cors';
import userRouter from "./routes/user.js";

const app = express()

// Settings
dotenv.config()
const PORT = process.env.PORT
const CONNECTION_URL = process.env.MONGO_URL

app.use(cors())
app.use(bodyParser.json({ limit: '30mb' }))
app.use('/', userRouter)

// Server Start

mongoose.connect(CONNECTION_URL)
    .then(() => app.listen(PORT, () => console.log(`SERVER RUNNING ON PORT: ${PORT}`)))
    .catch(error => console.log(console.error(error.message)))