import classNames from "classnames";
import { userwordEnding } from "./helpers/userwordEnding";
import { replaceImgWithName } from '../../utils/replaceImgWithName';

export interface IRoom {
  id: number | string;
  name: string;
  usersCount: number;
  img?: string;
  active: boolean;
}

export const Room: React.FC<IRoom> = ({
  id,
  name,
  usersCount,
  img,
  active,
}) => {
  const roomCs = classNames({
    "flex rounded-lg p-5 my-3 cursor-pointer": true,
    "bg-gray-50 text-violet-500 shadow-lg": active,
    "hover:bg-violet-300 text-gray-50 hover:-translate-y-1 hover:scale-110 transition duration-300 hover:shadow-lg":
      !active,
  });

  return (
    <div className={roomCs} type="button">
      {/* here will be a room image */}
      <div className="w-14 h-14 rounded bg-violet-100 text-violet-500 flex items-center justify-center">
        {replaceImgWithName(name)}
      </div>
      <div className="px-3 flex flex-col">
        <p className="font-semibold truncate max-w-[164px]">{name}</p>
        <small>{userwordEnding(usersCount)}</small>
      </div>
    </div>
  );
};
