import { useState } from "react";
import CashImage from "../../../assets/Images/CashImage.png";
import bgImage from "../../../assets/Images/14.png";
import Button from "../../../Components/Button";
import PlusCircle from "../../../assets/icons/PlusCircle";
import Modal from "../../../Components/model/Modal";

type Props = {};

function CreateAccountModal({}: Props) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [accounts, setAccounts] = useState({
    accountName: "",
    accountCode: "",
    count: "",
  });
  console.log(accounts);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setAccounts((prevAccounts) => ({
      ...prevAccounts,
      [name]: value,
    }));
  };

  return (
    <div>
      <Button
        onClick={openModal}
        variant="secondary"
        className="flex items-center justify-center"
        size="xl"
      >
        <span className="flex items-center px-2.5">
          <PlusCircle color="" /> &nbsp; Create Account
        </span>
      </Button>

      <Modal open={isModalOpen} onClose={closeModal} className="">
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
                Create Cash Account
              </h3>
              <p className="text-dropdownText font-semibold text-sm mt-2">
                Set up your cash account effortlessly!
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
            <div className="mt-12">
              <img src={CashImage} alt="Cash" />
            </div>
            <div className="w-[65%]">
              <div className="mb-4">
                <label className="block text-sm mb-1 text-labelColor">
                  Account Name
                </label>
                <input
                  type="text"
                  name="accountName"
                  value={accounts.accountName}
                  onChange={handleChange}
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
                  name="accountCode"
                  value={accounts.accountCode}
                  onChange={handleChange}
                  placeholder="Value"
                  className="border-inputBorder w-full text-sm border rounded p-1.5 pl-2"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm mb-1 text-labelColor">
                  count
                </label>
                <textarea
                  name="count"
                  value={accounts.count}
                  onChange={handleChange}
                  placeholder="Value"
                  className="border-inputBorder w-full text-sm border rounded p-2 pt-5 pl-2"
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
    </div>
  );
}

export default CreateAccountModal;
