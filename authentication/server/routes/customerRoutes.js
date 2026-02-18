import express from "express";
import { addCustomer, getCustomers } from "../controllers/customerController.js";

const router = express.Router();

router.post("/add", addCustomer);
router.get("/all", getCustomers);

export default router;
