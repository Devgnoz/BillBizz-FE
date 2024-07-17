import { forwardRef, useState } from "react";
import PencilEdit from "../../../assets/icons/PencilEdit";
import PlusCircle from "../../../assets/icons/PlusCircle";
import TrashCan from "../../../assets/icons/TrashCan";
import bgImage from "../../../assets/Images/6.png";
import Button from "../../../Components/Button";
import Modal from "../../../Components/model/Modal";

type Props = {
  onClose: () => void;
};

const rackData = [
  { title: "Rack A1", text: "Lorem ipsum dolor sit amet cons" },
  { title: "Rack A1", text: "Lorem ipsum dolor sit amet cons" },
  { title: "Rack A1", text: "Lorem ipsum dolor sit amet cons" },
  { title: "Rack A1", text: "Lorem ipsum dolor sit amet cons" },
  { title: "Rack A1", text: "Lorem ipsum dolor sit amet cons" },
  { title: "Rack A1", text: "Lorem ipsum dolor sit amet cons" },
];

const RackModal = forwardRef<HTMLDivElement, Props>(({ onClose }, ref) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div ref={ref}>
      <Modal open={true} onClose={onClose} className="">
        <div className="p-5 mt-3">
          <div className="mb-5 flex p-4 rounded-xl bg-CreamBg relative overflow-hidden h-24">
            <div
              className="absolute top-0 right-12 h-24 w-[200px] bg-cover bg-no-repeat"
              style={{ backgroundImage: `url(${bgImage})` }}
            ></div>
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-textColor">Manage Rack</h3>
              <p className="text-dropdownText font-semibold text-sm mt-2">
                Have an insight on the profit or loss incurred due to the change
                in exchange rates
              </p>
            </div>
            <div
              className="ms-auto text-3xl cursor-pointer relative z-10"
              onClick={onClose}
            >
              &times;
            </div>
          </div>

          <div className="flex justify-end me-2 my-4">
            <Button variant="secondary" size="lg" onClick={openModal}>
              <PlusCircle color="white" />
              Add Rack
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-5">
            {rackData.map((item, index) => (
              <div key={index} className="flex p-2">
                <div className="border border-slate-200 text-textColor rounded-xl w-96 h-auto p-3 flex justify-between">
                  <div>
                    <h3 className="text-sm font-bold">{item.title}</h3>
                    <p className="text-xs text-textColor">{item.text}</p>
                  </div>
                  <div className="flex space-x-2">
                    <p className="cursor-pointer">
                      <PencilEdit color="currentColor" />
                    </p>
                    <p className="cursor-pointer">
                      <TrashCan color="currentColor" />
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-end my-3">
            <Button variant="secondary" size="lg">
              Save
            </Button>
          </div>
        </div>
      </Modal>

      <Modal open={isModalOpen} onClose={closeModal} style={{ width: "35%" }}>
        <div className="p-5 mt-3">
          <div className=" flex p-4 rounded-xl  relative overflow-hidden">
            <h3 className="text-xl font-bold text-textColor">Add Rack</h3>

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
                  placeholder="Rack A1"
                  type="text"
                  className="border-inputBorder w-full text-sm border rounded p-1.5 pl-2 text-zinc-700 h-10 "
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm mb-1 text-labelColor">
                  count
                </label>
                <textarea
                  rows={4}
                  placeholder="Note"
                  className="border-inputBorder w-full text-sm border rounded p-1.5 pl-2 "
                />
              </div>

              <br />
              <div className="flex justify-end gap-2 mb-3">
                <Button variant="secondary" size="lg">
                  Save
                </Button>
                <Button onClick={closeModal} variant="fourthiary" size="lg">
                  Cancel
                </Button>
              </div>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
});

export default RackModal;
