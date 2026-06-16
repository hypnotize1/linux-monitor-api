import { Request, Response } from "express";
import { getProcessesInfo } from "../services/process-service";

export const getTopProcesses = async (req: Request, res: Response) => {
  const data = await getProcessesInfo();
  const topCpu = data.list.sort((a, b) => b.cpu - a.cpu).slice(0, 10);
  res.json({ status: "success", data: topCpu });
};
