/**
 * @description Custom error class for handling operational application errors.
 * Extends the built-in Error class to include HTTP status codes and operational flags.
 */
export class AppError extends Error {
  statusCode: number = 500;
  status: string = "error";
  isOperational: boolean = false;

  /**
   * @param message - The error description to be returned to the client
   * @param statusCode - The HTTP status code (e.g., 400, 404, 500)
   */
  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}
