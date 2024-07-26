import React from "react";

type Props = {};

function ManualPDFView({}: Props) {
  return (
    <div className="flex items-center justify-center text-sm text-textColor p-5">
      <div className="p-5 " style={{ width: "595px" ,boxShadow: "-1px 1px 15px -8px black"}}>
        <div className=" bg-lightPink p-5 rounded-lg ">
          <div className="flex mb-7">
            <p className="font-bold text-2xl"> JOURNAL</p>
            <p className="ml-auto">#0001</p>
          </div>
         <div className="space-y-2 mb-5">
            <p className="mt-5">
              Billed to :<b className="ms-4"> 25/05/2024</b>
            </p>
            <p>
              Amount : <b className="ms-4">20000.00</b>
            </p>
  
            <p >
              Reference Number: <b className="ms-4">500000</b>
            </p>
         </div>
        </div>

        <table className="w-full table-auto border-collapse my-7 ">
          <thead>
            <tr>
              <th className="text-left p-2">Account</th>
              <th className="text-left p-2 font-normal flex items-center justify-center">
                Contact
              </th>
              <th className=" p-2 font-normal items-center ">Debits</th>
              <th className=" p-2 font-normal">Credits</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-slate-400 mb-5 ">
              <td className="px-2 py-5">Account Receivable</td>
              <td className="px-2 py-5 flex items-center justify-center">
                Dheeraj
              </td>
              <td className="text-center px-2 py-5">5,000.00</td>
              <td className="px-2 py-5"></td>
            </tr>
            <tr>
              <td className="px-2 py-5">Sales</td>
              <td className="px-2 py-5 text-center"></td>
              <td className="px-2 py-5 text-center"></td>
              <td className=" px-2 py-5 text-center">5,000.00</td>
            </tr>

            <tr>
              <td className="px-2 py-5"></td>
              <td className="px-2 py-5 text-center">SubTotal</td>
              <td className="px-2 py-5 text-center">5,000.00</td>
              <td className="text-center px-2 py-5">5,000.00</td>
            </tr>
          </tbody>
        </table>

        <div className="bg-[#F3E6E6] ms-auto flex gap-5 rounded-lg p-3 text-end w-[55%] text-xs">
          <b>Total</b>
          <br />
          <b>RS.50000.00</b> <br />
          <b>Rs.50000.00</b>
        </div>
      </div>
    </div>
  );
}

export default ManualPDFView;
