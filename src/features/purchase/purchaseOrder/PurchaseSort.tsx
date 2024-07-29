import { useEffect, useRef, useState } from "react";
import ListIcon from "../../../assets/icons/ListIcon";
import Button from "../../../Components/Button";

type Props = {};

function PurchaseSort({}: Props) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const dropdownItems = [
    {
      text: "Purchase Order#",
      onClick: () => {
        console.log("Name clicked");
      },
    },
    {
      text: "Date",
      onClick: () => {
        console.log("Company name clicked");
      },
    },
    {
      text: "Contact",
      onClick: () => {
        console.log("Contact clicked");
      },
    },
    {
      text: "Customer Name",
      onClick: () => {
        console.log("Receivables (BCY) clicked");
      },
    },
    {
      text: "Amount",
      onClick: () => {
        console.log("Unused Credits (BCY) clicked");
      },
    },
  ];
  return (
    <div>
     <Button onClick={toggleDropdown} variant="secondary"  size="sm">
     <ListIcon color="#565148" /> <p className="text-sm font-medium text-outlineButton">Sort By</p></Button>
      {isDropdownOpen && (
        <div
          ref={dropdownRef}
          className="absolute top-26 rounded-md right-[11%] mt-3.5 w-56 bg-white shadow-xl z-10 pl-2 pr-2"
        >
          <ul className="py-1 text-dropdownText">
            {dropdownItems.map((item, index) => (
              <div key={index}>
                <li
                  onClick={item.onClick}
                  className="px-4 py-2 flex items-center gap-2 hover:bg-orange-100 rounded-md text-sm cursor-pointer"
                >
                  {item.text}
                </li>
                <div className="pl-2 pr-2">
                  {(item.text === "Purchase Order#" || item.text === "Contact") && (
                    <hr className="border-dropdownBorder" />
                  )}
                </div>
              </div>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default PurchaseSort;
