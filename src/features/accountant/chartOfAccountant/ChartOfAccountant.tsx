import NewAccountModal from "./NewAccountModal";
import AccountTypes from "../chartOfAccountant/AccountTypes"

type Props = {};

const ChartOfAccountant = ({}: Props) => {
  return (
    <div className="mx-5 my-4">
      <div className="top-side flex items-center justify-between">
        <div className="head-frame">
          <h1 className="text-xl font-bold">Chart of Account</h1>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur. Commodo enim odio fringilla
            egestas consectetur amet.
          </p>
        </div>
        <div className="button-frame">
          <NewAccountModal/>
        </div>
      </div><br />
      <div className="bottom-side mt-1">
        <div className="p-3">
       <AccountTypes/>
        </div>
      </div>
    </div>
  );
};

export default ChartOfAccountant;
