import { Messages } from '../Messages/Messages';
import { Friends } from '../Friends/Friends';
import { Rooms } from "../Rooms/Rooms";

export const Main: React.FC = () => {
  return (
    <main className="flex flex-auto h-max">
      <div className="basis-1/4 pr-5 self-auto"><Rooms /></div>
      <div className="basis-2/4 px-5 self-auto"><Messages /></div>
      <div className="basis-1/4 pl-5 self-auto"><Friends /></div>
    </main>
  );
};
