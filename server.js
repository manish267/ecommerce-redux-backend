const express = require("express");
const app = express();
require("dotenv").config();
const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes.js");
const cors = require('cors');

app.use(cors());

app.use(express.json());

connectDB();

app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log("server is running at " + PORT);
});
