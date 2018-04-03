const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const historySchema = new Schema({
  fractal: { type: String, required: true },
  date: { type: Date, default: Date.now, index: true },
});

const History = mongoose.model("History", historySchema);

module.exports = History;
