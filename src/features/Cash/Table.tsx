
const Table = () => {
  const data = [
    { id: '1', accountName: 'Cash on hand', accountCode: 'CA-001', accountType: 'Cash' },
    { id: '2', accountName: 'Petty Cash', accountCode: 'CA-002', accountType: 'Cash' },
    { id: '3', accountName: 'Office Cash Fund', accountCode: 'CA-003', accountType: 'Cash' },
  ];

  const tableHeaders = [
    "Account Name",
    "Account Code",
    "Account Type",
    "Documents",
    "Parent Account Type"
  ];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead className="text-[12px] text-center text-dropdownText">
          <tr style={{ backgroundColor: "#F9F7F0" }}>
            <th className="py-3 px-4 border-b border-tableBorder"><input type="checkbox" className="form-checkbox w-4 h-4" /></th>
            {tableHeaders.map((heading, index) => (
              <th className="py-2 px-4 font-medium border-b border-tableBorder" key={index}>{heading}</th>
            ))}
          </tr>
        </thead>
        <tbody className="text-dropdownText text-center text-[13px]">
          {data.map((item) => (
            <tr key={item.id} className="relative">
              <td className=""><input type="checkbox" className="form-checkbox w-4 h-4" /></td>
              <td className="py-2.5 px-4 border-b border-tableBorder">{item.accountName}</td>
              <td className="py-2.5 px-4 border-b border-tableBorder">{item.accountCode}</td>
              <td className="py-2.5 px-4 border-b border-tableBorder">{item.accountType}</td>
              <td className="py-2.5 px-4 border-b border-tableBorder"></td>
              <td className="py-2.5 px-4 border-b border-tableBorder"></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
