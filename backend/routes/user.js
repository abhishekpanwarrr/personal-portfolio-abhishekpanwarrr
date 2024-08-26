import express from "express";
import { storeUser } from "../controllers/user.js";

const router = express.Router();
// READ
router.post("/add", storeUser);

export default router;
