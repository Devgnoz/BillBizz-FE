import { useEffect, useRef, useState } from 'react'
import Button from '../../../Components/Button'
import ArrowDownIcon from '../../../assets/icons/ArrowDownIcon'
import ArrowUpIcon from '../../../assets/icons/ArrowUpIcon'
import Ellipsis from '../../../assets/icons/Ellipsis'
import PlusCircle from '../../../assets/icons/PlusCircle'
import RefreshIcon from '../../../assets/icons/RefreshIcon'
import AvaragePurchase from './AvaragePurchase'
import Cards from './Cards'
import CustomersRetentionRate from './CustomersRetentionRate'
import RepeatPurchaseRate from './RepeatPurchaseRate'
import TopCustomers from './TopCustomers'
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
    <div className='p-6 space-y-8 text-[#303F58]'>
    <div className=" flex  items-center relative">
        <div>
          <h3 className="font-bold text-2xl text-textColor">Customer Overview</h3>
          <p className="text-sm text-gray mt-1">
            Lorem ipsum dolor sit amet consectetur. Commodo enim odio fringilla egestas consectetur amet.
          </p>
        </div>
        <div className="ml-auto gap-3 flex items-center">
          <Button variant="primary"  size="xl">
           <PlusCircle color="white"/>
           <p className='text-[13px] font-medium'>Add Customer</p>
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
            <TopCustomers/>
          </div>
          <div className='col-span-2 flex justify-center'>
            <CustomersRetentionRate/>
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