const mongoose = require("mongoose");

const UsesSchema = new mongoose.Schema({
    crop_id: { type: Number, required: true },
    use: { type: String, required: true }
});

module.exports = mongoose.model("Uses", UsesSchema);