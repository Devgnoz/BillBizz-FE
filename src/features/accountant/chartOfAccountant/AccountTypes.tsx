import { useState } from 'react';
import BookIcon from '../../../assets/icons/BookIcon';
import OpenedBookIcon from '../../../assets/icons/OpenedBookIcon';
import BookXIcon from '../../../assets/icons/BookXIcon';
import NewspaperIcon from '../../../assets/icons/NewspaperIcon';

const Suppliers = () => {
  const [selected, setSelected] = useState('');

  const Suppliers = [
    {
      icon: <BookIcon color="#585953" />,
      title: "All",
      key: "all",
    },
    {
      icon: <OpenedBookIcon color="#585953" />,
      title: "Active Customer",
      key: "active",
    },
    {
      icon: <BookXIcon color="#585953" />,
      title: "CRM Customer",
      key: "crm",
    },
    {
      icon: <NewspaperIcon color="#585953" />,
      title: "Duplicate Customer",
      key: "duplicate",
    },
    {
      icon: <NewspaperIcon color="#585953" />,
      title: "Inactive Customer",
      key: "inactive",
    },
    {
      icon: <NewspaperIcon color="#585953" />,
      title: "Overdue Customer",
      key: "overdue",
    },
    {
      icon: <NewspaperIcon color="#585953" />,
      title: "Unpaid Customer",
      key: "unpaid",
    },
    {
      icon: <NewspaperIcon color="#585953" />,
      title: "Liability Account",
      key: "liability",
    },
    {
      icon: <NewspaperIcon color="#585953" />,
      title: "Add Custom View",
      isCustomView: true,
      key: "custom",
    },
  ];

  return (
    <>
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-2">
      {Suppliers.slice(0, 4).map((customer) => (  
        <button
          key={customer.key}
          onClick={() => setSelected(customer.title)}
          className={`flex items-center gap-2 p-2 justify-center rounded border border-gray-300 ${
            selected === customer.title ? 'bg-WhiteIce' : 'bg-white'
          }`} style={{border:"1px solid #DADBDD"}}
        >
          {customer.icon}
          <span
            className={`text-xs font-semibold ${
              customer.isCustomView ? 'text-red-500' : 'text-spaceCadet'
            }`}
          >
            {customer.title}
          </span>
        </button>
      ))}
    </div>
      <div className='grid grid-cols-1 lg:grid-cols-5 gap-2'>
 {Suppliers.slice(4).map((customer) => (
        <button
          key={customer.key}
          onClick={() => setSelected(customer.title)}
          className={`flex items-center w-[100%] gap-2 p-2 justify-center rounded border border-gray-300 ${
            selected === customer.title ? 'bg-WhiteIce' : 'bg-white'
          }`} style={{border:"1px solid #DADBDD"}}
        >
          {customer.icon}
          <span
            className={`text-xs font-semibold ${
              customer.isCustomView ? 'text-red-500' : 'text-spaceCadet'
            }`} 
          >
            {customer.title}
          </span>
        </button>
      ))} 
      </div>
      </>
  );
};

export default Suppliers;
