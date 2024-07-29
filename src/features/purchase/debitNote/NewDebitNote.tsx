import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import CehvronDown from "../../../assets/icons/CehvronDown";
import PlusCircle from "../../../assets/icons/PlusCircle";
import PrinterIcon from "../../../assets/icons/PrinterIcon";
import Button from "../../../Components/Button";
import SearchBar from "../../../Components/SearchBar";
import AddSupplierModal from "../../Supplier/SupplierHome/AddSupplierModal";
import DebitNumberPrfncModal from "./DebitNumberPrfncModal";
import NeworderTable from "../purchaseOrder/addPurchaseOrder/NeworderTable";
import CheveronLeftIcon from "../../../assets/icons/CheveronLeftIcon";

type Props = {};

const NewDebitNote = ({}: Props) => {
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
    <div className="mx-5 my-4 text-sm">
      <div className="flex gap-5">
        <Link to={"purchase/purchase-order"}>
          <div className="flex justify-center items-center h-11 w-11 bg-tertiary_main rounded-full">
            <CheveronLeftIcon />
          </div>
        </Link>
        <div className="flex justify-center items-center">
          <h4 className="font-bold text-xl text-textColor ">Debit Note</h4>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4 py-5">
        <div className="bg-secondary_main p-5 min-h-max rounded-xl relative col-span-8">
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
                  <div className="hover:bg-gray-100 cursor-pointe border border-slate-400 rounded-lg py-3">
                  <AddSupplierModal page="purchase" />
                  </div>
                </div>
              )}
            </div>
            <div className="relative w-full">
              <label htmlFor="" className="">
                Debit Note
                <input
                  name=""
                  id=""
                  disabled
                  className=" block  appearance-none w-full h-9  text-zinc-400 bg-white border border-inputBorder text-sm  pl-2 pr-8 rounded-md leading-tight focus:outline-none focus:bg-white focus:border-gray-500 "
                />
              </label>
            <DebitNumberPrfncModal/>
            </div>

            <div className=" w-full">
              <label htmlFor="" className="">
                Order Number
                <input
                  name=""
                  id=""
                  placeholder="Value"
                  className="border-inputBorder w-full text-sm border rounded text-dropdownText  p-2 h-9 mt-2 "
                />
              </label>
            </div>
            <div>
              <label className="block text-sm mb-1 text-labelColor">
                Supplier Debit Date
              </label>
              <div className="relative w-full">
                <select className="block appearance-none w-full h-9 mt-2 text-zinc-400 bg-white border border-inputBorder text-sm  pl-2 pr-8 rounded-md leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                  <option value="" className="text-gray">
                    Select A Date
                  </option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <CehvronDown color="gray" />
                </div>
              </div>
            </div>

            <div className=" w-full">
              <label htmlFor="" className="">
                Subject
                <input
                  name=""
                  id=""
                  placeholder="Enter a subject within 250 Characters"
                  className="border-inputBorder w-full text-sm border rounded text-dropdownText  p-2 h-9 mt-2 "
                />
              </label>
            </div>

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
        <div className="col-span-4">
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
      <div>

       
      </div>
       
    </div>
  );
};

export default NewDebitNote;
