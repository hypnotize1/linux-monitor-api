import si from "systeminformation";

export const getProcessesInfo = async () => {
  return await si.processes();
};
