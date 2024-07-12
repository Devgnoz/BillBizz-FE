import { useState } from "react";
import PlusCircle from "../../assets/icons/PlusCircle"
import Button from "../../Components/Button"
import Modal from "../../Components/model/Modal";

type Props = {}

function NewBrandModal({ }: Props) {
    const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

    return (
        <>
            <Button onClick={openModal} variant="secondary" size="lg" style={{ height: "38px", padding: "14px" }}>
                <PlusCircle color="white" />
                New Brand</Button>


                <Modal className="w-[568px] h-[377px]" open={isModalOpen} onClose={closeModal}>
        <div className="p-5 mt-3">
          <div className="mb-5 flex p-4 rounded-xl bg-CreamBg relative overflow-hidden">
            <div
              className="absolute top-0 right-16 w-[178px] h-[89px]"
            ></div>
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-textColor">
                Create Account
              </h3>
              <p className="text-dropdownText font-semibold text-sm mt-2">
                Start your journey with us—create your account in moments!
              </p>
            </div>
            <div
              className="ms-auto text-3xl cursor-pointer relative z-10"
              onClick={closeModal}
            >
              &times;
            </div>
          </div>

          <form className="flex justify-between">
            <div>
            </div>
            <div className="w-[65%]">
              <div className="mb-4">
                <label className="block text-sm text-labelColor mb-1">
                  Account Type
                </label>
               
              </div>
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
              <br />
              <div className="flex justify-end gap-2 mb-3">
                <Button onClick={closeModal} variant="fourthiary" size="lg">
                  Cancel
                </Button>
                <Button variant="secondary" size="lg">
                  Save
                </Button>
              </div>
            </div>
          </form>
        </div>
      </Modal>
        </>
    )
}

export default NewBrandModal