import express from "express";
import { login, seedAdmin } from "../controllers/authController.js";

const router = express.Router();

router.post("/login", login);

// TEMPORARY ROUTE (remove after seeding)
router.get("/seed", seedAdmin);

export default router;