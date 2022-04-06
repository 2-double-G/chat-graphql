import { gql } from "@apollo/client";

export const createRoomMutation = gql`
  mutation ($name: String!, $users: [ID]!) {
    postDialog(name: $name, users: $users)
  }
`;