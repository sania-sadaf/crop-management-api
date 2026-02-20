const Crop = require("../models/crop");
const Uses = require("../models/uses");
const Price = require("../models/price");

// Add Crop
exports.addCrop = async (req, res) => {
  try {
    const { crop_id, name, use, price } = req.body;

    await Crop.create({ crop_id, name });
    await Uses.create({ crop_id, use });
    await Price.create({ crop_id, price });

    res.status(201).json({ message: "Crop added successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get All Crops
exports.getAllCrops = async (req, res) => {
  try {
    const crops = await Crop.find();
    const uses = await Uses.find();
    const prices = await Price.find();

    res.json({ crops, uses, prices });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};