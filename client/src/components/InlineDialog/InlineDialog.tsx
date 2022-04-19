import { ReactElement, useRef, useEffect } from "react";

interface InlineDialogProps {
  isOpen: boolean;
  onClose: () => void;
  content: HTMLElement | ReactElement;
  trigger: HTMLElement | ReactElement;
}

export const InlineDialog: React.FC<InlineDialogProps> = ({
  trigger,
  content,
  onClose,
  isOpen,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent): void => {
      if (ref && ref.current && ref.current.contains(e.target as Node)) {
        // inside click
        return;
      }
      // outside click
      onClose();
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div ref={ref} className="relative flex items-center">
      {trigger}
      {isOpen && (
        <div
          className="bg-gray-50 absolute top-full right-0 z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow"
          id="dropdown"
        >
          {content}
        </div>
      )}
    </div>
  );
};
