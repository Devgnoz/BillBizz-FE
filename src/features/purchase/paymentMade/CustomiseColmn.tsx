import { useState } from "react";
import ListFilter from "../../../assets/icons/ListFilter";
import Modal from "../../../Components/model/Modal";
import SearchBar from "../../sales/SearchBar";
import MoveIcon from "../../../assets/icons/MoveIcon";
import Button from "../../../Components/Button";
import PlusCircle from "../../../assets/icons/PlusCircle";

type Column = {
  id: string;
  label: string;
  visible: boolean;
};

type Props = {
  columns: Column[];
  setColumns: (columns: Column[]) => void;
};

const CustomiseColmn = ({ columns, setColumns }: Props) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [localColumns, setLocalColumns] = useState<Column[]>(columns);

  const openModal = () => {
    setLocalColumns(columns);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const onDragStart =
    (index: number) => (event: React.DragEvent<HTMLDivElement>) => {
      event.dataTransfer.setData("dragIndex", index.toString());
    };

  const onDragOver = () => (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const onDrop =
    (index: number) => (event: React.DragEvent<HTMLDivElement>) => {
      const dragIndex = parseInt(event.dataTransfer.getData("dragIndex"), 10);
      const draggedColumn = localColumns[dragIndex];
      const remainingColumns = localColumns.filter((_, i) => i !== dragIndex);
      const newColumns = [
        ...remainingColumns.slice(0, index),
        draggedColumn,
        ...remainingColumns.slice(index),
      ];
      setLocalColumns(newColumns);
    };

  const handleVisibilityChange = (id: string) => {
    setLocalColumns(
      localColumns.map((col) =>
        col.id === id ? { ...col, visible: !col.visible } : col
      )
    );
  };

  const saveChanges = () => {
    setColumns(localColumns);
    closeModal();
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
          <div>
            {localColumns.map((col, index) => (
              <div
                key={col.id}
                className="flex items-center py-2 px-2 gap-2 mb-2 mt-3 bg-cuscolumnbg cursor-move "
                draggable
                onDragStart={onDragStart(index)}
                onDragOver={onDragOver()}
                onDrop={onDrop(index)}
              >
                <MoveIcon color="#8F99A9" />
                <input
                  type="checkbox"
                  className="h-5 w-5 rounded-xl accent-dropdownText"
                  checked={col.visible}
                  onChange={() => handleVisibilityChange(col.id)}
                />
                <span className="text-textColor text-sm font-semibold">
                  {col.label}
                </span>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <Button
              className="w-full h-[35px] px-[30%] mt-2 font-medium rounded-md text-sm"
              variant="fourthiary"
            >
              <PlusCircle color="#565148" /> Add Custom Field
            </Button>
          </div>
          <div className="flex justify-end mt-4 gap-4">
            <Button
              onClick={closeModal}
              variant="fourthiary"
              className="rounded-md"
              size="lg"
            >
              Cancel
            </Button>
            <Button onClick={saveChanges} variant="secondary" size="lg">
              Save
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default CustomiseColmn;
