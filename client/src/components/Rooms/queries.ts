import { gql } from "@apollo/client";

export const roomsQuery = gql`
  query {
    currentUser {
      id
      rooms {
        id
        name
        users {
          id
          name
        }
      }
    }
  }
`;
