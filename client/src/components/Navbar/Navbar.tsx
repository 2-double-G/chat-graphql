import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { Searchbox } from "../Searchbox/Searchbox";
import { Button } from "../Button/Button";
import { DropdownMenu } from "../DropdownMenu/DropdownMenu";
import { useState, useRef } from "react";
import { Modal } from "../Modal/Modal";
import { ModalBody } from "../Modal/ModalBody";
import { ModalHeader } from "../Modal/ModalHeader";
import { ModalFooter } from "../Modal/ModalFooter";
import { useQuery, useMutation } from "@apollo/client";
import { userQuery } from "./queries";
import { createRoomMutation } from './mutations';

export const Navbar: React.FC = () => {
  const ref = useRef<HTMLInputElement>(null);
  const [showModal, setShowModal] = useState(false);

  const { data } = useQuery(userQuery);
  const [postRoom] = useMutation(createRoomMutation)

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const createRoom = () => {
    const room = {
      name: ref.current.value?.trim(),
      users: [data.currentUser.id],
    };

    postRoom({ variables: room });
  };

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
      {showModal && (
        <Modal onClose={closeModal}>
          <ModalHeader>Create room</ModalHeader>
          <ModalBody>
            <form>
              <div className="relative z-0 mb-6 w-full group">
                <input
                  ref={ref}
                  name="name"
                  autoComplete="off"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="name"
                  className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Room name
                </label>
              </div>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button onClick={createRoom}>Create</Button>
            <Button color="secondary" onClick={closeModal}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      )}
    </>
  );
};
