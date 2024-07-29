import { useState } from "react";
import BookIcon from "../../../assets/icons/BookIcon";
import BookXIcon from "../../../assets/icons/BookXIcon";
import NewspaperIcon from "../../../assets/icons/NewspaperIcon";
import OpenedBookIcon from "../../../assets/icons/OpenedBookIcon";

const BillsType = () => {
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
      title: "Open",
    },
    {
      icon: <NewspaperIcon color="#585953" />,
      title: "Unpaid",
    },
    {
      icon: <NewspaperIcon color="#585953" />,
      title: "Partially paid",
    },
    {
      icon: <NewspaperIcon color="#585953" />,
      title: "Overdue",
    },
    {
      icon: <NewspaperIcon color="#585953" />,
      title: "Paid",
    },
  ];

  return (
    <div className="flex gap-3 justify-between">
      {Suppliers.map((customer) => (
        <button
          key={customer.title}
          onClick={() => setSelected(customer.title)}
          className={`flex items-center gap-2 p-2 w-[153px] justify-center  rounded ${
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

export default BillsType;
