import { gql } from "@apollo/client";

export const messagesQuery = gql`
  query {
    messages {
      id
      content
      user {
        id
        name
      }
    }
  }
`;
