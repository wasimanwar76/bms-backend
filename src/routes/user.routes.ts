import express from "express";
import {
  createUser,
  loginController,
} from "../controllers/userRegister.controller";

const userRoute = express.Router();

userRoute.post("/register", createUser);
userRoute.post("/login", loginController);

export default userRoute;
