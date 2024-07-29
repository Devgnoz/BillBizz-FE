import { useState } from "react";
import BookIcon from "../../../assets/icons/BookIcon";
import BookXIcon from "../../../assets/icons/BookXIcon";
import NewspaperIcon from "../../../assets/icons/NewspaperIcon";
import OpenedBookIcon from "../../../assets/icons/OpenedBookIcon";

const PurchaseFilterCards = () => {
  const [selected, setSelected] = useState("All");

  const Suppliers = [
    {
      icon: <BookIcon color="#585953" />,
      title: "All",
    },
    {
      icon: <OpenedBookIcon color="#585953" />,
      title: "Draft",
    },
    {
      icon: <BookXIcon color="#585953" />,
      title: "Pending Approval",
    },
    {
      icon: <NewspaperIcon color="#585953" />,
      title: "Issued",
    },
    {
      icon: <NewspaperIcon color="#585953" />,
      title: "Billed",
    },
    {
      icon: <NewspaperIcon color="#585953" />,
      title: "Partially Billed",
    },
    {
      icon: <NewspaperIcon color="#585953" />,
      title: "Closed",
    },
  ];

  return (
    <div className="flex gap-3 justify-between">
      {Suppliers.map((customer) => (
        <button
          key={customer.title}
          onClick={() => setSelected(customer.title)}
          className={`flex items-center gap-2 p-2 w-[100%] justify-center  rounded ${
            selected === customer.title ? "bg-WhiteIce" : "bg-white"
          }`}
          style={{ border: "1px solid #DADBDD" }}
        >
          {customer.icon}
          <span
            style={{ color: "#4B5C79", fontSize: "12px", fontWeight: "600" }}
          >
            {customer.title}
          </span>
        </button>
      ))}
    </div>
  );
};

export default PurchaseFilterCards;
