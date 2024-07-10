import { useState } from "react";
import { Link } from "react-router-dom";
import CheveronLeftIcon from "../../../assets/icons/CheveronLeftIcon";
import TrashCan from "../../../assets/icons/TrashCan";
import PlusIcon from "../../../assets/icons/PlusIcon";
import Button from "../../../Components/Button";

type Props = {};

function NewJournal({}: Props) {
  const tableHeaders = [
    "Account",
    "Description",
    "Contact (INR)",
    "Debits",
    "Credits",
    "Actions",
  ];

  const [rows, setRows] = useState([
    {
      account: "",
      description: "Description",
      contact: "",
      debits: "5000.00",
      credits: "0.00",
    },
  ]);

  const addRow = () => {
    setRows([
      ...rows,
      {
        account: "",
        description: "Description",
        contact: "",
        debits: "5000.00",
        credits: "0.00",
      },
    ]);
  };

  const deleteRow = (index: number) => {
    setRows(rows.filter((_, rowIndex) => rowIndex !== index));
  };

  return (
    <div className="p-5">
      <div className="flex items-center gap-5">
        <Link to={"/manual-journel"}>
          <div
            style={{ borderRadius: "50%" }}
            className="w-[40px] h-[40px] flex items-center justify-center bg-white"
          >
            <CheveronLeftIcon />
          </div>
        </Link>
        <p className="text-textColor text-xl font-bold">Create New Journal</p>
      </div>

      <div className="mt-5 p-3 rounded-md bg-white">
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
              <label className="block text-sm text-textColor">
                Journal Type
              </label>
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
                    <td className="px-6 py-4 whitespace-nowrap">
                      <select name="" id="" className="text-sm text-center  p-2">
                        <option value="" className="bg-gray text-white">Account receivable</option>
                        <option value="" className="bg-gray text-white">Account receivable</option>
                        
                      </select>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      {row.description}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <select
                        name=""
                        id=""
                        className="border border-inputBorder rounded-md text-sm p-2 w-[200px]"
                      >
                        <option value="">Select Contact</option>
                      </select>
                    </td>
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
                      <TrashCan />
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
          <span className="text-base font-semibold text-cardBorder">
            Difference
          </span>
          <span className="text-lg font-bold text-cardBorder">Rs 0.00</span>
        </div>
        <hr className="mt-3 border-t border-hr" />
        <br />
        <div className="flex items-center justify-end gap-3 ">
          <Button variant="fourthiary">Cancel</Button>
          <Button variant="fourthiary">Save as Draft</Button>
          <Button variant="secondary">Save & Publish</Button>
        </div>
      </div>
    </div>
  );
}

export default NewJournal;
