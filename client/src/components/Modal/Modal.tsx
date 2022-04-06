import ReactDOM from "react-dom";
import { useEffect, useMemo } from "react";
import { ModalContext } from "./ModalContext";

const modalRoot = document.getElementById("modal-root");

interface ModalProps {
  children: React.ReactNode | React.ReactChild;
  onClose?: () => undefined | void;
}

export const Modal: React.FC<ModalProps> = ({ children, onClose }) => {
  const el = useMemo(() => document.createElement("div"), []);

  useEffect(() => {
    modalRoot.appendChild(el);

    return () => {
      modalRoot.removeChild(el);
    };
  });

  return ReactDOM.createPortal(
    <ModalContext.Provider value={onClose}>
      <div
        className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full  justify-center items-center flex bg-gray-500/60"
      >
        <div className="relative p-4 w-full max-w-md h-full md:h-auto">
          <div className="relative bg-gray-50 rounded-lg shadow">
            {children}
          </div>
        </div>
      </div>
    </ModalContext.Provider>,
    el
  );
};
