import { Link } from "react-router-dom"
import PlusCircle from "../../../assets/icons/PlusCircle"
import Button from "../../../Components/Button"
import SearchBar from "../../sales/SearchBar"
import DebitDropdown from "./DebitDropdown"
import DebitPrint from "./DebitPrint"
import DebitSort from "./DebitSort"
import DebitTable from "./DebitTable"
import TypesOfDebits from "./TypesOfDebits"

type Props = {}

function DebitNote({}: Props) {
  return (
    <>
         <div className=" px-6 flex items-center relative">
        <div>
          <h3 className="font-bold text-xl text-textColor">Create Supplier Debit Note</h3>
          <p className="text-sm text-gray mt-1">
            Lorem ipsum dolor sit amet consectetur. Commodo enim odio fringilla
            egestas consectetur amet.
          </p>
        </div>
        <div className="ml-auto gap-3 flex items-center">
     <Link to="/purchase/debit-note/new">
          <Button  variant="primary" size="sm">
          <PlusCircle color="white" /> <p className="text-sm font-medium">New Debit Note</p>
        </Button>
     </Link>
         <DebitDropdown/>
        </div>
      </div>

      <div className="px-6 mt-3">
        <div className="bg-white p-5">
          <div className="w-[100%] p-3 bg-gray-100">
          <TypesOfDebits/>
          </div>
          <div className="flex pl-3 pr-3 items-center gap-4 mt-2">
            <div className="w-[80%]">
              <SearchBar placeholder="Search Sales Order" />
            </div>
            <DebitSort/>
            <DebitPrint/>
          </div>
          <div className="p-5">
            {/* table */}
            <DebitTable/>
          </div>
        </div>
      </div>
    </>
  )
}

export default DebitNote