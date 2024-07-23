import { useState } from "react";
import Ellipsis from "../../../assets/icons/Ellipsis";
import PlusCircle from "../../../assets/icons/PlusCircle";
import Button from "../../../Components/Button";
import SearchBar from "../../../Components/SearchBar";
import Booktext from "../../../assets/icons/Booktext";
import BookopenCheck from "../../../assets/icons/BookopenCheck";
import BookX from "../../../assets/icons/BookX";
import { Link } from "react-router-dom";
import newspaper from "../../../assets/icons/newspaper";

type Props = {};

const InvoiceHome = ({}: Props) => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [selectedTab, setSelectedTab] = useState<string>("All");

  const filterList = [
    { title: "All", icon: Booktext },
    { title: "Draft", icon: BookopenCheck },
    { title: "Locked", icon: BookX },
    { title: "Pending Approval", icon: newspaper },
    { title: "Approved", icon: newspaper },
    { title: "Customer Viewed", icon: newspaper },
    { title: "Partially Paid", icon: newspaper },
    { title: "Unpaid", icon: newspaper },
    { title: "Overdue", icon: newspaper },
    { title: "Payment Initiated", icon: newspaper },
    { title: "Paid", icon: newspaper },
    { title: "Void", icon: newspaper },
    { title: "Yet to be shipped", icon: newspaper },
    { title: "Shipped", icon: newspaper },
    { title: "Debit Note", icon: newspaper },
    { title: "Write Off", icon: newspaper },
    { title: "Customer Portal Disabled", icon: newspaper },
  ];

  const data = [
    {
      id: 1,
      date: "25/03/2024",
      invoice: "INV-0001",
      orderNumber: 123456,
      status: "Paid",
      customerName: "Monica Chandler",
      amount: "2000.00",
      balance: "0.00",
    },
    {
      id: 2,
      date: "02/04/2024",
      invoice: "INV-0002",
      orderNumber: 123485,
      status: "Paid",
      customerName: "Chandler Bing",
      amount: "2000.00",
      balance: "0.00",
    },
    {
      id: 3,
      date: "15/04/2024",
      invoice: "INV-0003",
      orderNumber: 123869,
      status: "Paid",
      customerName: "Joey Tribbiani",
      amount: "2000.00",
      balance: "0.00",
    },
  ];

  const tableHeaders = [
    "Date",
    "Invoice",
    "Order Number",
    "Status",
    "Customer Name",
    "Amount",
    "Balance Due",
  ];

  return (
    <div className="py-2 px-7">
      <div className="flex mb-8">
        <div>
          <h1>Invoice</h1>
          <p className="text-textColor text-sm">
            Invoice Lorem ipsum dolor sit amet consectetur. Commodo enim odio
            fringilla egestas consectetur amet.
          </p>
        </div>
        <div className="ml-auto flex items-center justify-center gap-4">
          <Link to={"/sales/invoice/new"}>
          <Button size="lg">
            <PlusCircle color="white" />
            New Invoice
          </Button>
          </Link>
         

          <Ellipsis />
        </div>
      </div>

      {/* filter tabs */}
      <div className="bg-white p-5 rounded-lg space-y-4">
          <div className=" gap-3 mt-4 text-xs hide-scrollbar overflow-scroll grid-flow-col grid">
            {filterList.map((item) => (
              <button
                key={item.title}
                onClick={() => setSelectedTab(item.title)}
                className={` flex border-2 rounded-md justify-center h-9 w-48 items-center gap-2
                  ${
                    selectedTab === item.title
                      ? "bg-[#E3E6D5] text-[#585953] border-[#E3E6D5]"
                      : "border-zinc-300 bg-transparent text-textColor"
                  }`}
              >
                {item.icon && (
                  <item.icon
                    color={selectedTab === item.title ? "#585953" : "#4B5C79"}
                    height={15}
                    width={15}
                  />
                )}
                <span
                  className={`font-semibold ${
                    selectedTab === item.title ? "#4B5C79" : "text-[#4B5C79]"
                  }`}
                >
                  {item.title}
                </span>
              </button>
            ))}
            <div className="flex-shrink-0 py-2 gap-3 text-darkRed font-bold border border-darkRed rounded-md w-48 flex items-center justify-center">
              <PlusCircle color="darkRed" />
              New Custom View
            </div>
          </div>



        <SearchBar
          searchValue={searchValue}
          onSearchChange={setSearchValue}
          placeholder="Search Invoice"
        />

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white mb-5">
            <thead className="text-[12px] text-center text-dropdownText">
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
                <th className="py-2 px-4 font-medium border-b border-tableBorder"></th>
              </tr>
            </thead>
            <tbody className="text-dropdownText text-center text-[13px]">
              {data.map((item) => (
                <tr key={item.id} className="relative">
                  <td className="py-2.5 px-4 border-y border-tableBorder">
                    <input type="checkbox" className="form-checkbox w-4 h-4" />
                  </td>
                  <td className="py-2.5 px-4 border-y border-tableBorder">
                    <Link to="/sales/invoice/view">
                      {item.date}
                    </Link>
                  </td>
                  <td className="py-2.5 px-4 border-y border-tableBorder">
                    {item.invoice}
                  </td>
                  <td className="py-2.5 px-4 border-y border-tableBorder">
                    {item.orderNumber}
                  </td>
                  <td className="py-2.5 px-4 border-y border-tableBorder">
                    {item.status}
                  </td>
                  <td className="py-2.5 px-4 border-y border-tableBorder">
                    {item.customerName}
                  </td>
                  <td className="py-2.5 px-4 border-y border-tableBorder">
                    {item.amount}
                  </td>
                  <td className="py-2.5 px-4 border-y border-tableBorder">
                    {item.balance}
                  </td>
                  <td className="cursor-pointer py-2.5 px-4 border-y border-tableBorder">
                    <div className="flex justify-end">
                      <Ellipsis height={17} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default InvoiceHome;
