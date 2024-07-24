import { Link } from "react-router-dom"
import CheveronLeftIcon from "../../../assets/icons/CheveronLeftIcon"
import bgimage from "../../../assets/Images/banking-image 1.png"
import Pen from "../../../assets/icons/Pen"
import TrashCan from "../../../assets/icons/TrashCan"
import Files from "../../../assets/icons/Files"
import { bankAccountviewTableHaed } from "../../../assets/constants"

type Props = {}

const data = [
    {
      date: "12/05/2024",
      transactionDetails: "",
      type: "Journal",
      Debit: "50,0000.00",
      credit: "",
    }
  ];

const BankAccountView = ({}: Props) => {
  return (
    <div className="mx-5 my-4">
    <div className="flex gap-5">
        <Link to={"/accountant/bank"}>
          <div className="flex justify-center items-center h-11 w-11 bg-tertiary_main rounded-full">
            <CheveronLeftIcon />
          </div>
        </Link>
        <div className="flex justify-center items-center">
          <h4 className="font-bold text-xl text-textColor">Bank Of America (BA-001)</h4>
        </div>
  </div>

  <div className="my-4 bg-white p-6 rounded-md text-textColor">
    <div style={{ background: 'linear-gradient(89.66deg, #E3E6D5 -0.9%, #F7E7CE 132.22%)' }} className="rounded-lg flex" >
      <div className="space-y-2 mx-4 my-6">  <p className="text-lg">Closing Balance</p>
      <p className="text-2xl font-bold">RS. 5,0000.00</p>
      <p className="text-sm">Description: Lorem ipsum of content available</p>
      </div>
      <div className="flex ms-auto   ">
        <img src={bgimage} alt="" className=" h-full -mt-2 max-h-fit"/>
        <div className=" mx-8 my-6 flex text-xs gap-5">
            <button className="border w-28 h-[38px] font-semibold  rounded-lg flex items-center justify-center gap-2 bg-white">
                <Files/>
                Attach file
            </button>
            <button className="border px-3 h-[38px] font-semibold rounded-lg flex items-center justify-center gap-2 bg-white">
                <Pen color="currentColor"/>
                Edit
            </button>
            <button className="border px-3 h-[38px] font-semibold rounded-lg flex items-center justify-center gap-2 bg-white">
               <TrashCan color="currentColor"/> Delete
            </button>
        </div>
      </div>


    </div>

   <div className="my-7 flex">
     <p><b>Recent Transactions</b></p>
     
     <div className="flex ml-auto">
        <button className="border px-2 py-1 text-sm rounded-s-lg border-dropdownText">FCY</button>
        <button className="border px-2 py-1 text-sm rounded-e-lg border-dropdownText">BCY</button>
     </div>

     </div>
   <table className="min-w-full bg-white relative pb-4">
          <thead className="text-[12px] text-center text-dropdownText ">
            <tr className="bg-lightPink">
              {bankAccountviewTableHaed.map((item, index) => (
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
                  {item.date}
                </td>
                <td className="py-2.5 px-4 border-y border-tableBorder">
                  {item.transactionDetails}
                </td>
                <td className="py-2.5 px-4 border-y border-tableBorder">
                  {item.type}
                </td>
                <td className="py-2.5 px-4 border-y border-tableBorder">
                  {item.Debit}
                </td>
                <td className="py-2.5 px-4 border-y border-tableBorder">
                  {item.credit}
                </td>
            
              </tr>
            ))}
          </tbody>
        </table>
            
</div>
    </div>
  )
}

export default BankAccountView