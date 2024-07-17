import React, { useState } from 'react';
import SearchBar from '../../../Components/SearchBar';

const SortSupplier = ({ isOpen, onClose }) => {
  const [columns, setColumns] = useState([
    { id: 1, name: "Name", visible: true },
    { id: 2, name: "Company Name", visible: true },
    { id: 3, name: "Email", visible: true },
    { id: 4, name: "Contact", visible: true },
    { id: 5, name: "Payables (BCY)", visible: false },
    { id: 6, name: "Unused Credits (BCY)", visible: false },
    { id: 7, name: "Payable Unused Credits", visible: false },
  ]);

  const handleCheckboxChange = (id) => {
    const newColumns = columns.map(column =>
      column.id === id ? { ...column, visible: !column.visible } : column
    );
    setColumns(newColumns);
  };

  return isOpen ? (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-96">
        <div className="p-4 border-b">
          <h2 className="text-lg font-semibold">Customise Column</h2>
        </div>
        <div className="p-4">
          <SearchBar style={{ marginBottom: '1rem' }} />
          <div>
            {columns.map((column) => (
              <div
                key={column.id}
                className={`flex items-center ${column.id !== 1 ? 'mt-2' : ''} border-b border-gray-300 py-2`}
                style={{
                  backgroundColor: column.visible ? "rgba(28, 28, 28, 0)" : "rgba(28, 28, 28, 0.04)"
                }}
              >
                <input
                  type="checkbox"
                  checked={column.visible}
                  onChange={() => handleCheckboxChange(column.id)}
                  className="form-checkbox w-4 h-4"
                />
                <span className="ml-2">{column.name}</span>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <button className="w-full py-2 text-gray-700 border rounded" onClick={() => alert('Add Custom Field clicked')}>
              + Add Custom Field
            </button>
          </div>
        </div>
        <div className="p-4 border-t flex justify-end space-x-2">
          <button className="py-2 px-4 border rounded" onClick={onClose}>Cancel</button>
          <button className="py-2 px-4 bg-red-600 text-white rounded" onClick={() => alert('Save clicked')}>Save</button>
        </div>
      </div>
    </div>
  ) : null;
};

export default SortSupplier;
