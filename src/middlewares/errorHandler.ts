import { Request, Response, NextFunction } from "express";

/**
 * @description Global error handling middleware.
 * Intercepts unhandled errors across the application and formats them into a consistent JSON response.
 * @param err - The application error object
 * @param req - Express request object
 * @param res - Express response object
 * @param next - Express next middleware function
 */
export const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  res.status(err.statusCode).json({
    status: err.status,
    message: err.message || "Internal Server Error!",
  });
};
