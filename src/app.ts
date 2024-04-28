import express from "express";
import globalErrorHandler from "./middlewares/errorHandler.middleware.";
import userRoute from "./routes/user.routes";
const app = express();

//Json Parser
app.use(express.json());

//Global Error Handler
app.use(globalErrorHandler);

//User Routes
app.use("/v1/api/users", userRoute);

export default app;
