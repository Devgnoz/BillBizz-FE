import Cards from "../features/Customer/Cards";
import Dropdown from "../features/Customer/Dropdown";
import NewCustomerModal from "../features/Customer/NewCustomerModal";
import SortBy from "../features/Customer/SortBy";
import Table from "../features/Customer/Table";
import Customers from "../features/sales/Customers";
import Print from "../features/sales/Print";
import SearchBar from "../features/sales/SearchBar";

type Props = {};

function Customer({}: Props) {
  return (
    <>
      <div className=" px-6 flex items-center relative">
        <div>
          <h3 className="font-bold text-2xl text-textColor">Customer</h3>
          <p className="text-sm text-gray mt-1">
            Lorem ipsum dolor sit amet consectetur. Commodo enim odio fringilla
            egestas consectetur amet.
          </p>
        </div>
        <div className="ml-auto gap-3 flex items-center">
          <NewCustomerModal/>
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
              <SearchBar placeholder="Search Sales Order" />
            </div>
            <SortBy />
            <Print />
          </div>
          <div className="p-5">
            {/* table */}
            <Table />
          </div>
        </div>
      </div>
    </>
  );
}

export default Customer;
