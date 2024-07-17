import { Link } from "react-router-dom";
import CheveronLeftIcon from "../../assets/icons/CheveronLeftIcon";
import CehvronDown from "../../assets/icons/CehvronDown";
import NeworderTable from "./NeworderTable";
import Button from "../../Components/Button";
import PlusCircle from "../../assets/icons/PlusCircle";
import { PrinterIcon } from "@heroicons/react/16/solid";
import { useEffect, useRef, useState } from "react";
import SearchBar from "../../Components/SearchBar";
import CirclePlus from "../../assets/icons/circleplus";

type Props = {};

const NewPurchaseOrder = ({}: Props) => {
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
        <Link to={""}>
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

      <div className="grid grid-cols-2 gap-4 py-5 rounded-lg">
        <div>
          <div className="bg-secondary_main p-5 min-h-max rounded-xl relative">
            <p className="text-textColor text-xl font-bold">
              Enter Purchase details
            </p>

            <div className="grid grid-cols-2 gap-4 mt-5 space-y-1">
              <div>
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
                      <div className="col-span-10 flex">
                        <div>
                          <p className="font-bold text-sm">Smart world</p>
                          <p className="text-xs text-gray-500">
                            Phone: 9643287899
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
              </div>
              <div></div>

              <div>
                <label
                  className="block text-sm mb-1 text-labelColor"
                  htmlFor=""
                >
                  Delivery Address
                </label>
                <input type="radio" /> <label htmlFor="">Customer</label>
                {"   "}
                <input type="radio" className="ms-5" />{" "}
                <label htmlFor="">Warehouse</label>
              </div>
              <div></div>

              <div>
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
                      <div className="col-span-10 flex">
                        <div>
                          <p className="font-bold text-sm">Smart world</p>
                          <p className="text-xs text-gray-500">
                            Phone: 9643287899
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
              </div>

              <div>
                <label className="block text-sm mb-1 text-labelColor">
                  Reference#
                </label>
                <input
                  placeholder="reference"
                  type="text"
                  className="border-inputBorder w-full text-sm border rounded p-1.5 pl-2 h-9"
                />
              </div>

              <div>
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
                    className="absolute z-10 bg-white  shadow  rounded-md mt-1 p-2 -m-9 w-[50%] space-y-1"
                  >
                    <SearchBar />
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
                          <p className="text-xs text-textColor">Karnataka Yoga <br />
                          Sanga, Bangalore <br />
                          683576</p>
                          
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
                      <p className="text-darkRed"><b>Add new Address</b></p>
                      <div className="ms-auto text-xl cursor-pointer relative -mt-2">
                          &times;
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div></div>
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
          </div>
        </div>

        <div>
          <div className="bg-secondary_main p-5 text-sm rounded-xl">
            <p className="font-bold">Add Item</p>
            <NeworderTable />
            <button className="mt-1">
              <p className="text-darkRed mt-5 text-sm flex gap-2 items-center">
                <PlusCircle color="darkRed" />
                <b> Add Item</b>
              </p>
            </button>{" "}
            <div className="space-y-1 mt-3">
              <label htmlFor="">Add Note</label>
              <textarea
                name=""
                id=""
                placeholder="Note"
                className="border-inputBorder w-full text-sm border rounded  p-2 "
              ></textarea>

              <label htmlFor="">Terms & Conditions</label>
              <textarea
                name=""
                id=""
                placeholder="Add Terms & Conditions of your business"
                className="border-inputBorder w-full text-sm border rounded p-2 "
              ></textarea>
            </div>
            <div className="grid grid-cols-12 pb-4 mt-5 text-textColor border-b-2 border-slate-200">
              <div className="col-span-10">
                <p>Untaxed Amount</p>
              </div>
              <div className="col-span-2">
                <p className="text-xl font-bold">RS 0.00</p>
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
                <p className="font-bold text-base">Total</p>
              </div>
              <div className="col-span-2 mt-1">
                <p className="text-base font-bold">RS 0.00</p>
              </div>
            </div>
            <div className="flex gap-4 m-5 mt-36 justify-end">
              {" "}
              <Button variant="secondary" size="lg">
                Cancel
              </Button>
              <Button variant="secondary" size="lg">
                <PrinterIcon height={18} width={18} color="textColor" />
                Print
              </Button>
              <Button variant="primary" size="lg">
                Save & send
              </Button>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPurchaseOrder;
