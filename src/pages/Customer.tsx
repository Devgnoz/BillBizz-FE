import Button from "../Components/Button"
import PlusCircle from "../assets/icons/PlusCircle";
import Cards from "../features/Customer/Cards";
import Dropdown from "../features/Customer/Dropdown";
import SortBy from "../features/Customer/SortBy";
import Table from "../features/Customer/Table";
import Customers from "../features/sales/Customers";
import Print from "../features/sales/Print";
import SearchBar from "../features/sales/SearchBar";

type Props = {}

function Customer({ }: Props) {
  return (
    <>
      <div className="p-5 flex items-center relative">
        <div>
          <h3 className="font-bold text-2xl text-textColor">Customer</h3>
          <p className="text-sm text-gray mt-1">
            Lorem ipsum dolor sit amet consectetur. Commodo enim odio fringilla egestas consectetur amet.
          </p>
        </div>
        <div className="ml-auto gap-3 flex items-center">
          <Button variant="secondary" className="flex items-center justify-center" size="xl">
            <span className="flex items-center px-2.5"><PlusCircle color="white" /> &nbsp; Add Customer</span>
          </Button>
          <Dropdown />
        </div>
      </div>

      <div>
        <Cards />
      </div>
      <div className="pl-5 pr-5 mt-3">
      <div className="bg-white p-5">
        <div className="w-[100%] p-3 bg-gray-100">
          <Customers />
        </div>
        <div className="flex pl-3 pr-3 items-center gap-5">
          <div className="w-[80%]">
            <SearchBar placeholder="Search Sales Order" />
          </div>
          <SortBy />
          <Print />
        </div>
        <div className="p-5">
          {/* table */}
          <Table/>
        </div>
      </div>
      </div>
    </>
  )
}

export default Customer
