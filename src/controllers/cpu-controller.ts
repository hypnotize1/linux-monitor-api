import { Request, Response } from "express";
import { getCpuStaticInfo, getCpuLoadInfo } from "../services/cpu-service";
import { formatPercent } from "../utils/formatters";

export const getCpuStaticController = async (req: Request, res: Response) => {
  const cpuData = await getCpuStaticInfo();
  res.status(200).json({ status: "success", data: cpuData });
};

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
