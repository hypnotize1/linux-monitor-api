import si from "systeminformation";
import { AppError } from "../utils/appError";

/**
 * @description Fetches underlying operating system identity and kernel version.
 * @returns Object containing OS specifics.
 * @throws AppError If the system kernel cannot be queried.
 */
export const getOsInfo = async () => {
  try {
    return await si.osInfo();
  } catch (error) {
    throw new AppError("Failed to fetch OS data from the system kernel", 500);
  }
};
