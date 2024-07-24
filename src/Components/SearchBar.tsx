import { ChangeEvent } from "react";
import SearchIcon from "../assets/icons/SearchIcon";

type Props = {
  searchValue: string;
  onSearchChange: (value: string) => void;
  placeholder:string | "search"
};

const SearchBar = ({ searchValue, onSearchChange,placeholder }: Props) => {
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    onSearchChange(e.target.value);
  };

  return (
    <div className="relative flex items-center">
  <SearchIcon />
  <input
    className="pl-9 text-sm w-full rounded-md text-start text-gray-800 h-10 p-2 border-0 focus:ring-1 focus:ring-gray-400"
    style={{ 
      backgroundColor: "rgba(28, 28, 28, 0.04)",
      outline: "none",
      boxShadow: "none"
    }}
    placeholder={placeholder}
    onChange={handleSearch}
    value={searchValue}
  />
</div>

  
  );
};

export default SearchBar;
