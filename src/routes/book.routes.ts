import express from "express";
import { createBook } from "../controllers/bookController";

import multer from "multer";

const bookRoute = express.Router();

const upload = multer({
  dest: "D:/MERN/bms/public/data/upload",
  limits: { fileSize: 3e7 },
});

bookRoute.post(
  "/create",
  upload.fields([
    { name: "coverImage", maxCount: 1 },
    { name: "file", maxCount: 1 },
  ]),
  createBook
);
export default bookRoute;
