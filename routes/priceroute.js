const express = require("express");
const router = express.Router();
const priceController = require("../controller/pricecontroller");

// Add price
router.post("/add", priceController.addPrice);

// Get all prices
router.get("/all", priceController.getAllPrices);

module.exports = router;