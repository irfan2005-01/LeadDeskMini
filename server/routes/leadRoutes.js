import express from "express";
import auth from "../middleware/auth.js";

import {
  createLead,
  getLeads,
  updateLeadStatus,
} from "../controllers/leadController.js";

const router = express.Router();

// Public
router.post("/", createLead);

// Protected
router.get("/", auth, getLeads);
router.patch("/:id", auth, updateLeadStatus);

export default router;