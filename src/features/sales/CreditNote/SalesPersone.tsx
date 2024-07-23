import { useState } from "react";
import CehvronDown from "../../../assets/icons/CehvronDown";
import bgImage from "../../../assets/Images/Frame 6.png";
import Modal from "../../../Components/model/Modal";
import Button from "../../../Components/Button";
import PencilEdit from "../../../assets/icons/PencilEdit";
import TrashCan from "../../../assets/icons/TrashCan";
import PlusCircle from "../../../assets/icons/PlusCircle";
import SearchIcon from "../../../assets/icons/SearchIcon";

type Props = {};

const SalesPersone = ({}: Props) => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [newSalesPerson, setNewSalesPerson] = useState<boolean>(false);

  const data = [
    { name: "Joey Tribiyani", email: "joey@gmail.com" },
    { name: "Monica Chandler", email: "monica@gmail.com" },
    { name: "Ross Geller", email: "rossgeller@gmail.com" },
    { name: "Phebe Buffyey", email: "phebe@gmail.com" },
    { name: "Chandler Bing", email: "chandler@gmail.com" },
    { name: "Steve Harington", email: "steve@gmail.com" },
  ];

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <div>
      <div className="w-full" onClick={openModal}>
        <label className="block text-sm mb-1 mt-1 text-labelColor">
          Sales Person
        </label>
        <div className="relative w-full">
          <div className="items-center flex appearance-none w-full h-9 text-zinc-400 bg-white border border-inputBorder text-sm pl-2 pr-8 rounded-md leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
            <p>Select Sales Person</p>
          </div>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <CehvronDown color="gray" />
          </div>
        </div>
      </div>

      <Modal open={isModalOpen} onClose={closeModal} style={{ width: "60%" }}>
        <div className="p-5 mt-3">
          <div className="mb-5 flex p-4 rounded-xl bg-CreamBg relative overflow-hidden h-24">
            <div
              className="absolute top-0 right-12 h-24 w-[200px] bg-cover bg-no-repeat"
              style={{ backgroundImage: `url(${bgImage})` }}
            ></div>
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-textColor">
                Manage Salespersone
              </h3>
              <p className="text-dropdownText font-semibold text-sm mt-2">
                Have an insight on the profit or loss incurred due to the change
                in <br /> exchange rates
              </p>
            </div>
            <div
              className="ms-auto text-3xl cursor-pointer relative z-10"
              onClick={closeModal}
            >
              &times;
            </div>
          </div>

          {newSalesPerson ? (
            <div className="grid grid-flow-col gap-4 my-6 items-center">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Name"
                  className="border-inputBorder w-72 text-sm border rounded text-dropdownText  p-2 h-9 mt-2 "
                />{" "}
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="Email"
                  className="border-inputBorder w-72 text-sm border rounded text-dropdownText  p-2 h-9 mt-2 "
                />

              <div className="flex gap-4">
                  <Button size="sm">
                    {" "}
                    <PlusCircle color="white" />
                    Save & Select{" "}
                  </Button>
  
                  {" "}
                  <Button variant="secondary" size="sm" onClick={()=>setNewSalesPerson(false)}>

                    Cancel
                  </Button>   
              </div>           
            </div>
          ) : (
            <div className="flex me-2 my-4 w-100 gap-5 justify-between">
              <div>
                <div className="relative w-full">
                  <input
                    className="border-inputBorder w-80 text-sm border rounded p-1.5 pl-2 text-zinc-700 h-9 "
                    type="text"
                    placeholder="Select Salespersone"
                  />
                  <div className="pointer-events-none absolute inset-y-0 right-5 flex items-center px-2 text-gray-700">
                    <SearchIcon width={2} color="gray" />
                  </div>
                </div>
              </div>
              <div className="justify-end items-end">
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => setNewSalesPerson(true)}
                >
                  <PlusCircle color="white" />
                  Add Salespersone
                </Button>
              </div>
            </div>
          )}

          <div className="grid grid-cols-3 gap-4">
            {data.map((item, index) => (
              <div key={index} className="flex p-2">
                <div className="border border-slate-200 text-textColor rounded-xl w-96 h-auto p-3 flex justify-between">
                  <div>
                    <h3 className="text-sm font-bold">{item.name}</h3>
                    <p className="text-xs text-textColor">{item.email}</p>
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
            <Button variant="secondary" size="sm">
              Save
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default SalesPersone;
