import { forwardRef, useState } from "react";
import bgImage from "../../../assets/Images/Frame 6.png";
import NewBrandModal from "./NewBrandModal";
import Button from "../../../Components/Button";
import PlusCircle from "../../../assets/icons/PlusCircle";
import OutlineTrashIcon from "../../../assets/icons/OutlineTrashIcon";
import PencilIcon from "../../../assets/icons/PencilIcon";
import Modal from "../../../Components/model/Modal";

type BrandModalProps = {
  onClose: () => void;
};

const BrandModal = forwardRef<HTMLDivElement, BrandModalProps>(
  ({ onClose }, ref) => {
    const cardData = [
      {
        title: "Xperia",
        count: "Lorem ipsum dolor sit amet cons",
      },
      {
        title: "Galaxy",
        count: "Lorem ipsum dolor sit amet cons",
      },
      {
        title: "Iphone",
        count: "Lorem ipsum dolor sit amet cons",
      },
    ];

    const [isEditModalOpen, setEditModalOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState<{
      title: string;
      count: string;
    } | null>(null);

    const openEditModal = (card: { title: string; count: string }) => {
      setSelectedCard(card);
      setEditModalOpen(true);
    };

    const openAddModal = () => {
      setSelectedCard(null);
      setEditModalOpen(true);
    };

    const closeEditModal = () => {
      setEditModalOpen(false);
    };

    return (
      <div ref={ref}>
        <Modal open={true} onClose={onClose} className="w-[66%]">
          <div className="p-5 mt-3">
            <div className="mb-5 flex p-4 rounded-xl bg-CreamBg relative overflow-hidden">
              <div
                className="absolute top-0 right-12 h-full w-[212px] bg-cover bg-no-repeat"
                style={{ backgroundImage: `url(${bgImage})` }}
              ></div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-textColor">
                  Manage Brand
                </h3>
                <p className="text-dropdownText font-semibold text-sm mt-2">
                  Have an insight on the profit or loss incurred due to the
                  change in <br /> exchange rates
                </p>
              </div>
              <div
                className="ms-auto text-3xl cursor-pointer relative z-10"
                onClick={onClose}
              >
                &times;
              </div>
            </div>
            <div className="flex justify-end pr-3">
              <Button
                onClick={openAddModal}
                variant="secondary"
                size="lg"
                style={{ height: "38px", padding: "14px" }}
              >
                <PlusCircle color="white" />
                New Brand
              </Button>
            </div>
            <br />

            <div className="grid grid-cols-3 gap-4">
              {cardData.map((item, index) => (
                <div key={index} className="flex justify-center mb-5">
                  <div className="p-3 border w-[272px] h-[59px] border-tableBorder rounded-lg flex justify-between">
                    <div>
                      <h6 className="text-sm text-textColor font-semibold">
                        {item.title}
                      </h6>
                      <p className="text-xs text-loremcolor">{item.count}</p>
                    </div>
                    <div className="flex space-x-2">
                      <button onClick={() => openEditModal(item)}>
                        <PencilIcon color="#4B5C79" />
                      </button>
                      <button>
                        <OutlineTrashIcon color="#4B5C79" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-end pr-3">
              <Button variant="secondary" size="xl">
                <p className="p-7">Save</p>
              </Button>
            </div>
          </div>
        </Modal>
        {isEditModalOpen && (
          <NewBrandModal
            isOpen={isEditModalOpen}
            onClose={closeEditModal}
            initialData={selectedCard}
          />
        )}
      </div>
    );
  }
);

export default BrandModal;
