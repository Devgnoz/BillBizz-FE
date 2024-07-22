import { useState } from "react";
import SettingsIcons from "../../../assets/icons/SettingsIcon";
import Modal from "../../../Components/model/Modal";
import Button from "../../../Components/Button";
import bgImage from "../../../assets/Images/Frame 6.png";

type Props = {};

const DebitNumberPrfncModal = ({}: Props) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);

  const openModal = () => {
    console.log("Modal open function called");
    setModalOpen(true);
  };

  const closeModal = () => {
    console.log("Modal close function called");
    setModalOpen(false);
  };

  return (
    <div>
      <button
        className="absolute inset-y-0 right-0 flex items-center px-2 pt-4 text-gray-700"
        onClick={openModal}
      >
        <SettingsIcons color="gray" />
      </button>

      <Modal open={isModalOpen} onClose={closeModal} style={{ width: "39%" }}>
        <div className="p-5 mt-3">
          <div className="mb-5 flex py-3 px-3 rounded-xl bg-CreamBg relative overflow-hidden">
            <div
              className="absolute top-0 -right-8 w-[178px] h-[70px]"
              style={{
                backgroundImage: `url(${bgImage})`,
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div className="relative z-10">
              <p className="text-tex font-bold text-base mt-2">
                Confiqure Supplier Debit Number Preference{" "}
              </p>
            </div>
            <div
              className="ms-auto text-3xl cursor-pointer relative z-10"
              onClick={closeModal}
            >
              &times;
            </div>
          </div>
         <p className="text-textColor px-2">
              You’ve selected manual supplier credits numbering. Do you want us to auto generate it for you?
    
         </p>
          <form>
            <div>
            <div className="flex items-center space-x-4 text-textColor text-sm pt-10">
                    <div className="flex gap-2 justify-center items-center ">
                      <div className="grid place-items-center mt-1">
                        <input
                          id="autoGenerate"
                          type="radio"
                          name=""
                          className={`col-start-1 row-start-1 appearance-none shrink-0 w-5 h-5 rounded-full border ${
                            selected === "autoGenerate"
                              ? "border-8 border-neutral-400"
                              : "border-1 border-neutral-400"
                          }`}
                          onChange={() => setSelected("autoGenerate")}
                          checked={selected === "autoGenerate"}
                        />
                        <div
                          id="autoGenerate"
                          className={`col-start-1 row-start-1 w-2 h-2 rounded-full ${
                            selected === "autoGenerate"
                              ? "bg-neutral-100"
                              : "bg-transparent"
                          }`}
                        />
                      </div>
                      <label
                        htmlFor="autoGenerate"
                        className="text-start font-medium"
                      >
                        Auto Generate
                      </label>
                    </div>
                    <div className="flex gap-2  justify-center items-center">
                      <div className="grid place-items-center mt-1">
                        <input
                          id="EnterValueManually"
                          type="radio"
                          name=""
                          className={`col-start-1 row-start-1 appearance-none shrink-0 w-5 h-5 rounded-full border ${
                            selected === "EnterValueManually"
                              ? "border-8 border-neutral-400"
                              : "border-1 border-neutral-400"
                          }`}
                          onChange={() => setSelected("EnterValueManually")}
                          checked={selected === "EnterValueManually"}
                        />
                        <div
                          id="EnterValueManually"
                          className={`col-start-1 row-start-1 w-2 h-2 rounded-full ${
                            selected === "EnterValueManually"
                              ? "bg-neutral-100"
                              : "bg-transparent"
                          }`}
                        />
                      </div>
                      <label
                        htmlFor="EnterValueManually"
                        className="text-start font-medium"
                      >
                        Enter Value Manually
                      </label>
                    </div>
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

export default DebitNumberPrfncModal;
