import { Link } from "react-router-dom";
import logo from "../../../public/bill-bizz-logo.png";
import navlist from "../../assets/constants";

type Props = {};

const SideBar = ({}: Props) => {
  return (
    <aside className="bg-maroon h-full w-52">
      <nav>
        <div className="flex justify-between items-center px-5 pt-8 pb-7">
          <div className="flex gap-2">
            <img src={logo} alt="logo" />
            <h1 className="text-lightBeige font-medium text-lg">BILL BIZZ</h1>
          </div>
          <button>X</button>
        </div>
      </nav>
      <ul className="flex-col">
        {navlist.map((item, index) => (
          <li key={index} className="flex flex-col p-2">
            <Link to={item.route}>
              <div className="flex items-center text-lightBeige gap-2">
                {item.icon && <item.icon color="#F7E7CE" />}
                <span className="font-semibold">{item.nav}</span>
              </div>
            </Link>
            {item.sub && (
              <ul className="ml-8">
                {item.sub.map((subItem, subIndex) => (
                  <li key={subIndex} className="font-semibold text-lightBeige">
                    {subItem}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default SideBar;
