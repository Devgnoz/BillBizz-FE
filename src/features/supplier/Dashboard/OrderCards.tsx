import React from "react";
import { cva } from "class-variance-authority";
import ArrowIconNoUnderline from "../../../assets/icons/ArrowIconNoUnderline";

type CardProps = {
  icon: React.ReactNode;
  title: string;
  count: string;
  rating: string;
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
      <div className="rounded-full w-[40px] h-[40px] flex items-center justify-center mb-4">
        {icon}
      </div>

      <div className="space-y-2">
        <h2 className="text-[18px] font-bold">{title}</h2>
        <p className="text-black font-extrabold text-2xl" style={{color : active ? "rgba(130, 0, 0, 1)" : ""}}>{count}</p>
        <div className="flex justify-between items-center">
        <div className="text-md font-bold  flex items-center  p-1 text-green-800 rounded-md bg-green-200" >
          {rating}%<ArrowIconNoUnderline size={20} color="#166534"/>
        </div>
        <div className="flex items-center justify-center">
        <p className="text-[12.5px]">Compared to last month</p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
