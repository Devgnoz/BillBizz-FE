import { useState } from "react";
    import CustomiseColmn from "./CustomiseColmn";
import {  useNavigate } from "react-router-dom";
import DotIcon from "../../../assets/icons/DotIcon";


interface Column {
  id: string;
  label: string;
  visible: boolean;
}

const DebitTable = () => {
  const navigate = useNavigate();

  const handleRowClick = () => {
    navigate("/purchase/viewdebitnote");
  };
  const initialColumns: Column[] = [
    { id: "name", label: "Supplier Name", visible: true },
    { id: "companyName", label: "Date", visible: true },
    { id: "contact", label: "Reference", visible: true },
    { id: "email", label: "Debit Note", visible: true },
    { id: "receivables", label: "Amount", visible: true },
    { id: "customerDetails", label: "Status", visible: true },
    { id: "balance", label: "Balance", visible: false },
  ];

  const [columns, setColumns] = useState<Column[]>(initialColumns);

  const data = [
    {
      id: "1",
      name: "John Doe",
      companyName: "15 May 2023",
      contact: "134267",
      email: "lorem ipsum",
      receivables: "60.00",
    },
  ];

  const renderColumnContent = (colId: string, item: any) => {
    if (colId === "customerDetails") {
      return (
        <div className="flex justify-center items-center">
            <div className="flex justify-center items-center gap-1.5 bg-BgSubhead rounded-2xl px-2 pt-0.5 pb-0.5">
         <DotIcon color="#495160"/>
         <p className="text-outlineButton text-xs font-medium">Issued</p>
            </div>
        </div>
      );
    }
    return item[colId as keyof typeof item];
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white mb-5">
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
            <th className="py-3 px-4 font-medium border-b border-tableBorder">
              <CustomiseColmn columns={columns} setColumns={setColumns} />
            </th>
          </tr>
        </thead>
        <tbody className="text-dropdownText text-center text-[13px]">
      {data.map((item) => (
        <tr key={item.id} className="relative cursor-pointer" onClick={handleRowClick}>
          <td className="py-2.5 px-4 border-y border-tableBorder">
            <input type="checkbox" className="form-checkbox w-4 h-4" />
          </td>
          {columns.map(
            (col) =>
              col.visible && (
                <td key={col.id} className="py-2.5 px-4 border-y border-tableBorder">
                  {renderColumnContent(col.id, item)}
                </td>
              )
          )}
        </tr>
      ))}
    </tbody>
      </table>
    </div>
  );
};

export default DebitTable;