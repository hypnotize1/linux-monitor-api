import { Request, Response } from "express";
import { getOsInfo } from "../services/os-service";

/**
 * @description Retrieves basic operating system identity and hardware information.
 * @param req - Express request object
 * @param res - Express response object
 * @returns Sends a JSON response containing OS data.
 */
export const getOsController = async (req: Request, res: Response) => {
  const osData = await getOsInfo();

  res.status(200).json({
    status: "success",
    message: "OS informations received successfully",
    data: osData,
  });
};
