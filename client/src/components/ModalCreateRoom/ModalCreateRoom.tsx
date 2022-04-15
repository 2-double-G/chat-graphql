import { useRef } from "react";
import { useQuery, useMutation } from "@apollo/client";

import { userQuery } from "./queries";
import { createRoomMutation } from "./mutations";

import { Button } from "../Button/Button";
import { Modal, ModalBody, ModalHeader, ModalFooter } from "../Modal";
import { IDialog } from "../../types/interfaces";

interface ModalProps {
  onClose: () => void;
}

export const ModalCreateRoom: React.FC<ModalProps> = ({ onClose }) => {
  const ref = useRef<HTMLInputElement>(null);

  const { data } = useQuery(userQuery);
  const [postRoom] = useMutation(createRoomMutation);

  const createRoom = () => {
    const room = {
      name: ref.current.value?.trim(),
      users: [data.currentUser.id],
      type: "room",
    } as Omit<IDialog, "messages">;

    postRoom({ variables: room });
    onClose();
  };

  return (
    <Modal onClose={onClose}>
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
        <Button color="secondary" onClick={onClose}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};
