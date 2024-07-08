import  { useState } from "react";
import PrinterIcon from "../../assets/icons/PrinterIcon";
import Modal from "../../Components/model/Modal";
import CashImage from "../../assets/Images/CashImage.png"
import Button from "../../Components/Button";
import bgImage from "../../assets/Images/Frame 6.png"
type Props = {};

function Print({}: Props) {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <button
        onClick={openModal}
        className="w-20 h-8 text-sm flex items-center justify-center border border-gray-500 rounded-lg text-gray-500"
      >
        <span className="flex items-center px-2.5 gap-2 font-medium">
          <PrinterIcon color="#565148" /> Print
        </span>
      </button>

      <Modal open={isModalOpen} onClose={closeModal}>
        <div className="p-5 mt-3">
          <div className="mb-5 flex p-4 rounded-xl bg-CreamBg">
            <div>
            <h3 className="text-xl font-bold text-textColor">Create Account</h3>
          <p className="text-dropdownText font-semibold text-sm mt-2">Start your journey with us—create your account in moments!</p>
          </div>
          <div className="ms-auto text-3xl cursor-pointer" style={{backgroundImage:""}} onClick={closeModal}>
          &times;
          </div>
          </div>


          <form className="flex justify-between ">
            <div>
            <img src={CashImage} alt="" />
            </div>
            <div className="w-[65%]">
            <div className="mb-4">
              <label className="block text-sm  text-labelColor mb-1">Account Type</label>
             <select name="" id="" className="w-[100%] border border-inputBorder text-slate-400 rounded p-1.5 pl-2 text-sm">
              <option value="">Cash</option>
              <option value="">Cash</option>
              <option value="">Cash</option>
             </select>
            </div>
            <div className="mb-4">
              <label className="block text-sm mb-1 text-labelColor">Account Name</label>
              <input type="text" placeholder="Value" className="border-inputBorder w-full text-sm border rounded p-1.5 pl-2" />
            </div>
            <div className="mb-4">
              <label className="block text-sm  mb-1 text-labelColor">Description</label>
              <textarea  placeholder="Value" className="border-inputBorder w-full text-sm border rounded p-2 pt-5 pl-2" />
            </div>
            <div className="mb-4">
              <label className="block text-sm  mb-1 text-labelColor">Account Code</label>
              <input type="text" placeholder="Value" className="w-full border rounded p-1.5 pl-2 border-inputBorder text-sm" />
            </div>
            <br />
            <div className="flex justify-end gap-2 mb-3">
              <Button onClick={closeModal} variant="fourthiary" size="lg">Cancel</Button>
              <Button variant="secondary" size="lg">Save</Button>
            </div>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default Print;
