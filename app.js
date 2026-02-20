const express = require("express");
const mongoose = require("mongoose");

const Crop = require("./models/crop");
const Uses = require("./models/uses");
const Price = require("./models/price");

const app = express();
app.use(express.json());

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/cropdb")
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.log(err);
  });

// POST - Add Crop
app.post("/crops/add", async (req, res) => {
  try {
    const { crop_id, name, use, price } = req.body;

    await Crop.create({ crop_id, name });
    await Uses.create({ crop_id, use });
    await Price.create({ crop_id, price });

    res.status(201).json({ message: "Crop added successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET - Get All Crops
app.get("/crops/all", async (req, res) => {
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
});

app.get("/", (req, res) => {
  res.send("Server is running!");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});