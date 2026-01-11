const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const useragent = require("express-useragent");
require("dotenv").config();

const app = express();

app.use(cors({
  origin: "http://localhost:5000"
}));

app.use(express.json());
app.use(useragent.express());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log("MongoDB error:", err));

app.use("/api", require("./app/api"));

app.listen(5000, () => console.log("Server running on 5000"));
