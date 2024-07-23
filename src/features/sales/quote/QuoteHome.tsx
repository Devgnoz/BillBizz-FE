import { useState, useEffect, useRef } from "react";
import ArrowDownIcon from "../../../assets/icons/ArrowDownIcon";
import ArrowUpIcon from "../../../assets/icons/ArrowUpIcon";
import RefreshIcon from "../../../assets/icons/RefreshIcon";
import Button from "../../../Components/Button";
import Ellipsis from "../../../assets/icons/Ellipsis";
import Print from "../../../Components/PrintButton";
import SortBy from "./SortBy";
import PlusCircle from "../../../assets/icons/PlusCircle";
import QuoteCustomers from "./QuoteCustomers";
import QuoteTable from "./QuoteTable";
import SearchBar from "../../../Components/SearchBar";

type Props = {};

const QuoteHome = ({}: Props) => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const ellipsisRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node) &&
      ellipsisRef.current &&
      !ellipsisRef.current.contains(event.target as Node)
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
      icon: <ArrowDownIcon />,
      text: "Import Quote",
      onClick: () => {
        console.log("Import Sales Order clicked");
      },
    },
    {
      icon: <ArrowUpIcon />,
      text: "Export Quote",
      onClick: () => {
        console.log("Export Sales Order clicked");
      },
    },
    {
      icon: <ArrowUpIcon />,
      text: "Export Current View",
      onClick: () => {
        console.log("Export Current View clicked");
      },
    },
    {
      icon: <RefreshIcon color="#4B5C79" />,
      text: "Refresh List",
      onClick: () => {
        console.log("Refresh List clicked");
      },
    },
  ];

  return (
    <div className="mx-12 my-4 overflow-x-hidden">
      <div className="flex items-center relative">
        <div>
          <h3 className="font-bold text-xl text-textColor">Create Sales Quote</h3>
          <p className="text-sm text-gray mt-1">
            Lorem ipsum dolor sit amet consectetur. Commodo enim odio fringilla egestas consectetur amet.
          </p>
        </div>
        <div className="ml-auto gap-3 flex items-center relative">
          <Button variant="primary" size="sm">
            <PlusCircle color="white" />
            <p className="text-sm">New Quote</p>
          </Button>

          <div
            onClick={toggleDropdown}
            className="cursor-pointer"
            ref={ellipsisRef}
          >
            <Ellipsis />
          </div>

          {isDropdownOpen && (
            <div
              ref={dropdownRef}
              className="absolute top-full right-0 mt-2 w-52 p-1 bg-white shadow-2xl z-10"
            >
              <ul className="py-1 text-dropdownText">
                {dropdownItems.map((item, index) => (
                  <div key={index}>
                    <li
                      onClick={item.onClick}
                      className="px-4 py-2 flex items-center gap-2 hover:bg-orange-100 rounded-md text-sm cursor-pointer"
                    >
                      {item.icon}
                      {item.text}
                    </li>
                    {item.text !== "Refresh List" && (
                      <div className="pl-2 pr-2">
                        <hr className="border-dropdownBorder" />
                      </div>
                    )}
                  </div>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="bg-white p-5 rounded-xl px-5 mt-4">
        <div className="w-full p-3 bg-gray-100 overflow-x-hidden">
          <QuoteCustomers />
        </div>
        <div className="flex pl-3 pr-3 items-center gap-5">
          <div className="w-[90%]">
            <SearchBar onSearchChange={setSearchValue} searchValue={searchValue} placeholder="Search Quote" />
          </div>
          <SortBy />
          <Print />
        </div>
        <div className="p-3">
          {/* table */}
          <QuoteTable />
        </div>
      </div>
    </div>
  );
};

export default QuoteHome;
