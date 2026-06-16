import express, { Application, Request, Response } from "express";
import osRouter from "./routes/OS-routes";
import { globalErrorHandler } from "./middlewares/errorHandler";

const app: Application = express();
const PORT = 3000;

app.use(express.json());

app.use("/api/v1/sys/os", osRouter);

app.use(globalErrorHandler);

app.get("/api/v1/health", (req: Request, res: Response) => {
  res.status(200).json({
    status: "success",
    message: "Linux Monitor API is running!",
  });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}...`);
});
