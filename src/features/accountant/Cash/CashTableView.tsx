import { Link } from "react-router-dom"
import CheveronLeftIcon from "../../../assets/icons/CheveronLeftIcon"
import Button from "../../../Components/Button"
import Trash2 from "../../../assets/icons/Trash2"
import PencilIcon from "../../../assets/icons/PencilIcon"
import FIlesIcon from "../../../assets/icons/FIlesIcon"

type Props = {}

function CashTableView({}: Props) {
  return (
    <div className="mx-5 my-4">
         <div className="flex items-center gap-5">
          <Link to={"/accountant/cash"}>
            <div
              style={{ borderRadius: "50%" }}
              className="w-[40px] h-[40px] flex items-center justify-center bg-backButton"
            >
              <CheveronLeftIcon/>
            </div>
          </Link>
          <p className="text-textColor text-xl font-bold">Cash On Hand</p>
        </div>
        <div className="bg-white p-6 mt-4">
            <div className="rounded-lg p-6 h-[120px] flex justify-between" style={{ background: 'linear-gradient(89.66deg, #E3E6D5 -0.9%, #F7E7CE 132.22%)' }}>
                <div className="text-textColor">
                    <p className="text-lg">Closing Balance</p>
                    <p className="text-2xl font-bold">Rs. 5,0000.00</p>
                    <p className="text-dropdownText text-sm">Description : Lorem ipsum of content available</p>
                </div>
                <div className="flex gap-3 h-[50%] text-sm font-medium">
            <Button variant="secondary" size="sm"> 
              <FIlesIcon color="#565148"/>
              Attach file
              </Button>
            <Button variant="secondary" size="sm">
              <span className="flex items-center gap-2">
                <PencilIcon color="#565148" /><p className="text-sm">Edit</p>
              </span>
            </Button>
            <Button variant="secondary" size="sm" className="gap-2 flex items-center justify-center">
              <Trash2 color="#565148" /> Delete
            </Button>
          </div>
            </div>
        </div>
    </div>
  )
}

export default CashTableView