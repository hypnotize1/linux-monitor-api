/**
 * @description Express router for CPU monitoring endpoints.
 * Routes requests for both static hardware specs and real-time load metrics.
 */
import { Router } from "express";
import {
  getCpuStaticController,
  getCpuLoadController,
} from "../controllers/cpu-controller";

const router = Router();

router.get("/static", getCpuStaticController);
router.get("/load", getCpuLoadController);

export default router;
