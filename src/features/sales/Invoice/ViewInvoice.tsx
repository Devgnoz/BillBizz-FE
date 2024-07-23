import { Link } from "react-router-dom"
import CheveronLeftIcon from "../../../assets/icons/CheveronLeftIcon"
import Button from "../../../Components/Button"
import Pen from "../../../assets/icons/Pen"
import MailIcon from "../../../assets/icons/MailIcon"
import { useEffect, useRef, useState } from "react"
import PDFView from "./PDFView"
import OrderInvoiceView from "./OrderInvoiceView"
import CehvronDown from "../../../assets/icons/CehvronDown"




type Props = {}

const ViewInvoice = ({}: Props) => {
  const [isPdfView, setIsPdfView] = useState(true);
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

  const handleToggle = () => {
      setIsPdfView(!isPdfView);
  };
  return (
    <div className='px-7'>
<div className="bg-white rounded-xl p-5">
    <div className="flex gap-5 ">
            <Link to={"/sales/invoice"}>
              <div className="flex justify-center items-center h-10 w-10 bg-slate-100 rounded-full">
                <CheveronLeftIcon />
              </div>
            </Link>
            <div className="flex justify-center items-center">
              <h4 className="font-bold text-xl text-textColor ">
                View Invoice
              </h4>
            </div>
          </div>
          <div className="flex justify-between mt-4 border-b-2 border-neutral-300 pb-5">
                    <div className="flex gap-3 items-center">
                        <p className="text-lg text-textColor font-bold pr-4 border-r-[1px] border-borderRight">Purchase Invoice</p>
                        <p className="text-lg text-textColor font-bold pr-4 border-r-[1px] border-borderRight">Invoice#INV-0001</p>
                        <p className="text-sm font-semibold text-textColor bg-cuscolumnbg p-1 text-center rounded-sm">Draft</p>
                    </div>
                    <div className="flex gap-3 items-center">
                    
                        <Button variant="secondary" className="pl-6 pr-6"  size="sm"><Pen color="#565148" /> <p className="text-sm font-medium">Edit</p></Button>
                        <Button variant="secondary" className="pl-5 pr-5"  size="sm"><MailIcon color="#565148" /> <p className="text-sm font-medium">Email</p></Button>
                        <div onClick={() => toggleDropdown("moreAction")}  id="" className="relative pe-9 border-outlineButton border rounded-md px-[0.625rem] py-2 text-sm font-medium text-outlineButton ">
                          More Action
                        {openDropdownIndex === "moreAction" && (
                    <div
                      ref={dropdownRef}
                      className="absolute  bg-white w-44 -ms-2  shadow  rounded-md mt-2 pt-3 pb-1   flex "
                    >
                      
                    <button className="hover:bg-red-50 w-full rounded-sm px-7 p-2 ">Delete</button>
                      
                    </div>
                  )}
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <CehvronDown color="gray" />
                    </div>
                        </div>
                        {/* toggle button */}
                        <label className="flex items-center cursor-pointer">
                            <div className="relative">
                                <input type="checkbox" className="sr-only" checked={isPdfView} onChange={handleToggle} />
                                <div className={`w-11 h-6 rounded-full shadow-inner transition-colors ${isPdfView ? 'bg-checkBox' : 'bg-dropdownBorder'}`}></div>
                                <div className={`dot absolute w-4 h-4 bg-white rounded-full top-1 transition-transform ${isPdfView ? 'transform translate-x-full left-2' : 'left-1'}`}></div>
                            </div>
                                <div className="ml-3 text-textColor font-semibold text-base">PDF View</div>
                            </label>
                        </div>
                    </div>

                    {isPdfView ? (
                        <div className="pdf-view-component">
                            <PDFView />
                        </div>
                    ) : (
                        <div className="other-component">
                            <OrderInvoiceView/>
                        </div>
                    )}
</div>
    </div>
  )
}

export default ViewInvoice