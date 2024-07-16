import React from "react";
import { cva } from "class-variance-authority";

import ArrowUpIcon from "../../../assets/icons/ArrowUpIcon";

type CardProps = {
  icon: React.ReactNode;
  title:string;
  comparedDes: string;
  rating:string;
  percentageComp:string,
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

const Card: React.FC<CardProps> = ({ icon, title, comparedDes,percentageComp, rating, active = false, onClick }) => {
  return (
    <div className={cardVariants({ active })} onClick={onClick} style={{width:"100%",height:"50%"}}>
      <div className="rounded-full w-[40px] h-[40px] flex items-center justify-center mb-4">
        {icon}
      </div>

      <div className="text-textColor">
        <h2 className="text-sm font-bold">{title}</h2>
       
        <div className="text-md font-bold mt-2" style={{color : active ? "rgba(130, 0, 0, 1)" : ""}}>{rating}</div>
      </div>
      <div className="text-textColor flex flex-nowrap items-center">
  <div className="p-1 -lg bg-green-300">
    <p className="text-green-600 text-[12px] flex items-center">
  {percentageComp} <ArrowUpIcon />
</p>
      </div>
  <p className="text-gray-500 text-[12px] ml-2">
    {comparedDes}
  </p>
</div>
    </div>
  );
};

export default Card;
