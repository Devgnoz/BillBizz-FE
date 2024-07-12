type Props = {
  activeIndex: number | null;
};

const SubHeader = ({ activeIndex }: Props) => {
  return (
    <div>
      <h2>SubHeader</h2>
      {activeIndex !== null && <p>Active Index: {activeIndex}</p>}
    </div>
  );
};

export default SubHeader;
