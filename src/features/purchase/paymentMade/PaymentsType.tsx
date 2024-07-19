import { useState } from "react";
import BookIcon from "../../../assets/icons/BookIcon";
import OpenedBookIcon from "../../../assets/icons/OpenedBookIcon";
import PlusCircle from "../../../assets/icons/PlusCircle";

const PaymentsType = () => {
  const [selected, setSelected] = useState("All");

  const Suppliers = [
    {
      icon: <BookIcon color="#585953" />,
      title: "All",
    },
  ];

  return (
    <div className="flex gap-3">
     <div className="flex gap-3 w-[15%] justify-between">
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
    <div className="flex gap-3 w-[15%] justify-between">
        <button
          className="flex items-center gap-2 p-2 w-[100%] justify-center bg-white rounded "          style={{ border: "1px solid #DADBDD" }}
        >
          <PlusCircle color="#820000" />
          <span
            style={{ color: "#820000", fontSize: "12px", fontWeight: "600" }}
          >
            New Custom View
          </span>
        </button>
    </div>
    </div>
   
  );
};

export default PaymentsType;
