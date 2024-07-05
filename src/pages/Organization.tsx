import CreateOrganizationFrom from "../feature/settings/CreateOrganizationFrom";

CreateOrganizationFrom;
type Props = {};

const Organization = ({}: Props) => {
  const sidebarList = [
    { title: "Profile" },
    { title: "Branding" },
    { title: "Custom Domain" },
    { title: "Branches" },
    { title: "Currencies" },
    { title: "Approvals" },
    { title: "Opening Balance" },
    { title: "Manage Subscription" },
  ];

  const taxList = [{ title: "Tax" }, { title: "MSME Settings" }];

  const usersAndRoleList = [
    { title: "Users" },
    { title: "Roles" },
    { title: "User Preferences" },
  ];

  return (
    <>
      <div className="grid grid-cols-12 gap-4">
        <div
          className=" col-span-3  border-neutral-300 text-textColor  border-2 px-8 "
          style={{ height: "647px" }}
        >
          <button className="border text-sm p-2 mt-4 rounded-lg flex border-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
            Back
          </button>
          <div className="fixed relative mt-8">
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
            <div className="relative flex items-center text-lg bg-organizationBg p-2  rounded-lg">
              <b>Organization</b>
            </div>

            <ul>
              {sidebarList.map((i) => (
                <li className="my-3 font-medium">{i.title}</li>
              ))}
            </ul>

            <div className="relative flex items-center text-lg mt-8   rounded-lg">
              <b>Tax & Complaints</b>
            </div>

            <ul>
              {taxList.map((i) => (
                <li className="my-3 font-medium">{i.title}</li>
              ))}
            </ul>

            <div className="relative flex items-center text-lg mt-8   rounded-lg">
              <b>Users & Role</b>
            </div>

            <ul>
              {usersAndRoleList.map((i) => (
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
