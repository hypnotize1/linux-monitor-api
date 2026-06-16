import si from "systeminformation";
import { AppError } from "../utils/appError";

/**
 * @description Retrieves static hardware information of the CPU (manufacturer, brand, speed, cores).
 * @returns Object containing static CPU details.
 * @throws AppError If the system fails to read CPU hardware data.
 */
export const getCpuStaticInfo = async () => {
  try {
    return await si.cpu();
  } catch (error) {
    throw new AppError("Failed to fetch CPU static information", 500);
  }
};

/**
 * @description Fetches real-time CPU load metrics, including overall and per-core usage.
 * @returns Object containing live load statistics.
 * @throws AppError If the system fails to measure current CPU load.
 */
export const getCpuLoadInfo = async () => {
  try {
    return await si.currentLoad();
  } catch (error) {
    throw new AppError("Failed to fetch CPU load information", 500);
  }
};
