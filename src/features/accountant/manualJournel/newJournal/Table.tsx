import { useEffect, useState } from "react";
import Ellipsis from "../../../../assets/icons/Ellipsis";
import useApi from "../../../../Hooks/useApi";
import { endponits } from "../../../../Services/apiEndpoints";
import SearchBar from "../../../../Components/SearchBar";
import { useNavigate } from "react-router-dom";

interface Journal {
  id: string;
  date: string;
  journalId: string;
  reference: string;
  note: string;
  status: string;
  totalDebitAmount: string;
}

type Props = {};

function Table({}: Props) {
  const navigate=useNavigate()
  const [journalData, setJournalData] = useState<Journal[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");
  const { request: AllJournals } = useApi("put", 5001);

  const tableHeaders = [
    "Date",
    "Journel",
    "Reference rating",
    "Notes",
    "Status",
    "Amount",
    "",
  ];

  const getAllJournals = async () => {
    try {
      let apiResponse;
      const body = { organizationId: "INDORG0001" };
      const url = `${endponits.GET_ALL_JOURNALS}`;
      apiResponse = await AllJournals(url, body);
      const { response, error } = apiResponse;
      if (!error && response) {
        setJournalData(response.data);
        console.log(journalData, "jornalData");
      }
      console.log(apiResponse, "api Response");
    } catch (error) {
      console.error("Something went wrong:", error);
    }
  };

  useEffect(() => {
    getAllJournals();
  }, []);

  const filteredJournals = journalData.filter((Journal) => {
    const searchValueLower = searchValue.toLowerCase().trim();
    return (
      Journal.date.toLowerCase().trim().startsWith(searchValueLower) ||
      Journal.journalId.toLowerCase().trim().startsWith(searchValueLower) ||
      Journal.note.toLowerCase().trim().startsWith(searchValueLower) ||
      Journal.reference.toLowerCase().trim().startsWith(searchValueLower) ||
      Journal.totalDebitAmount
        .toString()
        .trim()
        .toLowerCase()
        .startsWith(searchValueLower)
    );
  });

  return (
    <div className="overflow-x-auto my-1">
      <div className="mb-3" >
        <SearchBar
          onSearchChange={setSearchValue}
          searchValue={searchValue}
          placeholder="Search Journals"
        />
      </div>
      <table className="min-w-full bg-white mb-5">
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
          {filteredJournals && filteredJournals.length > 0 ? (
            filteredJournals.reverse().map((item) => (
              <tr onClick={()=>navigate("/accountant/manualjournal/view")} key={item.id} className="relative">
                <td className="py-2.5 px-4 border-y border-tableBorder">
                  <input type="checkbox" className="form-checkbox w-4 h-4" />
                </td>
                <td className="py-2.5 px-4 border-y border-tableBorder">
                  {item?.date}
                </td>
                <td className="py-2.5 px-4 border-y border-tableBorder">
                  {item?.journalId}
                </td>
                <td className="py-2.5 px-4 border-y border-tableBorder">
                  {item?.reference}
                </td>
                <td className="py-2.5 px-4 border-y border-tableBorder">
                  {item?.note}
                </td>
                <td className="py-2.5 px-4 border-y border-tableBorder">
                  {item?.status}
                </td>
                <td className="py-2.5 px-4 border-y border-tableBorder">
                  {item?.totalDebitAmount}
                </td>
                <td className="cursor-pointer py-2.5 px-4 border-y border-tableBorder">
                  <div className="flex justify-end">
                    <Ellipsis height={17} />
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <></>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
