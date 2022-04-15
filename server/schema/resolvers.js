const { PubSub } = require("graphql-subscriptions");

const { users } = require("../psevdoDB/users");
const { dialogs } = require("../psevdoDB/dialogs");
const { currentUser } = require("../psevdoDB/currentUser");

const pubsub = new PubSub();

const resolvers = {
  Query: {
    dialog: (id) => {
      console.log(id);
    },
    users: () => users,
    currentUser: () => {
      pubsub.publish("dialogs", dialogs);
      return currentUser;
    },
  },
  Mutation: {
    // postMessage: (_, { user, content }) => {
    //   const id = Date.now();
    //   messages.push({ id, user, content });

    //   return id;
    // },
    postDialog: (_, { name, users: usersId, type }) => {
      const id = Date.now();
      const dialodUsers = users.filter(({ id }) =>
        usersId.includes(id.toString())
      );
      const dialog = { id, name, type, users: dialodUsers, messages: [] };

      dialogs.push(dialog);
      pubsub.publish(
        "dialogs",
        dialogs.filter(
          ({ type, users }) =>
            type === "room" &&
            !!users.find(({ id }) => Number(id) === Number(usersId))
        )
      );

      return id;
    },
  },
  Subscription: {
    dialogs: {
      subscribe: () => pubsub.asyncIterator("dialogs"),
      resolve: (payload) => payload,
    },
  },
};

module.exports = { resolvers };
