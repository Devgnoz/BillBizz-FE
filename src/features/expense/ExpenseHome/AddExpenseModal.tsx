import { useState } from "react";
import Button from "../../../Components/Button";
import CirclePlus from "../../../assets/icons/circleplus";
import Modal from "../../../Components/model/Modal";
import CehvronDown from "../../../assets/icons/CehvronDown";
import bgImage from "../../../assets/Images/Mask group.png";
import image from "../../../assets/Images/Group 11.png";
import wallet from "../../../assets/Images/shopping_13583280 1.png";
import PlusCircle from "../../../assets/icons/PlusCircle";
import UserRound from "../../../assets/icons/UserRound";

type Props = {};

const AddExpenseModal = (props: Props) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <div>
      <div>
        <Button
          onClick={openModal}
          variant="primary"
          className="flex items-center"
          size="sm"
        >
          <CirclePlus color="white" size="14" />{" "}
          <p className="text-md">Add Expense</p>
        </Button>

        <Modal open={isModalOpen} onClose={closeModal} style={{ width: "45%" }}>
          <div className="p-5 mt-3">
            <div className="mb-5 flex  rounded-xl bg-CreamBg relative overflow-hidden h-24">
              <div>
                <img src={bgImage} alt="" className="relative top-0 left-0" />
                <img src={image} alt="" className="absolute bottom-0" />
              </div>
              <div className="relative z-10 p-4">
                <h3 className="text-xl font-bold text-textColor inline-block">
                  Track and Add Expense{" "}
                  <div className="flex">
                    {" "}
                    Easily <img src={wallet} alt="" />
                  </div>
                </h3>
              </div>
              <div
                className="ms-auto text-3xl cursor-pointer relative z-10"
                onClick={closeModal}
              >
                &times;
              </div>
            </div>

            <form className="">
              <div className="grid grid-cols-2 gap-4 bg-[#F3F3F3] p-4 rounded-md">
                <div className="">
                  <label className="block text-sm mb-1 text-labelColor">
                    Expense Name
                  </label>
                  <input
                    placeholder="Expense name"
                    type="text"
                    className="border-inputBorder w-full text-sm border rounded p-1.5 pl-2 h-10"
                  />
                </div>

                <div className="">
                  <label className="block text-sm mb-1 text-labelColor">
                    Amount
                  </label>
                  <input
                    placeholder="Add Amount"
                    type="text"
                    className="border-inputBorder w-full text-sm border rounded p-1.5 pl-2 h-10"
                  />
                </div>

                <div>
                  <label className="block text-sm  text-labelColor">
                    Expense Category
                  </label>
                  <div className="relative w-full mt-2">
                    <select className="block appearance-none w-full h-10  text-zinc-400 bg-white border border-inputBorder text-sm  pl-2 pr-8 rounded-md leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                      <option value="" className="text-gray">
                        Select Cetgory
                      </option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <CehvronDown color="gray" />
                    </div>
                  </div>

                  <div className="text-darkRed text-sm flex mt-3 gap-1 font-semibold items-center ">
                    <UserRound color="darkRed"/>
                    Add category
                  </div>
                </div>
                <div></div>

                <div className="mt-1">
                  <label className="block text-sm mb-1 text-labelColor">
                    Expense Date
                  </label>
                  <input
                    placeholder="Add Date"
                    type="Date"
                    className="border-inputBorder w-full text-sm border rounded-md p-1.5 pl-2 h-10"
                  />
                </div>
                <div>
                  <label className="block text-sm  text-labelColor">
                    Payment Method
                  </label>
                  <div className="relative w-full mt-2">
                    <select className="block appearance-none w-full h-10  text-zinc-400 bg-white border border-inputBorder text-sm  pl-2 pr-8 rounded-md leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                      <option value="" className="text-gray">
                        Cash
                      </option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <CehvronDown color="gray" />
                    </div>
                  </div>
                </div>

                <br />
              </div>
              <div className="flex justify-end gap-2 mb-3 my-6">
                <Button variant="primary" size="sm">
                  <PlusCircle color={"white"} /> Add
                </Button>
              </div>
            </form>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default AddExpenseModal;
