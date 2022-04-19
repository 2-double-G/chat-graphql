import { useState, useCallback } from "react";

import { Button } from "../Button/Button";
import { Searchbox } from "../Searchbox/Searchbox";
import { UserMenu } from "../UserMenu/UserMenu";
import { ModalCreateRoom } from "../ModalCreateRoom/ModalCreateRoom";

import { MenuIcon } from "@heroicons/react/solid";
import { InlineDialog } from "../InlineDialog/InlineDialog";

export const Navbar: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);

  const openModal = () => setShowModal(true);
  const onBurgerClick = () => setShowBurgerMenu((prev) => !prev);
  const onBurgerClose = () => setShowBurgerMenu((prev) => !prev);
  const closeModal = useCallback(() => setShowModal(false), []);

  return (
    <>
      <nav className="flex items-center w-full mb-5">
        <div className="basis-auto md:basis-1/4 pr-5">
          <h1 className="font-semibold text-xl">Logo</h1>
        </div>
        <div className="hidden items-center basis-auto lg:basis-2/4 px-5 lg:m-0 grow sm:flex">
          <div className="grow">
            <Searchbox placeholder="Type to find rooms or person..." />
          </div>

          <Button color="orange" className="ml-4" onClick={openModal}>
            Create room
          </Button>
        </div>
        <div className="flex justify-end items-center basis-auto lg:basis-1/4 ml-auto sm:m-0">
          <UserMenu />
          <InlineDialog
            isOpen={showBurgerMenu}
            onClose={onBurgerClose}
            trigger={
              <button
                data-collapse-toggle="mobile-menu-2"
                className="inline-flex items-center p-1 ml-3 text-sm text-violet-500 rounded-lg sm:hidden hover:bg-violet-100 focus:outline-none focus:ring-2 focus:ring-violet-200"
                aria-controls="mobile-menu-2"
                aria-expanded="false"
                onClick={onBurgerClick}
              >
                <MenuIcon className="h-7 w-7 text-violet-600 " />
              </button>
            }
            content={
              <div className="min-w-[150px]">
                <ul className="py-1" aria-labelledby="dropdown">
                  <li
                    onClick={openModal}
                    className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                  >
                    Create room
                  </li>
                  <li className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                    Find dialog
                  </li>
                </ul>
              </div>
            }
          />
        </div>
      </nav>
      {showModal && <ModalCreateRoom onClose={closeModal} />}
    </>
  );
};
