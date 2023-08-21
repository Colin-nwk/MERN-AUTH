// const mongoose = require("mongoose");
import mongoose from "mongoose";
// import dotenv from "dotenv";

// dotenv.config();

const connectWithRetry = () => {
  const connectOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //     useCreateIndex: true,
  };

  const connectToDatabase = () => {
    mongoose
      .connect(process.env.MONGO_URI, connectOptions)
      .then(() => {
        console.warn("Our db is connected");
      })
      .catch((err) => {
        console.error(err);
        setTimeout(connectToDatabase, 5000);
        process.exit(1);
      });
  };

  connectToDatabase();
};

// connectWithRetry();

export default connectWithRetry;
