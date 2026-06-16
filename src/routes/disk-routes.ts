/**
 * @description Express router for disk and storage endpoints.
 * Directs requests to fetch filesystem partitions and capacity data.
 */
import { Router } from "express";
import { getDiskController } from "../controllers/disk-controller";

const router = Router();
router.get("/", getDiskController);

export default router;
