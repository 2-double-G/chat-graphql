import { useEffect, useRef, useState } from "react";
import { InlineDialog } from "../InlineDialog/InlineDialog";

export const UserMenu: React.FC = () => {
  const [showUserMenu, setShowUserMenu] = useState(false);

  const hideMenu = () => setShowUserMenu(false);
  const showMenuHandler = () => setShowUserMenu((prev) => !prev);

  return (
    <InlineDialog
      isOpen={showUserMenu}
      onClose={hideMenu}
      trigger={
        <button
          className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300"
          id="user-menu-button"
          aria-expanded="false"
          data-dropdown-toggle="dropdown"
          onClick={showMenuHandler}
        >
          <span className="w-8 h-8 rounded-full bg-purple-400"></span>
        </button>
      }
      content={
        <>
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
        </>
      }
    />
  );
};
