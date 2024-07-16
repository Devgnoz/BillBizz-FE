import { Link } from "react-router-dom";
import logo from "../../../public/bill-bizz-logo.png";
import navlist from "../../assets/constants";

type Props = {
  activeIndex: rating | null;
  setActiveIndex: (index: rating) => void;
};

const SideBar = ({ activeIndex, setActiveIndex }: Props) => {
  return (
    <aside className="bg-maroon h- w-[72px]">
      <nav>
        <div className="flex justify-between items-center px-6 pt-7 pb-5">
          <img src={logo} alt="logo" />
        </div>
      </nav>
      <ul className="flex-col">
        {navlist.map((item, index) => (
          <div className="flex justify-center" key={index}>
            <ul>
              <Link to={item.route}>
                <li className={`pb-3`} onClick={() => setActiveIndex(index)}>
                  <div
                    className={`px-2 py-2 rounded-lg hover:bg-iconhover flex justify-center ${
                      activeIndex === index ? "bg-iconhover" : ""
                    }`}
                  >
                    {item.icon && <item.icon color="#F7E7CE" />}
                  </div>
                  <p className="text-[8px] text-center text-lightBeige">
                    {item.nav}
                  </p>
                </li>
              </Link>
            </ul>
          </div>
        ))}
      </ul>
    </aside>
  );
};

export default SideBar;
