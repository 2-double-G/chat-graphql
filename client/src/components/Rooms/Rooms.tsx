import { Room } from "./Room";

import { useQuery } from "@apollo/client";
import { roomsQuery } from "./queries";
import { defaultUserData } from "../../utils/defaultUser";
import { ICurrentUser } from "../../types/interfaces";

export const Rooms: React.FC = () => {
  const { data = defaultUserData } = useQuery(roomsQuery);

  const { rooms = [] } = data.currentUser as ICurrentUser;
  const activeRoom = 2;

  return (
    <div className="bg-violet-400 h-full rounded-lg p-6 overflow-auto">
      <div className="flex justify-between text-gray-50 font-semibold px-5">
        <h2>Rooms</h2>
        <small>{rooms.length}</small>
      </div>
      {rooms.map(({ id, name, users }) => (
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
