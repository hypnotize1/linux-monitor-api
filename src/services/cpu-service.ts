import si from "systeminformation";
import { AppError } from "../utils/appError";

export const getCpuStaticInfo = async () => {
  try {
    return await si.cpu();
  } catch (error) {
    throw new AppError("Failed to fetch CPU static information", 500);
  }
};

export const getCpuLoadInfo = async () => {
  try {
    return await si.currentLoad();
  } catch (error) {
    throw new AppError("Failed to fetch CPU load information", 500);
  }
};
