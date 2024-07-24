import { useState } from 'react';
import SettingsIcons from '../../../assets/icons/SettingsIcon';
import bgImage from '../../../assets/Images/Frame 6.png';
import Modal from '../../../Components/model/Modal';
import Button from '../../../Components/Button';
import PlusCircle from '../../../assets/icons/PlusCircle';


type Props = {}

function ManageSalesPerson({}: Props) {
    const [modalState, setModalState] = useState({ manage: false, add: false });
    
    const openModal = (type:any) => {
        setModalState({ ...modalState, [type]: true });
    }

    const closeModal = (type:any) => {
        setModalState({ ...modalState, [type]: false });
    }

    const data = [
        {
            id: 1,
            customerName: "Monica Chandler",
            amount: "monica@gmail.com",
            balance: "0001",
        },
        {
            id: 2,
            customerName: "Chandler Bing",
            amount: "chandler@gmail.com",
            balance: "0002",
        },
        {
            id: 3,
            customerName: "Joey Tribbiani",
            amount: "joey@gmail.com",
            balance: "0003",
        },
    ];

    const tableHeaders = [
        "Sales Person Name",
        "Email",
        "Actions",
    ];

    return (
        <>
            <div onClick={() => openModal('manage')} className="hover:bg-gray-100 cursor-pointer border border-slate-400 rounded-lg py-3 flex justify-between items-center">
                <div className="flex justify-between ps-4 ">
                    <div className="flex items-center space-x-1">
                        <SettingsIcons size="sm" bold={2.5} color="#820000" />
                        <p className="text-sm text-[#820000] font-bold">Manage Sales Person</p>
                    </div>
                </div>
                <div className="ms-auto text-2xl cursor-pointer relative -mt-2 pe-2">
                    &times;
                </div>
            </div>

            {/* Manage Sales Person Modal */}
            <Modal open={modalState.manage} onClose={() => closeModal('manage')} style={{ width: "40.5%" }}>
                <div className="p-5 space-y-6">
                    <div className="mb-5 flex px-4 rounded-xl bg-CreamBg relative overflow-hidden h-14">
                        <div
                            className="absolute top-0 right-12 h-[100%] w-[20%] bg-cover"
                            style={{ backgroundImage: `url(${bgImage})` }}
                        ></div>
                        <div className="relative z-10 flex items-center">
                            <h3 className="text-xl font-bold text-textColor">Manage Sales Person</h3>
                        </div>
                        <div
                            className="ms-auto text-3xl text-black cursor-pointer relative z-10"
                            onClick={() => closeModal('manage')}
                        >
                            &times;
                        </div>
                    </div>
                    <div className='flex w-full space-x-2 items-center text-textColor'>
                        <p className='text-xs'>Search Salesperson</p>
                        <input
                            type="text"
                            className="border-inputBorder outline-none flex-grow text-sm border rounded p-1.5 pl-2 h-9"
                        />
                        <Button color='primary' size='sm' onClick={() => openModal('add')}>
                            <PlusCircle color="white" />
                            <p className='text-xs'>New SalesPerson</p>
                        </Button>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white mb-5">
                            <thead className="text-[12px] text-center text-dropdownText">
                                <tr style={{ backgroundColor: "#F9F7F0" }}>
                                    {tableHeaders.map((heading, index) => (
                                        <th
                                            className="py-2 px-4 font-medium border-b border-tableBorder"
                                            key={index}
                                        >
                                            {heading}
                                        </th>
                                    ))}
                                    <th className="py-2 px-4 font-medium border-b border-tableBorder"></th>
                                </tr>
                            </thead>
                            <tbody className="text-dropdownText text-center text-[13px]">
                                {data.map((item) => (
                                    <tr key={item.id} className="relative">
                                        <td className="py-2.5 px-4 border-y border-tableBorder">
                                            {item.customerName}
                                        </td>
                                        <td className="py-2.5 px-4 border-y border-tableBorder">
                                            {item.amount}
                                        </td>
                                        <td className="py-2.5 px-4 border-y border-tableBorder">
                                            {item.balance}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </Modal>

            {/* Add Sales Person Modal */}
            <Modal open={modalState.add} onClose={() => closeModal('add')} style={{ width: "45.5%",height:"60%" }}>
                <div className="p-5 space-y-6">
                    <div className="mb-5 flex px-4 rounded-xl bg-CreamBg relative overflow-hidden h-14">
                        <div
                            className="absolute top-0 right-12 h-[100%] w-[20%] bg-cover"
                            style={{ backgroundImage: `url(${bgImage})` }}
                        ></div>
                        <div className="relative z-10 flex items-center">
                            <h3 className="text-xl font-bold text-textColor">Manage Sales Person</h3>
                        </div>
                        <div
                            className="ms-auto text-3xl text-black cursor-pointer relative z-10"
                            onClick={() => closeModal('add')}
                        >
                            &times;
                        </div>
                    </div>
                    <div className='grid grid-cols-2 w-full space-x-8 items-center text-textColor'>
                        <div className='flex items-center space-x-2'>
                        <p className='text-xs'>Name</p>
                        <input
                            type="text"
                            className="border-inputBorder outline-none flex-grow text-sm border rounded p-1.5 pl-2 h-9"
                        />
                        </div>
                    
                    
                        <div className='flex items-center space-x-2'>
                        <p className='text-xs'>Email</p>
                        <input
                            type="email"
                            className="border-inputBorder outline-none flex-grow text-sm border rounded p-1.5 pl-2 h-9"
                        />
                        </div>
                    </div>
                    <div className='flex justify-end space-x-2'>
                        <Button variant="secondary" size='sm' onClick={() => closeModal('add')}>
                            <p className='text-xs'>Cancel</p>
                        </Button>
                        <Button onClick={() => closeModal('add')} variant='primary' size='sm' className='w-16 flex justify-center'>
                            <p className='text-xs text-center'>Save</p>
                        </Button>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white mb-5">
                            <thead className="text-[12px] text-center text-dropdownText">
                                <tr style={{ backgroundColor: "#F9F7F0" }}>
                                    {tableHeaders.map((heading, index) => (
                                        <th
                                            className="py-2 px-4 font-medium border-b border-tableBorder"
                                            key={index}
                                        >
                                            {heading}
                                        </th>
                                    ))}
                                    <th className="py-2 px-4 font-medium border-b border-tableBorder"></th>
                                </tr>
                            </thead>
                            <tbody className="text-dropdownText text-center text-[13px]">
                                {data.map((item) => (
                                    <tr key={item.id} className="relative">
                                        <td className="py-2.5 px-4 border-y border-tableBorder">
                                            {item.customerName}
                                        </td>
                                        <td className="py-2.5 px-4 border-y border-tableBorder">
                                            {item.amount}
                                        </td>
                                        <td className="py-2.5 px-4 border-y border-tableBorder">
                                            {item.balance}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default ManageSalesPerson;
