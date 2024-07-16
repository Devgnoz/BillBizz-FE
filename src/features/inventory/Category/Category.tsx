
import { useState } from "react";
import PencilEdit from "../../.././assets/icons/PencilEdit";
import TrashCan from "../../.././assets/icons/TrashCan";
import PlusCircle from "../../../assets/icons/PlusCircle";
import bgImage from "../../../assets/Images/Frame 6.png";
import Button from "../../../Components/Button";
import Modal from "../../../Components/model/Modal";


type Category = {
  categoryName: string;
  notes: string;
};

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

function Category({ isOpen, onClose }: Props) {
  const [isAddCategoryModal, setIsAddCategoryModal] = useState(false);
  const [isEditCategoryModal, setIsEditCategoryModal] = useState(false);
  const [editableCategory, setEditableCategory] = useState<Category | null>(
    null
  );

  const categories: Category[] = [
    { categoryName: "Electronics", notes: "Lorem ipsm dolor sit amet cons" },
    {
      categoryName: "Office supplies",
      notes: "Lorem ipsm dolor sit amet cons",
    },
    { categoryName: "Apparel", notes: "Lorem ipsm dolor sit amet cons" },
    { categoryName: "Home Appliance", notes: "Lorem ipsm dolor sit amet cons" },
    { categoryName: "Furniture", notes: "Lorem ipsm dolor sit amet cons" },
    {
      categoryName: "Health & Beauty",
      notes: "Lorem ipsm dolor sit amet cons",
    },
  ];

  const openAddModal = () => {
    setIsAddCategoryModal(true);
  };

  const openEditModal = (category: Category) => {
    setEditableCategory(category);
    setIsEditCategoryModal(true);
  };

  const closeAddModal = () => {
    setIsAddCategoryModal(false);
  };

  const closeEditModal = () => {
    setIsEditCategoryModal(false);
  };

  const handleEditChange = (field: keyof Category, value: string) => {
    if (editableCategory) {
      setEditableCategory({ ...editableCategory, [field]: value });
    }
  };

  return (
    <Modal open={isOpen} onClose={onClose} className="w-[65%]">
      <div className="p-5 mt-3">
        <div className="mb-5 flex px-5 py-3 rounded-xl relative bg-CreamBg justify-between overflow-hidden">
          <div
            className="absolute right-16 top-0 bottom-24 w-[178px] h-[89px] bg-cover"
            style={{
              backgroundImage: `url(${bgImage})`,
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div className="space-y-2">
            <h2 className="font-bold text-xl">Manage Category</h2>
            <p className="text-md">
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

        <div className="flex justify-end mb-3">
          <Button onClick={openAddModal} variant="secondary" size="md">
            <p className="text-[14px] flex justify-center items-center">
              <PlusCircle color="white" />
              &nbsp;&nbsp;Add Category
            </p>
          </Button>
        </div>

        <Modal
          open={isAddCategoryModal}
          onClose={closeAddModal}
          className="w-[35%]"
        >
          <div className="p-6 space-y-8">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-bold">Add Category</h3>
              <div
                className="ms-auto text-3xl cursor-pointer relative z-10"
                onClick={closeAddModal}
              >
                &times;
              </div>
            </div>
            <form className="space-y-4">
              <div>
                <label className="block text-md mb-1 text-labelColor">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Electronics"
                  className="border-inputBorder outline-none w-full text-md border rounded py-3 px-3"
                />
              </div>
              <div>
                <label className="block text-md mb-1 text-labelColor">
                  count
                </label>
                <textarea
                  placeholder="Notes"
                  className="border-inputBorder outline-none w-full text-md border rounded py-3 px-3 h-28"
                />
              </div>
              <div className="flex justify-end gap-3">
                <Button onClick={closeAddModal} variant="fourthiary" size="lg">
                  Cancel
                </Button>
                <Button onClick={closeAddModal} variant="secondary" size="lg">
                  Save
                </Button>
              </div>
            </form>
          </div>
        </Modal>

        <div className="grid grid-cols-3">
          {categories.map((item) => (
            <div key={item.categoryName} className="flex p-2">
              <div className="border border-slate-200 rounded-xl w-72 h-auto p-3 flex justify-between">
                <div>
                  <h3 className="text-sm font-bold">{item.categoryName}</h3>
                  <p className="text-sm">{item.notes}</p>
                </div>
                <div className="flex space-x-2">
                  <p
                    onClick={() => openEditModal(item)}
                    className="cursor-pointer"
                  >
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
        <Modal
          open={isEditCategoryModal}
          onClose={closeEditModal}
          className="w-[35%]"
        >
          <div className="p-6 space-y-8">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold">Edit Category</h3>
              <div
                className="ms-auto text-3xl cursor-pointer relative"
                onClick={closeEditModal}
              >
                &times;
              </div>
            </div>
            <form className="space-y-4">
              <div>
                <label className="block text-md mb-1 text-labelColor">
                  Name
                </label>
                <input
                  type="text"
                  onChange={(e) =>
                    handleEditChange("categoryName", e.target.value)
                  }
                  value={editableCategory?.categoryName || ""}
                  placeholder="Electronics"
                  className="border-inputBorder outline-none w-full text-md border rounded py-3 px-3"
                />
              </div>
              <div>
                <label className="block text-md mb-1 text-labelColor">
                  count
                </label>
                <textarea
                  value={editableCategory?.notes || ""}
                  onChange={(e) => handleEditChange("notes", e.target.value)}
                  placeholder="Notes"
                  className="border-inputBorder outline-none w-full text-md border rounded py-3 px-3 h-28"
                />
              </div>
              <div className="flex justify-end gap-3">
                <Button onClick={closeEditModal} variant="fourthiary" size="lg">
                  Cancel
                </Button>
                <Button onClick={closeEditModal} variant="secondary" size="lg">
                  Save
                </Button>
              </div>
            </form>
          </div>
        </Modal>
      </div>
    </Modal>
  );
}

export default Category;
