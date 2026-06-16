/**
 * @description Express router for RAM and memory endpoints.
 * Handles requests for total, used, and available system memory.
 */
import { Router } from "express";
import { getMemoryController } from "../controllers/memory-controller";

const router = Router();
router.get("/", getMemoryController);

export default router;
