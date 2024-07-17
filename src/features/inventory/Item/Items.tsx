import { useState } from "react";
import BookIcon from "../../../assets/icons/BookIcon";
import BookXIcon from "../../../assets/icons/BookXIcon";
import NewspaperIcon from "../../../assets/icons/NewspaperIcon";
import OpenedBookIcon from "../../../assets/icons/OpenedBookIcon";

const Items = () => {
  const [selected, setSelected] = useState("All");

  const Items = [
    {
      icon: <BookIcon color="#585953" />,
      title: "All",
    },
    {
      icon: <OpenedBookIcon color="#585953" />,
      title: "Active Customer",
    },
    {
      icon: <BookXIcon color="#585953" />,
      title: "CRM Customer",
    },
    {
      icon: <NewspaperIcon color="#585953" />,
      title: "Duplicate Customer",
    },
    {
      icon: <NewspaperIcon color="#585953" />,
      title: "Inactive Customer",
    },
    {
      icon: <NewspaperIcon color="#585953" />,
      title: "Overdue Customer",
    },
    {
      icon: <NewspaperIcon color="#585953" />,
      title: "Unpaid Customer",
    },
  ];

  return (
    <div className="flex gap-3 py-2 justify-between">
      {Items.map((customer) => (
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

export default Items;
