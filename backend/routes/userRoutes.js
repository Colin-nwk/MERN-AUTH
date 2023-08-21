import express from "express";
import {
  authUser,
  registerUser,
  updateUserProfile,
  getUserProfile,
  logoutUser,
} from "../controllers/userController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/auth", registerUser);
router.post("/", authUser);
router.post("/logout", logoutUser);
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

export default router;
