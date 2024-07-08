import { Link } from "react-router-dom";
import Button from "../../Components/Button";
import SearchBar from "../../Components/SearchBar";
import SettingsIcons from "../../assets/icons/SettingsIcon";
import Notification from "./HeaderIcons/Notification";
import RefferEarn from "./HeaderIcons/RefferEarn";
import Organization from "./HeaderIcons/Organization";

type Props = {};

const Header = ({}: Props) => {
  return (
    <div className="p-4 flex items-center gap-4 w-full border-b-orange-200" style={{borderBottom:"1.5px solid rgba(28, 28, 28, 0.1)"}}>
      <div className="flex-grow">
        <SearchBar />
      </div>
      <span className="text-xs font-semibold text-gray-700 whitespace-nowrap">
        Trial expires in 14 days
      </span>
      <div className="flex items-center gap-4 ml-auto">
        <Button
          variant="primary"
          style={{ backgroundColor: "#FCFFED", color: "#585953" }}
        >
          Subscribe
        </Button>
        <select
          className="border border-gray-400 h-8 pl-3 pr-4 rounded-md bg-orange-100 text-xs font-semibold text-gray-800"
          style={{ color: "#585953" }}
        >
          <option>Company</option>
          <option>Other</option>
          <option>Other</option>
          <option>Other</option>
        </select>
        <div className="flex items-center gap-2">
          <Notification />
          <RefferEarn />
          <Link to="/settings">
            <SettingsIcons size="md" />
          </Link>
          <Organization />
        </div>
      </div>
    </div>
  );
};

export default Header;
