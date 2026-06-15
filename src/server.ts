import express, { Application, Request, Response } from "express";

const app: Application = express();
const PORT = 3000;

app.use(express.json());

app.get("/api/v1/health", (req: Request, res: Response) => {
  res.status(200).json({
    status: "success",
    message: "Linux Monitor API is running!",
  });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}...`);
});
