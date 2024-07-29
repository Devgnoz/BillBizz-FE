import { useState, useEffect, useRef } from "react";
import ArrowDownIcon from "../../../assets/icons/ArrowDownIcon";
import ArrowUpIcon from "../../../assets/icons/ArrowUpIcon";
import RefreshIcon from "../../../assets/icons/RefreshIcon";
import Button from "../../../Components/Button";
import Ellipsis from "../../../assets/icons/Ellipsis";
import PlusCircle from "../../../assets/icons/PlusCircle";
import PurchaseOrderCards from "./PurchaseOrderCards";
import PurchaseFilterCards from "./PurchaseFilterCards";
import { Link } from "react-router-dom";
import PurchaseOrderTable from "./PurchaseOrderTable";
type Props = {};

const PurchaseOrder = ({}: Props) => {
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
      <div className="mx-5 my-4 flex items-center relative">
        <div>
          <h3 className="font-bold text-xl text-textColor">Create Purchase Order</h3>
          <p className="text-sm text-gray mt-1">
            Lorem ipsum dolor sit amet consectetur. Commodo enim odio fringilla egestas consectetur amet.
          </p>
        </div>
        <div className="ml-auto gap-3 flex items-center">
          <Link to={"/purchase/purchase-order/new"}>
          <Button variant="primary"  size="sm">
            <PlusCircle color="white"/><p className="text-sm">New Purchase Order</p>
          </Button></Link>

          <div onClick={toggleDropdown} className="cursor-pointer">
            <Ellipsis />
          </div>

         
      {isDropdownOpen && (
        <div ref={dropdownRef} className="absolute top-11 right-1.5 mt-2 w-52 p-1 bg-white shadow-2xl z-10">
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
      <div className="px-7 w-[100%] mt-4">
        <PurchaseOrderCards/>
      </div>

      <div className="px-7 mt-4">
      <div className="bg-white p-5 rounded-xl ">
      <div className="w-[100%] p-3 bg-gray-100">
        <PurchaseFilterCards/>
      </div>
      <div className="pl-5 pr-5 mt-2">
            <PurchaseOrderTable/>
            </div>
        </div>
      </div>
    </>
  );
};

export default PurchaseOrder;
