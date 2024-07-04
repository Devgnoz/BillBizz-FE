import React, { useEffect } from "react";

type Props = {
  onClose: () => void;
  open: boolean;
  children: React.ReactNode;
};

const Modal = ({ onClose, open, children }: Props) => {
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  const handleModalClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 z-20 flex justify-center items-center bg-black/20"
          onClick={onClose}
        >
          <div className="bg-white rounded-lg" onClick={handleModalClick}>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
