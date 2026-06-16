import si from "systeminformation";

/**
 * @description Retrieves a list of currently running system processes and their resource consumption.
 * @returns Object containing the process list and counts.
 */
export const getProcessesInfo = async () => {
  return await si.processes();
};
