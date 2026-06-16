import si from "systeminformation";
import { AppError } from "../utils/appError";

/**
 * @description Retrieves filesystem and storage partition details (size, used, mount points).
 * @returns Array of disk partition data.
 * @throws AppError If the underlying system call fails to read disk stats.
 */
export const getDiskInfo = async () => {
  try {
    return await si.fsSize();
  } catch (error) {
    throw new AppError("Failed to fetch disk information", 500);
  }
};
