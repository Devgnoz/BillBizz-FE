import React, { useEffect } from "react";

type Props = {
  onClose: () => void;
  open: boolean;
  children: React.ReactNode;
  position?: "left" | "right";
};

const Drawer = ({ onClose, open, children, position = "right" }: Props) => {
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

  const handleDrawerClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  return (
    <div
      className={`fixed inset-0 z-20 flex ${position === "right" ? "justify-end" : "justify-start"} items-center bg-black/20 transition-opacity duration-500 ${
        open ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={onClose}
    >
      <div
        className={`relative bg-white h-full shadow-xl transform transition-transform duration-500 ${
          position === "right" ? (open ? "translate-x-0" : "translate-x-full") : (open ? "translate-x-0" : "-translate-x-full")
        }`}
        style={{ width: "444px" }}
        onClick={handleDrawerClick}
      >
        {children}
      </div>
    </div>
  );
};

export default Drawer;
