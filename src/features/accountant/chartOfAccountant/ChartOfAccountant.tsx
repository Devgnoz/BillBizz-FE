import NewAccountModal from "./NewAccountModal";
import AccountTypes from "../chartOfAccountant/AccountTypes";
import Table from "./Table";

type Props = {};

const ChartOfAccountant = ({}: Props) => {
  return (
    <div className="mx-5 my-4">
      <div className="top-side flex items-center justify-between">
        <div className="head-frame">
          <h1>Chart Of Account</h1>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur. Commodo enim odio fringilla
            egestas consectetur amet.
          </p>
        </div>
        <div className="button-frame">
          <NewAccountModal />
        </div>
      </div>
      <br />
      <div className="flex flex-col gap-3 p-3 bg-white mt-1">
        <AccountTypes />
        <Table />
      </div>
    </div>
  );
};

export default ChartOfAccountant;
