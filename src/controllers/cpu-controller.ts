import { Request, Response } from "express";
import { getCpuStaticInfo, getCpuLoadInfo } from "../services/cpu-service";
import { formatPercent } from "../utils/formatters";

/**
 * @description Retrieves static hardware information of the CPU (e.g., model, speed, cores).
 * @param req - Express request object
 * @param res - Express response object
 */
export const getCpuStaticController = async (req: Request, res: Response) => {
  const cpuData = await getCpuStaticInfo();
  res.status(200).json({ status: "success", data: cpuData });
};

/**
 * @description Monitors real-time CPU load, including overall usage and per-core breakdown.
 * @param req - Express request object
 * @param res - Express response object
 */
export const getCpuLoadController = async (req: Request, res: Response) => {
  const loadData = await getCpuLoadInfo();

  res.status(200).json({
    status: "success",
    data: {
      load: {
        raw: loadData.currentLoad,
        formatted: formatPercent(loadData.currentLoad),
      },
      cores: loadData.cpus.map((c) => ({
        raw: c.load,
        formatted: formatPercent(c.load),
      })),
    },
  });
};
