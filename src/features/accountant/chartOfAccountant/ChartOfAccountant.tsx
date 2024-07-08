import Button from "../../../Components/Button";
import CirclePlus from "../../../assets/icons/circleplus";

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
          <Button variant="secondary" className="flex items-center">
            <CirclePlus color="white" size="14" />{" "}
            <p className="text-xs">New Account</p>
          </Button>
        </div>
      </div>
      <div className="bottom-side"></div>
    </div>
  );
};

export default ChartOfAccountant;
