import { Router } from "express";
import authRoute from "./Auth.js";
const router = Router();

router.use("/auth",authRoute)

export default router