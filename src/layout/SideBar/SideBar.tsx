import logo from "../../../public/bill-bizz-logo.png";
import navlist from "../../assets/constants";
type Props = {};

const SideBar = ({}: Props) => {
  return (
    <aside className="bg-maroon h-screen w-52">
      <nav className="">
        <div className="flex justify-between items-center px-5 pt-8 pb-7">
          <div className="flex gap-2">
            <img src={logo} alt="logo" />
            <h1 className="text-lightBeige font-medium text-lg">BILL BIZZ</h1>
          </div>
          <button>X</button>
        </div>
      </nav>
      <ul className="flex-col">{navlist.map((nav,index)=>(
        <div key={index}>{nav.nav}</div>
      ))}</ul>
    </aside>
  );
};

export default SideBar;


