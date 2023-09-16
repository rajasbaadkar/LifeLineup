import express from "express";
import {getUser, updateProfile, deleteUser, deleteUserNotification, addPotentialDonor} from "../controllers/user.js"
import { verifytoken } from "../middleware/verifyToken.js";

const router = express.Router();

router.get("/:id",verifytoken,getUser);

router.patch("/:id",verifytoken,updateProfile);
router.patch("/addDonar/:id",verifytoken,addPotentialDonor);

router.delete("/:id",verifytoken,deleteUser);
router.delete("/:id/:notificationid",verifytoken, deleteUserNotification);
export default  router;