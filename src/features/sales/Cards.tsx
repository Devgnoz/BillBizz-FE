import { useState } from "react";
import OrderCards from "./OrderCards"
type Props = {}

const Cards = ({}: Props) => {
    const [activeCard, setActiveCard] = useState<number | null>(null);
    const handleCardClick = (index: number) => {
        setActiveCard(index);
      };
  const cards = [
    {
      icon: <i className="fa-solid fa-cart-shopping text-xl text-black"></i>,
      title: "Order placed",
      description: "Lorem ipsum dolor sit amet",
      number: 100,
    },
    {
      icon: <i className="fa-solid fa-cogs text-xl text-black"></i>,
      title: "Processing",
      description: "Lorem ipsum dolor sit amet",
      number: 100,
    },
    {
      icon: <i className="fa-solid fa-industry text-xl text-black"></i>,
      title: "Manufacturing",
      description: "Lorem ipsum dolor sit amet",
      number: 10,
    },
    {
      icon: <i className="fa-solid fa-truck text-xl text-black"></i>,
      title: "Dispatch",
      description: "Lorem ipsum dolor sit amet",
      number: 8,
    },
    {
      icon: <i className="fa-solid fa-box text-xl text-black"></i>,
      title: "Delivered",
      description: "Lorem ipsum dolor sit amet",
      number: 10,
    },
  ];
  return (
    <div>
        <div className="flex space-x-4  justify-center">
      {cards.map((card, index) => (
        <OrderCards
          key={index}
          icon={card.icon}
          title={card.title}
          description={card.description}
          number={card.number}
          active={activeCard === index}
          onClick={() => handleCardClick(index)}
        />
      ))}
    </div>
    </div>
  )
}

export default Cards