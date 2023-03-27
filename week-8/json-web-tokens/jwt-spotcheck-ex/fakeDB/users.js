const bcrypt = require("bcryptjs");

const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);

const users = [
  {
    id: 1,
    username: "ameerj",
    password: bcrypt.hashSync("meowmeow", salt),
    animal: "cat",
  },
  {
    id: 2,
    username: "lotemh",
    password: bcrypt.hashSync("natureisamazing!", salt),
    animal: "owl",
  },
];

module.exports = users;
