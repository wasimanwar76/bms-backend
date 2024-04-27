import express from "express";
import createHttpError from "http-errors";
import globalErrorHandler from "./middlewares/globalErrorhandler.middleware";
const app = express();

app.get("", (req, res) => {
  //   throw new Error("Something Went Wrong");
  const error = createHttpError(400, "Something Went Wrong");
  //   throw error;
  //   res.json({ messaage: "Hello, How are you" });
});

//Global Error Handler
app.use(globalErrorHandler);

export default app;
