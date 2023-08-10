import { Router } from "express";
// import { verifyAdminToken } from "../../middleware/auth";
import {
  OnemailStatus,
  GetOMStatus
} from "./statusOM.controller";

const router = Router();

// Release Notes
router.get("/OnemailStatus", GetOMStatus);
router.post("/UpdateStatus", OnemailStatus);

export default router;

/**
 * genroom
 * editUser!
 * editRoom
 * dataActive_code
 * editActive_code
 *
 */
