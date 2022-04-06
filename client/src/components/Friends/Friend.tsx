import classNames from "classnames";
import { replaceImgWithName } from '../../utils/replaceImgWithName';

export interface IFriend {
  id: number | string;
  name?: string;
  about?: string;
  active?: boolean;
}

export const Friend: React.FC<IFriend> = ({ id, name, about, active }) => {
  const roomCs = classNames({
    "flex rounded-lg p-5 my-3 cursor-pointer": true,
    "shadow-lg bg-orange-200": active,
    "hover:bg-orange-300 hover:-translate-y-1 hover:scale-110 transition duration-300 hover:shadow-lg":
      !active,
  });

  return (
    <div className={roomCs} type="button">
      {/* here will be a friend image */}
      <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
        {replaceImgWithName(name)}
      </div>
      <div className="px-3 flex flex-col">
        <p className="font-semibold">{name}</p>
        <small>{about}</small>
      </div>
    </div>
  );
};
