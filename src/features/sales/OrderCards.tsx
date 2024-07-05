import React from "react";
import { cva } from "class-variance-authority";

type CardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  number: number;
  active?: boolean;
  onClick?: () => void;
};

const cardVariants = cva("p-4 rounded-xl shadow-xl cursor-pointer", {
  variants: {
    active: {
      true: "bg-cardBg border-cardBorder border-2",
      false: "bg-white border-gray-300", 
    },
  },
  defaultVariants: {
    active: false,
  },
});

const Card: React.FC<CardProps> = ({ icon, title, description, number, active = false, onClick }) => {
  return (
    <div className={cardVariants({ active })} onClick={onClick} style={{width:"100%",height:"50%"}}>
      <div className="rounded-full w-[40px] h-[40px] flex items-center justify-center mb-4">
        {icon}
      </div>

      <div className="text-textColor">
        <h2 className="text-sm font-bold">{title}</h2>
        <p className="text-gray-500 text-[12px]">{description}</p>
        <div className="text-md font-bold mt-2" style={{color : active ? "rgba(130, 0, 0, 1)" : ""}}>{number}</div>
      </div>
    </div>
  );
};

export default Card;
