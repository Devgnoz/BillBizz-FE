import ItemSort from "../../inventory/Item/ItemSort"
import Print from "../../../Components/PrintButton"
import SearchBar from "../../../Components/SearchBar"
import NewSupplierModal from "./AddSupplierModal"
import Cards from "./Cards"
import Dropdown from "./Dropdown"
import SupplierRectangleStrip from "./SupplierRectangleStrip"
import SupplierTable from "./SupplierTable"
import { useState } from "react"


type Props = {}

function SupplierHome({}: Props) {
  const [searchValue, setSearchValue] = useState<string>("");
  return (
    <>
      <div className=" px-6 flex items-center relative">
        <div>
          <h3 className="font-bold text-2xl text-textColor">Supplier</h3>
          <p className="text-sm text-gray mt-1">
            Lorem ipsum dolor sit amet consectetur. Commodo enim odio fringilla
            egestas consectetur amet.
          </p>
        </div>
        <div className="ml-auto gap-3 flex items-center">
         
          <NewSupplierModal />
          <Dropdown />
        </div>
      </div>
      <div>
        <Cards />
      </div>
      <div className="px-6 mt-3">
        <div className="bg-white p-5">
          <div className="w-[100%] p-3 bg-gray-100">
            <SupplierRectangleStrip />
          </div>
          <div className="flex pl-3 pr-3 items-center gap-5">
            <div className="w-[80%]">
              <SearchBar onSearchChange={setSearchValue} searchValue={searchValue} placeholder="Search Sales Order" />
            </div>
           <ItemSort />
            <Print />
          </div>
          <div className="p-5">
            {/* table */}
            <SupplierTable />
          </div>
        </div>
      </div>
    </>
  )
}

export default SupplierHome