import { SearchIcon } from "@heroicons/react/solid";

export const Searchbox: React.FC = ({ ...props }) => {
  return (
    <div>
      <div className="relative rounded-md shadow-sm inline-block">
        <input
          {...props}
          type="text"
          className="from-input h-full bg-transparent focus:ring-indigo-300 focus:border-indigo-200 block pl-4 pr-9 sm:text-sm border border-gray-300 rounded-lg"
        />
        <div className="absolute inset-y-0 right-2 pl-3 flex items-center pointer-events-none">
          <span className="text-gray-500 sm:text-sm">
            <SearchIcon className="h-5 w-5 text-blue-500" />
          </span>
        </div>
      </div>
    </div>
  );
};
