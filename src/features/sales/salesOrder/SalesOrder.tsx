import { useState, useEffect, useRef } from "react";
import ArrowDownIcon from "../../../assets/icons/ArrowDownIcon";
import ArrowUpIcon from "../../../assets/icons/ArrowUpIcon";
import RefreshIcon from "../../../assets/icons/RefreshIcon";
import Button from "../../../Components/Button";
import Ellipsis from "../../../assets/icons/Ellipsis";
import SalesOrderCard from "./SalesOrderCard"
import SearchBar from "../SearchBar";
import Print from "./Print";
import SortBy from "./SortBy";
import SalesOrderCustomers from "../salesOrder/SalesOrderCustomers"
import PlusCircle from "../../../assets/icons/PlusCircle";
import SalesTable from "./SalesTable"
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
          <h3 className="font-bold text-xl text-textColor">Create Sales Order</h3>
          <p className="text-sm text-gray mt-1">
            Lorem ipsum dolor sit amet consectetur. Commodo enim odio fringilla egestas consectetur amet.
          </p>
        </div>
        <div className="ml-auto gap-3 flex items-center">
          <Button variant="primary"  size="sm">
            <PlusCircle color="white"/><p className="text-sm">New Sales Order</p>
          </Button>

          <div onClick={toggleDropdown} className="cursor-pointer">
            <Ellipsis />
          </div>

         
      {isDropdownOpen && (
        <div ref={dropdownRef} className="absolute top-16 right-10 mt-2 w-52 p-1 bg-white shadow-2xl z-10">
          <ul className="py-1 text-dropdownText">
            {dropdownItems.map((item, index) => (
              <div key={index}>
                <li onClick={item.onClick} className="px-4 py-2 flex items-center gap-2 hover:bg-orange-100 rounded-md text-sm cursor-pointer">
                  {item.icon}
                  {item.text}
                </li>
                {item.text !== "Refresh List" && (
                  <div className="pl-2 pr-2">
                    <hr className='border-dropdownBorder' />
                  </div>
                )}
              </div>
            ))}
          </ul>
        </div>
      )}
        </div>
      </div>
      <div className="pl-5 pr-5 w-[100%]">
        <SalesOrderCard/>
      </div>

      <div className="px-5 mt-4">
      <div className="bg-white p-5 rounded-xl ">
      <div className="w-[100%] p-3 bg-gray-100">
          <SalesOrderCustomers/>
      </div>
      <div className="flex pl-3 pr-3 items-center gap-5">
        <div className="w-[80%]">
          <SearchBar placeholder="Search Sales Order"/>
        </div>
        <SortBy/>
        <Print/>
      </div>
      <div className="p-5">
            {/* table */}
          <SalesTable/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sales;
