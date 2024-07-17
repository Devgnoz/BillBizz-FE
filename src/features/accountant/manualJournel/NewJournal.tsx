import  { useState } from 'react';
import { Link } from 'react-router-dom';
import CheveronLeftIcon from '../../../assets/icons/CheveronLeftIcon';
import TrashCan from '../../../assets/icons/TrashCan';
import PlusIcon from '../../../assets/icons/PlusIcon';
import Button from '../../../Components/Button';
import AccountDropdown from './AccountDropdown';
import ContactDropdown from './ContactDropdown';

type Props = {};

function NewJournal({}: Props) {
  const tableHeaders = [
    "Account",
    "count",
    "Contact (INR)",
    "Debits",
    "Credits",
    "Actions",
  ];

  const initialRows = [
    {
      account: "Account receivable",
      count: "count",
      contact: "",
      debits: "5000.00",
      credits: "0.00",
    },
    {
      account: "Sales Revenue",
      count: "count",
      contact: "",
      debits: "5000.00",
      credits: "0.00",
    },
  ];

  const [rows, setRows] = useState(initialRows);
  const [isAccountDropdownOpen, setIsAccountDropdownOpen] = useState<boolean[]>(Array(initialRows.length).fill(false));
  const [isContactDropdownOpen, setIsContactDropdownOpen] = useState<boolean[]>(Array(initialRows.length).fill(false));
  const [accountSearch, setAccountSearch] = useState<string[]>(Array(initialRows.length).fill(''));
  const [contactSearch, setContactSearch] = useState<string[]>(Array(initialRows.length).fill(''));

  const addRow = () => {
    setRows([
      ...rows,
      {
        account: "Account receivable",
        count: "count",
        contact: "",
        debits: "5000.00",
        credits: "0.00",
      },
    ]);
    setIsAccountDropdownOpen([...isAccountDropdownOpen, false]);
    setIsContactDropdownOpen([...isContactDropdownOpen, false]);
    setAccountSearch([...accountSearch, '']);
    setContactSearch([...contactSearch, '']);
  };

  const deleteRow = (index: number) => {
    setRows(rows.filter((_, rowIndex) => rowIndex !== index));
    setIsAccountDropdownOpen(isAccountDropdownOpen.filter((_, i) => i !== index));
    setIsContactDropdownOpen(isContactDropdownOpen.filter((_, i) => i !== index));
    setAccountSearch(accountSearch.filter((_, i) => i !== index));
    setContactSearch(contactSearch.filter((_, i) => i !== index));
  };

  const accountOptions = [
    "Account receivable",
    "Sales Revenue",
    "Employee Advance",
    "Petty Cash",
  ];

  const contactOptions = [
    "John Doe",
    "Jane Smith",
    "Robert Brown",
  ];

  const handleAccountSelect = (index: number, account: string) => {
    const newRows = [...rows];
    newRows[index].account = account;
    setRows(newRows);
    const newDropdownOpen = [...isAccountDropdownOpen];
    newDropdownOpen[index] = false;
    setIsAccountDropdownOpen(newDropdownOpen);
  };

  const handleContactSelect = (index: number, contact: string) => {
    const newRows = [...rows];
    newRows[index].contact = contact;
    setRows(newRows);
    const newDropdownOpen = [...isContactDropdownOpen];
    newDropdownOpen[index] = false;
    setIsContactDropdownOpen(newDropdownOpen);
  };

  const handleAccountSearchChange = (index: number, value: string) => {
    const newSearch = [...accountSearch];
    newSearch[index] = value;
    setAccountSearch(newSearch);
  };

  const handleContactSearchChange = (index: number, value: string) => {
    const newSearch = [...contactSearch];
    newSearch[index] = value;
    setContactSearch(newSearch);
  };

  const handleAccountDropdownToggle = (index: number, isOpen: boolean) => {
    setIsAccountDropdownOpen(isAccountDropdownOpen.map((open, i) => (i === index ? isOpen : open)));
  };

  const handleContactDropdownToggle = (index: number, isOpen: boolean) => {
    setIsContactDropdownOpen(isContactDropdownOpen.map((open, i) => (i === index ? isOpen : open)));
  };

  const clearAccountSearch = (index: number) => {
    const newSearch = [...accountSearch];
    newSearch[index] = '';
    setAccountSearch(newSearch);
  };

  const clearContactSearch = (index: number) => {
    const newSearch = [...contactSearch];
    newSearch[index] = '';
    setContactSearch(newSearch);
  };

  return (
    <div className="p-5">
      <div className="flex items-center gap-5">
        <Link to={"/manualjournal"}>
          <div
            style={{ borderRadius: "50%" }}
            className="w-[40px] h-[40px] flex items-center justify-center bg-white"
          >
            <CheveronLeftIcon />
          </div>
        </Link>
        <p className="text-textColor text-xl font-bold">Create New Journal</p>
      </div>

      <div className="mt-5 p-3 pb-5 rounded-md bg-white">
        <div className="grid gap-5 p-4">
          <div className="flex items-center justify-between w-full gap-9">
            <div className="w-[40%]">
              <label className="block text-sm text-textColor">Date</label>
              <input
                type="text"
                className="mt-1 w-full border border-inputBorder rounded-md text-sm p-2"
                placeholder="25/06/24"
              />
            </div>
            <div className="w-[26%]">
              <label className="block text-sm text-textColor">Journal#</label>
              <input
                type="text"
                className="mt-1 w-full border border-inputBorder rounded-md text-sm p-2"
                placeholder="001"
              />
            </div>
            <div className="w-[40%]">
              <label className="block text-sm text-textColor">Reference#</label>
              <input
                type="text"
                className="mt-1 w-full border border-inputBorder rounded-md text-sm p-2"
                placeholder="Value"
              />
            </div>
          </div>

          <div className="flex items-center justify-between w-full gap-9">
            <div className="w-[72%]">
              <label className="block text-sm text-textColor">Notes</label>
              <input
                type="text"
                className="mt-1 w-full border border-inputBorder rounded-md text-sm p-2"
                placeholder="Value"
              />
            </div>
            <div className="w-[26%]">
              <label className="block text-sm text-textColor">Journal Type</label>
              <div className="flex items-center justify-start mt-3">
                <input
                  type="checkbox"
                  name=""
                  className="h-[16px] w-[16px]"
                  id=""
                />
                <label
                  htmlFor=""
                  className="text-sm font-medium text-textColor ms-3"
                >
                  Cash based journal ?
                </label>
              </div>
            </div>
            <div className="w-[50%]">
              <label className="block text-sm text-textColor">Currency</label>
              <select
                className="mt-1 w-full border border-inputBorder rounded-md text-sm p-2"
                style={{ color: "#8F99A9" }}
              >
                <option>INR - Indian Rupees</option>
              </select>
            </div>
          </div>
        </div>
        <div className="-mt-2 p-4">
          <div className="border rounded-md border-tableBorder">
            <table className="min-w-full bg-white rounded-md">
              <thead className="text-[12px] text-center text-dropdownText">
                <tr style={{ backgroundColor: "#F9F7F0" }}>
                  {tableHeaders.map((heading, index) => (
                    <th
                      className="py-3 px-8 font-medium border-b border-tableBorder"
                      key={index}
                    >
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-center text-dropdownText">
                {rows.map((row, index) => (
                  <tr className="border-b border-tableBorder" key={index}>
                    <AccountDropdown
                      index={index}
                      account={row.account}
                      accountOptions={accountOptions}
                      isDropdownOpen={isAccountDropdownOpen[index]}
                      search={accountSearch[index]}
                      onAccountSelect={handleAccountSelect}
                      onSearchChange={handleAccountSearchChange}
                      onDropdownToggle={handleAccountDropdownToggle}
                      clearSearch={clearAccountSearch}
                    />
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      {row.count}
                    </td>
                    <ContactDropdown
                      index={index}
                      contact={row.contact}
                      contactOptions={contactOptions}
                      isDropdownOpen={isContactDropdownOpen[index]}
                      search={contactSearch[index]}
                      onContactSelect={handleContactSelect}
                      onSearchChange={handleContactSearchChange}
                      onDropdownToggle={handleContactDropdownToggle}
                      clearSearch={clearContactSearch}
                    />
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      {row.debits}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      {row.credits}
                    </td>
                    <td
                      onClick={() => deleteRow(index)}
                      className="px-6 py-6 items-center whitespace-nowrap text-sm flex justify-center cursor-pointer"
                    >
                      <TrashCan color='red' />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="pl-5">
          <button onClick={addRow} className="flex justify-center gap-1 ">
            <PlusIcon color="#820000" />{" "}
            <span className="text-sm text-maroon font-semibold">
              Add New Row
            </span>
          </button>
        </div>
      </div>

      <div className="mt-3 p-5 rounded-md bg-white w-[47%] ms-auto">
        <div className="flex items-center justify-between">
          <span className="text-sm">Sub Total</span>
          <h4 className="font-bold text-lg text-textColor">Rs 50000.00</h4>
        </div>
        <div className="flex items-center justify-between mt-2">
          <span className="text-base font-bold text-textColor">Total</span>
          <span className="text-textColor font-bold text-xl">Rs 50000.00</span>
        </div>
        <div className="flex items-center justify-between mt-2">
          <span className="text-base font-semibold text-cardBorder">Difference</span>
          <span className="text-lg font-bold text-cardBorder">Rs 0.00</span>
        </div>
        <hr className="mt-3 border-t border-hr" />
        <br />
        <div className="flex items-center justify-end gap-3">
          <Button variant="fourthiary">Cancel</Button>
          <Button variant="fourthiary">Save as Draft</Button>
          <Button variant="secondary">Save & Publish</Button>
        </div>
      </div>
    </div>
  );
}

export default NewJournal;
