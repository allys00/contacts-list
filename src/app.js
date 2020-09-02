import express from "express";
import mongoose from "mongoose";
import config from "./utils/config"
import "express-async-errors";

import exceptions from "./middlewares/exceptions";
import Routes from "./routes/routes";

const app = express();

const url = `mongodb+srv://${config.APP_DB_USER}:${config.APP_DB_PASSWORD}@contacts.eear9.mongodb.net/${config.APP_DB_NAME}?retryWrites=true&w=majority`;

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true, 
    useCreateIndex: true,
  })
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB...", err));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/v1", Routes);
app.use(exceptions(config.debug));


export default app;
