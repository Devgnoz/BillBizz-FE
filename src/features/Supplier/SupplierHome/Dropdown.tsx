import { useEffect, useRef, useState } from "react";
import Ellipsis from "../../../assets/icons/Ellipsis";
import ArrowDownIcon from "../../../assets/icons/ArrowDownIcon";
import ArrowUpIcon from "../../../assets/icons/ArrowUpIcon";
import RefreshIcon from "../../../assets/icons/RefreshIcon";

type Props = {}

function Dropdown({ }: Props) {
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
      icon: <ArrowDownIcon />,
      text: "Import Sales Order",
      onClick: () => {
        console.log("Import Sales Order clicked");
      },
    },
    {
      icon: <ArrowUpIcon />,
      text: "Export Sales Order",
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
    <>
      <div onClick={toggleDropdown} className="cursor-pointer">
        <Ellipsis />
      </div>

      {isDropdownOpen && (
        <div ref={dropdownRef} className="absolute top-16 right-6 mt-2 w-52 p-1 bg-white shadow-2xl z-10">
          <ul className="py-1 text-dropdownText">
            {dropdownItems.map((item, index) => (
              <div key={index}>
                <li onClick={item.onClick} className="px-4 py-2 flex items-center gap-2 hover:bg-orange-100 rounded-md text-sm cursor-pointer">
                  {item.icon}
                  {item.text}
                </li>
                {item.text === "Export Current View" && (
                  <div className="pl-2 pr-2">
                    <hr className='border-dropdownBorder' />
                  </div>
                )}
              </div>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default Dropdown;
