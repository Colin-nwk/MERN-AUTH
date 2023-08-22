import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import connectWithRetry from "./db/index.js";
import userRoutes from "./routes/userRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

dotenv.config();
connectWithRetry();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
const port = process.env.PORT || 6000;

app.use("/api/users", userRoutes);
// app.get("/", (request, response) => response.send("server is ready"));

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
