import { gql } from "@apollo/client";

export const currentUserQuery = gql`
  query {
    currentUser {
      id
    }
  }
`;

export const roomsQuery = gql`
  subscription OnDialogAdded($id: ID!, $type: String!) {
    dialogs(id: $id, type: $type) {
      id
      name
      users {
        id
      }
    }
  }
`;
