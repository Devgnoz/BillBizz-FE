import React, { useState } from 'react';
import Button from '../../Components/Button';
import Modal from '../../Components/model/Modal';
import bgImage from '../../assets/Images/Frame 6.png';
import CirclePlus from '../../assets/icons/circleplus';
import PencilEdit from '../../assets/icons/PencilEdit';
import TrashCan from '../../assets/icons/TrashCan';

type Category = {
  categoryName: string;
  notes: string;
};

type Props = {};

function Category({}: Props) {
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);
  const [isAddCategoryModal, setIsAddCategoryModal] = useState(false);
  const [isEditCategoryModal, setIsEditCategoryModal] = useState(false);
  const [editableCategory, setEditableCategory] = useState<Category | null>(null);
  const [updatedCategory, setUpdatedCategory] = useState<Category>({
    categoryName: '',
    notes: '',
  });

  const categories: Category[] = [
    {
      categoryName: 'Electronics',
      notes: 'Lorem ipsm dolor sit amet cons',
    },
    {
      categoryName: 'Office supplies',
      notes: 'Lorem ipsm dolor sit amet cons',
    },
    {
      categoryName: 'Apparel',
      notes: 'Lorem ipsm dolor sit amet cons',
    },
    {
      categoryName: 'Home Appliance',
      notes: 'Lorem ipsm dolor sit amet cons',
    },
    {
      categoryName: 'Furniture',
      notes: 'Lorem ipsm dolor sit amet cons',
    },
    {
      categoryName: 'Health & Beauty',
      notes: 'Lorem ipsm dolor sit amet cons',
    },
  ];

  const openModal = (
    category: boolean,
    addCategory: boolean,
    editCategory: boolean,
    editableData?: Category
  ) => {
    if (editableData) setEditableCategory(editableData);
    if (category) setIsCategoryModalOpen(true);
    if (addCategory) setIsAddCategoryModal(true);
    if (editCategory) setIsEditCategoryModal(true);
  };

  const closeModal = (category: boolean, addCategory: boolean, editCategory: boolean) => {
    if (category) setIsCategoryModalOpen(false);
    if (addCategory) setIsAddCategoryModal(false);
    if (editCategory) setIsEditCategoryModal(false);
  };

  const handleEditChange = (field: keyof Category, value: string) => {
    if (editableCategory) {
      setEditableCategory({ ...editableCategory, [field]: value });
    }
  };

  return (
    <>
      <Button onClick={() => openModal(true, false, false, undefined)}>Category</Button>
      <Modal open={isCategoryModalOpen} onClose={() => closeModal(true, false, false)} className="w-[70%]">
        <div className="p-5 mt-3">
          {/* Modal Header */}
          <div className="mb-5 flex px-5 py-3 rounded-xl relative bg-CreamBg justify-between overflow-hidden">
            <div
              className="absolute right-16 top-0 bottom-24 w-[178px] h-[89px] bg-cover"
              style={{
                backgroundImage: `url(${bgImage})`,
                backgroundRepeat: 'no-repeat',
              }}
            ></div>

            <div className="space-y-2">
              <h2 className="font-bold text-xl">Manage Category</h2>
              <p className="text-md">
                Have an insight on the profit or loss incurred due to the change in exchange rates
              </p>
            </div>
            <div className="ms-auto text-3xl cursor-pointer relative z-10" onClick={() => closeModal(true, false, false)}>
              &times;
            </div>
          </div>
          {/* Add Category */}
          <div className="flex justify-end mb-3">
            <Button onClick={() => openModal(false, true, false, undefined)} variant="secondary" size="xl">
              <p className="text-[16px] flex justify-center items-center">
                <CirclePlus color="white" size="24" />
                &nbsp;&nbsp;Add Category
              </p>
            </Button>
          </div>
          <Modal open={isAddCategoryModal} onClose={() => closeModal(false, true, false)} className="w-[36%]">
            <div className="p-6 space-y-8">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold">Add Category</h3>
                <div className="ms-auto text-3xl cursor-pointer relative z-10" onClick={() => closeModal(false, true, false)}>
                  &times;
                </div>
              </div>
              <form className="space-y-4">
                <div>
                  <label className="block text-md mb-1 text-labelColor">Name</label>
                  <input
                    type="text"
                    placeholder="Electronics"
                    className="border-inputBorder outline-none w-full text-md border rounded py-3 px-3"
                  />
                </div>
                <div>
                  <label className="block text-md mb-1 text-labelColor">Description</label>
                  <textarea
                    placeholder="Notes"
                    className="border-inputBorder outline-none w-full text-md border rounded py-3 px-3 h-28"
                  />
                </div>
                <div className="flex justify-end gap-3">
                  <Button onClick={() => closeModal(false, true, false)} variant="fourthiary" size="lg">
                    <p className="text-[16px]">Cancel</p>
                  </Button>
                  <Button onClick={() => closeModal(false, true, false)} variant="secondary" size="lg">
                    <p className="text-[16px]">Save</p>
                  </Button>
                </div>
              </form>
            </div>
          </Modal>
          {/* Categories list */}
          <div className="grid grid-cols-3">
            {categories.map((item) => (
              <div key={item.categoryName} className="flex p-2">
                <div className="border border-slate-200 rounded-xl w-96 h-auto p-3 flex justify-between">
                  <div>
                    <h3 className="text-md font-bold">{item.categoryName}</h3>
                    <p className="text-sm">{item.notes}</p>
                  </div>
                  <div className="flex space-x-2">
                    <p onClick={() => openModal(false, false, true, item)} className="cursor-pointer">
                      <PencilEdit />
                    </p>
                    <p className="cursor-pointer">
                      <TrashCan />
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Edit Category */}
          <Modal open={isEditCategoryModal} onClose={() => closeModal(false, false, true)} className="w-[36%]">
            <div className="p-6 space-y-8">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold">Edit Category</h3>
                <div className="ms-auto text-3xl cursor-pointer relative" onClick={() => closeModal(false, false, true)}>
                  &times;
                </div>
              </div>
              <form className="space-y-4">
                <div>
                  <label className="block text-md mb-1 text-labelColor">Name</label>
                  <input
                    type="text"
                    onChange={(e) => handleEditChange('categoryName', e.target.value)}
                    value={editableCategory?.categoryName || ''}
                    placeholder="Electronics"
                    className="border-inputBorder outline-none w-full text-md border rounded py-3 px-3"
                  />
                </div>
                <div>
                  <label className="block text-md mb-1 text-labelColor">Description</label>
                  <textarea
                    value={editableCategory?.notes || ''}
                    onChange={(e) => handleEditChange('notes', e.target.value)}
                    placeholder="Notes"
                    className="border-inputBorder outline-none w-full text-md border rounded py-3 px-3 h-28"
                  />
                </div>
                <div className="flex justify-end gap-3">
                  <Button onClick={() => closeModal(false, false, true)} variant="fourthiary" size="lg">
                    <p className="text-[16px]">Cancel</p>
                  </Button>
                  <Button onClick={() => closeModal(false, false, true)} variant="secondary" size="lg">
                    <p className="text-[16px]">Save</p>
                  </Button>
                </div>
              </form>
            </div>
          </Modal>
          {/* Save */}
          <div className="flex justify-end my-4">
            <Button variant="secondary" size="lg">
              <p className="text-[16px]">Save</p>
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default Category;
