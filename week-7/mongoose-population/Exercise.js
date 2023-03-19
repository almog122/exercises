let mongoose = require("mongoose");
let Planet = require("./models/Exercise/PlanetModel");
let Visitor = require("./models/Exercise/VisitorModel");
let SolarSystem = require("./models/Exercise/SolarSystemModel");

mongoose.connect("mongodb://127.0.0.1:27017/mongoose-population");

let s1 = new SolarSystem({
  starName: "sole",
  planets: [],
});

let p1 = new Planet({
  name: "Earth",
  system: s1,
  visitors: [],
});

let p2 = new Planet({
  name: "Ploto",
  system: s1,
  visitors: [],
});

let v1 = new Visitor({
  name: "maor",
  homePlanet: p1,
  visitedPlanets: [],
});

// s1.planets.push(p1);
// s1.planets.push(p2);

// v1.visitedPlanets.push(p1)
// v1.visitedPlanets.push(p2);

// p1.visitors.push(v1);
// p2.visitors.push(v1);

// p1.save();
// p2.save();
// v1.save();
// s1.save();

// Visitor.findOne({})
//   .populate("visitedPlanets")
//   .then(function (visitor) {
//     visitor.forEach( v => console.log(v.visitedPlanets))
// });

// Planet.find({})
//   .populate("visitors")
//   .then(function (planet) {
//     planet.forEach( p => console.log(p.visitors));
// });

// SolarSystem.find({})
//   .populate("planets")
//   .then(function (SolarSystem) {
//     SolarSystem[0].planets.forEach((planet) => console.log(planet.populate("visitors")
//     .then((planet) => console.log(planet.visitors))));
//   });

Visitor.findOne({})
  .populate("homePlanet")
  .then(function (visitor) {
    visitor.homePlanet.populate("system").then((planet) => {
        console.log(planet.system.starName)
    });
  });
