import express from "express";
import { verifytoken } from "../middleware/verifyToken.js";
import { getNeed, deleteNeed, addNeed } from "../controllers/need.js";

const router = express.Router();

router.get("/:needId", verifytoken, getNeed);
router.delete("/:needId", verifytoken, deleteNeed);
router.post("/", verifytoken, addNeed);

export default router;
