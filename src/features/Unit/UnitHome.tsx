import Ellipsis from "../../assets/icons/Ellipsis";
import NewUnit from "./NewUnit";
import UnitTable from "./UnitTable";

type Props = {};

const UnitHome = ({}: Props) => {
  return (
    <>
      <div className="p-5  h-[100vh]  gap-3">
        <div className="flex">
          <div>
            <h3 className="font-bold text-2xl text-textColor">
              Unit Of Measurement
            </h3>
            <p className="text-sm text-gray mt-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              cumque rerum, sequi fugit ullam eius aspernatur
            </p>
          </div>
          <div className="ml-auto flex items-center">
            <NewUnit/>
            <div className="ms-5">
              <Ellipsis />
            </div>
          </div>
        </div>
        <UnitTable/>

      </div>{" "}

    </>
  );
};

export default UnitHome;
