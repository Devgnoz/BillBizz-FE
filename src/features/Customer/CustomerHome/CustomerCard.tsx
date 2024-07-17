import React from "react";
import { cva } from "class-variance-authority";
import vectorImage from "../../../assets/Images/Vector.png";

type CustomerCardProps = {
  icon: string;
  title: string;
  description: string;
  number: number;
  active?: boolean;
  onClick?: () => void;
};

const customerCardVariants = cva("rounded-xl cursor-pointer", {
  variants: {
    active: {
      true: "bg-white border-cardBorder border-2",
      false: "bg-white border-gray-300",
    },
  },
  defaultVariants: {
    active: false,
  },
});

const CustomerCard: React.FC<CustomerCardProps> = ({ icon, title, description, number, active = false, onClick }) => {
  return (
    <div className={`${customerCardVariants({ active })} w-[50%] h-[70px] pl-4 pr-4 text-textColor`} onClick={onClick}>
      <div className="flex items-center justify-between w-full h-full">
        <div className="flex items-center">
          <img src={icon} alt="" />
          <div className="ml-4">
            <h2 className="text-base font-semibold">{title}</h2>
            <p className="text-xs" style={{ color: active ? '#495160' : '#8F99A9' }}>{description}</p>
          </div>
        </div>
        <div
          className="text-2xl font-bold"
          style={{
            backgroundImage: active ? `url(${vectorImage})` : 'none',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '68px', 
            height: '68px', 
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {number}
        </div>
      </div>
    </div>
  );
};

export default CustomerCard;
