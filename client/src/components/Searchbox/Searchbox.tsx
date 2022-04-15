import { SearchIcon } from "@heroicons/react/solid";
import { InputHTMLAttributes } from "react";

export const Searchbox: React.FC<InputHTMLAttributes<HTMLInputElement>> = ({
  ...props
}) => {
  return (
    <div className="relative rounded-md shadow-sm inline-block w-full">
      <input
        {...props}
        type="text"
        className="from-input w-full  h-full bg-transparent focus:ring-indigo-300 focus:border-indigo-200 block pl-4 pr-9 text-sm border border-gray-300 rounded-lg"
      />
      <div className="absolute inset-y-0 right-2 pl-3 flex items-center pointer-events-none">
        <span className="text-gray-500 sm:text-sm">
          <SearchIcon className="h-5 w-5 text-blue-500" />
        </span>
      </div>
    </div>
  );
};
