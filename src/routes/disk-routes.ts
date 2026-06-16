import { Router } from "express";
import { getDiskController } from "../controllers/disk-controller";

const router = Router();
router.get("/", getDiskController);

export default router;
