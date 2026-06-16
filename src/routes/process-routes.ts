import { Router } from "express";
import { getTopProcesses } from "../controllers/process-controller";

const router = Router();
router.get("/", getTopProcesses);

export default router;
