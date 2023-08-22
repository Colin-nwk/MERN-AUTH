// import express from "express";
// import dotenv from "dotenv";
// import cookieParser from "cookie-parser";
// import morgan from "morgan";

// import connectWithRetry from "./db/index.js";
// import userRoutes from "./routes/userRoutes.js";
// import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

// dotenv.config();
// connectWithRetry();

// const app = express();

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());
// app.use(morgan("dev"));
// const port = process.env.PORT || 6000;

// app.use("/api/users", userRoutes);

// app.use(notFound);
// app.use(errorHandler);

// app.listen(port, () => console.log(`Server started on port ${port}`));

// import express from "express";
// import dotenv from "dotenv";
// import cookieParser from "cookie-parser";
// import helmet from "helmet";

// import connectWithRetry from "./db/index.js";
// import userRoutes from "./routes/userRoutes.js";
// import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

// dotenv.config();
// connectWithRetry();

// const app = express();

// app.use(helmet());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());
// const port = process.env.PORT || 6000;

// app.use("/api/users", userRoutes);

// app.use(notFound);
// app.use(errorHandler);

// app.listen(port, () => console.log(`Server started on port ${port}`));

// import express from "express";
// import dotenv from "dotenv";
// import cookieParser from "cookie-parser";
// import morgan from "morgan";

// import connectWithRetry from "./db/index.js";
// import userRoutes from "./routes/userRoutes.js";
// import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

// dotenv.config();
// connectWithRetry();

// const app = express();

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());
// app.use(morgan("dev"));
// const port = process.env.PORT || 6000;

// app.use("/api/users", userRoutes);

// app.use(notFound);
// app.use(errorHandler);

// app.listen(port, () => console.log(`Server started on port ${port}`));

// import express from "express";
// import dotenv from "dotenv";
// import cookieParser from "cookie-parser";
// import compression from "compression";

// import connectWithRetry from "./db/index.js";
// import userRoutes from "./routes/userRoutes.js";
// import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

// dotenv.config();
// connectWithRetry();

// const app = express();

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());
// app.use(compression()); // Add compression middleware
// const port = process.env.PORT || 6000;

// app.use("/api/users", userRoutes);

// app.use(notFound);
// app.use(errorHandler);

// app.listen(port, () => console.log(`Server started on port ${port}`));

// import express from "express";
// import dotenv from "dotenv";
// import cookieParser from "cookie-parser";
// import rateLimit from "express-rate-limit";

// import connectWithRetry from "./db/index.js";
// import userRoutes from "./routes/userRoutes.js";
// import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

// dotenv.config();
// connectWithRetry();

// const app = express();

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());
// const port = process.env.PORT || 6000;

// // Apply rate limiting middleware to prevent abuse of public APIs and endpoints
// const limiter = rateLimit({
//   windowMs: 15 * 60 * 1000, // 15 minutes
//   max: 100, // limit each IP to 100 requests per windowMs
// });
// app.use("/api/users", limiter, userRoutes);

// app.use(notFound);
// app.use(errorHandler);

// app.listen(port, () => console.log(`Server started on port ${port}`));

// import express from "express";
// import dotenv from "dotenv";
// import cookieParser from "cookie-parser";
// import cors from "cors";

// import connectWithRetry from "./db/index.js";
// import userRoutes from "./routes/userRoutes.js";
// import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

// dotenv.config();
// connectWithRetry();

// const app = express();

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());
// const port = process.env.PORT || 6000;

// app.use(cors({ origin: true, credentials: true }));
// app.use("/api/users", userRoutes);
// // app.get("/", (request, response) => response.send("server is ready"));

// app.use(notFound);
// app.use(errorHandler);

// app.listen(port, () => console.log(`Server started on port ${port}`));
