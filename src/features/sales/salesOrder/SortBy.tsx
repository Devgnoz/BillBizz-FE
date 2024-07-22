import { useEffect, useRef, useState } from "react";
import ListIcon from "../../../assets/icons/ListIcon"

type Props = {}

function SortBy({}: Props) {
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
      text: "Sales Order #",
      onClick: () => {
        console.log("Import Sales Order clicked");
      },
    },
    {
      text: "Date",
      onClick: () => {
        console.log("Export Sales Order clicked");
      },
    },
    {
      text: "Contact",
      onClick: () => {
        console.log("Export Current View clicked");
      },
    },
    {
      text: "Customer Name",
      onClick: () => {
        console.log("Refresh List clicked");
      },
    },
    {
      text: "Amount",
      onClick: () => {
        console.log("Refresh List clicked");
      },
    }
  ];
  return (
    <div>
        <button onClick={toggleDropdown} className="w-[98px] h-[34.5px] text-sm flex items-center justify-center" style={{border:"0.5px solid #565148",borderRadius:"8px",color:"#565148"}}>
     <span  className="flex items-center px-2.5" style={{gap:"8px",fontWeight:"500"}}> <ListIcon color="#565148"/> Sort By</span>    
        </button>
        {isDropdownOpen && (
            <div ref={dropdownRef} className="absolute top-26 right-36 mt-2 w-48 bg-white shadow-xl z-10">
              <ul className="py-1 text-dropdownText">
                {dropdownItems.map((item, index) => (
                  <>
                  <li key={index} onClick={item.onClick} className="px-4 py-2 flex items-center gap-2 hover:bg-orange-100 rounded-md text-sm cursor-pointer">
                    {item.text}
                  </li>
                  </>
                ))}
              </ul>
            </div>
          )}
    </div>
  )
}

export default SortBy