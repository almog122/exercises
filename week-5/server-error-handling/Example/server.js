const express = require("express");
const bodyParser = require("body-parser");
const users = require("./users");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const users = [
  { username: "bonz", name: "Bony", country: "Nepal", age: 21 },
  { username: "marv", name: "Marvin", country: "Arizona", age: 33 },
  { username: "luc", name: "Lucil", country: "Singapore", age: 47 },
  { username: "marc", name: "Marco", country: "Greece", age: 63 },
  { username: "kev", name: "Kevin", country: "Italy", age: 31 },
];

const port = 3000;
app.listen(port, function () {
  console.log(`Server running on ${port}`);
});

app.get("/users", function (req, res) {
  res.send(users);
});

app.post('/users', function (req, res) {
    const newUser = req.body
    const username = newUser.username
    try{
        users.add(newUser)
        res.status(201).end()
    } catch (error) {
        if (error instanceof InvalidUsernameError){
            res.status(400).send({ "Error": `${username} is not a valid name` })
        } else if (error instanceof DuplicatedResourceError){
            res.status(409).send({ "Error": `User ${username} already exist` })
        }
    }
})

app.delete("/users/:username", function (req, res) {
  let username = req.params.username;
  let userIndex = users.findIndex((user) => user.username === username);

  if (userIndex === -1) {
    res.status(404).send({ Error: `User ${username} does not exist` });
  } else {
    users.splice(userIndex, 1);
    res.status(204).end();
  }
});
