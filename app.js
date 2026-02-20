const express = require("express");
const mongoose = require("mongoose");

const cropRoutes = require("./routes/croproutes");
const usesRoutes = require("./routes/usesroutes");
const priceRoutes = require("./routes/priceroute");

const app = express();
app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/cropdb")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.use("/crops", cropRoutes);
app.use("/uses", usesRoutes);
app.use("/prices", priceRoutes);

app.listen(3000, () => console.log("Server running on port 3000"));