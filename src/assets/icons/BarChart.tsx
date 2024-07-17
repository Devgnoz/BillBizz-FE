
type Props = { color: string };

const BarChart = ({ color }: Props) => {
  return (
    <div>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 3V21H21M18 17V9M13 17V5M8 17V14"
          stroke={color}
          stroke-width="2"
          strokeLinecap="round"
        strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default BarChart;
