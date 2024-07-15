import { useState } from "react";
import Header from "./Header/Header";
import SideBar from "./SideBar/SideBar";
import SubHeader from "./SubHeader/SubHeader";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  const [activeIndex, setActiveIndex] = useState<rating | null>(null);

  return (
    <div className="flex">
      <SideBar activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
      <div className="w-[100%]">
        <Header />
        <SubHeader activeIndex={activeIndex} />
        {children}
      </div>
    </div>
  );
};

export default Layout;
