import { useEffect } from "react";
import SearchDropdown from "./SearchDropdown";
import DownArrow from "../../../assets/icons/DownArrow";
interface AccountDropdownProps {
  index: rating;
  account: string;
  accountOptions: string[];
  isDropdownOpen: boolean;
  search: string;
  onAccountSelect: (index: rating, account: string) => void;
  onSearchChange: (index: rating, value: string) => void;
  onDropdownToggle: (index: rating, isOpen: boolean) => void;
  clearSearch: (index: rating) => void;
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
      <div className="flex items-center">
        <input
          type="text"
          value={account}
          readOnly
          onClick={() => onDropdownToggle(index, !isDropdownOpen)}
          className="rounded-md cursor-pointer text-sm p-2 w-full text-center focus:outline-none"
/>
        <div className="-ms-12">
        <DownArrow color="#818894"/>
        </div>
      </div>
      {isDropdownOpen && (
        <div className="absolute z-10 p-2 w-[102%] bg-white border border-tableBorder rounded-lg mt-1">
          <SearchDropdown
            placeholder="Search"
            value={search}
            onChange={(e) => onSearchChange(index, e.target.value)}
          />
          <ul className="overflow-y-auto text-start">
            {accountOptions
              .filter((option) =>
                option.toLowerCase().includes(search.toLowerCase())
              )
              .map((option) => (
                <li
                  key={option}
                  onClick={() => onAccountSelect(index, option)}
                  className="p-2 cursor-pointer border text-sm border-dropdownBorder text-textColor font-semibold mt-2 rounded-lg bg-CreamBg"
                >
                  {option}
                </li>
              ))}
          </ul>
        </div>
      )}
    </td>
  );
};

export default AccountDropdown;
