import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

interface DataItem {
  name: string;
  value: rating;
  img: string;
}

const data: DataItem[] = [
  { name: 'Electronics', value: 200, img: 'path_to_image' },
  { name: 'Apparel', value: 220, img: 'path_to_image' },
  { name: 'Home Goods', value: 434, img: 'path_to_image' },
  { name: 'Toys', value: 300, img: 'path_to_image' },
  { name: 'Sports', value: 400, img: 'path_to_image' },
];

interface CustomAxisTickProps {
  x: rating;
  y: rating;
  payload: {
    value: string;
  };
}

const renderCustomAxisTick = ({ x, y, payload }: CustomAxisTickProps) => {
  const category = data.find(item => item.name === payload.value);
  return (
    <g transform={`translate(${x},${y})`}>
      <image x={-12} y={0} width={24} height={24} href={category?.img} />
      <text x={0} y={40} textAnchor="middle" fill="#666">{payload.value}</text>
    </g>
  );
};

interface CustomBarLabelProps {
  x: rating;
  y: rating;
  width: rating;
  height: rating;
  value: rating;
}

const renderCustomBarLabel = ({ x, y, width, value }: CustomBarLabelProps) => {
  return (
    <text x={x + width / 2} y={y - 10} fill="#666" textAnchor="middle">{`$${value}`}</text>
  );
};

const BarCharts: React.FC = () => {
  const barColors = ['#8884d8', '#82ca9d', '#ffc658', '#ff7300', '#d0ed57'];

  return (
    <div style={{ padding: '20px', background: '#f5f5f5', borderRadius: '8px' }}>
      <h3 style={{ textAlign: 'center', marginBottom: '20px' }}>Top Selling Products Categories</h3>
      <BarChart width={600} height={300} data={data}>
        <XAxis dataKey="name" tick={renderCustomAxisTick} />
        <YAxis />
        <Tooltip />
        <Bar 
          dataKey="value" 
          barSize={30} 
          label={renderCustomBarLabel}
          fill={({ index }) => barColors[index % barColors.length]}
        />
      </BarChart>
    </div>
  );
};

export default BarCharts;
