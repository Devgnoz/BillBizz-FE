import SupplierRectangleStrip from "./SupplierRectangleStrip"
import Print from "../../sales/Print"
import SearchBar from "../../sales/SearchBar"
import Cards from "./Cards"
import Dropdown from "./Dropdown"
import NewSupplierModal from "./AddSupplierModal";
import ItemSort from "../../inventory/Item/ItemSort"
import SupplierTable from "./SupplierTable"


type Props = {}

function SupplierHome({}: Props) {
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
              <SearchBar placeholder="Search Sales Order" />
            </div>
           <ItemSort />
            <Print />
          </div>
          <div className="p-5">
            {/* table */}
            <SupplierTable/>
          </div>
        </div>
      </div>
    </>
  )
}

export default SupplierHome