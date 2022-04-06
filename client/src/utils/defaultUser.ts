import { ICurrentUser } from "../types/interfaces";

export const defaultUserData = {
  currentUser: {
    id: 0,
    name: "Guest",
    friends: [],
    rooms: [],
  } as ICurrentUser,
};
