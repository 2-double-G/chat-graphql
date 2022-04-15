import { useState, useCallback } from "react";

import { Button } from "../Button/Button";
import { Searchbox } from "../Searchbox/Searchbox";
import { DropdownMenu } from "../DropdownMenu/DropdownMenu";
import { ModalCreateRoom } from "../ModalCreateRoom/ModalCreateRoom";

export const Navbar: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = useCallback(() => setShowModal(false), []);

  return (
    <>
      <div className="flex w-full mb-5">
        <div className="basis-1/4 pr-5">
          <h1 className="font-semibold text-xl">Logo</h1>
        </div>
        <div className="flex justify-between items-center basis-2/4 px-5">
          <p className="font-semibold text-lg">Messaging</p>
          <div className="flex justify-between items-center">
            <Searchbox />
            <Button color="orange" className="ml-4" onClick={openModal}>
              Create room
            </Button>
          </div>
        </div>
        <div className="flex justify-end items-center basis-1/4 pl-5">
          <DropdownMenu />
        </div>
      </div>
      {showModal && <ModalCreateRoom onClose={closeModal} />}
    </>
  );
};
