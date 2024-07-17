import { useState, useEffect } from "react";
import Button from "../../../Components/Button";
import Modal from "../../../Components/model/Modal";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  initialData: { title: string; count: string } | null;
};

function NewBrandModal({ isOpen, onClose, initialData }: Props) {
  const [name, setName] = useState("");
  const [count, setcount] = useState("");

  useEffect(() => {
    if (initialData) {
      setName(initialData.title);
      setcount(initialData.count);
    } else {
      setName("");
      setcount("");
    }
  }, [initialData]);

  return (
    <Modal style={{ width: "40.5%" }} open={isOpen} onClose={onClose}>
      <div className="p-6 space-y-5">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-bold text-textColor">
            {initialData ? "Edit Brand" : "Add Brand"}
          </h3>
          <div
            className="ms-auto text-3xl font-normal
           cursor-pointer relative z-10 text-textColor"
            onClick={onClose}
          >
            &times;
          </div>
        </div>
        <form className="space-y-4">
          <div>
            <label className="block text-sm mb-1 text-labelColor">Name</label>
            <input
              type="text"
              placeholder="Brand name"
              className="border-inputBorder outline-none 
              w-full text-sm border
               rounded py-2 px-3"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm mb-1 text-labelColor">count</label>
            <textarea
              placeholder="Notes"
              className="border-inputBorder outline-none w-full text-sm border rounded py-3 px-3 h-24"
              value={count}
              onChange={(e) => setcount(e.target.value)}
            />
          </div>
          <div className="flex justify-end gap-3">
            <Button onClick={onClose} variant="fourthiary" size="lg">
              Cancel
            </Button>
            <Button variant="secondary" size="lg">
              Save
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  );
}

export default NewBrandModal;
