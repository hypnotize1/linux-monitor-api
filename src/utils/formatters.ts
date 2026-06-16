/**
 * @description Converts raw byte values into human-readable storage sizes (e.g., KB, MB, GB).
 * @param bytes - The raw size in bytes
 * @param decimals - The number of decimal places to include (defaults to 2)
 * @returns A formatted string representing the size with its corresponding unit.
 */
export const formatBytes = (bytes: number, decimals: number = 2): string => {
  if (bytes === 0) return "0.00 GB";
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["B", "KB", "MB", "GB", "TB", "PB"];

  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
};

/**
 * @description Formats a numerical value as a percentage string with a single decimal place.
 * @param val - The raw numerical value to be formatted
 * @returns The formatted percentage string (e.g., "45.2%").
 */
export const formatPercent = (val: number): string => `${val.toFixed(1)}%`;
