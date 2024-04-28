import { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";
import { User } from "../models/user.model";
import brcypt from "bcrypt";
import { sign } from "jsonwebtoken";
import { Config } from "../config/config";

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  const { name, email, password } = req.body;
  //Validation
  if (!name || !email || !password) {
    const error = createHttpError(400, "All Fields are required");
    return next(error);
  }

  //Database Call
  try {
    const user = await User.findOne({ email: email });
    if (user) {
      const error = createHttpError(400, "User already exits!");
      return next(error);
    }
  } catch (error) {
    return next(createHttpError(500, "Internal Server Error"));
  }

  //Password Hashed
  const hashedPassword = await brcypt.hash(password, 10);

  //Process
  try {
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });
    //Token Generation JWT
    const token = sign({ sub: newUser._id }, Config.jwtSecret as string, {
      expiresIn: "7d",
    });
    //Response
    return res.json({
      id: newUser._id,
      token: token,
    });
  } catch (error) {
    return next(createHttpError(500, "Error While Creating A User"));
  }
};

export { createUser };
