import { forwardRef } from "react";
import Modal from "../../Components/model/Modal";
import bgImage from "../../assets/Images/Frame 6.png";
import NewBrandModal from "./NewBrandModal";

type BrandModalProps = {
  onClose: () => void;
};

const BrandModal = forwardRef<HTMLDivElement, BrandModalProps>(({ onClose }, ref) => {
  return (
    <div ref={ref}>
      <Modal open={true} onClose={onClose} className="">
        <div className="p-5 mt-3">
          <div className="mb-5 flex p-4 rounded-xl bg-CreamBg relative overflow-hidden">
          <div
              className="absolute top-0 right-12 h-full w-[212px] bg-cover bg-no-repeat"
              style={{ backgroundImage: `url(${bgImage})` }}
            ></div>
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-textColor">Manage Brand</h3>
              <p className="text-dropdownText font-semibold text-sm mt-2">Have an insight on the profit or loss incurred due to the change in <br /> exchange rates</p>
            </div>
            <div className="ms-auto text-3xl cursor-pointer relative z-10" onClick={onClose}>
              &times;
            </div>
          </div>
            <div className="flex justify-end"> 
               <NewBrandModal/>
            </div>
   
        </div>
      </Modal>
    </div>
  );
});

export default BrandModal;
