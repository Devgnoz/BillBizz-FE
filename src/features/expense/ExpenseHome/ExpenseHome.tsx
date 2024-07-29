import { useState } from "react";
import Category from "../../inventory/Category/Category";
import AddExpenseModal from "./AddExpenseModal";
import ExpenseTable from "./ExpenseTable";
import Button from "../../../Components/Button";
import CirclePlus from "../../../assets/icons/circleplus";

type Props = {};

const ExpenseHome = ({}: Props) => {
  const [openCategoryModal, setOpenCategoryModal] = useState(false);

  const toggleCategoryModal = () => {
    setOpenCategoryModal(!openCategoryModal);
  };
  const cardData = [
    { head: "Today's", note: "Lorem ipsum dolor sit amet", RS: "1000" },
    {
      head: "This Week Expense",
      note: "Lorem ipsum dolor sit amet",
      RS: "1000",
    },
    {
      head: "This Month Expense",
      note: "Lorem ipsum dolor sit amet",
      RS: "1000",
    },
  ];
  return (
    <div className="mx-6 my-4 text-textColor space-y-5">
      <div className="flex">
        <div>
          <h1>Expense</h1>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur. Commodo enim odio fringilla
            egestas consectetur amet.
          </p>
        </div>
        <div className="ml-auto flex items-center gap-4">
        <Button variant="secondary" className="flex items-center" size="sm" onClick={toggleCategoryModal}>
            <CirclePlus color="currentColor" size="14" />{" "}
            <p className="text-md">Add Category</p>
          </Button>
          <AddExpenseModal />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 ">
        {cardData.map((item, index) => (
          <div
            className="bg-white h-[72px] flex items-center p-4 rounded-lg"
            key={index}
          >
            <div>
              <p className="text-base font-semibold">{item.head}</p>
              <p className="text-xs text-dropdownText">{item.note}</p>
            </div>
            <div className="ml-auto items-center flex">
              <p className="font-bold text-2xl ml-auto">RS {item.RS}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white p-3 rounded-lg">
        <ExpenseTable />
      </div>
      <Category isOpen={openCategoryModal} onClose={toggleCategoryModal} page="expense"/>
    </div>
  );
};

export default ExpenseHome;
