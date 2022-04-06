const { users } = require("./users");

const currentUser = {
  id: 0,
  name: "Emma Liam",
  about: "Fashion designer",
  friends: users,
  dialogs: [],
};

module.exports = { currentUser };