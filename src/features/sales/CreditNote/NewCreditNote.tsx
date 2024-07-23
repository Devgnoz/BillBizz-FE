import{ useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import CheveronLeftIcon from "../../../assets/icons/CheveronLeftIcon";
import CehvronDown from "../../../assets/icons/CehvronDown";
import SearchBar from "../../../Components/SearchBar";
import NewCustomerModal from "../../Customer/CustomerHome/NewCustomerModal";
import PlusCircle from "../../../assets/icons/PlusCircle";
import Button from "../../../Components/Button";
import PrinterIcon from "../../../assets/icons/PrinterIcon";
import DebitNumberPrfncModal from "../../purchase/debitNote/DebitNumberPrfncModal";
import CalendarDays from "../../../assets/icons/CalendarDays";
import NeworderTable from "../../purchase/purchaseOrder/NeworderTable";
import SalesPersone from "./SalesPersone";

const NewCreditNote = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [openDropdownIndex, setOpenDropdownIndex] = useState<string | null>(null);

  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = (key: string | null) => {
    setOpenDropdownIndex(key === openDropdownIndex ? null : key);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
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
    <div className="mx-5 my-4">
      <div className="flex gap-5">
        <Link to={"/sales/credit-note"}>
          <div className="flex justify-center items-center h-11 w-11 bg-tertiary_main rounded-full">
            <CheveronLeftIcon />
          </div>
        </Link>
        <div className="flex justify-center items-center">
          <h4 className="font-bold text-xl text-textColor">Credit Note</h4>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4 py-5">
        <div className="bg-secondary_main p-5 min-h-max rounded-xl relative col-span-8">
          <div className="grid grid-cols-2 gap-4 mt-5">
            <div>
              <label className="block text-sm mb-1 text-labelColor">
                Customer Name
              </label>
              <div
                className="relative w-full"
                onClick={() => toggleDropdown("customer")}
              >
                <div className="items-center flex appearance-none w-full h-9 text-zinc-400 bg-white border border-inputBorder text-sm pl-2 pr-8 rounded-md leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                  <p>Select a customer</p>
                </div>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <CehvronDown color="gray" />
                </div>
              </div>
              {openDropdownIndex === "customer" && (
                <div
                  ref={dropdownRef}
                  className="absolute z-10 bg-white shadow rounded-md mt-1 p-2 w-full space-y-1"
                >
                  <SearchBar
                    searchValue={searchValue}
                    onSearchChange={setSearchValue}
                    placeholder="Select Customer"
                  />
                  <div className="grid grid-cols-12 gap-1 p-2 hover:bg-gray-100 cursor-pointer border border-slate-400 rounded-lg bg-lightPink">
                    <div className="col-span-2 flex items-center justify-center">
                      <img
                        src="https://i.postimg.cc/MHdYrGVP/Ellipse-43.png"
                        alt=""
                      />
                    </div>
                    <div className="col-span-10 flex">
                      <div>
                        <p className="font-bold text-sm">Smart world</p>
                        <p className="text-xs text-gray-500">
                          Phone: 9643287899
                        </p>
                      </div>
                      <div className="ms-auto text-2xl cursor-pointer relative -mt-2 pe-2">
                        &times;
                      </div>
                    </div>
                  </div>
                  <div className="hover:bg-gray-100 cursor-pointer border border-slate-400 rounded-lg py-3">
                    <NewCustomerModal page="purchase" />
                  </div>
                </div>
              )}
            </div>
            <div className="relative w-full">
              <label className="block text-sm mb-1 text-labelColor">
                Reason
              </label>
              <input
                name=""
                id=""
                disabled
                className="block appearance-none w-full h-9 text-zinc-400 bg-white border border-inputBorder text-sm pl-2 pr-8 rounded-md leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              />
            </div>

            <div className="w-full">
              <label className="block text-sm mb-1 text-labelColor">
                Reference
              </label>
              <input
                name=""
                id=""
                placeholder="Value"
                className="border-inputBorder w-full text-sm border rounded text-dropdownText p-2 h-9 mt-2"
              />
            </div>
            <div className="relative w-full">
              <label className="block text-sm mb-1 text-labelColor">
                Credit Note
              </label>
              <input
                name=""
                id=""
                disabled
                className="block mt-3 appearance-none w-full h-9 text-zinc-400 bg-white border border-inputBorder text-sm pl-2 pr-8 rounded-md leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              />
              <div className="mt-2">
                <DebitNumberPrfncModal />
              </div>
            </div>
            <div>
              <label className="block text-sm mb-1  text-labelColor">
                Credit Note Date
              </label>
              <div className="relative w-full ">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center px-2 text-gray-700">
                  <CalendarDays color="gray" height={20} width={20} />
                </div>
                <input
                  type="text"
                  className="block mt-2 appearance-none w-full h-9 text-zinc-400 bg-white border border-inputBorder text-sm pl-2 pr-8 rounded-md leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                />
              </div>
            </div>
           <SalesPersone/>
          </div>

          <div className="w-full mt-4">
            <label className="block text-sm mb-1 text-labelColor">
              Subject
            </label>
            <input
              name=""
              id=""
              placeholder="Enter subject within 250 characters"
              className="border-inputBorder w-full text-sm border rounded text-dropdownText p-2 h-9 mt-2"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
              <label className="block text-sm mb-1 text-labelColor">
                Warehouse
              </label>
              <div className="relative w-full">
                <select className="block appearance-none mt-2 w-full h-9  text-zinc-400 bg-white border border-inputBorder text-sm  pl-2 pr-8 rounded-md leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                  <option value="" className="text-gray">
                    Select Warehouse
                  </option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <CehvronDown color="gray" />
                </div>
              </div>
            </div>
            <div className="relative w-full">
              <label className="block text-sm mb-1 text-labelColor">
                Price List
              </label>
              <div className="relative w-ful pt-1">
                <div
                  className="items-center flex appearance-none w-full h-9 text-zinc-400 bg-white border border-inputBorder text-sm pl-2 pr-8 rounded-md leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  onClick={() => toggleDropdown("pricelist")}
                >
                  <p>Select Price List</p>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <CehvronDown color="gray" />
                  </div>
                </div>
             
              </div>
            </div>
          </div>

          <div className="mt-4">
            </div>
          <div className="mt-9">
            <p className="font-bold text-base">Add Item</p>
            <NeworderTable />
          </div>
          <button className="mt-1">
            <p className="text-darkRed my-3 text-sm flex gap-2 items-center">
              <PlusCircle color="darkRed" />
              <b> Add Item</b>
            </p>
          </button>{" "}
          <br />

          <div className="mt-5">
            <label htmlFor="" className="">
              Add Note
              <input
                name=""
                id=""
                placeholder="Note"
                className="border-inputBorder w-full text-sm border rounded  p-2 h-[57px] mt-2 "
              />
            </label>
          </div>
          <div className="mt-4">
            <label htmlFor="" className="">
              Terms & Conditions
              <input
                name=""
                id=""
                placeholder="Add Terms & Conditions of your business"
                className="border-inputBorder w-full text-sm border rounded p-2 h-[57px] mt-2"
              />
            </label>
          </div>
        </div>

        <div className=" min-h-max rounded-xl relative col-span-4 text-sm">
        <div className="bg-secondary_main p-5 min-h-max rounded-xl relative ">
            <div className="grid grid-cols-12 pb-4  text-dropdownText border-b-2 border-slate-200">
              <div className="col-span-9 mt-5">
                <p>Untaxed Amount</p>
              </div>
              <div className="col-span-3 mt-5">
                <p className="text-xl font-bold">RS 0.00</p>
              </div>

              <div className="col-span-9 mt-1">
                <p>SGST</p>
              </div>
              <div className="col-span-3 mt-1">
                <p className="text-base">RS 0.00</p>
              </div>

              <div className="col-span-9">
                <p> CGST</p>
              </div>
              <div className="col-span-3">
                <p className="text-base">RS 0.00</p>
              </div>

              <div className="col-span-9 mt-1">
                <p className="font-bold text-base text-black">Total</p>
              </div>
              <div className="col-span-3 mt-1">
                <p className="text-base font-bold">RS 0.00</p>
              </div>
            </div>

            <div className="flex gap-4 m-5 justify-end">
              {" "}
              <Button variant="secondary" size="sm">
                Cancel
              </Button>
              <Button variant="secondary" size="sm">
                <PrinterIcon height={18} width={18} color="currentColor" />
                Print
              </Button>
              <Button variant="primary" size="sm">
                Save & send
              </Button>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewCreditNote;
