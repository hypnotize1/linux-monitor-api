import { Request, Response } from "express";
import { getProcessesInfo } from "../services/process-service";

/**
 * @description Retrieves the top 10 most CPU-intensive processes currently running.
 * @param req - Express request object
 * @param res - Express response object
 */
export const getTopProcesses = async (req: Request, res: Response) => {
  const data = await getProcessesInfo();

  const topCpu = data.list.sort((a, b) => b.cpu - a.cpu).slice(0, 10);

  res.json({ status: "success", data: topCpu });
};
