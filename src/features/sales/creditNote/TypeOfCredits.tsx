import { useState } from "react";
import BookIcon from "../../../assets/icons/BookIcon";
import BookXIcon from "../../../assets/icons/BookXIcon";
import NewspaperIcon from "../../../assets/icons/NewspaperIcon";
import LockIcon from "../../../assets/icons/LockIcon";
import FolderIcon from "../../../assets/icons/FolderIcon";
import FolderClosedIcon from "../../../assets/icons/FolderClosedIcon";

type Props = {}

function TypeOfCredits({}: Props) {
    const [selected, setSelected] = useState("All");

    const Suppliers = [
      {
        icon: <BookIcon color="#585953" />,
        title: "All",
      },
      {
        icon: <LockIcon color="#585953" />,
        title: "Locked",
      },
      {
        icon: <BookXIcon color="#585953" />,
        title: "Pending Approval",
      },
      {
        icon: <FolderIcon color="#585953" />,
        title: "Open",
      },
      {
        icon: <FolderClosedIcon color="#585953" />,
        title: "Closed",
      },
      {
        icon: <NewspaperIcon color="#585953" />,
        title: "Void",
      },
      {
        icon: <NewspaperIcon color="#585953" />,
        title: "Invoicr unassociated",
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

export default TypeOfCredits;