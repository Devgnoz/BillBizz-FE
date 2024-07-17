import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RechartsTooltip,
  ResponsiveContainer
} from 'recharts';
import Tooltips from '../../../Components/tooltip/Tooltip';

const data = [
  { name: 'Jan', value: 40 },
  { name: 'Feb', value: 20 },
  { name: 'Mar', value: 45 },
  { name: 'Apr', value: 35 },
  { name: 'May', value: 50 },
  { name: 'Jun', value: 65 },
  { name: 'Jul', value: 60 },
  { name: 'Aug', value: 78 },
  { name: 'Sep', value: 72 },
  { name: 'Oct', value: 68 },
  { name: 'Nov', value: 80 },
  { name: 'Dec', value: 85 },
];

const renderCustomTooltip = ({ payload, label }: any) => {
  if (payload && payload.length) {
    return (
      <Tooltips
        content={`${payload[0].value}%`}
        textColor="#ffffff"
        bgColor="#4A5568"
        arrowColor="#4A5568"
        width="50px"
      />
    );
  }
  return null;
};

const CustomersRetentionRate: React.FC = () => {
  return (
    <div  className='bg-white  rounded-lg w-full py-8'>
      <h3 className='ms-10 mb-6 text-[16px] font-bold'>Customers Retention Rate Over Time</h3>
      <ResponsiveContainer width="100%" height={340} >
        <LineChart width={300} data={data}>
          <XAxis
            dataKey="name"
            stroke='#4A5568' // Set X-axis stroke color to match grid line color
            fontSize={10}
            axisLine={false}
            tickLine={false}
            padding={{ left: 30, right: 30 }}
          />
          <YAxis
            stroke='#4A5568'
            fontSize={10}
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12 }}
            interval={0} 
          />
          <CartesianGrid vertical={false} stroke='#E2E8F0' /> {/* Display only Y-axis grid lines */}
          <RechartsTooltip content={renderCustomTooltip} cursor={false} /> {/* Disable cursor line */}
          <Line type="monotone" dataKey="value" stroke="#4A5568" strokeWidth={2} dot={{ r: 4 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomersRetentionRate;
