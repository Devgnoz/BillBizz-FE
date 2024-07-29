import { useEffect, useState } from "react";
import CustomiseColmn from "./CustomiseColmn";
import Button from "../../../Components/Button";
import { Link } from "react-router-dom";
import useApi from "../../../Hooks/useApi";
import { endponits } from "../../../Services/apiEndpoints";
import SearchBar from "../../../Components/SearchBar";
import SortBy from "./SortBy";
import Print from "../../sales/salesOrder/Print";

interface Column {
  id: string;
  label: string;
  visible: boolean;
}

const Table = () => {
  const initialColumns: Column[] = [
    { id: "billingAttention", label: "Name", visible: true },
    { id: "companyName", label: "Company Name", visible: true },
    { id: "mobile", label: "Contact", visible: true },
    { id: "customerEmail", label: "Email", visible: true },
    { id: "supplierDetails", label: "Customer details", visible: true },
    { id: "skypeNameNumber", label: "Receivables(BCY)", visible: true },
  ];

  const [columns, setColumns] = useState<Column[]>(initialColumns);
  const [customerData, setCustomerData] = useState<any[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");

  const { request: AllCustomers } = useApi("put", 5002);

  const fetchAllCustomers = async () => {
    try {
      const url = `${endponits.GET_ALL_CUSTOMER}`;
      const body = { organizationId: "INDORG0001" };
      const { response, error } = await AllCustomers(url, body);
      if (!error && response) {
        setCustomerData(response.data);
        console.log(response.data);
      }
    } catch (error) {
      console.error("Error fetching accounts:", error);
    }
  };

  useEffect(() => {
    fetchAllCustomers();
  }, []);

  const filteredAccounts = customerData.filter((account) => {
    const searchValueLower = searchValue.toLowerCase();
    return (
      account.billingAttention.toLowerCase().startsWith(searchValueLower) ||
      account.companyName.toLowerCase().startsWith(searchValueLower) ||
      account.mobile.toLowerCase().startsWith(searchValueLower) ||
      account.customerEmail.toLowerCase().startsWith(searchValueLower) ||
      account.skypeNameNumber.toLowerCase().startsWith(searchValueLower)
    );
  });

  const renderColumnContent = (colId: string, item: any) => {
    if (colId === "supplierDetails") {
      return (
        <div className="flex justify-center">
          <Link to={"/customer/view"}>
            <Button
              variant="secondary"
              className="font-medium rounded-lg h-[1rem] text-[9.5px]"
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
    <div>
      <div className="flex items-center justify-between">
        <div className="w-[82.5%]">
        <SearchBar
        placeholder="Search"
        searchValue={searchValue}
        onSearchChange={setSearchValue}
      />
        </div>
        <div className="flex gap-4">
          <SortBy />
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
              <th className="py-2 px-4 font-medium border-b border-tableBorder">
                <CustomiseColmn columns={columns} setColumns={setColumns} />
              </th>
            </tr>
          </thead>
          <tbody className="text-dropdownText text-center text-[13px]">
            {filteredAccounts.map((item) => (
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
    </div>
  );
};

export default Table;
