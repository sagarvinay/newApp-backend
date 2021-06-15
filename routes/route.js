import express from 'express';
import { getPhones } from "../controllers/controller.js";

const router = express.Router();

router.get("/", getPhones);

export default router;