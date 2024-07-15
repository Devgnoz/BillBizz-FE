import navlist from "../../assets/constants";

type Props = {
  activeIndex: number | null;
};

const SubHeader = ({ activeIndex }: Props) => {
  return (
    <div className="bg-BgSubhead flex mx-7 pl-7 py-5 my-4 rounded-full items-center gap-4">
      <div className="bg-white px-3 py-1 rounded-full text-sm">Home</div>
      {activeIndex !== null &&
        navlist[activeIndex] &&
        navlist[activeIndex].subhead &&
        navlist[activeIndex].subhead.map((item, index) => (
          <div key={index} className="font-semibold">{item.headName}</div>
        ))}
    </div>
  );
};

export default SubHeader;
