import { Router } from "express";
import { registerUser } from "../controllers/user.controllers.js";
import { upload } from "../middlewares/multer.js";
import { loginuser, logout, refreshAccessToken } from "../controllers/user.controllers.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
const router = Router();

router.route("/register").post(
  upload.fields([
    {
      name: "avatar",
      maxCount: 1,
    },
    {
      name: "coverImage",
      maxCount: 1,
    },
  ]),
  registerUser
);
router.route("/login").post(loginuser)
router.route("/logout").post(verifyJWT, logout)
router.route("/refresh-token").post(refreshAccessToken)

export default router;