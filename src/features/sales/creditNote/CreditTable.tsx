import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DotIcon from "../../../assets/icons/DotIcon";
import CustomiseCreditTable from "./CustomiseCreditTable";


interface Column {
    id: string;
    label: string;
    visible: boolean;
}

const CreditTable = () => {
    const navigate = useNavigate();

    const handleRowClick = () => {
        navigate("/sales/credit-note/view");
    };
    const initialColumns: Column[] = [
        { id: "CustomerName", label: "Customer Name", visible: true },
        { id: "Date", label: "Date", visible: true },
        { id: "Reference", label: "Reference", visible: true },
        { id: "CreditNote", label: "Credit Note", visible: true },
        { id: "Amount", label: "Amount", visible: true },
        { id: "Status", label: "Status", visible: true },
    ];

    const [columns, setColumns] = useState<Column[]>(initialColumns);

    const data = [
        {
            CustomerName: "John Doe",
            Date: "15 May 2023",
            Reference: "134267",
            CreditNote: "lorem ipsum",
            Amount: "60.00",
        },
    ];

    const renderColumnContent = (colId: string, item: any) => {
        if (colId === "Status") {
            return (
                <div className="flex justify-center items-center">
                    <div className="flex justify-center items-center gap-1.5 bg-BgSubhead rounded-2xl px-2 pt-0.5 pb-0.5">
                        <DotIcon color="#495160" />
                        <p className="text-outlineButton text-xs font-medium">Open</p>
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
                            <CustomiseCreditTable columns={columns} setColumns={setColumns} />
                        </th>
                    </tr>
                </thead>
                <tbody className="text-dropdownText text-center text-[13px]">
                    {data.map((item) => (
                        <tr key={item .CustomerName} className="relative cursor-pointer" onClick={handleRowClick}>
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

export default CreditTable;