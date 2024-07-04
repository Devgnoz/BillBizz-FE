import Header from "./Header/Header";
import SideBar from "./SideBar/SideBar";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="flex">
      <SideBar />
      <Header />
      {children}
    </div>
  );
};

export default Layout;
