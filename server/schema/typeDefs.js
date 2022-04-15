const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    about: String!
    rooms: [Dialog]
  }

  type Message {
    id: ID!
    user: String!
    content: String!
  }

  type Dialog {
    id: ID!
    name: String
    users: [User]!
    messages: [Message]
    type: String!
  }

  type CurrentUser {
    id: ID!
    name: String!
    about: String!
    friends: [User]
    rooms: [Dialog]
  }

  type Query {
    messages: [Message]
    users: [User]
    dialogs: [Dialog]
    dialog: Dialog
    currentUser: CurrentUser
  }

  type Subscription {
    dialogs(id: ID!, type: String!): [Dialog]
  }

  type Mutation {
    postMessage(user: String!, content: String!): ID!
    postDialog(name: String, users: [ID]!, type: String!): ID!
  }
`;

module.exports = { typeDefs };
