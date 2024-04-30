import { Request, Response, NextFunction } from "express";

const createBook = async (req: Request, res: Response, next: NextFunction) => {
  return res.status(200).json({
    Message: "All Ok",
  });
};

export { createBook };
