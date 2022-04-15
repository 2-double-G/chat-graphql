import { useState, useCallback } from "react";

import { Button } from "../Button/Button";
import { Searchbox } from "../Searchbox/Searchbox";
import { DropdownMenu } from "../DropdownMenu/DropdownMenu";
import { ModalCreateRoom } from "../ModalCreateRoom/ModalCreateRoom";

import { MenuIcon } from "@heroicons/react/solid";

export const Navbar: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = useCallback(() => setShowModal(false), []);

  return (
    <>
      <nav className="flex items-center w-full mb-5">
        <div className="basis-auto md:basis-1/4 pr-5">
          <h1 className="font-semibold text-xl">Logo</h1>
        </div>
        <div className="flex items-center basis-auto lg:basis-2/4 px-5 lg:m-0 grow">
          <div className="grow">
            <Searchbox placeholder="Type to find rooms or person..." />
          </div>

          <Button color="orange" className="ml-4" onClick={openModal}>
            Create room
          </Button>
        </div>
        <div className="flex justify-end items-center basis-auto lg:basis-1/4">
          <DropdownMenu />
          {/* <button
            data-collapse-toggle="mobile-menu-2"
            className="inline-flex items-center p-1 ml-3 text-sm text-violet-500 rounded-lg lg:hidden hover:bg-violet-100 focus:outline-none focus:ring-2 focus:ring-violet-200"
            aria-controls="mobile-menu-2"
            aria-expanded="false"
          >
            <MenuIcon className="h-7 w-7 text-violet-600 " />
            <svg
              className="hidden w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button> */}
        </div>
      </nav>
      {showModal && <ModalCreateRoom onClose={closeModal} />}
    </>
  );
};
