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
      title: "Total Suppliers",
      count: "1500",
      rating: "12,95",
    },
    {
      icon: <i className="fa-solid fa-cogs text-xl text-black"></i>,
      title: "New Suppliers",
      count: "120",
      rating: "18,95",
    },
    {
        icon: <i className="fa-solid fa-cogs text-xl text-black"></i>,
        title: "Active Suppliers",
        count: "800",
        rating: "12,95",
    },
    {
        icon: <i className="fa-solid fa-cogs text-xl text-black"></i>,
        title: "Customer Rentation Rate",
        count: "85%",
        rating: "18",
    },
    {
        icon: <i className="fa-solid fa-cogs text-xl text-black"></i>,
        title: "Suppliers Churn Rate",
        count: "15%",
        rating: "10",
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