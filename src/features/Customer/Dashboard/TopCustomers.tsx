import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, LabelList, Cell } from 'recharts';
import Tooltips from '../../../Components/tooltip/Tooltip';
import BackgroundImage from '../../../assets/Images/Active clients.png';

const colors = ['#f2c6b8', '#a72522', '#fbe6c3', '#eef1d6', '#e3e7e5'];

const data = [
  {
    name: 'Electronics',
    value: 250,
  },
  {
    name: 'Apparel',
    value: 200,
  },
  {
    name: 'Home Goods',
    value: 434,
  },
  {
    name: 'Toys',
    value: 300,
  },
  {
    name: 'Sports',
    value: 420,
  },
];

const renderCustomTooltip = ({ payload, label }: any) => {
  if (payload && payload.length) {
    return (
      <Tooltips
        content={`$${payload[0].value}`}
        textColor="#ffffff"
        bgColor="#000000"
        arrowColor="#000000"
        width="60px"
      />
    );
  }
  return null;
};

const renderCustomizedLabel = (props: any) => {
  const { x, y, width, height, value } = props;
  const radius = 10;
  const spacing = -10;
  return (
    <g transform={`translate(${x + width / 2}, ${y + spacing})`}>
      <circle cx={0} cy={-radius} r={radius} fill="none" strokeWidth={0} />
      <image
        href={BackgroundImage}
        x={-radius}
        y={-radius * 2}
        width={radius * 2}
        height={radius * 2}
      />
    </g>
  );
};

const CustomBar = (props: any) => {
  const { x, y, width, height, fill } = props;
  const radius = 10;

  return (
    <g>
      <path
        d={`M${x},${y + radius} 
           L${x},${y + height} 
           L${x + width},${y + height} 
           L${x + width},${y + radius} 
           Q${x + width},${y} ${x + width - radius},${y} 
           L${x + radius},${y} 
           Q${x},${y} ${x},${y + radius}`}
        fill={fill}
      />
    </g>
  );
};

const TopCustomers = () => {
  return (
    <div className='bg-white rounded-lg w-full py-8'>
      <h3 className='ms-10 text-[16px] font-bold'>Top Customers by Sales Volume</h3>
      <h4 className='ms-10 py-4 text-[10px] text-[#4A5568]'>Sales Volume</h4>
      <BarChart  width={450} height={280} data={data}>
        <XAxis
          stroke='#4A5568'
          fontSize={10}
          axisLine={false}
          tickLine={false}
          dataKey="name"
        />
        <YAxis
          stroke='#4A5568'
          axisLine={false}
          tickLine={false}
          fontSize={10}
        />
        <Tooltip content={renderCustomTooltip} cursor={{ fill: 'transparent' }} />
        <Bar shape={<CustomBar />} barSize={40} dataKey="value" fill="#8884d8">
          <LabelList dataKey="name" content={renderCustomizedLabel} />
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Bar>
      </BarChart>
      <div className='flex justify-center'>
        <h3 className='text-center text-[10px] text-[#4A5568] pt-3'>Customers</h3>
      </div>
    </div>
  );
};

export default TopCustomers;
