import express from "express";
import { createUser } from "../controllers/userRegister.controller";

const userRoute = express.Router();

userRoute.post("/register", createUser);

export default userRoute;
