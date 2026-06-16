import si from "systeminformation";
import { AppError } from "../utils/appError";

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
