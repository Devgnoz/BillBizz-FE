import { Link } from "react-router-dom"
import PlusCircle from "../../../assets/icons/PlusCircle"
import Button from "../../../Components/Button"
import SearchBar from "../../../Components/SearchBar"
import { useState } from "react"
import CreditDropdown from "./CreditDropdown"
import TypeOfCredits from "./TypeOfCredits"
import CreditTable from "./CreditTable"
import ListIcon from "../../../assets/icons/ListIcon"
import PrinterIcon from "../../../assets/icons/PrinterIcon"

type Props = {}

function DebitNote({}: Props) {
  const [searchValue, setSearchValue] = useState<string>("");
  return (
    <>
         <div className="mx-5 my-4 flex items-center relative">
        <div>
          <h3 className="font-bold text-xl text-textColor">Create Sales Credit Note</h3>
          <p className="text-sm text-gray mt-1">
            Lorem ipsum dolor sit amet consectetur. Commodo enim odio fringilla
            egestas consectetur amet.
          </p>
        </div>
        <div className="ml-auto gap-3 flex items-center">
     <Link to="/sales/credit-note/new">
          <Button  variant="primary" size="sm">
          <PlusCircle color="white" /> <p className="text-sm font-medium">New Credit Note</p>
        </Button>
     </Link>
        <CreditDropdown/>
        </div>
      </div>

      <div className="px-6 mt-3">
        <div className="bg-white p-5">
          <div className="w-[100%] p-3 bg-gray-100">
            <TypeOfCredits/>
          </div>
          <div className="flex pl-3 pr-3 items-center gap-4 mt-2">
            <div className="w-[80%]">
              <SearchBar  onSearchChange={setSearchValue} searchValue={searchValue} placeholder="Search Debit Note" />
            </div>
            <Button variant="secondary"  size="sm">
            <ListIcon color="#565148" /> <p className="text-sm font-medium text-outlineButton">Sort By</p></Button>
            <Button variant="secondary" className="border-outlineButton text-outlineButton font-medium" size="sm">  <PrinterIcon color="#565148" height={16} width={16} /> <p className="text-sm font-medium">Print</p></Button>
          </div>
          <div className="p-5">
            {/* table */}
            <CreditTable/>
          </div>
        </div>
      </div>
    </>
  )
}

export default DebitNote