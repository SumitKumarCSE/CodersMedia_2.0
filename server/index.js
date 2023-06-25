import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";


// routes
import AuthRoute from './Routes/AuthRoute.js'
import UserRoute from './Routes/UserRoute.js'
import PostRoute from './Routes/PostRoute.js'
import UploadRoute from './Routes/UploadRoute.js'
import ChatRoute from './Routes/ChatRoute.js'
import MessageRoute from './Routes/MessageRoute.js'

const app = express();

// middleware
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// to serve images for public
app.use(express.static('public'));
app.use('/images', express.static("images"));

dotenv.config();
const PORT = process.env.PORT;

// Connects to mongodb database
const CONNECTION = process.env.MONGO_DB;
mongoose
  .connect(CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Listening at Port ${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));


app.use('/auth', AuthRoute);
app.use('/user', UserRoute);
app.use('/post', PostRoute);
app.use('/upload', UploadRoute);
app.use('/chat', ChatRoute);
app.use('/message', MessageRoute);