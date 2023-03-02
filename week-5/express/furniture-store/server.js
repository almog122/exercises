const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "dist")));

app.use(express.static(path.join(__dirname, 'node_modules')))

const store = [
  { name: "table", inventory: 3, price: 800 },
  { name: "chair", inventory: 16, price: 120 },
  { name: "couch", inventory: 1, price: 1200 },
  { name: "picture frame", inventory: 31, price: 70 }
]

const port = 3000;
app.listen(port, function () {
  console.log(`Running server on port ${port}`);
});

app.get("/", function (request, response) {
  response.send("Server is up and running smoothly");
});

app.get("/priceCheck/:name", (request, response) => {
  let itemName = request.params.name
  let item = store.find( i => i.name == itemName)
  response.send({price : item.price});
});

app.get("/buy/:name", (request, response) => {
  let itemName = request.params.name
  let item = store.find( i => i.name == itemName)
  item.inventory--

  response.send(item);
});

app.get("/sale", (request, response) => {
  let admin = request.query.admin;

  if(admin == 'true'){
    store.forEach(function(item){

      if(item.inventory > 10){
        item.price = item.price/2
      }
    })
  }

  response.send(store);
});
