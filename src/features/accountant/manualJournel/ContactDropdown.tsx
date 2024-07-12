import React, { useEffect } from 'react';

type ContactDropdownProps = {
  index: number;
  contact: string;
  contactOptions: string[];
  isDropdownOpen: boolean;
  search: string;
  onContactSelect: (index: number, contact: string) => void;
  onSearchChange: (index: number, value: string) => void;
  onDropdownToggle: (index: number, isOpen: boolean) => void;
  clearSearch: (index: number) => void;
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
      <input
        type="text"
        value={contact}
        readOnly
        placeholder='Select Contact'
        onClick={() => {
          onDropdownToggle(index, !isDropdownOpen);
          clearSearch(index);
        }}
        className="rounded-md cursor-pointer text-sm p-2 w-full text-center"
      />
      {isDropdownOpen && (
        <div className="absolute z-10 p-2 w-full bg-white border border-tableBorder rounded-lg mt-1">
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => onSearchChange(index, e.target.value)}
            className="w-full mb-2 p-1 border border-inputBorder rounded-md"
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
