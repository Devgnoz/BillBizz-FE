import { Link } from "react-router-dom";
import CheveronLeftIcon from "../../../../assets/icons/CheveronLeftIcon";
import CehvronDown from "../../../../assets/icons/CehvronDown";
import NeworderTable from "./NeworderTable";
import Button from "../../../../Components/Button";
import PlusCircle from "../../../../assets/icons/PlusCircle";
import { useEffect, useRef, useState } from "react";
import SearchBar from "../../../../Components/SearchBar";
import CirclePlus from "../../../../assets/icons/circleplus";
import NewCustomerModal from "../../../Customer/CustomerHome/NewCustomerModal";
import PrinterIcon from "../../../../assets/icons/PrinterIcon";

type Props = {};

const NewPurchaseOrder = ({}: Props) => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [selected, setSelected] = useState<string | null>(null);
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
        <Link to={"/purchase/purchase-order"}>
          <div className="flex justify-center items-center h-11 w-11 bg-tertiary_main rounded-full">
            <CheveronLeftIcon />
          </div>
        </Link>
        <div className="flex justify-center items-center">
          <h4 className="font-bold text-xl text-textColor ">
            New Purchase Order
          </h4>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4 py-5 rounded-lg">
        <div className="col-span-8">
          <div className="bg-secondary_main p-5 min-h-max rounded-xl relative ">
            <p className="text-textColor text-xl font-bold">
              Enter Purchase details
            </p>

            <div className=" mt-5 space-y-6">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-5">
                  <label className="block text-sm mb-1 text-labelColor">
                    Supplier Name
                  </label>
                  <div
                    className="relative w-full"
                    onClick={() => toggleDropdown("supplier")}
                  >
                    <div className="items-center flex appearance-none w-full h-9 text-zinc-400 bg-white border border-inputBorder text-sm pl-2 pr-8 rounded-md leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                      <p>Select Supplier</p>
                    </div>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <CehvronDown color="gray" />
                    </div>
                  </div>
                  {openDropdownIndex === "supplier" && (
                    <div
                      ref={dropdownRef}
                      className="absolute z-10 bg-white  shadow  rounded-md mt-1 p-2 -m-9 w-[40%] space-y-1"
                    >
                      <SearchBar
                        searchValue={searchValue}
                        onSearchChange={setSearchValue}
                        placeholder="Select Supplier" 
                      />
                      <div className="grid grid-cols-12 gap-1 p-2 hover:bg-gray-100 cursor-pointe border border-slate-400 rounded-lg bg-lightPink">
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
                      <div className="hover:bg-gray-100 cursor-pointe border border-slate-400 rounded-lg py-4">
                        <NewCustomerModal page="purchase" />
                      </div>
                    </div>
                  )}
                </div>
  
              </div>
             <div className="grid grid-cols-12 gap-4">
                <div className="col-span-5">
                  <label
                    className="block text-sm mb-1 text-labelColor"
                    htmlFor=""
                  >
                    Delivery Address
                  </label>
                  <div className="flex items-center space-x-4 text-textColor text-sm">
                    <div className="flex gap-2 justify-center items-center ">
                      <div className="grid place-items-center mt-1">
                        <input
                          id="customer"
                          type="radio"
                          name="deliveryAddress"
                          className={`col-start-1 row-start-1 appearance-none shrink-0 w-5 h-5 rounded-full border ${
                            selected === "customer"
                              ? "border-8 border-neutral-400"
                              : "border-1 border-neutral-400"
                          }`}
                          onChange={() => setSelected("customer")}
                          checked={selected === "customer"}
                        />
                        <div
                          id="customer"
                          className={`col-start-1 row-start-1 w-2 h-2 rounded-full ${
                            selected === "customer"
                              ? "bg-neutral-100"
                              : "bg-transparent"
                          }`}
                        />
                      </div>
                      <label
                        htmlFor="customer"
                        className="text-start font-medium"
                      >
                        Customer
                      </label>
                    </div>
                    <div className="flex gap-2  justify-center items-center">
                      <div className="grid place-items-center mt-1">
                        <input
                          id="warehouse"
                          type="radio"
                          name="deliveryAddress"
                          className={`col-start-1 row-start-1 appearance-none shrink-0 w-5 h-5 rounded-full border ${
                            selected === "warehouse"
                              ? "border-8 border-neutral-400"
                              : "border-1 border-neutral-400"
                          }`}
                          onChange={() => setSelected("warehouse")}
                          checked={selected === "warehouse"}
                        />
                        <div
                          id="warehouse"
                          className={`col-start-1 row-start-1 w-2 h-2 rounded-full ${
                            selected === "warehouse"
                              ? "bg-neutral-100"
                              : "bg-transparent"
                          }`}
                        />
                      </div>
                      <label
                        htmlFor="warehouse"
                        className="text-start font-medium"
                      >
                        Warehouse
                      </label>
                    </div>
                  </div>
                </div>
             </div>

              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-5">
                  <label className="block text-sm mb-1 text-labelColor">
                    Select Customer
                  </label>
                  <div
                    className="relative w-full"
                    onClick={() => toggleDropdown("customer")}
                  >
                    <div className="items-center flex appearance-none w-full h-9 text-zinc-400 bg-white border border-inputBorder text-sm pl-2 pr-8 rounded-md leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                      <p>Select Supplier</p>
                    </div>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <CehvronDown color="gray" />
                    </div>
                  </div>
                  {openDropdownIndex === "customer" && (
                    <div
                      ref={dropdownRef}
                      className="absolute z-10 bg-white  shadow  rounded-md mt-1 p-2 -m-9 w-[40%] space-y-1"
                    >
                      <SearchBar
                        searchValue={searchValue}
                        onSearchChange={setSearchValue}
                        placeholder="Select Supplier" />
  
                      <div className="grid grid-cols-12 gap-1 p-2 hover:bg-gray-100 cursor-pointe border border-slate-400 rounded-lg bg-lightPink">
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
                      <div className="hover:bg-gray-100 cursor-pointe border border-slate-400 rounded-lg py-4">
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
                    Select warehouse to be updated
                  </label>
                  <div
                    className="relative w-full"
                    onClick={() => toggleDropdown("warehouseAddress")}
                  >
                    <div className="items-center flex appearance-none w-full h-9 text-zinc-400 bg-white border border-inputBorder text-sm pl-2 pr-8 rounded-md leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                      <p>Select warehouse</p>
                    </div>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <CehvronDown color="gray" />
                    </div>
                  </div>
                  {openDropdownIndex === "warehouseAddress" && (
                    <div
                      ref={dropdownRef}
                      className="absolute z-10 bg-white  shadow  rounded-md mt-1 p-2 -m-9 w-[40%] space-y-1"
                    >
                      <SearchBar
                        searchValue={searchValue}
                        onSearchChange={setSearchValue}
                        placeholder="Select Supplier" />
  
                      <div className="grid grid-cols-12 gap-1 p-2 hover:bg-gray-100 cursor-pointe border border-slate-400 rounded-lg bg-lightPink">
                        <div className="col-span-2 flex items-center justify-center">
                          <img
                            src="https://i.postimg.cc/3xX2LBpS/Ellipse-43-1.png"
                            alt=""
                          />
                        </div>
                        <div className="col-span-10 flex ">
                          <div>
                            <p className="font-normal text-sm">Electronics</p>
                            <p className="text-xs text-textColor">
                              Karnataka Yoga <br />
                              Sanga, Bangalore <br />
                              683576
                            </p>
                          </div>
                          <div className="ms-auto text-xl cursor-pointer relative -mt-2">
                            &times;
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-12 gap-1 p-2 hover:bg-gray-100 cursor-pointe border border-slate-400 rounded-lg py-4">
                        <div className="col-span-2 flex items-center justify-center">
                          <CirclePlus color="darkRed" size="18" />
                        </div>
                        <div className="col-span-10    text-sm flex gap-2 items-center">
                          <p className="text-darkRed">
                            <b>Add new Address</b>
                          </p>
                          <div className="ms-auto text-xl cursor-pointer relative -mt-2">
                            &times;
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <label className="block text-sm mb-1 text-labelColor mt-3">
              Purchase order#
            </label>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <input
                  placeholder="DB"
                  type="text"
                  className="border-inputBorder w-full text-sm border rounded p-1.5 pl-2 h-9"
                />
              </div>

              <div className="relative w-full">
                <select className="block appearance-none w-full h-9  text-zinc-400 bg-white border border-inputBorder text-sm  pl-2 pr-8 rounded-md leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                  <option value="" className="text-gray">
                    PO-00001
                  </option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <CehvronDown color="gray" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4  mt-3">
              <div>
                <label className="block text-sm mb-1 text-labelColor">
                  Shipment Prefernce
                </label>
                <div className="relative w-full">
                  <select className="block appearance-none w-full h-9  text-zinc-400 bg-white border border-inputBorder text-sm  pl-2 pr-8 rounded-md leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                    <option value="" className="text-gray">
                      Cash
                    </option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <CehvronDown color="gray" />
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-sm mb-1 text-labelColor">
                  Purchase Order Date
                </label>
                <div className="relative w-full">
                  <select className="block appearance-none w-full h-9  text-zinc-400 bg-white border border-inputBorder text-sm  pl-2 pr-8 rounded-md leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                    <option value="" className="text-gray">
                      18/09/2024
                    </option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <CehvronDown color="gray" />
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-sm mb-1 text-labelColor">
                  Expected Shipment Date
                </label>
                <div className="relative w-full">
                  <select className="block appearance-none w-full h-9  text-zinc-400 bg-white border border-inputBorder text-sm  pl-2 pr-8 rounded-md leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                    <option value="" className="text-gray">
                      15/02/2024
                    </option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <CehvronDown color="gray" />
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-sm mb-1 text-labelColor">
                  Payment Terms
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
            <p className="font-bold">Add Item</p>
            <NeworderTable />
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

        <div className="col-span-4">
          <div className="bg-secondary_main p-5 text-sm rounded-xl space-y-4 text-textColor">
           
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
          
            <div className="flex gap-4 pt-3 justify-end">
              {" "}
              <Button variant="secondary" size="sm" >
                Cancel
              </Button>
              <Button variant="secondary"size="sm"  >
                <PrinterIcon height={18} width={18} color="currentColor" />
                Print
              </Button>
              <Button variant="primary" size="sm" >
                Save & Send
              </Button>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPurchaseOrder;
