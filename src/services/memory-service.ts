import si from "systeminformation";

export const getMemoryInfo = async () => {
  const memData = await si.mem();
  return memData;
};
