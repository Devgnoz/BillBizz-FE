import { Link } from "react-router-dom"
import CheveronLeftIcon from "../../../assets/icons/CheveronLeftIcon"

type Props = {}

function SeeCustomerDetails({}: Props) {
  return (
    <div className="px-6">
      <div className="flex items-center gap-5 bg-white rounded-md  p-5">
        <Link to={"/customer/home"}>
          <div
            style={{ borderRadius: "50%" }}
            className="w-[40px] h-[40px] flex items-center justify-center bg-white"
          >
            <CheveronLeftIcon />
          </div>
        </Link>
        <p className="text-textColor text-xl font-bold">Back</p>
      </div>
    </div>
  )
}

export default SeeCustomerDetails