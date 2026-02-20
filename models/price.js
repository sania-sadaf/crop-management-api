const mongoose = require("mongoose");

const priceSchema = new mongoose.Schema({
  crop_id: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
});

// ✅ Prevent model overwrite
module.exports =
  mongoose.models.Price || mongoose.model("Price", priceSchema);