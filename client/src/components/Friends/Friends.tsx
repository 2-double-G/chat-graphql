import { useQuery } from "@apollo/client";

import { Friend } from "./Friend";
import { frinedsQuery } from "./queries";
import { ICurrentUser } from "../../types/interfaces";
import { defaultUserData } from '../../utils/defaultUser';


export const Friends: React.FC = () => {
  const { loading, error, data = defaultUserData } = useQuery(frinedsQuery);
  
  const { friends = [] } = data.currentUser as ICurrentUser;
  const activeFriend = 1;
  const friendsCount = friends ? friends.length : 0;

  return (
    <div className="bg-gray-50 h-full rounded-lg p-6 overflow-auto">
      <div className="flex justify-between font-semibold px-5">
        <h2>Friends</h2>
        <small className="text-orange-500">{friendsCount}</small>
      </div>
      {friends &&
        friends.map(({ id, name, about }) => (
          <Friend
            key={id}
            id={id}
            name={name}
            about={about}
            active={id === activeFriend}
          />
        ))}
    </div>
  );
};
