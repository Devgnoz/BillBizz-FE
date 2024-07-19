import { useState } from "react";
import BookIcon from "../../../assets/icons/BookIcon";
import BookXIcon from "../../../assets/icons/BookXIcon";
import NewspaperIcon from "../../../assets/icons/NewspaperIcon";
import OpenedBookIcon from "../../../assets/icons/OpenedBookIcon";

const SupplierRectangleStrip = () => {
  const [selected, setSelected] = useState("All");

  const Suppliers = [
    {
      icon: <BookIcon color="#585953" />,
      title: "All",
    },
    {
      icon: <OpenedBookIcon color="#585953" />,
      title: "Active Supplier",
    },
    {
      icon: <BookXIcon color="#585953" />,
      title: "CRM Supplier",
    },
    {
      icon: <NewspaperIcon color="#585953" />,
      title: "Duplicate Supplier",
    },
    {
      icon: <NewspaperIcon color="#585953" />,
      title: "Inactive Supplier",
    },
    {
      icon: <NewspaperIcon color="#585953" />,
      title: "Overdue Supplier",
    },
    {
      icon: <NewspaperIcon color="#585953" />,
      title: "Unpaid Supplier",
    },
  ];

  return (
    <div className="flex gap-3 justify-between">
      {Suppliers.map((supplier) => (
        <button
          key={supplier.title}
          onClick={() => setSelected(supplier.title)}
          className={`flex items-center gap-2 p-2 w-[100%] justify-center  rounded ${
            selected === supplier.title ? "bg-WhiteIce" : "bg-white"
          }`}
          style={{ border: "1px solid #DADBDD" }}
        >
          {supplier.icon}
          <span
            style={{ color: "#4B5C79", fontSize: "12px", fontWeight: "600" }}
          >
            {supplier.title}
          </span>
        </button>
      ))}
    </div>
  );
};

export default SupplierRectangleStrip;
