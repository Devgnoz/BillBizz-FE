import Ellipsis from "../assets/icons/Ellipsis"
import PlusCircle from "../assets/icons/PlusCircle"
import Button from "../Components/Button"
import CreateAccountModal from "../features/Cash/CreateAccountModal"
import Table from "../features/Cash/Table"
import SearchBar from "../features/sales/SearchBar"

type Props = {}

function Cash({}: Props) {
  return (
    <>
    <div className="p-5 bg-slate-50 h-[100vh]">
    <div className="flex items-center">
    <div>
    <h3 className="font-bold text-2xl text-textColor">Cash</h3>
    <p className="text-sm text-gray mt-1">
      Lorem ipsum dolor sit amet consectetur. Commodo enim odio fringilla egestas consectetur amet.
    </p>
  </div>
  <div className="ml-auto gap-3 flex items-center">
 <CreateAccountModal/>
    <div className="cursor-pointer">
      <Ellipsis />
    </div>
    </div>
    <div>
    </div>
    </div>

    <div className="mt-5 bg-white">
    <div className="p-6">
        <SearchBar/>
    </div>
    <div>
        <Table/>
    </div>
    </div>
    </div>
    </>
  )
}

export default Cash