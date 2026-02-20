const mongoose = require("mongoose");

const CropSchema = new mongoose.Schema({
    crop_id: { type: Number, required: true, unique: true },
    name: { type: String, required: true }
});

module.exports = mongoose.model("Crop", CropSchema);