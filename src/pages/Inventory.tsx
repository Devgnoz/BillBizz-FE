import { useState, useEffect, useRef } from "react";
import Ellipsis from "../assets/icons/Ellipsis";
import ClipboardIcon from "../assets/icons/ClipboardIcon";
import PackageIcon from "../assets/icons/PackageIcon";
import EyeIcon from "../assets/icons/EyeIcon";
import HandShakeIcon from "../assets/icons/HandShakeIcon";
import DashboardHome from "../features/inventory/Dashboard/DashboardHome";
import RackModal from "../features/inventory/Rack/RackModal";
import Category from "../features/inventory/Category/Category";
import BrandModal from "../features/inventory/Brand/BrandModal";

type Props = {};

const Inventory = ({}: Props) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isBrandModalOpen, setIsBrandModalOpen] = useState(false);
  const [isRackModalOpen, setIsRackModalOpen] = useState(false);
  const [openCategoryModal, setOpenCategoryModal] = useState(false);

  const toggleCategoryModal = () => {
    setOpenCategoryModal(!openCategoryModal);
  };
  const dropdownRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
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
      icon: <HandShakeIcon color="#4B5C79" />,
      text: "View Manufacture",
      onClick: () => {
        console.log("View Manufacture clicked");
      },
    },
    {
      icon: <EyeIcon color="#4B5C79" />,
      text: "View Brand",
      onClick: () => {
        setIsBrandModalOpen(true);
      },
    },
    {
      icon: <PackageIcon color="#4B5C79" />,
      text: "View Rack",
      onClick: () => {
        setIsRackModalOpen(true);
      },
    },
    {
      icon: <ClipboardIcon color="#4B5C79" />,
      text: "View Category",
      onClick: () => {
        setOpenCategoryModal(true);
      },
    },
  ];

  return (
    <>
      <div className="p-3 m-5 h-[50px] rounded-full bg-lightBeige">
        <div className="flex justify-end">
          <div onClick={toggleDropdown} className="cursor-pointer">
            <Ellipsis />
          </div>

          {isDropdownOpen && (
            <div
              ref={dropdownRef}
              className="absolute top-44 right-16 mt-2 w-[15.8%] bg-white shadow-xl z-10"
              style={{ borderRadius: "4px", padding: "8px" }}
            >
              <ul className="text-dropdownText">
                {dropdownItems.map((item, index) => (
                  <div key={index}>
                    <li
                      onClick={item.onClick}
                      className="px-4 py-2 flex items-center 
                      gap-2 hover:bg-orange-100 rounded-md text-sm cursor-pointer"
                    >
                      {item.icon}
                      {item.text}
                    </li>
                    {index < dropdownItems.length - 1 && (
                      <hr className="border-dropdownBorder" />
                    )}
                  </div>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {isBrandModalOpen && (
        <BrandModal ref={modalRef} onClose={() => setIsBrandModalOpen(false)} />
      )}
      {isRackModalOpen && (
        <RackModal ref={modalRef} onClose={() => setIsRackModalOpen(false)} />
      )}
      <Category isOpen={openCategoryModal} onClose={toggleCategoryModal} />
      <DashboardHome />
    </>
  );
};

export default Inventory;
