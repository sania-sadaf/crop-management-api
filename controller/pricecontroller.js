const Price = require("../models/price");

exports.addPrice = async (req, res) => {
  try {
    const { crop_id, price } = req.body;
    await Price.create({ crop_id, price });
    res.status(201).json({ message: "Price added successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllPrices = async (req, res) => {
  try {
    const prices = await Price.find();
    res.json(prices);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};