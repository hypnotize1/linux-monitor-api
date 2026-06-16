import { Request, Response } from "express";
import { formatBytes } from "../utils/formatters";
import { getDiskInfo } from "../services/disk-services";

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
