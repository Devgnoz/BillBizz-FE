import { useState } from "react";
import Button from "../../../Components/Button";
import CirclePlus from "../../../assets/icons/circleplus";
import CehvronDown from "../../../assets/icons/CehvronDown";
import bgImage from "../../../assets/Images/Frame 6.png";
import Modal from "../../../Components/model/Modal";
type Props = {};

const NewUnitConverstion = ({}: Props) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <div>
      <Button
        onClick={openModal}
        variant="primary"
        size="xl"
      >
        <CirclePlus color="white" size="28" />{" "}
        <p className="text-sm font-medium">New Unit Conversion</p>
      </Button>

      <Modal open={isModalOpen} onClose={closeModal} style={{ width: "55%" }}>
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
                New Unit Conversion
              </h3>
            </div>
            <div
              className="ms-auto text-3xl cursor-pointer relative z-10"
              onClick={closeModal}
            >
              &times;
            </div>
          </div>

          <form>
            <div className="grid grid-cols-2 gap-32 p-3">
              <div className="relative w-full">
                <select className="block appearance-none w-full h-8  text-zinc-400 bg-white border border-inputBorder text-sm  pl-9 pr-8 rounded-md leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                  <option value="" className="text-gray">
                    {" "}
                    Unit Precision
                  </option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <CehvronDown color="gray" />
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="h-8 w-100 text-zinc-400 border min-w-64 border-inputBorder  ps-5 items-center flex">
                  <p>Convertion Rate</p>
                </div>
                <div className="bg-slate-200 h-8 w-100 border border-neutral-400 px-3 items-center flex justify-center text-xs rounded-e-lg">
                  kilograms
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-2 mb-3 mt-10">

              
              <Button onClick={closeModal} variant="secondary" size="lg">

                Cancel
              </Button>
              <Button variant="primary" size="lg">
                Save
              </Button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default NewUnitConverstion;
