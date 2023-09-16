import express from "express";
import { verifytoken } from "../middleware/verifyToken.js";
import { addOrgan, removeOrganFromInventory, searchInventoryByOrganName } from "../controllers/inventory.js";

const router = express.Router();

router.post("/", verifytoken, addOrgan);
router.delete("/:organId", verifytoken, removeOrganFromInventory);
router.get("/:organName", verifytoken, searchInventoryByOrganName);

export default router;