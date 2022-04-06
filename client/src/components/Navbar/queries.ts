import { gql } from "@apollo/client";

export const userQuery = gql`
  query {
    currentUser {
      id
    }
  }
`;
