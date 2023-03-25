import express, { Router } from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import * as dotenv from 'dotenv';
dotenv.config();
import { employeeRoute, addNewEmployee } from "./routes/employee_route.js";

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const CONNECTION_URL = process.env.MONGODB_CONNECTION_URL;
    
app.get("/", (req, res) => {
  res.send("Hey there");
});

app.use("/employee", employeeRoute);


mongoose
  .connect(CONNECTION_URL)
  .then(() => console.log("Sucessfully connected to database"))
  .then(() => {
    app.listen(PORT, () => {
      console.log(`App is running on port ${PORT}`);
    });
  })
  .catch((err) => console.log(err));
