import { useEffect, useRef, useState } from "react";
import { unitTableHead } from "../../../assets/constants/inventory";
import Pen from "../../../assets/icons/Pen";
import Eye from "../../../assets/icons/Eye";
import Delete from "../../../assets/icons/Delete";
import { Link } from "react-router-dom";
import Button from "../../../Components/Button";

type Props = {};

const UnitTable = ({}: Props) => {
  const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const data = [
    {
      SlNo: 1,
      unitName: "Box",
      Symbol: "box",
      unitQtyCode: "Box",
      UnitPrecision: "3",
    },
    {
      SlNo: 2,
      unitName: "Feet",
      Symbol: "ft",
      unitQtyCode: "FTS",
      UnitPrecision: "0",
    },
    {
      SlNo: 3,
      unitName: "Gram",
      Symbol: "g",
      unitQtyCode: "GMS",
      UnitPrecision: "1",
    },
  ];

  const toggleDropdown = (index: number | null) => {
    setOpenDropdownIndex(openDropdownIndex === index ? null : index);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      toggleDropdown(null);
    }
  };

  useEffect(() => {
    if (openDropdownIndex !== null) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openDropdownIndex]);

  return (
    <div className=" bg-white p-5 mt-7 rounded-lg relative">
      <div className="rounded-lg  border-2 border-tableBorder">
        <table className="min-w-full bg-white relative pb-4">
          <thead className="text-[12px] text-center text-dropdownText ">
            <tr className="bg-lightPink">
              {unitTableHead.map((item, index) => (
                <th
                  className="py-2 px-4 font-medium border-b border-tableBorder relative"
                  key={index}
                >
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-dropdownText text-center text-[13px] relative">
            {data.map((item, index) => (
              <tr className="relative " key={index}>
                <td className="py-2.5 px-4 border-y border-tableBorder">
                  {item.SlNo}
                </td>
                <td className="py-2.5 px-4 border-y border-tableBorder">
                  {item.unitName}
                </td>
                <td className="py-2.5 px-4 border-y border-tableBorder">
                  {item.Symbol}
                </td>
                <td className="py-2.5 px-4 border-y border-tableBorder">
                  {item.unitQtyCode}
                </td>
                <td className="py-2.5 px-4 border-y border-tableBorder">
                  {item.UnitPrecision}
                </td>
                <td className="cursor-pointer relative py-2.5 px-4 border-y items-center flex justify-center border-tableBorder">
                  <div className="">
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() => toggleDropdown(index)}
                    >
                      <Pen color="currentColor" />
                      Edit
                    </Button>
                  </div>

                  {openDropdownIndex === index && (
                    <div ref={dropdownRef} className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                      <div
                        className="py-1"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="options-menu"
                      >
                        <Link to={"/inventory/unit/unit-conversion"}>
                          <button
                            className="flex px-4 py-2 text-sm text-gray-700 hover:bg-red-100 w-full border-y border-stone-100 gap-2"
                            role="menuitem"
                          >
                            <Eye color="currentColor" />
                            View Unit Conversion
                          </button>
                        </Link>
                        <button
                          className="flex px-4 py-2 text-sm text-gray-700 hover:bg-red-100 border-y border-stone-100 w-full relative gap-2"
                          role="menuitem"
                        >
                          <Delete color="currentColor" />
                          Delete Measurement
                        </button>
                      </div>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UnitTable;
