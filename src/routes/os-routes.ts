/**
 * @description Express router for operating system endpoints.
 * Handles requests related to basic OS identity and kernel information.
 */
import { Router } from "express";
import { getOsController } from "../controllers/os-controller";

const router = Router();
router.get("/", getOsController);

export default router;
