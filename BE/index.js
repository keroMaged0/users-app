import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import { globalErrorHandler } from "./src/middleware/error-handling.middleware.js";
import { dbConnection } from "./src/config/db-connection.js";
import { userRouter } from "./src/routes/user.routes.js";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

app.use("/users", userRouter);

dbConnection();

app.use(globalErrorHandler);

const port = process.env.PORT || 3100;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
