const Crop = require("../models/Crop");
const Uses = require("../models/Uses");
const Price = require("../models/Price");

// Add only crop
exports.addCrop = async (req, res) => {
    try {
        const { crop_id, name } = req.body;
        await Crop.create({ crop_id, name });
        res.status(201).json({ message: "Crop added successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all crops with their uses & prices
exports.getAllCrops = async (req, res) => {
    try {
        const crops = await Crop.find();
        const data = await Promise.all(
            crops.map(async (crop) => {
                const useData = await Uses.findOne({ crop_id: crop.crop_id });
                const priceData = await Price.findOne({ crop_id: crop.crop_id });
                return {
                    crop_id: crop.crop_id,
                    name: crop.name,
                    use: useData ? useData.use : "",
                    price: priceData ? priceData.price : ""
                };
            })
        );
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};