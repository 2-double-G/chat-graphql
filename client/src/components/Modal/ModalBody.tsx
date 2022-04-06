interface ModalProps {
  children: React.ReactChild;
}

export const ModalBody: React.FC<ModalProps> = ({ children }) => {
  return <div className="p-6 space-y-6">{children}</div>;
};
