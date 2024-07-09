import Header from "./Header/Header";
import SideBar from "./SideBar/SideBar";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="flex">
      <SideBar />
      <div className="w-[100%]">
        <Header />
      {children}
      </div>
    </div>
  );
};

export default Layout;
