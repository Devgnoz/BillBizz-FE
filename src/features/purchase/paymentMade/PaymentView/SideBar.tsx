import React, { useState } from 'react'
import Button from '../../../../Components/Button'
import PaymentViewTypes from '../../debitNote/viewDebitNote/PaymentViewTypes'

type Props = {}

function SideBar({}: Props) {
    const [activeIndex,setActiveIndex]=useState(0)
    const data = [
        {
          id: "1",
          date: "16/7/2024",
          payment: "VP-0001",
          vendorName: "JustinDoe",
          bill: "VP-0001",
          mode: "Cash",
          amount: "30.00",
          unusedAmount: "0.00",
        },
        {
          id: "2",
          date: "17/7/2024",
          payment: "VP-0002",
          vendorName: "JaneDoe",
          bill: "VP-0002",
          mode: "Card",
          amount: "50.00",
          unusedAmount: "10.00",
        },
      ];
      const colorShow=(index:number)=>{
        setActiveIndex(index)
      }
  return (
    <>
    <div className='bg-[#F6F6F6] rounded-md px-3 py-6 space-y-4'>
     <div>
     <PaymentViewTypes/> 
    </div>  
    {
        data.map((item:any,index:number)=>(
      <div onClick={()=>colorShow(index)} className={`text-[#303F58] p-4 rounded-md mb-4 space-y-2 ${activeIndex===index? "bg-white":""} cursor-pointer`}>
      <div className='flex justify-between font-bold'>
      <p className="">{item.vendorName}</p>
      <p >{item.amount}</p>
      </div>
      <p >{item.date} | {item.bill}</p>

      <p className=" font-bold">Mode: {item.mode}</p>
    </div>
    ))
    }
  </div>
    </>
  )
}

export default SideBar