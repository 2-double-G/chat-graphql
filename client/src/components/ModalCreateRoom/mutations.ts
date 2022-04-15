import { gql } from "@apollo/client";

export const createRoomMutation = gql`
  mutation ($name: String!, $users: [ID]!, $type: String!) {
    postDialog(name: $name, users: $users, type: $type)
  }
`;