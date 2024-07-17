import { useState } from "react";
import OrderCards from "./OrderCards"
type Props = {}

const Cards = ({}: Props) => {
    const [activeCard, setActiveCard] = useState<number | null>(0);
    const handleCardClick = (index: number) => {
        setActiveCard(index);
      };
  const cards = [
    {
      icon: <i className="fa-solid fa-cart-shopping text-xl text-black"></i>,
      title: "Total Customers",
      count: "1500",
      rating: "12,95",
    },
    {
      icon: <i className="fa-solid fa-cogs text-xl text-black"></i>,
      title: "New Customers",
      count: "120",
      rating: "18,95",
    },
    {
        icon: <i className="fa-solid fa-cogs text-xl text-black"></i>,
        title: "Active Customers",
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
        title: "Customers Churn Rate",
        count: "15%",
        rating: "10",
    },
  ];
  return (
    <div>
        <div className="flex justify-between">
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