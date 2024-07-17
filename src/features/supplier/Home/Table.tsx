import React, { useState } from 'react';
import Button from "../../../Components/Button";
import SortSupplier from "./SortSupplier";

const Table = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const data = [
    {
      id: "1",
      name: "Office Stocks",
      companyName: "Office essentials",
      contact: 9643658165,
      email: "John123@gmail.com",
      supplierDetails: "See details",
      payablesBCY: 0.0,
      unusedCreditsBCY: 0.0,
    },
    {
      id: "2",
      name: "Divya Kumar",
      companyName: "Max Lab",
      contact: 9463658765,
      email: "John123@gmail.com",
      supplierDetails: "See details",
      payablesBCY: 0.0,
      unusedCreditsBCY: 0.0,
    },
    {
      id: "3",
      name: "Divya Kumar",
      companyName: "Max Lab",
      contact: 9463658765,
      email: "John123@gmail.com",
      supplierDetails: "See details",
      payablesBCY: 0.0,
      unusedCreditsBCY: 0.0,
    },
  ];

  const tableHeaders = [
    "Name",
    "Company Name",
    "Contact",
    "Email",
    "Supplier details",
    "Payables(BCY)",
    "Unused Credits (BCY)",
    <Button onClick={openModal}>Sort</Button>,
  ];

  return (
    <div className="overflow-x-auto ">
      <table className="min-w-full bg-white mb-5">
        <thead className="text-[12px] text-center text-dropdownText ">
          <tr style={{ backgroundColor: "#F9F7F0" }}>
            <th className="py-3 px-4 border-b border-tableBorder">
              <input type="checkbox" className="form-checkbox w-4 h-4" />
            </th>
            {tableHeaders.map((heading, index) => (
              <th
                className="py-2 px-4 font-medium border-b border-tableBorder"
                key={index}
              >
                {heading}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-dropdownText text-center text-[13px]">
          {data.map((item) => (
            <tr key={item.id} className="relative">
              <td className="py-2.5 px-4 border-y border-tableBorder">
                <input type="checkbox" className="form-checkbox w-4 h-4" />
              </td>
              <td className="py-2.5 px-4 border-y border-tableBorder">
                {item.name}
              </td>
              <td className="py-2.5 px-4 border-y border-tableBorder">
                {item.companyName}
              </td>
              <td className="py-2.5 px-4 border-y border-tableBorder">
                {item.contact}
              </td>
              <td className="py-2.5 px-4 border-y border-tableBorder">
                {item.supplierDetails}
              </td>
              <td className="py-2.5 px-4 border-y border-tableBorder">
                {item.payablesBCY}
              </td>
              <td className="py-2.5 px-4 border-y border-tableBorder">
                {item.unusedCreditsBCY}
              </td>
              <td className="py-2.5 px-4 border-y border-tableBorder"></td>
              <td className="py-2.5 px-4 border-y border-tableBorder"></td>
              <td className="cursor-pointer py-2.5 px-4 border-y border-tableBorder">
                <div className="flex justify-end"></div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <SortSupplier isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default Table;
