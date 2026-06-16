import si from "systeminformation";
import { AppError } from "../utils/appError";

export const getOsInfo = async () => {
  try {
    return await si.osInfo();
  } catch (error) {
    throw new AppError("Failed to fetch OS data from the system kernel", 500);
  }
};
