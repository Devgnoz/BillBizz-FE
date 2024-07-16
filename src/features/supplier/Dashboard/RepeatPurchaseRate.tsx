import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, LabelList, Cell, ResponsiveContainer, TooltipProps } from 'recharts';
import Tooltips from '../../../Components/tooltip/Tooltip';
import BackgroundImage from '../../../assets/Images/Active clients.png';

const colors = ['#f2c6b8', '#a72522', '#fbe6c3', '#eef1d6', '#e3e7e5', '#8fd3f4', '#ffcc00'];

interface DataItem {
  name: string;
  value: number;
}

const data: DataItem[] = [
  {
    name: 'Phones',
    value: 100,
  },
  {
    name: 'Laptops',
    value: 80,
  },
  {
    name: 'Headphones',
    value: 60,
  },
  {
    name: 'Tablets',
    value: 50,
  },
  {
    name: 'Cameras',
    value: 40,
  },
  {
    name: 'Smartwatches',
    value: 30,
  },
];

const renderCustomTooltip: React.FC<TooltipProps<number, string>> = ({ payload }) => {
  if (payload && payload.length) {
    return (
      <Tooltips
        content={`${payload[0].value}%`}
        textColor="#ffffff"
        bgColor="#000000"
        arrowColor="#000000"
        width="60px"
      />
    );
  }
  return null;
};

interface CustomBarProps {
  x: number;
  y: number;
  width: number;
  height: number;
  fill: string;
}

const CustomBar: React.FC<CustomBarProps> = ({ x, y, width, height, fill }) => {
  const radius = 10;

  return (
    <g>
      <path
        d={`M${x},${y} 
           L${x},${y + height} 
           L${x + width - radius},${y + height} 
           Q${x + width},${y + height} ${x + width},${y + height - radius}
           L${x + width},${y + radius} 
           Q${x + width},${y} ${x + width - radius},${y} 
           Z`}
        fill={fill}
      />
    </g>
  );
};

const RepeatPurchaseRate: React.FC = () => {
  return (
    <div className="bg-white rounded-lg w-full px-8">
      <h3 className="text-xl mt-6 font-bold">Repeat Purchase Rate by Product</h3>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart layout="vertical" data={data} margin={{ left: -70, right: 100, bottom: -25 }}>
          <XAxis
            type="number"
            stroke="#4A5568"
            fontSize={12}
            axisLine={false}
            tickLine={false}
            domain={[0, 100]}
            tick={false} // Hides the XAxis values
          />
          <YAxis
            type="category"
            dataKey="name"
            stroke="#4A5568"
            axisLine={false}
            tickLine={false}
            fontSize={12}
            width={100}
            interval={0}
          />
          <Tooltip content={renderCustomTooltip} cursor={{ fill: 'transparent' }} />
          <Bar shape={<CustomBar />} barSize={30} dataKey="value" fill="#8884d8">
            <LabelList dataKey="name" position="right" />
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RepeatPurchaseRate;
