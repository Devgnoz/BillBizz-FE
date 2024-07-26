
import { useEffect } from "react";
import CehvronDown from "../../../../assets/icons/CehvronDown";
import SearchDropdown from "./SearchDropdown";
 
interface AccountDropdownProps {
  index: number;
  account: string;
  accountOptions: any;
  isDropdownOpen: boolean;
  search: string;
  onAccountSelect: (index: number, account: any) => void; // Update to handle the account object
  onSearchChange: (index: number, value: string) => void;
  onDropdownToggle: (index: number, isOpen: boolean) => void;
  clearSearch: (index: number) => void;
}
 
const AccountDropdown = ({
  index,
  account,
  accountOptions,
  isDropdownOpen,
  search,
  onAccountSelect,
  onSearchChange,
  onDropdownToggle,
  clearSearch,
}: AccountDropdownProps) => {
  const handleClickOutside = (event: MouseEvent) => {
    if (event.target instanceof Element && !event.target.closest(".relative")) {
      onDropdownToggle(index, false);
      clearSearch(index);
    }
  };
 
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  
  return (
    <td className="px-6 py-4 whitespace-nowrap relative dropdown-container">
      <div className="flex items-center border rounded-md border-inputBorder ">
        <input
          type="text"
          placeholder="Select Account"
          value={account}
          readOnly
          onClick={() => onDropdownToggle(index, !isDropdownOpen)}
          className="rounded-md cursor-pointer text-sm p-2 w-full   focus:outline-none"
        />
        <div className='-ms-8'>
      <CehvronDown color='#818894'/>
      </div>
      </div>
      {isDropdownOpen && (
        <div className="absolute z-10 p-2 w-[102%] bg-white border border-tableBorder rounded-lg mt-1">
          <SearchDropdown
            placeholder="Search"
            value={search}
            onChange={(e) => onSearchChange(index, e.target.value)}
          />
          <ul className="overflow-y-auto text-start h-48">
            {accountOptions
              .filter((option:any) =>
                option.accountName.toLowerCase().includes(search.toLowerCase())
              )
              .map((option:any) => (
                <li
                  key={option._id} // Use _id as the key
                  onClick={() => onAccountSelect(index, option)} // Pass the whole account object
                  className="p-2 cursor-pointer border text-sm border-dropdownBorder text-textColor font-semibold mt-2 rounded-lg bg-CreamBg"
                >
                  {option.accountName}
                </li>
              ))}
          </ul>
        </div>
      )}
    </td>
  );
};
 
export default AccountDropdown;
 
 