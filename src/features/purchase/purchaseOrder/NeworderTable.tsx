import { useEffect, useRef, useState } from "react";
import { newPurchaseOrderTableHead } from "../../../assets/constants";
import Pen from "../../../assets/icons/Pen";
import TrashCan from "../../../assets/icons/TrashCan";
import CehvronDown from "../../../assets/icons/CehvronDown";
import CirclePlus from "../../../assets/icons/circleplus";
import SearchBar from "../../../Components/SearchBar";

type Props = {};

const NeworderTable = ({}: Props) => {
  const [openDropdownId, setOpenDropdownId] = useState<number | null>(null);
  const [openDropdownType, setOpenDropdownType] = useState<string | null>(null);
  const [searchValue, setSearchValue] = useState<string>("");
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = (id: number | null, type: string | null) => {
    if (openDropdownId === id && openDropdownType === type) {
      setOpenDropdownId(null);
      setOpenDropdownType(null);
    } else {
      setOpenDropdownId(id);
      setOpenDropdownType(type);
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setOpenDropdownId(null);
      setOpenDropdownType(null);
    }
  };

  useEffect(() => {
    if (openDropdownId !== null) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openDropdownId]);

  const data = [
    {
      id: 1,
      product: "Boat Airpodes",
      qty: "1",
      stockInHand: "6",
      rate: "2000.00",
      tax: "0",
      discount: "0",
      amt: "2000.00",
      img: "https://i.postimg.cc/0yHRXmds/b6d22208932ebdf7dafe3d8b00c5156a.jpg",
    },
  ];

  return (
    <div>
      <div className="rounded-lg border-2 border-tableBorder mt-5">
        <table className="min-w-full bg-white rounded-lg relative pb-4 border-dropdownText">
          <thead className="text-[12px] text-center text-dropdownText">
            <tr className="bg-lightPink ">
              {newPurchaseOrderTableHead.map((item, index) => (
                <th
                  className="py-2 px-4 font-medium border-b border-tableBorder relative"
                  key={index}
                >
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-dropdownText text-center text-[13px] ">
            {data.map((item) => (
              <tr key={item.id} className="relative">
                <td className="flex items-center justify-center mt-4 gap-2">
                  <img src={item.img} alt="" className="h-8" />
                  {item.product}
                </td>
                <td className="justify-start items-start">
                  <div className="items-center justify-center flex">
                    <div className="text-start">
                      {item.qty} <br />
                      <span className="" style={{ fontSize: "10px" }}>
                        Stock In Hand:
                        <br />
                        <b>{item.stockInHand} Pcs</b>
                      </span>
                    </div>
                  </div>
                </td>
                <td>{item.rate}</td>
                <td className="py-2.5 px-4 border-y border-tableBorder relative">
                  <div className="flex items-center justify-center gap-2">
                    {item.tax}
                    <div className="border border-neutral-300 flex rounded-lg text-xs p-1">
                      %{" "}
                      <CehvronDown
                        color="currentColor"
                        width={15}
                        height={15}
                      />
                    </div>
                  </div>
                </td>
                <td className="py-2.5 px-4 border-y border-tableBorder relative">
                  <div className="flex items-center justify-center gap-2">
                    {item.discount}
                    <div className="border border-neutral-300 flex rounded-lg text-xs p-1">
                      %{" "}
                      <CehvronDown
                        color="currentColor"
                        width={15}
                        height={15}
                      />
                    </div>
                  </div>
                </td>
                <td className="font-semibold">{item.amt}</td>
                <td className="cursor-pointer py-2.5 px-4 border-y border-tableBorder">
                  <div className="flex items-center justify-center gap-3">
                    <div onClick={() => toggleDropdown(item.id, "editProduct")}>
                      <Pen color="green" />
                    </div>
                    {openDropdownId === item.id &&
                      openDropdownType === "editProduct" && (
                        <div
                          ref={dropdownRef}
                          className="absolute bg-white shadow text-start rounded-md mt-1 p-5 w-[35%] space-y-2"
                          style={{ right: "100px", top: "-28px" }}
                        >
                          <div>
                            <p className="text-zinc-700 font-bold text-lg">
                              Boat Airdopes 148
                            </p>
                            <div className="flex items-center justify-center">
                              <img
                                src="https://i.postimg.cc/5tty6rrx/Screenshot-2024-07-19-132938.png"
                                className="h-23"
                                alt=""
                              />
                            </div>
                            <p className="text-xs mt-1">Bal Stock</p>
                            <p className="text-lg font-bold text-textColor">
                              20{" "}
                              <span className="text-sm font-normal">Pcs</span>
                            </p>
                          </div>
                          <button className="border w-full rounded-lg py-2 mt-1">
                            Edit Product
                          </button>
                        </div>
                      )}
                    <TrashCan color="red" />
                  </div>
                </td>
              </tr>
            ))}

            <tr>
              <td className="border-y border-tableBorder">
                <div
                  className="relative w-full"
                  onClick={() => toggleDropdown(0, "searchProduct")}
                >
                  <div className="cursor-pointer flex appearance-none items-center justify-center h-9 text-zinc-400 bg-white text-sm">
                    <p>Type or click</p>
                    <CehvronDown color="currentColor" />
                  </div>
                </div>
                {openDropdownId === 0 && openDropdownType === "searchProduct" && (
                  <div
                    ref={dropdownRef}
                    className="absolute z-10 bg-white  shadow  rounded-md mt-1 p-2 -m-9 w-[40%] space-y-1"
                  >
                    <SearchBar
                      searchValue={searchValue}
                      onSearchChange={setSearchValue}
                      placeholder="Select Supplier"
                    />

                    <div className="grid grid-cols-12 gap-1 p-2 hover:bg-gray-100 cursor-pointe border border-slate-400 rounded-lg bg-lightPink">
                      <div className="col-span-2 flex  justify-center">
                        <img
                        className="rounded-full h-10"
                          src="https://i.postimg.cc/0yHRXmds/b6d22208932ebdf7dafe3d8b00c5156a.jpg"
                          alt=""
                        />
                      </div>
                      <div className="col-span-10 flex">
                        <div className="text-start">
                          <p className="font-bold text-sm text-black">Boat Airpodes 148,Black</p>
                          <p className="text-xs text-gray-500">
                            Rate: RS.2000.00
                          </p>
                        </div>
                        <div className="ms-auto text-2xl cursor-pointer relative -mt-2 pe-2">
                          &times;
                        </div>
                      </div>
                    </div>
                    <div className="hover:bg-gray-100 cursor-pointe border border-slate-400 rounded-lg py-2">
                      <button
                        className="w-full grid grid-cols-12  px-4  items-center justify-center"
                      >
                        <div className="col-span-1 flex">
                          <CirclePlus color="darkRed" size="18" />
                        </div>
                        <div className="col-span-10  text-sm flex  items-center">
                          <p className="text-darkRed">
                            <b>Add new Item</b>
                          </p>
                        </div>
                        <div className=" col-span-1 text-end text-2xl cursor-pointer relative ">
                          &times;
                        </div>
                      </button>
                    </div>
                  </div>
                )}
              </td>
              <td className="py-2.5 px-4 border-y border-tableBorder">2</td>
              <td className="py-2.5 px-4 border-y border-tableBorder">0.00</td>
              <td className="py-2.5 px-4 border-y border-tableBorder">
                <div className="flex items-center justify-center gap-2">
                  0
                  <div className="border border-neutral-300 flex rounded-lg text-xs p-1">
                    %{" "}
                    <CehvronDown color="currentColor" width={15} height={15} />
                  </div>
                </div>
              </td>
              <td className="py-2.5 px-4 border-y border-tableBorder">
                <div className="flex items-center justify-center gap-2">
                  0
                  <div className="border border-neutral-300 flex rounded-lg text-xs p-1">
                    %{" "}
                    <CehvronDown color="currentColor" width={15} height={15} />
                  </div>
                </div>
              </td>
              <td className="py-2.5 px-4 border-y border-tableBorder ">0.00</td>
              <td className="cursor-pointer py-2.5 px-4 border-y border-tableBorder">
                <div className="flex items-center justify-center gap-3">
                  <div onClick={() => toggleDropdown(0, "editProduct")}>
                    <Pen color="green" />
                  </div>
                  {openDropdownId === 0 &&
                    openDropdownType === "editProduct" && (
                      <div
                        ref={dropdownRef}
                        className="absolute bg-white shadow text-start rounded-md mt-1 p-5 w-[35%] space-y-2"
                        style={{ right: "100px", top: "-28px" }}
                      >
                        <div>
                          <p className="text-zinc-700 font-bold text-lg">
                            Boat Airdopes 148
                          </p>
                          <div className="flex items-center justify-center">
                            <img
                              src="https://i.postimg.cc/5tty6rrx/Screenshot-2024-07-19-132938.png"
                              className="h-23"
                              alt=""
                            />
                          </div>
                          <p className="text-xs mt-1">Bal Stock</p>
                          <p className="text-lg font-bold text-textColor">
                            20 <span className="text-sm font-normal">Pcs</span>
                          </p>
                        </div>
                        <button className="border w-full rounded-lg py-2 mt-1">
                          Edit Product
                        </button>
                      </div>
                    )}
                  <TrashCan color="red" />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NeworderTable;
