import { Link } from "react-router-dom";
import Button from "../../Components/Button";
import SearchBar from "../../Components/SearchBar";
import BellIcon from "../../Icons/Bellicon";
import OrganizationIcon from "../../Icons/OrganizationIcon";
import SettingsIcons from "../../Icons/SettingsIcon";
import UserIcon from "../../Icons/UserIcon";

type Props = {};

const Header = ({}: Props) => {
  return <div className="p-5 flex gap-6  w-[100%] border-b-2 border-gray-400">
    <div className="w-[50%]">
    <SearchBar/>
    </div>
    <span className="text-sm font-semibold text-gray-700 -me-2">Trial expires in 14 days</span>
    <div className="ms-auto flex">
    <Button variant="primary" style={{backgroundColor:"#FCFFED",color:"#585953"}}>Subscribe</Button>
    <select className="border border-gray-400  ms-5 me- h-[32px] w-[97px] pl-3 rounded-md bg-orange-100 text-xs font-semibold" style={{color:"#585953"}}>
      <option>Company</option>
      <option>Other</option>
      <option>Other</option>
      <option>Other</option>
    </select>
    <div className="flex gap-2 ms-5">
    <BellIcon/>
    <UserIcon/>
    <Link to="/settings"><SettingsIcons size="md"/></Link>
    
    <OrganizationIcon/>
    </div>
      
    </div>
  </div>;
};

export default Header;
