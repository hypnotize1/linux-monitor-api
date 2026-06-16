import { Router } from "express";
import { getMemoryController } from "../controllers/memory-controller";

const router = Router();

router.get("/", getMemoryController);

export default router;
