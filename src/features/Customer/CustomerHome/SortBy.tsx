import { useEffect, useRef, useState } from "react";
import ListIcon from "../../../assets/icons/ListIcon";

type Props = {};

function SortBy({}: Props) {
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
      text: "Name",
      onClick: () => {
        console.log("Name clicked");
      },
    },
    {
      text: "Company name",
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
      text: "Receivables (BCY)",
      onClick: () => {
        console.log("Receivables (BCY) clicked");
      },
    },
    {
      text: "Unused Credits (BCY)",
      onClick: () => {
        console.log("Unused Credits (BCY) clicked");
      },
    },
  ];
  return (
    <div>
      <button
        onClick={toggleDropdown}
        className="w-[98px] h-[34.5px] text-sm flex items-center justify-center"
        style={{
          border: "0.5px solid #565148",
          borderRadius: "8px",
          color: "#565148",
        }}
      >
        <span
          className="flex items-center px-2.5"
          style={{ gap: "8px", fontWeight: "500" }}
        >
          <ListIcon color="#565148" /> Sort By
        </span>
      </button>
      {isDropdownOpen && (
        <div
          ref={dropdownRef}
          className="absolute top-26 rounded-md right-44 mt-2 w-56 bg-white shadow-xl z-10 pl-2 pr-2"
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
                  {(item.text === "Name" || item.text === "Contact") && (
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

export default SortBy;
