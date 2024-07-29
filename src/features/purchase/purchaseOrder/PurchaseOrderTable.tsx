import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DotIcon from "../../../assets/icons/DotIcon";
import CustomPurchaseColumn from "./CustomPurchaseColumn";
import SearchBar from "../../sales/salesOrder/SearchBar";
import PurchaseSort from "./PurchaseSort";
import Print from "../../sales/salesOrder/Print";


interface Column {
    id: string;
    label: string;
    visible: boolean;
}

const PurchaseOrderTable = () => {
    const navigate = useNavigate();

    const handleRowClick = () => {
        navigate("/purchase/viewpurchaseorder");
    };
    const initialColumns: Column[] = [
        { id: "PurchaseOrder", label: "Purchase Order#", visible: true },
        { id: "OrderDate", label: "Order Date", visible: true },
        { id: "Reference", label: "Reference", visible: true },
        { id: "SupplierName", label: "Supplier Name", visible: true },
        { id: "Amount", label: "Amount", visible: true },
        { id: "Status", label: "Status", visible: true },
        { id: "Recieved", label: "Recieved", visible: false },
        { id: "Billed", label: "Billed", visible: false },
        { id: "ExpectedDate", label: "Expected Date", visible: false },
    ];

    const [columns, setColumns] = useState<Column[]>(initialColumns);

    const data = [
        {
            PurchaseOrder: "P0-00001",
            OrderDate: "15 May 2023",
            Reference: "134267",
            SupplierName: "John Doe",
            Amount: "60.00",
        },
    ];

    const renderColumnContent = (colId: string, item: any) => {
        if (colId === "Status") {
            return (
                <div className="flex justify-center items-center">
                    <div className="flex justify-center items-center gap-1.5 bg-BgSubhead rounded-2xl px-2 pt-0.5 pb-0.5">
                        <DotIcon color="#495160" />
                        <p className="text-outlineButton text-xs font-medium">Issued</p>
                    </div>
                </div>
            );
        }
        return item[colId as keyof typeof item];
    };

    return (
        <div>
            <div className="flex items-center justify-between">
        <div className="w-[82.5%]">
        <SearchBar
        placeholder="Search Purchase Order"/>
        </div>
        <div className="flex gap-4">
            <PurchaseSort/>
          <Print />
        </div>
      </div>

            <div className="overflow-x-auto mt-3">
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
                            <th className="py-3 px-14 font-medium border-b border-tableBorder">
                                <CustomPurchaseColumn columns={columns} setColumns={setColumns} />
                            </th>
                        </tr>
                    </thead>
                    <tbody className="text-dropdownText text-center text-[13px]">
                        {data.map((item) => (
                            <tr key={item.PurchaseOrder} className="relative cursor-pointer" onClick={handleRowClick}>
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
        </div>

    );
};

export default PurchaseOrderTable;