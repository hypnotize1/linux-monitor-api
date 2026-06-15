import { Request, Response } from "express";
import { getOsInfo } from "../services/OS-service";

export const getOsController = async (req: Request, res: Response) => {
  try {
    const osData = await getOsInfo();
    res.status(200).json({
      status: "success",
      message: "OS informations received successfully",
      data: osData,
    });
  } catch (err) {
    throw new Error("Internal server error!");
  }
};
