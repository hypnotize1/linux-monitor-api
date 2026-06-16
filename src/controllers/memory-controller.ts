import { Request, Response } from "express";
import { getMemoryInfo } from "../services/memory-service";
import { formatBytes } from "../utils/formatters";

/**
 * @description Checks the RAM status, including total, free, used, and available memory.
 * @param req - Express request object
 * @param res - Express response object
 */
export const getMemoryController = async (req: Request, res: Response) => {
  const memData = await getMemoryInfo();

  res.status(200).json({
    status: "success",
    message: "Memory status received successfully",
    data: {
      total: { raw: memData.total, formatted: formatBytes(memData.total) },
      free: { raw: memData.free, formatted: formatBytes(memData.free) },
      used: { raw: memData.used, formatted: formatBytes(memData.used) },
      available: {
        raw: memData.available,
        formatted: formatBytes(memData.available),
      },
    },
  });
};
