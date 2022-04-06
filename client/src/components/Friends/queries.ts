import { gql } from "@apollo/client";

export const frinedsQuery = gql`
  query {
    currentUser {
      friends {
        id
        name
        about
      }
    }
  }
`;
