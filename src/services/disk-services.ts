import si from "systeminformation";
import { AppError } from "../utils/appError";

export const getDiskInfo = async () => {
  try {
    return await si.fsSize();
  } catch (error) {
    throw new AppError("Failed to fetch disk information", 500);
  }
};
