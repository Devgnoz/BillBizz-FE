import { useEffect, useState } from "react";
import Ellipsis from "../../../assets/icons/Ellipsis";
import useApi from "../../../Hooks/useApi";
import { endponits } from "../../../Services/apiEndpoints";
import SearchBar from "../../../Components/SearchBar";


interface Account {
  id: string;
  accountName: string;
  accountCode: string;
  accountSubhead: string;
  accountHead: string;
  description: string;
}

const Table = () => {
  const { request: AllAccounts } = useApi("put", 5001);
  const [searchValue, setSearchValue] = useState<string>("");
  const [accountData,setAccountData]=useState<Account[]>([])
 

  const tableHeaders = [
    "Account Name",
    "Account Code",
    "Account Type",
    "Documents",
    "Parent Account Type",
    "",
  ];

  useEffect(() => {
    fetchAllAccounts();
  }, []);

  const fetchAllAccounts = async () => {
    try {
      let apiResponse;
      const url = `${endponits.Get_ALL_Acounts}`;
      const body = { organizationId: "INDORG0001" };
      apiResponse = await AllAccounts(url, body);
      const {response , error}= apiResponse;
      if(!error && response){
        setAccountData(response.data.filter((account: Account) => account.accountSubhead === "Bank"))
        console.log(accountData);
        
      }
      console.log(apiResponse);
      }
     catch (error) {
      console.error("Error fetching accounts:", error);
    }
  };

  const filteredAccounts = accountData.filter((account) => {
    const searchValueLower = searchValue.toLowerCase();
    console.log(searchValue);
    
    return (
      account.accountName.toLowerCase().startsWith(searchValueLower) ||
      account.accountCode.toLowerCase().startsWith(searchValueLower) ||
      account.accountSubhead.toLowerCase().startsWith(searchValueLower) ||
      account.accountHead.toLowerCase().startsWith(searchValueLower) ||
      account.description.toLowerCase().startsWith(searchValueLower)
    );
  });

  return (
    <div className="overflow-x-auto ">
            <SearchBar
        placeholder="Serach"
        searchValue={searchValue}
        onSearchChange={setSearchValue}
      />
      <table className="min-w-full bg-white my-5">
        <thead className="text-[12px] text-center text-dropdownText">
          <tr style={{ backgroundColor: "#F9F7F0" }}>
            <th className="py-3 px-4 border-b  border-tableBorder">
              <input type="checkbox" className="form-checkbox w-4 h-4" />
            </th>
            {tableHeaders.map((heading, index) => (
              <th
                className="py-2 px-4 font-medium  border-b  border-tableBorder"
                key={index}
              >
                {heading}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-dropdownText text-center text-[13px]">
          {filteredAccounts.map((item) => (
            <tr key={item.id} className="relative">
              <td className="py-2.5 px-4  border-y border-tableBorder">
                <input type="checkbox" className="form-checkbox w-4 h-4" />
              </td>
              <td className="py-2.5 px-4  border-y border-tableBorder">
                {item.accountName}
              </td>
              <td className="py-2.5 px-4  border-y border-tableBorder">
                {item.accountCode}
              </td>
              <td className="py-2.5 px-4  border-y border-tableBorder">
                {item.accountSubhead}
              </td>
              <td className="py-2.5 px-4  border-y border-tableBorder">
                {item.description}
              </td>
              <td className="py-2.5 px-4  border-y border-tableBorder">
              {item.accountHead}
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
  );
};

export default Table;
