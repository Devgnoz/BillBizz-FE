import { useEffect, useRef, useState } from 'react';
import Ellipsis from '../assets/icons/Ellipsis';
import HandShakeIcon from '../assets/icons/HandShakeIcon';
import EyeIcon from '../assets/icons/EyeIcon';
import PackageIcon from '../assets/icons/PackageIcon';
import ClipboardIcon from '../assets/icons/ClipboardIcon';
import BrandModal from '../features/inventory/BrandModal';

type Props = {};

function Inventory({}: Props) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isBrandModalOpen, setIsBrandModalOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      if (!isBrandModalOpen) {
        setIsDropdownOpen(false);
      }
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isBrandModalOpen]);

  const dropdownItems = [
    {
      icon: <HandShakeIcon color='#4B5C79' />,
      text: "View Manufacture",
      onClick: () => {
        console.log("View Manufacture clicked");
      },
    },
    {
      icon: <EyeIcon color='#4B5C79' />,
      text: "View Brand",
      onClick: () => {
        setIsBrandModalOpen(true);
      },
    },
    {
      icon: <PackageIcon color='#4B5C79' />,
      text: "View Rack",
      onClick: () => {
        console.log("View Rack clicked");
      },
    },
    {
      icon: <ClipboardIcon color='#4B5C79' />,
      text: "View Category",
      onClick: () => {
        console.log("View Category clicked");
      },
    },
  ];

  return (
    <div className="p-3 m-5 w-[95%] h-[50px] rounded-full bg-lightBeige">
      <div className="flex justify-end">
        <div onClick={toggleDropdown} className="cursor-pointer">
          <Ellipsis />
        </div>
        {isDropdownOpen && (
          <div ref={dropdownRef} className="absolute top-32 right-16 mt-2 w-56 bg-white shadow-xl z-10" style={{ borderRadius: "4px", padding: "8px" }}>
            <ul className="text-dropdownText">
              {dropdownItems.map((item, index) => (
                <>
                  <li key={index} onClick={item.onClick} className="px-4 py-2 flex items-center gap-2 hover:bg-orange-100 rounded-md text-sm cursor-pointer">
                    {item.icon}
                    {item.text}
                  </li>
                  {index < dropdownItems.length - 1 && <hr className='border-dropdownBorder' />}
                </>
              ))}
            </ul>
          </div>
        )}
      </div>
      {isBrandModalOpen && <BrandModal ref={modalRef} onClose={() => setIsBrandModalOpen(false)} />}
    </div>
  );
}

export default Inventory;
