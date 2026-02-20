const mongoose = require("mongoose");

const PriceSchema = new mongoose.Schema({
    crop_id: { type: Number, required: true },
    price: { type: Number, required: true }
});

module.exports = mongoose.model("Price", PriceSchema);