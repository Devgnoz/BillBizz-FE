import { useState } from 'react';
import Button from '../../../Components/Button';
import Modal from '../../../Components/model/Modal';
import bgImage from '../../../assets/Images/Frame 6.png';
import PencilEdit from '../../../assets/icons/PencilEdit';
import PlusCircle from '../../../assets/icons/PlusCircle';
import TrashCan from '../../../assets/icons/TrashCan';

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
        <div className="mb-5 flex p-4 rounded-xl bg-CreamBg relative overflow-hidden h-24">
          <div
            className="absolute top-0 right-12 h-24 w-[200px] bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${bgImage})` }}
          ></div>
          <div className="relative z-10">
            <h3 className="text-xl font-bold text-textColor">Manage Category</h3>
            <p className="text-dropdownText font-semibold text-sm mt-2">
              Have an insight on the profit or loss incurred due to the change in exchange rates
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
          <Button variant="primary" size="xl" onClick={openAddModal}>
            <PlusCircle color="white" />
            <p className='text-sm'>Add Category</p>
          </Button>
        </div>

        <div className="grid grid-cols-3 gap-5">
          {categories.map((item) => (
            <div key={item.categoryName} className="flex p-2">
              <div className="border border-slate-200 text-textColor rounded-xl w-96 h-auto p-3 flex justify-between">
                <div>
                  <h3 className="text-sm font-bold">{item.categoryName}</h3>
                  <p className="text-xs text-textColor">{item.notes}</p>
                </div>
                <div className="flex space-x-2">
                  <p className="cursor-pointer" onClick={() => openEditModal(item)}>
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
          <Button className="flex justify-center" variant="primary" size="lg">
           Save
          </Button>
        </div>
         {/* Add Category */}
        <Modal open={isAddCategoryModal} onClose={closeAddModal} style={{ width: "40.5%" }}>
          <div className="p-6 space-y-8">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold text-textColor">Add Category</h3>
              <div className="ms-auto text-3xl cursor-pointer relative z-10" onClick={closeAddModal}>
                &times;
              </div>
            </div>
            <form className="">
              <div className="mb-4">
                <label className="block text-sm mb-1 text-labelColor">Name</label>
                <input
                  type="text"
                  placeholder="Electronics"
                  className="border-inputBorder w-full text-sm border rounded p-1.5 pl-2 text-zinc-700 h-10"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm mb-1 text-labelColor">Notes</label>
                <textarea
                  placeholder="Notes"
                  className="border-inputBorder w-full text-sm border rounded p-1.5 pl-2"
                  rows={4}
                />
              </div>
              <div className="flex justify-end gap-2 mb-3">
              <Button className="flex justify-center" onClick={closeAddModal} variant="tertiary" size="lg">
                  Cancel
                </Button>
               <Button className="flex justify-center" variant="primary" size="lg">
                Save
               </Button>
                
              </div>
            </form>
          </div>
        </Modal>
          {/* Edit Category */}
        <Modal open={isEditCategoryModal} onClose={closeEditModal} style={{ width: "40.5%" }}>
          <div className="p-6 space-y-8">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold text-textColor">Edit Category</h3>
              <div className="ms-auto text-3xl cursor-pointer relative z-10" onClick={closeEditModal}>
                &times;
              </div>
            </div>
            <form className="">
              <div className="mb-4">
                <label className="block text-sm mb-1 text-labelColor">Name</label>
                <input
                  type="text"
                  onChange={(e) =>
                    handleEditChange("categoryName", e.target.value)
                  }
                  value={editableCategory?.categoryName || ""}
                  placeholder="Electronics"
                  className="border-inputBorder w-full text-sm border rounded p-1.5 pl-2 text-zinc-700 h-10"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm mb-1 text-labelColor">Notes</label>
                <textarea
                  value={editableCategory?.notes || ""}
                  onChange={(e) => handleEditChange("notes", e.target.value)}
                  placeholder="Notes"
                  className="border-inputBorder w-full text-sm border rounded p-1.5 pl-2"
                  rows={4}
                />
              </div>
              <div className="flex justify-end gap-2 mb-3">
              <Button className='flex justify-center' onClick={closeEditModal} variant="tertiary" size="lg">
                  Cancel
                </Button>
                <Button className='flex justify-center' variant="primary" size="lg">
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
