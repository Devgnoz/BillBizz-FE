import { useState, useEffect, useRef } from "react";
import Button from "../Components/Button";
import Cards from "../features/sales/Cards";
import Ellipsis from "../assets/icons/Ellipsis";
import PlusCircle from "../assets/icons/PlusCircle";
import ArrowDownIcon from "../assets/icons/ArrowDownIcon";
import ArrowUpIcon from "../assets/icons/ArrowUpIcon";
import RefreshIcon from "../assets/icons/RefreshIcon";

type Props = {};

const Sales = ({}: Props) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
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
      icon: <ArrowDownIcon/>,
      text: "Import Sales Order",
      onClick: () => {
        console.log("Import Sales Order clicked");
      },
    },
    {
      icon:<ArrowUpIcon/>,
      text: "Export Sales Order",
      onClick: () => {
        console.log("Export Sales Order clicked");
      },
    },
    {
      icon:<ArrowUpIcon/>,
      text: "Export Current View",
      onClick: () => {
        console.log("Export Current View clicked");
      },
    },
    {
      icon:<RefreshIcon color="#4B5C79"/>,
      text: "Refresh List",
      onClick: () => {
        console.log("Refresh List clicked");
      },
    },
  ];

  return (
    <>
      <div className="p-5 flex items-center relative">
        <div>
          <h3 className="font-bold text-2xl text-textColor">Sales</h3>
          <p className="text-sm text-gray mt-1">
            Lorem ipsum dolor sit amet consectetur. Commodo enim odio fringilla egestas consectetur amet.
          </p>
        </div>
        <div className="ml-auto gap-3 flex items-center">
          <Button variant="secondary" className="flex items-center justify-center" size="xl">
            <span className="flex items-center px-2.5"><PlusCircle /> &nbsp; New Sales Order</span>
          </Button>

          <div onClick={toggleDropdown} className="cursor-pointer">
            <Ellipsis />
          </div>

          {isDropdownOpen && (
            <div ref={dropdownRef} className="absolute top-16 right-4 mt-2 w-48 bg-white shadow-xl z-10">
              <ul className="py-1 text-dropdownText">
                {dropdownItems.map((item, index) => (
                  <li key={index} onClick={item.onClick} className="px-4 py-2 flex items-center gap-2 hover:bg-orange-100 rounded-md text-sm cursor-pointer">
                    {item.icon }
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="pl-5 pr-5 w-[100%]">
        <Cards />
      </div>
    </>
  );
};

export default Sales;
