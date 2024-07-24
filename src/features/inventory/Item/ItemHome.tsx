import { useState } from "react";
import PlusCircle from "../../../assets/icons/PlusCircle";
import Button from "../../../Components/Button";
import Print from "../../../Components/PrintButton";
import SearchBar from "../../../Components/SearchBar";
import Items from "./Items";
import ItemSort from "./ItemSort";
import ItemTable from "./ItemTable";
type Props = {}

function ItemHome({}: Props) {
  const [searchValue, setSearchValue] = useState<string>("");
  return (
    <div className="m-7">
    <div className="flex justify-between items-center">
      <div>
        <h1>Item</h1>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur. Commodo enim odio fringilla
          egestas consectetur amet.
        </p>
      </div>
      <Button variant="primary" size="xl">
        <PlusCircle color="white" />
        <p className="text-sm font-medium">Add Item</p>
      </Button>
    </div>
    <div className="flex flex-col mt-4 gap-2 bg-white rounded-lg p-6">
      <div>
        <Items />
      </div>
      <div className="flex gap-2">
        <SearchBar onSearchChange={setSearchValue} searchValue={searchValue} placeholder="Search Items" />
        <ItemSort />
        <Print />
      </div>
      <div>
        <ItemTable  />
      </div>
    </div>
  </div>
  )
}

export default ItemHome