import { useEffect, useRef, useState } from "react"
import { newPurchaseOrderTableHead } from "../../assets/constants"
import Pen from "../../assets/icons/Pen"
import TrashCan from "../../assets/icons/TrashCan"
import SearchBar from "../../Components/SearchBar"
import CehvronDown from "../../assets/icons/CehvronDown"
import CirclePlus from "../../assets/icons/circleplus"



type Props = {}

const NeworderTable = ({}: Props) => {

  const [openDropdownIndex, setOpenDropdownIndex] = useState<string | null>(
    null
  );
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = (key: string | null) => {
    setOpenDropdownIndex(key === openDropdownIndex ? null : key);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setOpenDropdownIndex(null);
    }
  };

  useEffect(() => {
    if (openDropdownIndex !== null) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openDropdownIndex]);
    
  return (
    <div>
          <div className="rounded-lg  border-2 border-tableBorder mt-5">
            <table className="min-w-full bg-white rounded-lg   relative pb-4 border-dropdownText">
              <thead className="text-[12px] text-center text-dropdownText ">
                <tr className="bg-lightPink ">
                  {newPurchaseOrderTableHead.map((item, index) => (
                    <th
                      className="py-2 px-4 font-medium border-b border-tableBorder relative"
                      key={index}
                    >
                      {item}
                    </th>
                  ))}{" "}
                </tr>
              </thead>
              <tbody className="text-dropdownText text-center text-[13px] relative">
                <tr className="relative ">
                  <td className=" border-y border-tableBorder">
                  <div
                  className="relative w-full"
                  onClick={() => toggleDropdown("supplier")}
                >
                  <div className="items-center cursor-pointer flex appearance-none w-full h-9 text-zinc-400 bg-white   text-sm pl-2  rounded-md leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                    <p>Type or click</p>
                  </div>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <CehvronDown color="gray" />
                  </div>
                </div>
                {openDropdownIndex === "supplier" && (
                  <div
                    ref={dropdownRef}
                    className="absolute z-10 bg-white  shadow  rounded-md mt-1 p-2 -m-9 w-[50%] space-y-1"
                  >
                    <SearchBar />
                    <div className="grid grid-cols-12 gap-1 p-2 hover:bg-gray-100 cursor-pointe border border-slate-400 rounded-lg bg-lightPink">
                      <div className="col-span-2 flex items-center justify-center">
                        <img
                          src="https://i.postimg.cc/MHdYrGVP/Ellipse-43.png"
                          alt=""
                        />
                      </div>
                      <div className="col-span-10 flex ">
                        <div className="text-left">
                          <p className="font-bold text-sm text-black">Boat Airpords 148,Black</p>
                          <p className="text-xs text-gray-500">
                            Rate:Rs.2000.00
                          </p>
                        </div>
                        <div className="ms-auto text-xl cursor-pointer relative -mt-2">
                          &times;
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-12 gap-1 p-2 hover:bg-gray-100 cursor-pointe border border-slate-400 rounded-lg py-4">
                      <div className="col-span-2 flex items-center justify-center">
                       <CirclePlus color="darkRed" size="18"/>
                      </div>
                      <div className="col-span-10    text-sm flex gap-2 items-center">
                      <p className="text-darkRed"><b>Add new Customer</b></p>
                      <div className="ms-auto text-xl cursor-pointer relative -mt-2">
                          &times;
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                  </td>
                  <td className="py-2.5 px-4 border-y border-tableBorder">2</td>
                  <td className="py-2.5 px-4 border-y border-tableBorder">0.00</td>
                  <td className="py-2.5 px-4 border-y border-tableBorder">0</td>
                  <td className="py-2.5 px-4 border-y border-tableBorder">0</td>
                  <td className="cursor-pointer">
                   <div className="flex items-center justify-center gap-3">
                        <Pen color="green" />
                        <TrashCan color="red" />
                   </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
    </div>
  )
}

export default NeworderTable