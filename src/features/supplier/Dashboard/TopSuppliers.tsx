import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, LabelList } from 'recharts';

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
const renderCustomTooltip = ({ payload, label }) => {
  if (payload && payload.length) {
    return (
      <div className="custom-tooltip p-1 bg-black text-white">
        <p className="label text-sm">{`$${payload[0].value}`}</p>
      </div>
    );
  }
  return null;
};

const renderCustomizedLabel = (props) => {
  const { x, y, width, height, value } = props;
  const radius = 10;
  const spacing=-10
  return (
    <g transform={`translate(${x + width / 2}, ${y + spacing})`}>
      <circle  cx={0} cy={-radius} r={radius} fill="#00000" width={50} />
    </g>
  );
};

const CustomBar = (props) => {
  const { x, y, width, height, fill } = props;
  const radius = 10;

  return (
    <g>
      <path d={`M${x},${y + radius} 
                L${x},${y + height} 
                L${x + width},${y + height} 
                L${x + width},${y + radius} 
                Q${x + width},${y} ${x + width - radius},${y} 
                L${x + radius},${y} 
                Q${x},${y} ${x},${y + radius}`} 
            fill={fill} />
    </g>
  );
};

const TopCustomers = () => {
  return (
    <div style={{ width:570 }} className='bg-white shadow-lg rounded-lg w-full py-8'>
      <h3 className=' ms-10  text-xl font-bold'>Top Suppliers by Sales Volume</h3>
      <h4 className=' ms-10 py-4 text-[14px]'>Purchase Volume</h4>
      <BarChart
        width={520}
        height={300}
        data={data}
      >
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        <XAxis stroke='0 0' fontSize={12} dataKey="name" />
        <YAxis stroke='0 0' fontSize={12} />
        <Tooltip content={renderCustomTooltip} cursor={{ fill: 'transparent' }} />
        <Bar shape={<CustomBar />} barSize={40} dataKey="value" fill="#8884d8">
       
          {data.map((entry, index) => (
            <>
            <LabelList className='p-3' color='red' dataKey="name"  content={renderCustomizedLabel} />
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            </>
          ))}
        </Bar>
      </BarChart>
      <h3 className='text-center text-[14px] pt-3'>Suppliers</h3>
    </div>
  );
};

export default TopCustomers;
