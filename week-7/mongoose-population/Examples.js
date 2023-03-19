let mongoose = require("mongoose");
let Book = require("./models/Example/BookModel");
let Review = require("./models/Example/ReviewModel");
let Critic = require("./models/Example/CriticModel");

mongoose.connect("mongodb://127.0.0.1:27017/mongoose-population");

let b1 = new Book({
  title: "Name of the Wind",
  author: "Patrick Rothfuss",
  reviews: [],
});

let c1 = new Critic({
  name: "William Jeffery",
  reviews: [],
});

let r1 = new Review({
  book: b1,
  critic: c1,
  reviewText: "Excellent Book",
});

// b1.reviews.push(r1)
// c1.reviews.push(r1)

// b1.save()
// c1.save()
// r1.save()

// Book.find({})
//   .populate("reviews")
//   .then((book) => {
//     console.log(book);
// });

// Book.findOne({})
//   .populate("reviews")
//   .then((book) => {
//     console.log(book);
// });

// Book.findOne({})
//   .populate({
//     path: "reviews",
//     populate: {
//       path: "critic",
//     },
// })
//   .then((book) => {
//     console.log(book.reviews);
// });

// Review.find({})
// .populate('book critic')
// .then((reviews) => {
//   console.log(reviews);
// });

Critic.findOne({}).populate('reviews').then(function(critic) {
  //now we have a single critic
  console.log(critic.reviews)
})