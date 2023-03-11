const express = require("express");
const router = express.Router();

const Person = require("../../models/Person");

router.get("/people", function (req, res) {
  Person.find({}, function (err, people) {
    res.send(people);
  });
});

router.post("/people", function (req, res) {
  let firstName = req.body.firstName;
  let lastName = req.body.lastName;
  let age = req.body.age;

  let newPerson = new Person({
    firstName: firstName,
    lastName: lastName,
    age: age,
  });

  newPerson.save();
  res.end();
});

router.put("/person/:id", function (req, res) {
  let id = req.params.id;
  Person.findByIdAndUpdate(id, { age: 80 }, { new: true });
  res.end();
});

router.delete("/apocalypse", function (req, res) {
  Person.remove();
  res.end();
});

module.exports = router;
