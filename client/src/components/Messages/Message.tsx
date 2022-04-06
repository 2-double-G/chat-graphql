import { IFriend } from "../Friends/Friend";
import { currentUser } from "../../../../server/psevdoDB/currentUser";
import classNames from "classnames";
import { padTo2Digits } from "./helpers/padTo2Digits";
import { replaceImgWithName } from '../../utils/replaceImgWithName';
import { IMessage, IUser } from '../../types/interfaces';

interface MassageProps extends IMessage {
  prevUser?: IUser | undefined;
}

export const Message: React.FC<MassageProps> = ({
  id,
  user,
  content,
  date,
  prevUser,
}) => {
  const showUserInfo = user.id !== prevUser?.id;
  const isCurrentUser = user.id === currentUser.id;

  const msgCls = classNames({
    "flex items-center": true,
    "flex-row": !isCurrentUser,
    "flex-row-reverse text-right": isCurrentUser,
  });

  const nameCls = classNames({
    "w-11/12 mx-3 font-medium": true,
    "text-right": isCurrentUser,
  });

  const contentCls = classNames({
    "inline-block max-w-4/6 rounded-lg py-3 px-4 shadow-xl shadow-orange-200/50 bg-stone-50 font-light":
      true,
    "ml-auto mr-3": isCurrentUser,
    "ml-3": !isCurrentUser,
  });

  const time = `${date.getHours()}:${padTo2Digits(date.getMinutes())}`;

  return (
    <div className="w-full">
      {showUserInfo && (
        <figure className={msgCls}>
          {/* here will be user photo */}
          <div className="w-1/12">
            <div className="w-[40px] h-[40px] rounded-xl bg-orange-100 mx-auto flex items-center justify-center">
              {replaceImgWithName(user.name)}
            </div>
          </div>
          <figcaption className={nameCls}>{user.name}</figcaption>
        </figure>
      )}
      <div className="flex my-2 justify-end">
        <div className="w-10/12 rounded-lg flex">
          <p className={contentCls}>{content}</p>
        </div>
        <div className="w-1/12 text-right mt-auto text-sm text-gray-300">
          <time>{time}</time>
        </div>
      </div>
    </div>
  );
};
