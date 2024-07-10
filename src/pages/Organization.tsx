import {
  customizationList,
  itemsList,
  onlinePaymentList,
  organizationList,
  preferencesList,
  purchasesList,
  ReminderList,
  SalesList,
  taxList,
  usersAndRoleList,
} from "../assets/constants";
import BarChart from "../assets/icons/BarChart";
import Bell from "../assets/icons/Bell";
import Building from "../assets/icons/Building";
import ChevronLeft from "../assets/icons/ChevronLeft";
import ListFilter from "../assets/icons/ListFilter";
import Packet from "../assets/icons/Packet";
import PaintBucket from "../assets/icons/PaintBucket";
import ShoppingBag from "../assets/icons/ShoppingBag";
import Users from "../assets/icons/Users";
import Wallet from "../assets/icons/Wallet";
import CreateOrganizationFrom from "../features/settings/CreateOrganizationFrom";


CreateOrganizationFrom;
type Props = {};

const Organization = ({}: Props) => {
  return (
    <>
      <div className="grid grid-cols-12 gap-4">
        <div
          className=" col-span-3  border-neutral-300 text-textColor  border-2 px-8 "
          style={{ height: "92vh" }}
        >
          <button className="border text-sm p-2 mt-4 rounded-lg flex border-gray-400">

            <ChevronLeft color="currentColor"/>

            Back
          </button>
          <div className=" relative mt-8">
            <p className="text-xl ">
              <b>Settings</b>
            </p>
            <div className="relative flex items-center my-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4 absolute left-3 text-gray-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>

              <input
                className=" pl-9 text-sm w-[100%] rounded-md  text-start border-gray-600 text-gray-800 h-[39px] p-2"
                style={{ backgroundColor: "rgba(28, 28, 28, 0.04)" }}
                placeholder="Search"
              />
            </div>
          </div>
          <div
            className="overflow-y-scroll hide-scrollbar"
            style={{ height: "445px" }}
          >
            <div className="relative flex items-center text-lg gap-3 bg-organizationBg p-2 my-2 rounded-lg">
              <Building color="currentColor" />

              <b>Organization</b>
            </div>

            <ul>
              {organizationList.map((i) => (
                <li className="my-3 font-medium">{i.title}</li>
              ))}
            </ul>

            <div className="relative flex items-center text-lg mt-8 gap-3 my-2  rounded-lg">
              <Building color="currentColor" />

              <b>Tax & Complaints</b>
            </div>

            <ul>
              {taxList.map((i) => (
                <li className="my-3 font-medium">{i.title}</li>
              ))}
            </ul>

            <div className="relative flex items-center text-lg mt-8 gap-3  rounded-lg">
              <Users color="currentColor" />

              <b>Users & Roles</b>
            </div>

            <ul>
              {usersAndRoleList.map((i) => (
                <li className="my-3 font-medium">{i.title}</li>
              ))}
            </ul>

            <div className="relative flex items-center text-lg mt-8  gap-3  rounded-lg">
              <ListFilter color="currentColor" />
              <b>Preferences</b>
            </div>

            <ul>
              {preferencesList.map((i) => (
                <li className="my-3 font-medium">{i.title}</li>
              ))}
            </ul>

            <div className="relative flex items-center text-lg mt-8 gap-3  rounded-lg">
              <BarChart color="currentColor" />

              <b>Sales</b>
            </div>

            <ul>
              {SalesList.map((i) => (
                <li className="my-3 font-medium">{i.title}</li>
              ))}
            </ul>

            <div className="relative flex items-center text-lg mt-8 gap-3  rounded-lg">
              <ShoppingBag color="currentColor" />

              <b>Purchases</b>
            </div>

            <ul>
              {purchasesList.map((i) => (
                <li className="my-3 font-medium">{i.title}</li>
              ))}
            </ul>

            <div className="relative flex items-center text-lg mt-8 gap-3  rounded-lg">
              <Packet color="currentColor"/>

              <b>Items</b>
            </div>

            <ul>
              {itemsList.map((i) => (
                <li className="my-3 font-medium">{i.title}</li>
              ))}
            </ul>

            <div className="relative flex items-center text-lg mt-8 gap-3  rounded-lg">
              <Wallet color="currentColor" />

              <b>Online Payments</b>
            </div>

            <ul>
              {onlinePaymentList.map((i) => (
                <li className="my-3 font-medium">{i.title}</li>
              ))}
            </ul>

            <div className="relative flex items-center text-lg mt-8 gap-3  rounded-lg">
             

              <PaintBucket color="currentColor" />

              <b>Customisation</b>
            </div>

            <ul>
              {customizationList.map((i) => (
                <li className="my-3 font-medium">{i.title}</li>
              ))}
            </ul>

            <div className="relative flex items-center text-lg mt-8 gap-3  rounded-lg">
        
              <Bell color="currentColor"/>

              <b>Reminder & Notification</b>
            </div>

            <ul>
              {ReminderList.map((i) => (
                <li className="my-3 font-medium">{i.title}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col-span-9 ">
          <CreateOrganizationFrom />
        </div>
      </div>
    </>
  );
};

export default Organization;
