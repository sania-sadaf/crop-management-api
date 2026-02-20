const express = require("express");
const router = express.Router();
const usesController = require("../controller/usescontroller");

router.post("/add", usesController.addUse);
router.get("/all", usesController.getAllUses);

module.exports = router;