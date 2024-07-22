import Customers from "./Customers"
import Print from "../../../Components/PrintButton"
import SearchBar from "../../../Components/SearchBar"
import Cards from "./Cards"
import Dropdown from "./Dropdown"
import NewCustomerModal from "./NewCustomerModal"
import SortBy from "./SortBy"
import { useState } from "react"

import CustomerTable from "./CustomerTable"


type Props = {}

function CustomerHome({}: Props) {
  const [searchValue, setSearchValue] = useState<string>("");
  return (
    <>
      <div className=" px-6 space-y-8 flex items-center relative">
        <div>
          <h3 className="font-bold text-2xl text-textColor">Customer</h3>
          <p className="text-sm text-gray mt-1">
            Lorem ipsum dolor sit amet consectetur. Commodo enim odio fringilla
            egestas consectetur amet.
          </p>
        </div>
        <div className="ml-auto gap-3 flex items-center">
          <NewCustomerModal page=""/>
          <Dropdown />
        </div>
      </div>
      <div>
        <Cards />
      </div>
      <div className="px-6 mt-3">
        <div className="bg-white p-5">
          <div className="w-[100%] p-3 bg-gray-100">
            <Customers />
          </div>
          <div className="flex pl-3 pr-3 items-center gap-5">
            <div className="w-[80%]">
              <SearchBar onSearchChange={setSearchValue} searchValue={searchValue} placeholder="Search Sales Order"/>
            </div>
            <SortBy />
            <Print />
          </div>
          <div className="p-5">
            {/* table */}
            <CustomerTable/>
            </div>
        </div>
      </div>
    </>
  )
}

export default CustomerHome