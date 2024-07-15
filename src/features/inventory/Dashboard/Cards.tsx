import { useState } from "react";
import OrderCards from "./OrderCards";
import ArrowUpIcon from "../../../assets/icons/ArrowUpIcon";
import Boxes from "../../../assets/icons/box";

type Props = {};

const Cards = ({}: Props) => {
  const [activeCard, setActiveCard] = useState<number | null>(0);
  const handleCardClick = (index: number) => {
    setActiveCard(index);
  };

  const cards = [
    {
      icon: (
        <div>
          <Boxes />
          <i className="fa-solid fa-cart-shopping text-xl text-black"></i>
        </div>
      ),
      title: "Total Inventory Value",
      percentageComp: "86%",
      comparedDes: "Compared to last month",
      number: "$50,000",
    },
    {
      icon: (
        <div>
          <Boxes />
          <i className="fa-solid fa-cogs text-xl text-black"></i>
        </div>
      ),
      title: "Total Sales Value",
      percentageComp: "86%",
      comparedDes: "Compared to last month",
      number: "$120,000",
    },
    {
      icon: (
        <div>
          <Boxes />
          <i className="fa-solid fa-industry text-xl text-black"></i>
        </div>
      ),
      title: "Turnover Rate",
      percentageComp: "86%",
      comparedDes: "Compared to last month",
      number: "4 times",
    },
    {
      icon: (
        <div>
          <Boxes />
          <i className="fa-solid fa-truck text-xl text-black"></i>
        </div>
      ),
      title: "Pending Purchase",
      percentageComp: "86%",
      comparedDes: "Compared to last month",
      number: "10 Orders",
    },
    {
      icon: (
        <div>
          <Boxes />
          <i className="fa-solid fa-box text-xl text-black"></i>
        </div>
      ),
      title: "Pending Sales",
      percentageComp: "86%",
      comparedDes: "Compared to last month",
      number: "20 Orders",
    },
  ];


  

  return (
    <div>
      <div className="flex space-x-4 justify-center">
        {cards.map((card, index) => (
          <OrderCards
            key={index}
            icon={card.icon}
            title={card.title}
            comparedDes={card.comparedDes}
            percentageComp={card.percentageComp}
            number={card.number}
            active={activeCard === index}
            onClick={() => handleCardClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Cards;
