const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const solarSystemSchema = new Schema({
  starName : String,
  planets : [{ type: Schema.Types.ObjectId, ref: "Planet" }], 
});

const SolarSystem = mongoose.model("Solar System", solarSystemSchema);
module.exports = SolarSystem;
