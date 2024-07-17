import { useState } from "react";
import Button from "../../../Components/Button";
import CirclePlus from "../../../assets/icons/circleplus";
import bgImage from "../../../assets/Images/12.png";
import CehvronDown from "../../../assets/icons/CehvronDown";
import Modal from "../../../Components/model/Modal";

type Props = {};

const NewUnit = ({}: Props) => {
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
          size="lg"
        >
          <CirclePlus color="white" size="14" />{" "}
          <p className="text-md">New Unit</p>
        </Button>

        <Modal open={isModalOpen} onClose={closeModal}  style={{width:"39%"}}>
          <div className="p-5 mt-3">
            <div className="mb-5 flex p-4 rounded-xl bg-CreamBg relative overflow-hidden">
              <div
                className="absolute top-0 -right-8 w-[178px] h-[89px]"
                style={{
                  backgroundImage: `url(${bgImage})`,
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-textColor">
                  Create Unit
                </h3>
                <p className="text-dropdownText font-semibold text-sm mt-2">
                  Quantify and manage the quantities of products{" "}
                </p>
              </div>
              <div
                className="ms-auto text-3xl cursor-pointer relative z-10"
                onClick={closeModal}
              >
                &times;
              </div>
            </div>

            <form className="">
              <div className="">
                <div className="mb-4">
                  <label className="block text-sm mb-1 text-labelColor">
                    Name
                  </label>
                  <input
                    type="text"
                    className="border-inputBorder w-full text-sm border rounded p-1.5 pl-2 h-10"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm mb-1 text-labelColor">
                    Symbol
                  </label>
                  <input
                    type="text"
                    className="border-inputBorder w-full text-sm border rounded p-1.5 pl-2 h-10"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1 text-labelColor">
                    Unit Quantity
                  </label>
                  <div className="relative w-full">
                    <select className="block appearance-none w-full h-10  text-zinc-400 bg-white border border-inputBorder text-sm  pl-9 pr-8 rounded-md leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                      <option value="" className="text-gray"></option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <CehvronDown color="gray" />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm my-3 text-labelColor">
                    Unit Precision
                  </label>
                  <div className="relative w-full">
                    <select className="block appearance-none w-full h-10  text-zinc-400 bg-white border border-inputBorder text-sm  pl-9 pr-8 rounded-md leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                      <option value="" className="text-gray"></option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <CehvronDown color="gray" />
                    </div>
                  </div>
                </div>

                <br />
                <div className="flex justify-end gap-2 mb-3">

                 
                  <Button variant="primary" size="lg">
                    Save
                  </Button>
                   <Button onClick={closeModal} variant="secondary" size="lg">

                    Cancel
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default NewUnit;
