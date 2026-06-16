import { Request, Response } from "express";
import { getOsInfo } from "../services/os-service";

export const getOsController = async (req: Request, res: Response) => {
  const osData = await getOsInfo();

  res.status(200).json({
    status: "success",
    message: "OS informations received successfully",
    data: osData,
  });
};
