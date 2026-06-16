import express, { Application, Request, Response } from "express";
import { globalErrorHandler } from "./middlewares/errorHandler";
import osRouter from "./routes/os-routes";
import memoryRouter from "./routes/memory-routes";
import cpuRouter from "./routes/cpu-routes";
import diskRouter from "./routes/disk-routes";
import processRouter from "./routes/process-routes";

const app: Application = express();
const PORT = 3000;

app.use(express.json());

app.use("/api/v1/sys/os", osRouter);
app.use("/api/v1/sys/memory", memoryRouter);
app.use("/api/v1/sys/cpu", cpuRouter);
app.use("/api/v1/sys/disk", diskRouter);
app.use("/api/v1/sys/processes", processRouter);

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
