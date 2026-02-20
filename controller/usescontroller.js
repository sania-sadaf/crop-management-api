const Uses = require("../models/uses");

exports.addUse = async (req, res) => {
  try {
    const { crop_id, use } = req.body;
    await Uses.create({ crop_id, use });
    res.status(201).json({ message: "Use added successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllUses = async (req, res) => {
  try {
    const uses = await Uses.find();
    res.json(uses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};