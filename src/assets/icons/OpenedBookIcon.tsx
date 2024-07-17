type Props = { color: string };

function OpenedBookIcon({ color }: Props) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 21C12 19.3 10.7 18 9 18H2V3H8C10.2 3 12 4.8 12 7M12 21V7M12 21C12 19.3 13.3 18 15 18H22V15.7M12 7C12 4.8 13.8 3 16 3H22V6M16 12L18 14L22 10"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default OpenedBookIcon;
