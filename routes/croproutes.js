const express = require("express");
const router = express.Router();
const cropController = require("../controller/cropcontroller");

// Add crop
router.post("/add", cropController.addCrop);

// Get all crops (with uses & prices)
router.get("/all", cropController.getAllCrops);

module.exports = router;