import express from "express";
import {
  loginController,
  registerController,
} from "../controllers/auth/authControllers.js";
import Joi from "joi";
import { createValidator } from "express-joi-validation";
import { verifyToken } from "../middlewares/authMiddleware.js";

const validator = createValidator();
const router = express.Router();

const registerSchema = Joi.object({
  username: Joi.string().min(3).max(12).required(),
  password: Joi.string().min(6).max(12).required(),
  mail: Joi.string().email().required(),
});

const loginSchema = Joi.object({
  password: Joi.string().min(6).max(12).required(),
  mail: Joi.string().email().required(),
});

router.post("/register", validator.body(registerSchema), registerController);
router.post("/login", validator.body(loginSchema), loginController);
router.get("/test", verifyToken, (req, res) => {
  res.send("request Passed");
});

export default router;
