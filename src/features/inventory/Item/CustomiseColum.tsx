import { useState } from "react";
import ListFilter from "../../../assets/icons/ListFilter";
import Modal from "../../../Components/model/Modal";
import SearchBar from "../../sales/SearchBar";

type Props = {};

function CustomiseColmn({}: Props) {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <>
      <div className="cursor-pointer" onClick={openModal}>
        <ListFilter color="#4B5C79" classname="w-[18px] h-[18px]" />
      </div>

      <Modal
        open={isModalOpen}
        style={{ width: "30%" }}
        onClose={closeModal}
        className=""
      >
        <div className="p-5">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-lg font-semibold text-textColor">
              Customise Column
            </h3>
            <div
              className="text-3xl font-light cursor-pointer"
              onClick={closeModal}
            >
              &times;
            </div>
          </div>
          <SearchBar placeholder="Search" />
          <div></div>
        </div>
      </Modal>
    </>
  );
}

export default CustomiseColmn;
