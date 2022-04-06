const { createServer } = require("@graphql-yoga/node");
const { typeDefs } = require("./schema/typeDefs");
const { dialogs } = require("./psevdoDB/dialogs");
const { users } = require("./psevdoDB/users");
const { currentUser } = require("./psevdoDB/currentUser");

const messages = [];

const resolvers = {
  Query: {
    messages: () => messages,
    dialogs: () => dialogs,
    dialog: (id) => {
      console.log(id);
    },
    users: () => users,
    currentUser: () => ({
      ...currentUser,
      rooms: dialogs.filter(
        ({ users }) => !!users.find(({ id }) => id === currentUser.id)
      ),
    }),
  },
  Mutation: {
    postMessage: (parent, { user, content }) => {
      const id = Date.now();
      messages.push({ id, user, content });

      return id;
    },
    postDialog: (parent, { name, users: usersId }) => {
      const id = Date.now();

      const dialodUsers = users.filter(({ id }) =>
        usersId.includes(id.toString())
      );
      const dialog = { id, name, users: dialodUsers };
      dialogs.push(dialog);

      return id;
    },
  },
};

const server = createServer({ schema: { typeDefs, resolvers } });

server.start(({ port }) => {
  console.log(`Server on http://localhost:${port}/`);
});
