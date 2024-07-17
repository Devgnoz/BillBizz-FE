import { useState } from "react";
import Button from "../../../Components/Button";
import CirclePlus from "../../../assets/icons/circleplus";
import bgImage from "../../../assets/Images/14.png";
import savings from "../../../assets/Images/Savings.png";
import CehvronDown from "../../../assets/icons/CehvronDown";
import Modal from "../../../Components/model/Modal";
import PlusCircle from "../../../assets/icons/PlusCircle";
type Props = {};

const NewBankModal = ({}: Props) => {
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
        <PlusCircle color="white"  />{" "}
        <p className="text-sm font-medium">Create Account</p>
      </Button>

      <Modal open={isModalOpen} onClose={closeModal} className="w-[68%]">
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
                Create Bank Account
              </h3>
              <p className="text-dropdownText font-semibold text-sm mt-2">
                Open a new bank account swiftly and securely.{" "}
              </p>
            </div>
            <div
              className="ms-auto text-3xl cursor-pointer relative z-10"
              onClick={closeModal}
            >
              &times;
            </div>
          </div>

          <form className="grid grid-cols-12 gap-4">
            <div className="mt-12 col-span-3 justify-items-center ">
              <img src={savings} alt="" />
            </div>
            <div className="col-span-9">
              <div className="mb-4">
                <label className="block text-sm mb-1 text-labelColor">
                  Account Name
                </label>
                <input
                  type="text"
                  placeholder="Value"
                  className="border-inputBorder w-full text-sm border rounded p-1.5 pl-2"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm mb-1 text-labelColor">
                  Account Code
                </label>
                <input
                  type="text"
                  placeholder="Value"
                  className="border-inputBorder w-full text-sm border rounded p-1.5 pl-2"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm mb-1 text-labelColor">
                    Account rating
                  </label>
                  <input
                    type="text"
                    placeholder="Value"
                    className="border-inputBorder w-full text-sm border rounded p-1.5 pl-2"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1 text-labelColor">
                    IFSC
                  </label>
                  <input
                    type="text"
                    placeholder="Value"
                    className="border-inputBorder w-full text-sm border rounded p-1.5 pl-2"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1 text-labelColor">
                    Currency
                  </label>
                  <div className="relative ">
                    <div className="relative w-full">
                      <select className="block appearance-none w-full  text-zinc-400 bg-white border border-slate-200 text-sm h-[39px] pl-9 pr-8 rounded-md leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                        <option value="" className="text-gray">
                          Select currency
                        </option>

                        <option value="kerala" className="text-slate-300">
                          INR
                        </option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <CehvronDown color="gray" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-sm mb-1 text-labelColor">
                  count
                </label>
                <textarea
                  placeholder="Value"
                  className="border-inputBorder w-full text-sm border rounded p-2 pt-5 pl-2"
                />
              </div>
              <br />
              <div className="flex justify-end gap-2 mb-3">
                <Button onClick={closeModal} variant="secondary" size="lg">
                  Cancel
                </Button>
                <Button variant="primary" size="lg">
                  Save
                </Button>
              </div>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default NewBankModal;
