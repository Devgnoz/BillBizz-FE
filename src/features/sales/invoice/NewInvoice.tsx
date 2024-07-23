import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../../Components/Button";
import SearchBar from "../../../Components/SearchBar";
import CehvronDown from "../../../assets/icons/CehvronDown";
import CheveronLeftIcon from "../../../assets/icons/CheveronLeftIcon";
import PlusCircle from "../../../assets/icons/PlusCircle";
import PrinterIcon from "../../../assets/icons/PrinterIcon";
import SettingsIcons from "../../../assets/icons/SettingsIcon";
import NewCustomerModal from "../../Customer/CustomerHome/NewCustomerModal";
import NewInvoiceTable from "./NewInvoiceTable";

type Props = {};

const NewInvoice = ({}: Props) => {
  const [searchValue, setSearchValue] = useState<string>("");
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
    <div className="px-8">
      <div className="flex gap-5">
        <Link to={"/sales/invoice"}>
          <div className="flex justify-center items-center h-11 w-11 bg-tertiary_main rounded-full">
            <CheveronLeftIcon />
          </div>
        </Link>
        <div className="flex justify-center items-center">
          <h4 className="font-bold text-xl text-textColor ">
            New Invoice
          </h4>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4 py-5 rounded-lg">
        <div className="col-span-8">
          <div className="bg-secondary_main p-5 min-h-max rounded-xl relative ">
            <p className="text-textColor text-xl font-bold">
              Enter Invoice details
            </p>

            <div className=" mt-5 space-y-4">
              <div className="grid grid-cols-12 gap-4">
              <div className="col-span-5 relative">
  <label className="block text-sm mb-1 text-labelColor">
    Customer Name
  </label>
  <div
    className="relative w-full"
    onClick={() => toggleDropdown("customer")}
  >
    <div className="items-center flex appearance-none w-full h-9 text-zinc-400 bg-white border border-inputBorder text-sm pl-2 pr-8 rounded-md leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
      <p>Select Customer</p>
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
            <p className="font-bold text-sm">Joseph</p>
            <p className="text-xs text-gray-500">Phone: 9643287899</p>
          </div>
          <div className="ms-auto text-2xl cursor-pointer relative -mt-2 pe-2">
            &times;
          </div>
        </div>
      </div>
      <div className="hover:bg-gray-100 grid grid-col-12 h-12 items-center cursor-pointer border border-slate-400 rounded-lg">
        <NewCustomerModal page="purchase" />
      </div>
    </div>
  )}
</div>

                <div className="col-span-7">
                  <label className="block text-sm mb-1 text-labelColor">
                    Reference#
                  </label>
                  <input
                    placeholder="reference"
                    type="text"
                    className="border-inputBorder w-full text-sm border rounded p-1.5 pl-2 h-9"
                  />
                </div>
              </div>

              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-5">
                  <label className="block text-sm mb-1 text-labelColor">
                    Invoice#
                  </label>
                  <div
                    className="relative w-full"
                    // onClick={() => toggleDropdown("customer")}
                  >
                    <div className="items-center flex appearance-none w-full h-9 text-zinc-400 bg-white border border-inputBorder text-sm pl-2 pr-8 rounded-md leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                      <p>Select Invoice</p>
                    </div>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <CehvronDown color="gray" />
                    </div>
                  </div>
                </div>
  
                <div className="col-span-7 mt-6 flex items-center border rounded-lg border-inputBorder">
                <input
                  placeholder="INV-0002"
                  type="text"
                  className="w-full text-sm p-1.5 pl-2 h-9 border-none outline-none rounded-l-lg"
                  />
                 <div className="p-1.5">
                 <SettingsIcons color="#495160" />
                 </div>
                 </div>


              </div>
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-5">
                <label className="block text-sm mb-1 text-labelColor">
                  Invoice Date
                </label>
                <div className="relative w-full">
                  <select className="block appearance-none w-full h-9  text-zinc-400 bg-white border border-inputBorder text-sm  pl-2 pr-8 rounded-md leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                    <option value="" className="text-gray">
                      31/12/24
                    </option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <CehvronDown color="gray" />
                  </div>
                </div>
              </div>
              <div className="col-span-7">
                <label className="block text-sm mb-1 text-labelColor">
                  Terms
                </label>
                <div className="relative w-full">
                  <select className="block appearance-none w-full h-9  text-zinc-400 bg-white border border-inputBorder text-sm  pl-2 pr-8 rounded-md leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                    <option value="" className="text-gray">
                      Due on Receipt
                    </option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <CehvronDown color="gray" />
                  </div>
                </div>
            </div>
           
            </div>
            <div className="grid grid-cols-12 gap-4">
            <div className="col-span-5 relative">
  <label className="block text-sm mb-1 text-labelColor">
    Sales Person
  </label>
  <div
    className="relative w-full"
    onClick={() => toggleDropdown("salesPerson")}
  >
    <div className="items-center flex appearance-none w-full h-9 text-zinc-400 bg-white border border-inputBorder text-sm pl-2 pr-8 rounded-md leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
      <p>Select or Add Sales Person</p>
    </div>
    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
      <CehvronDown color="gray" />
    </div>
  </div>
  {openDropdownIndex === "salesPerson" && (
    <div
      ref={dropdownRef}
      className="absolute z-10 bg-white shadow rounded-md mt-1 p-2 w-full space-y-1"
    >
      <SearchBar
        searchValue={searchValue}
        onSearchChange={setSearchValue}
        placeholder="Select sales person"
      />
      <div className="grid grid-cols-12 gap-1 p-2 hover:bg-gray-100 cursor-pointer border border-slate-400 rounded-lg bg-lightPink items-center">
        <div className="col-span-11 flex">
          <div>
            <p className="font-bold text-sm">Joey Tribiriyani</p>
            <p className="text-xs text-gray-500">joey@gmail.com</p>
          </div>
        </div>
        <div className="ms-auto text-2xl cursor-pointer relative -mt-2 pe-2">
          &times;
        </div>
      </div>
      <div className="hover:bg-gray-100 cursor-pointer border border-slate-400 rounded-lg py-3 flex justify-between items-center">
        <div className="flex justify-between ps-4 text-[#820000]">
          <div className="flex items-center space-x-1">
            <SettingsIcons size="sm" bold={2.5} color="#820000" />
            <p className="text-sm font-bold">Manage Sales Person</p>
          </div>
        </div>
        <div className="ms-auto text-2xl cursor-pointer relative -mt-2 pe-2">
          &times;
        </div>
      </div>
    </div>
  )}
</div>

                <div className="col-span-7">
                  <label className="block text-sm mb-1 text-labelColor">
                   Subject
                  </label>
                  <input
                    placeholder="Let your customer know what this invoice is for"
                    type="text"
                    className="border-inputBorder w-full text-sm border rounded p-1.5 pl-2 h-9"
                  />
                </div>
              </div>
            <p className="font-bold">Add Item</p>
            <NewInvoiceTable />
            <button className="mt-1">
              <p className="text-darkRed my-3 text-sm flex gap-2 items-center">
                <PlusCircle color="darkRed" />
                <b> Add Item</b>
              </p>
            </button>{" "}
            <br />
            <div className="text-sm">
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
            <div className="text-sm mt-3">
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
      </div>
    </div>
    <div className="col-span-4">
          <div className="bg-secondary_main p-5 text-sm rounded-xl space-y-4 text-textColor">
           
            <div className="grid grid-cols-12 pb-4  text-dropdownText border-b-2 border-slate-200">
              <div className="col-span-10 mt-5">
                <p>Untaxed Amount</p>
              </div>
              <div className="col-span-2 mt-5">
                <p className="text-base  font-bold">RS 0.00</p>
              </div>

              <div className="col-span-10 mt-1">
                <p>SGST</p>
              </div>
              <div className="col-span-2 mt-1">
                <p className="text-base">RS 0.00</p>
              </div>

              <div className="col-span-10">
                <p> CGST</p>
              </div>
              <div className="col-span-2">
                <p className="text-base">RS 0.00</p>
              </div>

              <div className="col-span-10 mt-1">
                <p className="font-bold text-base text-black">Total</p>
              </div>
              <div className="col-span-2 mt-1">
                <p className="text-base font-bold">RS 0.00</p>
              </div>
            </div>
          
            <div className="flex gap-4 pt-3 justify-end">
              {" "}
              <Button variant="secondary" >
                Cancel
              </Button>
              <Button variant="secondary" >
                <PrinterIcon height={18} width={18} color="currentColor" />
                Print
              </Button>
              <Button variant="primary" >
                Save & Send
              </Button>{" "}
            </div>
          </div>
        </div>
    </div>
    </div>
  );
};

export default NewInvoice;
