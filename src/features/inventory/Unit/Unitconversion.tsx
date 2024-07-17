import { Link } from "react-router-dom";
import { unitConversionTableHead } from "../../../assets/constants/inventory";
import CheveronLeftIcon from "../../../assets/icons/CheveronLeftIcon";
import TrashCan from "../../../assets/icons/TrashCan";
import Button from "../../../Components/Button";
import NewUnitConverstion from "./NewUnitConverstion";
import EditUnitConversion from "./EditUnitConversion";


type Props = {};

const Unitconversion = ({}: Props) => {
    const data=[
        {tagetUnit:"Pieces 250g (PCS)",uniitCnvsnRate:"0.23"},
        {tagetUnit:"Pieces 200g (PCS)",uniitCnvsnRate:"0.09"}

    ]

  return (
    <>
        <div className="m-7 bg-white  p-5 rounded-md gap-5">
         <div className="flex gap-5">
             <Link to={"/inventory/unit"} >
                  <div className="flex justify-center items-center bg-slate-100 h-10 w-10 rounded-full">
                    <CheveronLeftIcon />
                  </div>
             </Link>
              <div className="">
                <h4 className="font-bold text-2xl text-textColor mt-1">
                  Kilograms(Kg) - Unit Converstion
                </h4>
              </div>
              <div className="ml-auto">
                {" "}
                <NewUnitConverstion />
              </div>
         </div>
    
          <div>
          
          </div> 
        <table className="min-w-full bg-white my-5">
              <thead className="text-[12px] text-center text-dropdownText">
                <tr style={{ backgroundColor: "#F9F7F0" }}>
                  
                  {unitConversionTableHead.length > 0 &&
                    unitConversionTableHead.map((heading, index) => (
                      <th
                        className="py-2 px-4 font-medium  border-b  border-tableBorder"
                        key={index}
                      >
                        {heading}
                      </th>
                    ))}
                </tr>
              </thead>
              <tbody className="text-dropdownText text-center text-[14px]">
                {data.map((item) => (
                  <tr key="" className="relative">
                   
                    <td className="py-2.5 px-4  border-y border-tableBorder">
                      {item.tagetUnit}
                    </td>
                    <td className="py-2.5 px-4  border-y border-tableBorder">
                      {item.uniitCnvsnRate}
                    </td>
                  
                    <td className="cursor-pointer py-2.5 px-4 border-y border-tableBorder">
                      <div className="flex justify-center gap-3">
                        <EditUnitConversion/>
                        <Button variant="secondary"  size="sm"><TrashCan color="currentColor"/>Delete</Button>

                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
        </div> 
          
    </>
  );
};

export default Unitconversion;
