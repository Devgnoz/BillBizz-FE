import { useState } from "react";
import OrganizationIcon from "../../../assets/icons/OrganizationIcon";
import SettingsIcons from "../../../assets/icons/SettingsIcon";
import Drawer from "../../../Components/drawer/drawer";

type Props = {};

function Organization({}: Props) {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <button onClick={toggleDrawer}>
        <OrganizationIcon />
      </button>

      <Drawer onClose={toggleDrawer} open={isDrawerOpen} position="right">
        <div className="flex items-center justify-between p-5">
          <h5 className="text-md font-semibold text-gray-700">
            My Organizations
          </h5>
          <div className="flex gap-2 items-center">
            <div>
              <SettingsIcons size="sm" />
            </div>
            <button
              onClick={toggleDrawer}
              className="text-gray-500 hover:text-gray-700 text-3xl -mt-2"
            >
              &times;
            </button>
          </div>
        </div>
        <div className="p-4 space-y-4">
          {["Company branch 1", "Company branch 2", "Company branch 3"].map((branch, index) => (
            <div key={index} className="flex items-center border border-slate-200 p-4 rounded-md shadow-sm">
              <div className="mr-4">
             <OrganizationIcon/>
                </div>
                <div className="flex-grow">
                  <h5 className="font-bold text-sm text-gray-700">{branch}</h5>
                  <p className="text-xs text-gray-700">
                    Organization ID: 43434659883
                  </p>
                </div>
                <div className="flex items-center">
                  <span className="text-xs bg-yellow-100 border text-yellow-800 py-1 px-2 rounded-2xl pl-2 pr-2">
                    Trail
                  </span>
                </div>
                <div className="ml-24">
                  <input
                    type="radio"
                    name="selectedBranch"
                    className="h-4 w-4"
                  />
                </div>
              </div>
            )
          )}
        </div>
      </Drawer>
    </>
  );
}

export default Organization;
