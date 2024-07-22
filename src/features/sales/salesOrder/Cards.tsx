import { useState } from "react";
import OrderCards from "./OrderCards"
type Props = {}

const Cards = ({}: Props) => {
    const [activeCard, setActiveCard] = useState<rating | null>(0);
    const handleCardClick = (index: rating) => {
        setActiveCard(index);
      };
  const cards = [
    {
      icon: <i className="fa-solid fa-cart-shopping text-xl text-black"></i>,
      title: "Order placed",
      count: "Lorem ipsum dolor sit amet",
      rating: 100,
    },
    {
      icon: <i className="fa-solid fa-cogs text-xl text-black"></i>,
      title: "Processing",
      count: "Lorem ipsum dolor sit amet",
      rating: 100,
    },
    {
      icon: <i className="fa-solid fa-industry text-xl text-black"></i>,
      title: "Manufacturing",
      count: "Lorem ipsum dolor sit amet",
      rating: 10,
    },
    {
      icon: <i className="fa-solid fa-truck text-xl text-black"></i>,
      title: "Dispatch",
      count: "Lorem ipsum dolor sit amet",
      rating: 8,
    },
    {
      icon: <i className="fa-solid fa-box text-xl text-black"></i>,
      title: "Delivered",
      count: "Lorem ipsum dolor sit amet",
      rating: 10,
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
          count={card.count}
          rating={card.rating}
          active={activeCard === index}
          onClick={() => handleCardClick(index)}
        />
      ))}
    </div>
    </div>
  )
}

export default Cards