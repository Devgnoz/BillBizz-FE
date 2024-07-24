import { useState } from "react";
import CustomiseColmn from "./CustomiseColmn";
import Button from "../../../Components/Button";
import { Link, useNavigate } from "react-router-dom";

interface Column {
  id: string;
  label: string;
  visible: boolean;
}

const Table = () => {
  const navigate=useNavigate()
  const initialColumns: Column[] = [
    { id: "date", label: "Date", visible: true },
    { id: "payment", label: "Payment#", visible: true },
    { id: "vendorName", label: "Vendor Name", visible: true },
    { id: "bill", label: "Bill#", visible: true },
    { id: "mode", label: "Mode", visible: true },
    { id: "amount", label: "Amount", visible: true },
    { id: "unusedAmount", label: "Unused Amount", visible: true },
  ];

  const [columns, setColumns] = useState<Column[]>(initialColumns);

  const data = [
    {
      id: "1",
      date: "16/7/2024",
      payment: "VP-0001",
      vendorName: "JustinDoe",
      bill: "VP-0001",
      mode: "Cash",
      amount: "30.00",
      unusedAmount: "0.00",
    },
    {
      id: "2",
      date: "17/7/2024",
      payment: "VP-0002",
      vendorName: "JaneDoe",
      bill: "VP-0002",
      mode: "Card",
      amount: "50.00",
      unusedAmount: "10.00",
    },
  ];

  // Handle column changes from CustomiseColmn
  const handleColumnChange = (newColumns: Column[]) => {
    setColumns(newColumns);
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white mb-5 w-full">
        <thead className="text-[12px] text-center text-dropdownText">
          <tr style={{ backgroundColor: "#F9F7F0" }}>
            <th className="py-3 px-4 border-b border-tableBorder">
              <input type="checkbox" className="form-checkbox w-4 h-4" />
            </th>
            {columns.map(
              (col) =>
                col.visible && (
                  <th
                    key={col.id}
                    className="py-2 px-4 font-medium border-b border-tableBorder"
                   
                  >
                    {col.label}
                  </th>
                )
            )}
            <th className="py-2.5 px-4 border-y border-tableBorder">
              {/* Add CustomiseColmn component here */}
              <CustomiseColmn columns={columns} setColumns={handleColumnChange} />
            </th>
          </tr>
        </thead>
        <tbody className="text-dropdownText text-center text-[13px]">
          {data.map((item) => (
            <tr key={item.id} className="relative">
              <td className="py-2.5 px-4 border-y border-tableBorder">
                <input type="checkbox" className="form-checkbox w-4 h-4" />
              </td>
              {columns.map(
                (col) =>
                  col.visible && (
                    <td
                      key={col.id}
                      className="py-2.5 px-4 border-y border-tableBorder cursor-pointer"
                      onClick={()=>navigate('/purchase/payment-made/view')}
                    >
                      {item[col.id as keyof typeof item]}
                    </td>
                  )
              )}
              <td className="py-2.5 px-4 border-y border-tableBorder">
                {/* Ensure this td has the same border styling */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
