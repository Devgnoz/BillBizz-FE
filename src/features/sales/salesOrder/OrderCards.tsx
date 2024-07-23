import React from "react";
import { cva } from "class-variance-authority";

type CardProps = {
  icon: string;
  title: string;
  count: string;
  rating: number;
  active?: boolean;
  onClick?: () => void;
};

const cardVariants = cva("p-4 rounded-xl  cursor-pointer", {
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

const Card: React.FC<CardProps> = ({ icon, title, count, rating, active = false, onClick }) => {
  return (
    <div className={cardVariants({ active })} onClick={onClick} style={{width:"100%",height:"50%"}}>
     <img src={icon} alt="" className="w-8 h-8 object-contain"/>

      <div className="text-textColor">
        <h2 className="text-sm font-bold mt-[10px]">{title}</h2>
        <p className="text-gray-500 text-[12px]">{count}</p>
        <div className="text-md font-bold mt-2" style={{color : active ? "rgba(130, 0, 0, 1)" : ""}}>{rating}</div>
      </div>
    </div>
  );
};

export default Card;
