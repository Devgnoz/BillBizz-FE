import { useEffect, useRef, useState } from "react";
import ListIcon from "../../../assets/icons/ListIcon";

type Props = React.HTMLAttributes<HTMLButtonElement> & {};

const ItemSort = ({}: Props) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
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
    { text: "Name", onClick: () => console.log("Name clicked") },
    {
      text: "Company name",
      onClick: () => console.log("Company name clicked"),
    },
    { text: "Contact", onClick: () => console.log("Contact clicked") },
    {
      text: "Receivables (BCY)",
      onClick: () => console.log("Receivables (BCY) clicked"),
    },
    {
      text: "Unused Credits (BCY)",
      onClick: () => console.log("Unused Credits (BCY) clicked"),
    },
  ];

  return (
    <div>
      <button
        onClick={toggleDropdown}
        className="text-sm py-2 px-3 w-24 flex items-center justify-between border border-gray-400 rounded-lg text-gray-400"
      >
        <ListIcon color="#565148" />
        <p className="font-medium">Sort By</p>
      </button>
      {isDropdownOpen && (
        <div
          ref={dropdownRef}
          className="absolute top-26 right-44 mt-2 w-56 bg-white shadow-xl rounded-md z-10 p-2"
        >
          <ul className="py-1 text-dropdownText">
            {dropdownItems.map((item, index) => (
              <li key={index}>
                <button
                  onClick={item.onClick}
                  className="w-full text-left px-4 py-2 flex items-center gap-2 hover:bg-orange-100 rounded-md text-sm cursor-pointer"
                >
                  {item.text}
                </button>
                {(item.text === "Name" || item.text === "Contact") && (
                  <hr className="border-dropdownBorder my-1" />
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ItemSort;
