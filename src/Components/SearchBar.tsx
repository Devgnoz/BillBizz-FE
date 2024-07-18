import { ChangeEvent } from "react";
import SearchIcon from "../assets/icons/SearchIcon";

type Props = {
  searchValue: string;
  onSearchChange: (value: string) => void;
};

const SearchBar = ({ searchValue, onSearchChange }: Props) => {
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    onSearchChange(e.target.value);
  };

  return (
    <div className="relative flex items-center">
      <SearchIcon />
      <input
        className="pl-9 text-sm w-[100%] rounded-md text-start text-gray-800 h-[40px] p-2 focus:outline-none focus:ring-1 focus:ring-gray-400"
        style={{ backgroundColor: "rgba(28, 28, 28, 0.04)" }}
        placeholder="Search"
        onChange={handleSearch}
        value={searchValue}
      />
    </div>
  );
};

export default SearchBar;
