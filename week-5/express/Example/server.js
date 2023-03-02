const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "dist")));

const port = 3000;
app.listen(port, function () {
  console.log(`Running server on port ${port}`);
});

app.get("/", function (request, response) {
  response.send("Server is up and running smoothly");
});

app.get("/maps", function (request, response) {
  response.send("Here's some stuff related to maps");
});

app.get("/shoobi", function (request, response) {
  response.send("This here is the shoobi *route*");
});

app.get("/landing/:username", function (request, response) {
  response.send(`Hi there, ${request.params.username}`);
});

app.get("/routeWithOptionalParameters", (request, response) => {
  let params = request.query;
  response.send(params);
});
