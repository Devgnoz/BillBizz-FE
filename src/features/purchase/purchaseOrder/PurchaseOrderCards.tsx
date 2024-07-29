import { useState } from "react";
import OrderCards from "./OrderCards"
import deliveryBox from "../../../assets/Images/delivery-box_4047598 1.png"
import van from "../../../assets/Images/Group (1).png"
import productPacking from "../../../assets/Images/product packaging (packaging the product into a box).png"
import timeSettings from "../../../assets/Images/Group.png"
import shoppingBag from "../../../assets/Images/shopping-bag_6948334 1.png"
type Props = {}

const PurchaseOrderCards = ({}: Props) => {
  const [activeCard, setActiveCard] = useState<number | null>();

  const handleCardClick = (index: number) => {
    setActiveCard(index);
  };

  const cards = [
    {
      icon: shoppingBag,
      title: "Order placed",
      count: "Lorem ipsum dolor sit amet",
      rating: 100,
    },
    {
      icon: timeSettings,
      title: "Processing",
      count: "Lorem ipsum dolor sit amet",
      rating: 100,
    },
    {
      icon: productPacking,
      title: "Packing",
      count: "Lorem ipsum dolor sit amet",
      rating: 10,
    },
    {
      icon: van,
      title: "Dispatch",
      count: "Lorem ipsum dolor sit amet",
      rating: 8,
    },
    {
      icon: deliveryBox,
      title: "Delivered",
      count: "Lorem ipsum dolor sit amet",
      rating: 10,
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
            count={card.count}
            rating={card.rating}
            active={activeCard === index}
            onClick={() => handleCardClick(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default PurchaseOrderCards;
