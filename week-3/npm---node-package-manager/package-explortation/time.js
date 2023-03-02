const moment = require("moment");
const urllib = require("urllib");

let timeNow = new Date();
console.log(timeNow);

let formattedTimeNow = moment().format("MMMM Do, YYYY");
console.log(formattedTimeNow); //January 3rd, 2017


// urllib.request('https://random-word-api.herokuapp.com/word')
//   .then((err , response) => {
//     console.log(err.toString());
//     console.log(response);
//     //console.log(response.toString())
//   })

urllib
  .request("http://www.omdbapi.com/?apikey=45a90b13&t=t=the+lion+king")
  .then((err, response) => {
    console.log(response)
    console.log(response.toString())
  });
