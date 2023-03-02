let newUsers = users
  .map((user) => user.name)
  .filter((name) => name[0] == "C");

console.log(newUsers);
