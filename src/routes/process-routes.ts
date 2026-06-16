/**
 * @description Express router for system process endpoints.
 * Routes requests to analyze and return the top CPU-consuming processes.
 */
import { Router } from "express";
import { getTopProcesses } from "../controllers/process-controller";

const router = Router();
router.get("/", getTopProcesses);

export default router;
