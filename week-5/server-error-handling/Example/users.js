const errors = require('./errors.js')

const usersModule = function () {

  const addUser = function (newUser) {
    const userName = newUser.username;
    if (!userName.match(/^[a-z]+$/i)) {
      throw new errors.InvalidUsernameError();
    }
    let doesExist = users.some((w) => w.username === userName);
    if (doesExist) {
      throw new errors.DuplicatedResourceError();
    }
    users.push(newUser);
  };

  const deleteUser = function (username) {};

  const getAll = function () {};

  return {
    add: addUser,
    delete: deleteUser,
    getAll: getAll,
  };
};

module.exports = usersModule;
