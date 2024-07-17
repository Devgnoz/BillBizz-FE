import Ellipsis from '../../../assets/icons/Ellipsis';

type Props = {}

function Table({}: Props) {
    const data = [
        { id: '1', date: '25-06-24', journel: 'CA-001', referencerating: "",status:"Published",notes:"Lorem Ipsm",amount:8000 },
        { id: '2', date: '26-06-24', journel: 'CA-002', referencerating: "",status:"Published",notes:"Lorem Ipsm",amount:6000   },
        { id: '3', date: '29-06-24', journel: 'CA-003', referencerating: "",status:"Published",notes:"Lorem Ipsm",amount:7000   },
      ];
    
      const tableHeaders = [
        "Date",
        "Journel",
        "Reference rating",
        "Notes",
        "Status",
        "Amount",
        ""
      ];
    
  return (
    <div className="overflow-x-auto ">
    <table className="min-w-full bg-white mb-5">
      <thead className="text-[12px] text-center text-dropdownText">
        <tr style={{ backgroundColor: "#F9F7F0" }}>
          <th className="py-3 px-4 border-b  border-tableBorder"><input type="checkbox" className="form-checkbox w-4 h-4" /></th>
          {tableHeaders.map((heading, index) => (
            <th className="py-2 px-4 font-medium  border-b  border-tableBorder" key={index}>{heading}</th>
          ))}
        </tr>
      </thead>
      <tbody className="text-dropdownText text-center text-[13px]">
        {data.map((item) => (
          <tr key={item.id} className="relative">
            <td className="py-2.5 px-4  border-y border-tableBorder"><input type="checkbox" className="form-checkbox w-4 h-4" /></td>
            <td className="py-2.5 px-4  border-y border-tableBorder">{item.date}</td>
            <td className="py-2.5 px-4  border-y border-tableBorder">{item.journel}</td>
            <td className="py-2.5 px-4  border-y border-tableBorder">{item.referencerating}</td>
            <td className="py-2.5 px-4  border-y border-tableBorder">{item.notes}</td>
            <td className="py-2.5 px-4  border-y border-tableBorder">{item.status}</td>
            <td className="py-2.5 px-4  border-y border-tableBorder">{item.amount}</td>
            <td className="cursor-pointer py-2.5 px-4 border-y border-tableBorder">
              <div className="flex justify-end">
              <Ellipsis height={17}/>
              </div>
          </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  )
}

export default Table