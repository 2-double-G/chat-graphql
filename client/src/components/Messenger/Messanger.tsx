import { Button } from "../Button/Button";
import { useRef, useEffect, useState } from "react";
import classNames from "classnames";
import { dialog } from "../../../../server/psevdoDB/dialogs";
import { replaceImgWithName } from "../../utils/replaceImgWithName";
import { useQuery } from "@apollo/client";

export const Messanger: React.FC = () => {
  const [inputFocus, setInputFocus] = useState(false);

  const inputWprCs = classNames({
    "w-full rounded-lg border flex justify-between p-1": true,
    "input-message": inputFocus,
  });

  const handleBlur = () => setInputFocus(false);
  const handleFocus = () => setInputFocus(true);

  return (
    <div className="bg-gray-50 h-full rounded-lg p-6 flex flex-col flex-auto">
      
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
