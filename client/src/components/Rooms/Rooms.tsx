import { Room } from "./Room";

import { useQuery, useSubscription } from "@apollo/client";
import { roomsQuery, currentUserQuery } from "./queries";
import { defaultUserData } from "../../utils/defaultUser";
import { ICurrentUser, IDialog } from "../../types/interfaces";

interface RoomsProps {
  userId: string;
}

export const Rooms: React.FC<RoomsProps> = ({ userId }) => {
  const { data } = useSubscription(roomsQuery, {
    variables: { id: 0, type: "room" },
  });

  const dialogs: Array<IDialog> = data ? data.dialogs : [];
  const activeRoom = 2;

  return (
    <div className="bg-violet-400 h-full rounded-lg p-6 overflow-auto">
      <div className="flex justify-between text-gray-50 font-semibold px-5">
        <h2>Rooms</h2>
        <small>{dialogs.length}</small>
      </div>
      {dialogs.map(({ id, name, users }) => (
        <Room
          key={id}
          id={id}
          name={name}
          usersCount={users.length}
          active={id === activeRoom}
        />
      ))}
    </div>
  );
};
