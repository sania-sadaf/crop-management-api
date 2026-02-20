const express = require("express");
const router = express.Router();
const cropController = require("../controller/cropcontroller");

router.post("/add", cropController.addCrop);
router.get("/all", cropController.getAllCrops);

module.exports = router;