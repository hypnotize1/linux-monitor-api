import { Router } from "express";
import { getOsController } from "../controllers/OS-controller";

const router = Router();
router.get("/", getOsController);

export default router;
