const { users } = require("./users");

const dialog = {
  id: 0,
  name: null,
  users: [users.find(({ id }) => id === 1), users.find(({ id }) => id === 0)],
  messages: [
    {
      id: 0,
      date: new Date(),
      user: users.find(({ id }) => id === 0),
      content: "Hello!",
    },
    {
      id: 1,
      date: new Date(),
      user: users.find(({ id }) => id === 1),
      content: "H! How are you?",
    },
    {
      id: 2,
      date: new Date(),
      user: users.find(({ id }) => id === 1),
      content: "Kaef",
    },
  ],
};

const dialogs = [];

module.exports = { dialogs, dialog };
