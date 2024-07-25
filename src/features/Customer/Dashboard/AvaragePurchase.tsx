import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';

const data = [
  { name: 'Value', value: 280, color: '#2C353B' },
  { name: 'Remaining', value: 220, color: '#E6E9EE' },
];
const cx = 200; // Center x-coordinate for a 400px wide chart
const cy = 280;
const iR = 80;  // Increased inner radius
const oR = 160; // Increased outer radius
const value = 280; // The value to be displayed

const AveragePurchase = () => {
  return (
    <div className='bg-white rounded-lg w-full px-8'>
      <div className='flex justify-between mt-5 items-center'>
      <h3 className=' text-[16px] font-bold '>Avarage Purchase Value</h3>  
      <select
          className="border border-[#565148] h-8 pl-3 pr-4 rounded-md bg-[#FEFDFA]  text-xs font-semibold text-gray-800"
          style={{ color: "#585953" }}
        >
          <option>Month</option>
          <option>Other</option>
          <option>Other</option>
          <option>Other</option>
        </select>
      </div>
      <PieChart width={400} height={400} >
        <Pie
          dataKey="value"
          startAngle={180}
          endAngle={0}
          data={data}
          cx={cx}
          cy={cy}
          innerRadius={iR}
          outerRadius={oR}
          fill="#8884d8"
          stroke="none"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <text
          x={200}
          y={250}
          textAnchor="middle"
          dominantBaseline="central"
          fontSize="35"
          fill="#303F58"
          fontWeight="bold"
        >
          ${value}
        </text>
        <text
          x={80} // Positioning $0 at the start of the pie bottom
          y={300}
          textAnchor="middle"
          dominantBaseline="central"
          fontSize="16"
          fontWeight="bold"
          fill="#303F58"
        >
          $0
        </text>
        <text
          x={330} // Positioning $0 at the start of the pie bottom
          y={300}
          textAnchor="middle"
          dominantBaseline="central"
          fontSize="16"
          fontWeight="bold"
          fill="#303F58"
        >
          $500
        </text>
      </PieChart>
    </div>
  );
};

export default AveragePurchase;
