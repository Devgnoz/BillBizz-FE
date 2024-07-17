import AllClients from "../../../assets/Images/All-clients.png"
import Active from "../../../assets/Images/Active clients.png"
import Inactive from "../../../assets/Images/client_5895553 2.png"
import { useState } from "react";
import CustomerCard from "./CustomerCard";
type Props = {}

function Cards({}: Props) {
    const customerCardsData = [ 
        {
          icon: AllClients,
          title: "All clients",
          description: "Lorem ipsum dolor sit amet",
          number: 120,
        },
        {
          icon: Active,
          title: "Active",
          description: "Lorem ipsum dolor sit amet",
          number: 75,
        },
        {
          icon:Inactive,
          title: "Inactive",
          description: "Lorem ipsum dolor sit amet",
          number: 45,
        },
      ];
      const [activeCardCC, setActiveCardCC] = useState<number | null>(0);
      const handleCardClickCC =(index:number)=>{
        setActiveCardCC(index)
      }
  return (
    <div className="flex space-x-4 justify-center px-6 mt-2">
         {customerCardsData.map((card, index) => (
        <CustomerCard
          key={index}
          icon={card.icon}
          title={card.title}
          description={card.description}
          number={card.number}
          active={activeCardCC === index}
          onClick={() => handleCardClickCC(index)}
        />
      ))}
    </div>
  )
}

export default Cards