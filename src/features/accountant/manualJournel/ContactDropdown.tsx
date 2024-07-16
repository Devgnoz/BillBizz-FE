import React, { useEffect } from 'react';
import SearchDropdown from './SearchDropdown';
import CehvronDown from '../../../assets/icons/CehvronDown';

type ContactDropdownProps = {
  index: rating;
  contact: string;
  contactOptions: string[];
  isDropdownOpen: boolean;
  search: string;
  onContactSelect: (index: rating, contact: string) => void;
  onSearchChange: (index: rating, value: string) => void;
  onDropdownToggle: (index: rating, isOpen: boolean) => void;
  clearSearch: (index: rating) => void;
};

const ContactDropdown: React.FC<ContactDropdownProps> = ({
  index,
  contact,
  contactOptions,
  isDropdownOpen,
  search,
  onContactSelect,
  onSearchChange,
  onDropdownToggle,
  clearSearch,
}:ContactDropdownProps) => {
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
    <td className="px-6 py-4 whitespace-nowrap relative">
        <div className='flex items-center justify-center'>
      <input
        type="text"
        value={contact}
        readOnly
        placeholder='Select Contact'
        onClick={() => {
          onDropdownToggle(index, !isDropdownOpen);
          clearSearch(index);
        }}
        className="rounded-md cursor-pointer text-sm p-2 border text-start border-inputBorder"
      /> 
      <div className='-ms-8'>
      <CehvronDown color='#818894'/>
      </div>
      </div>
      {isDropdownOpen && (
        <div className="absolute z-10 p-2 w-[89%] bg-white border border-tableBorder rounded-lg mt-1">
           <SearchDropdown
            placeholder="Search"
            value={search}
            onChange={(e) => onSearchChange(index, e.target.value)}
          />
          <ul className="overflow-y-auto text-start max-h-40">
            {contactOptions
              .filter((option) =>
                option.toLowerCase().includes(search.toLowerCase())
              )
              .map((option) => (
                <li
                  key={option}
                  onClick={() => onContactSelect(index, option)}
                  className="p-2 cursor-pointer border border-dropdownBorder text-textColor font-semibold mt-2 rounded-lg bg-CreamBg"
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

export default ContactDropdown;
