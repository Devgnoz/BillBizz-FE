import { useState } from "react";
import SearchBar from "../../../Components/SearchBar";
import CehvronDown from "../../../assets/icons/CehvronDown";
import Calender from "../../../assets/icons/Calender";
import PrinterIcon from "../../../assets/icons/PrinterIcon";
import Ellipsis from "../../../assets/icons/Ellipsis";
import Pen from "../../../assets/icons/Pen";
import TrashCan from "../../../assets/icons/TrashCan";
import { Link } from "react-router-dom";

type Props = {};

const ExpenseTable = ({}: Props) => {
  const [searchValue, setSearchValue] = useState<string>("");
  const tableHeaders = [
    "Sl No",
    "Name",
    "Category",
    "Price",
    "Payment Method",
    "Added Date",
    "Actions",
  ];
  const tableData = [
    {
      slno: 1,
      name: "Materials And Supplies",
      category: "Materials",
      price: 1000.0,
      paymentMethod: "Cash",
      addedDate: "21 May 2024",
    },
    {
      slno: 2,
      name: "Package and Expense",
      category: "Packing",
      price: 1000.0,
      paymentMethod: "cash",
      addedDate: "21 May 2024",
    },
    {
      slno: 3,
      name: "Marketing and expense",
      category: "Marketing",
      price: 1000.0,
      paymentMethod: "Cash",
      addedDate: "21 May 2024",
    },
  ];
  return (
    <div className="space-y-4">
      <SearchBar
        placeholder="Serach Name or Mobile"
        searchValue={searchValue}
        onSearchChange={setSearchValue}
      />
      <div className="flex text-dropdownText gap-4">
        <div className="relative  border-2 border-slate-200 flex rounded-md px-2 py-1 text-sm items-center ">
          <div className="pointer-events-none  inset-y-0  flex items-center px-2 text-gray-700 ">
            <Calender color="currentColor" height={20} width={20} />
          </div>
          Select from & to Date
          <div className="pointer-events-none  inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <CehvronDown color="gray" />
          </div>
        </div>
        <div className="relative border-2 border-slate-200 flex rounded-md px-2 py-1 text-sm items-center ">
          Select by Category
          <div className="pointer-events-none  inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <CehvronDown color="gray" />
          </div>
        </div>
        <div className="ml-auto flex items-center">
          <button className="flex border-2 px-2 py-1 border-neutral-500 rounded-lg bg-secondary_active">
            <PrinterIcon color="gray" height={18} width={18} />{" "}
            <span className="text-sm text-neutral-500">Print</span>
          </button>
        </div>
      </div>

      <div>
        <table className="min-w-full bg-white mb-5">
          <thead className="text-[12px] text-center text-dropdownText sticky top-0 z-10">
            <tr style={{ backgroundColor: "#F9F7F0" }}>
              <th className="py-3 px-4 border-b border-tableBorder">
                <input type="checkbox" className="form-checkbox w-4 h-4" />
              </th>
              {tableHeaders.map((heading, index) => (
                <th
                  className="py-2 px-4 font-medium border-b border-tableBorder"
                  key={index}
                >
                  {heading}
                </th>
              ))}
              <th></th>
            </tr>
          </thead>
          <tbody className="text-dropdownText text-center text-[13px]">
            {tableData.map((item) => (
              <tr className="relative">
                <td className="py-2.5 px-4 border-y border-tableBorder">
                  <input type="checkbox" className="form-checkbox w-4 h-4" />
                </td>
                <td className="py-2.5 px-4 border-y border-tableBorder">
                 {item.slno}
                </td>
                <td className="py-2.5 px-4 border-y border-tableBorder">
                 <Link to={"/expense/view"}>  {item.name}</Link>
                </td>
                <td className="py-2.5 px-4 border-y border-tableBorder">
                  {item.category}
                </td>
                <td className="py-2.5 px-4 border-y border-tableBorder">
                  {item.price}
                </td>
                <td className="py-2.5 px-4 border-y border-tableBorder">
                  {item.paymentMethod}
                </td>
                <td className="py-2.5 px-4 border-y border-tableBorder">
                  {item.addedDate}
                </td>
                <td className=" py-2.5 px-4 border-y border-tableBorder">
                 <div className="flex justify-center gap-2"> <Pen color={"blue"} /> <TrashCan color={"red"} /></div>
                </td>
                <td className="cursor-pointer py-2.5 px-4 border-y border-tableBorder">
                  <div className="flex justify-center">
                    <Ellipsis height={17} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExpenseTable;
