import { Router } from "express";
import { getOsController } from "../controllers/os-controller";

const router = Router();
router.get("/", getOsController);

export default router;
