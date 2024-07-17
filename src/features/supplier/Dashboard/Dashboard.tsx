import React, { useEffect, useRef, useState } from 'react'
import Button from '../../../Components/Button'
import PlusCircle from '../../../assets/icons/PlusCircle'
import Ellipsis from '../../../assets/icons/Ellipsis'
import RefreshIcon from '../../../assets/icons/RefreshIcon'
import ArrowUpIcon from '../../../assets/icons/ArrowUpIcon'
import ArrowDownIcon from '../../../assets/icons/ArrowDownIcon'
import Cards from './Cards'
import TopSuppliers from './TopSuppliers'
import SuppliersRetentionRate from './SuppliersRetentionRate'
import RepeatPurchaseRate from './RepeatPurchaseRate'
import AvaragePurchase from './AvaragePurchase'
type Props = {}

function Dashboard({}: Props) {
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
        text: "Import Supplier",
        onClick: () => {
          console.log("Import Sales Order clicked");
        },
      },
      {
        icon:<ArrowUpIcon/>,
        text: "Export Supplier",
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
    <div className='p-6 space-y-8'>
    <div className=" flex  items-center relative">
        <div>
          <h3 className="font-bold text-2xl text-textColor">Supplier</h3>
          <p className="text-sm text-gray mt-1">
            Lorem ipsum dolor sit amet consectetur. Commodo enim odio fringilla egestas consectetur amet.
          </p>
        </div>
        <div className="ml-auto gap-3 flex items-center">
          <Button variant="secondary" className="flex items-center justify-center" size="xl">
            <span className="flex items-center px-2.5"><PlusCircle color="white"/> &nbsp;Add Supplier</span>
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
      {/* Cards */}
      <Cards/>
      {/* Top suppliers and supplier rentaion rate overtime */}
      <div className='grid grid-cols-3 gap-5'>
          <div className='flex justify-center '>
            <TopSuppliers/>
          </div>
          <div className='col-span-2 flex justify-center'>
            <SuppliersRetentionRate/>
          </div>
          <div className='col-span-2 flex justify-center '>
          <RepeatPurchaseRate/>
          </div>
          <div className=' flex justify-center'>
          <AvaragePurchase/>
          </div>
      </div>
      </div>
    
      
    </>
  )
}

export default Dashboard