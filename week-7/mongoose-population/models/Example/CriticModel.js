const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const criticSchema = new Schema({
  name: String,
  reviews: [{ type: Schema.Types.ObjectId, ref: "Review" }], //reference to an array of Review documents
});

const Critic = mongoose.model("Critic", criticSchema);
module.exports = Critic;
