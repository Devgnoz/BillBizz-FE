import { useState } from "react";
import CustomiseColmn from "./CustomiseColmn";
import Button from "../../../Components/Button";
import { Link } from "react-router-dom";
 
interface Column {
  id: string;
  label: string;
  visible: boolean;
}
 
const Table = () => {
  const initialColumns: Column[] = [
    { id: "name", label: "Name", visible: true },
    { id: "companyName", label: "Company Name", visible: true },
    { id: "contact", label: "Contact", visible: true },
    { id: "email", label: "Email", visible: true },
    { id: "receivables", label: "Receivables(BCY)", visible: true },
    { id: "customerDetails", label: "Customer details", visible: true },
  ];
 
  const [columns, setColumns] = useState<Column[]>(initialColumns);
 
  const data = [
    {
      id: "1",
      name: "John Doe",
      companyName: "Electrotech Solution",
      contact: "9643658765",
      email: "electrotech@gmail.com",
      receivables: "electrotech@gmail.com",
    },
    {
      id: "2",
      name: "Divya Kumar",
      companyName: "Max Lab",
      contact: "9643658765",
      email: "John123@gmail.com",
      receivables: "John123@gmail.com",
    },
    {
      id: "3",
      name: "Kiran Kammath",
      companyName: "ABC Electronics",
      contact: "9643658765",
      email: "John123@gmail.com",
      receivables: "John123@gmail.com",
    },
  ];
 
  const renderColumnContent = (colId: string, item: any) => {
    if (colId === "customerDetails") {
      return (
<div className="flex justify-center">

<Link to={"/customer/view/1"} >
<Button
            variant="fourthiary"
            className="font-medium rounded-lg text-[9.5px]"
>
            See details
</Button>
</Link>
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
<th className="py-2 px-4 font-medium border-b border-tableBorder">
<CustomiseColmn columns={columns} setColumns={setColumns} />
</th>
</tr>
</thead>
<tbody className="text-dropdownText text-center  text-[13px]">
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
                      className="py-2.5 px-4 border-y border-tableBorder"
>
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
 
export default Table;