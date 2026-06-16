import si from "systeminformation";
import { AppError } from "../utils/appError";

/**
 * @description Retrieves system memory (RAM and Swap) statistics.
 * @returns Object containing memory utilization data.
 * @throws AppError If the memory allocation data cannot be accessed.
 */
export const getMemoryInfo = async () => {
  try {
    return await si.mem();
  } catch (error) {
    throw new AppError(
      "Failed to fetch memory information from the system",
      500,
    );
  }
};
