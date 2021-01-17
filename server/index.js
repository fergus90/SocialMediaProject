import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const ConnectionUrl =
  "mongodb+srv://fergus1990:21428220@cluster0.fcim7.mongodb.net/<dbname>?retryWrites=true&w=majority";
