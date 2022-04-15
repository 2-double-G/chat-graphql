import { Messages } from "../Messages/Messages";
import { Friends } from "../Friends/Friends";
import { Rooms } from "../Rooms/Rooms";
import { useQuery } from "@apollo/client";
import { userQuery } from "./queries";

export const Main: React.FC = () => {
  const { data, loading } = useQuery(userQuery);

  if (!data || loading) return null;

  const { currentUser } = data;

  return (
    <main className="flex flex-auto h-max">
      <div className="basis-1/4 pr-5 self-auto">
        <Rooms userId={currentUser?.id} />
      </div>
      <div className="basis-2/4 px-5 self-auto">
        <Messages />
      </div>
      <div className="basis-1/4 pl-5 self-auto">
        <Friends />
      </div>
    </main>
  );
};
