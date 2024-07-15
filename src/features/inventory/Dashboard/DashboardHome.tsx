import React, { useEffect, useRef, useState } from 'react'
import ArrowDownIcon from '../../../assets/icons/ArrowDownIcon';
import ArrowUpIcon from '../../../assets/icons/ArrowUpIcon';
import RefreshIcon from '../../../assets/icons/RefreshIcon';
import Button from '../../../Components/Button';
import Ellipsis from '../../../assets/icons/Ellipsis';
import Cards from './Cards';
import BarCharts from './Barcharts';
import PlusCircle from '../../../assets/icons/PlusCircle';

type Props = {}

function DashboardHome({}: Props) {
  
  return (
    <>
     
      <div className="pl-5 pr-5 w-[100%]">
    <Cards/>
      </div>
      <div className="p-5">
      <div className="w-[100%] p-3 bg-gray-100">
         
      </div>
      <div className="flex pl-3 pr-3 items-center gap-5">
        <div className="w-[80%]">
         
        </div>
      
      </div>
      </div>
      <div className="flex justify-between">
      <div className=""><BarCharts/></div>
      <div className=""><BarCharts/></div>
      </div>
      <div>
      <div className=""><BarCharts/></div>
      <div className=""><BarCharts/></div>
      </div>
      
    
    </>
  )
}

export default DashboardHome