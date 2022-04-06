import { useEffect, useRef, useState } from "react";

export const DropdownMenu: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [showList, setShowList] = useState(false);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent): void => {
      if (ref && ref.current && ref.current.contains(e.target as Node)) {
        // inside click
        return;
      }
      // outside click
      setShowList(false);
    };

    if (showList) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showList]);
  

  const showListHandler = () => setShowList((prev) => !prev);

  return (
    <div ref={ref} className="relative flex items-center md:order-2">
      <button
        className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300"
        id="user-menu-button"
        aria-expanded="false"
        data-dropdown-toggle="dropdown"
        onClick={showListHandler}
      >
        <span className="w-8 h-8 rounded-full bg-purple-400"></span>
      </button>
      {showList && (
        <div
          className="bg-gray-50 absolute top-full right-0 z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow"
          id="dropdown"
        >
          <div className="py-3 px-4">
            <span className="block text-sm text-gray-900">Example user</span>
            <span className="block text-sm font-medium text-gray-500 truncate">
              name@gmail.com
            </span>
          </div>
          <ul className="py-1" aria-labelledby="dropdown">
            <li>
              <a
                href="#"
                className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100"
              >
                Log in
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100"
              >
                Sign in
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
