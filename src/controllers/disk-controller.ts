import { Request, Response } from "express";
import { formatBytes } from "../utils/formatters";
import { getDiskInfo } from "../services/disk-services";

/**
 * @description Retrieves disk partition status and formats byte values to readable sizes (MB/GB).
 * @param req - Express request object
 * @param res - Express response object
 */
export const getDiskController = async (req: Request, res: Response) => {
  const diskData = await getDiskInfo();

  const formattedData = diskData.map((partition) => ({
    fs: partition.fs,
    size: {
      raw: partition.size,
      formatted: formatBytes(partition.size),
    },
    used: {
      raw: partition.used,
      formatted: formatBytes(partition.used),
    },
  }));

  res.status(200).json({
    status: "success",
    message: "System Disk information received.",
    data: formattedData,
  });
};
