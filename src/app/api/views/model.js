const mongoose = require("mongoose");

const viewSchema = new mongoose.Schema({
  ip: String,
  country: String,
  device: String,
  page: String,
  time: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("View", viewSchema);
