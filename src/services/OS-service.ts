import si from "systeminformation";

export const getOsInfo = async () => {
  try {
    const osData = await si.osInfo();
    return osData;
  } catch (err) {
    throw new Error("Failed to fetch OS information from the system!");
  }
};
