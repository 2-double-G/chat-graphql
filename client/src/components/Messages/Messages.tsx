import { Button } from "../Button/Button";
import { useRef, useEffect, useState } from "react";
import classNames from "classnames";
import { dialog } from "../../../../server/psevdoDB/dialogs";
import { Message } from "./Message";
import { replaceImgWithName } from "../../utils/replaceImgWithName";
import { useQuery } from "@apollo/client";
import { messagesQuery } from "./queries";

export const Messages: React.FC = () => {
  const [inputFocus, setInputFocus] = useState(false);

  const { name, users, messages } = dialog;

  const inputWprCs = classNames({
    "w-full rounded-lg border flex justify-between p-1": true,
    "input-message": inputFocus,
  });

  const handleBlur = () => setInputFocus(false);
  const handleFocus = () => setInputFocus(true);

  return (
    <div className="bg-gray-50 h-full rounded-lg p-6 flex flex-col flex-auto">
      <figure className="flex items-center">
        {/* here will be target photo */}
        <div className="">
          <div className="w-[40px] h-[40px] rounded-xl bg-orange-100 mx-auto flex items-center justify-center">
            {replaceImgWithName(name)}
          </div>
        </div>
        <figcaption className="mx-3 font-semibold">{name}</figcaption>
      </figure>
      <div className="h-full overflow-auto flex flex-col justify-end pb-4">
        {messages.map(({ id, user, content, date }, index) => (
          <Message
            key={id}
            id={id}
            date={date}
            user={user}
            content={content}
            prevUser={messages[index - 1]}
          />
        ))}
      </div>
      <div className={inputWprCs}>
        <input
          type="text"
          className="from-input w-full bg-transparent focus:ring-transparent focus:border-transparent block pl-4 pr-9 sm:text-sm border border-transparent rounded-lg"
          onBlur={handleBlur}
          onFocus={handleFocus}
        />
        <Button color="violet">Send</Button>
      </div>
    </div>
  );
};
