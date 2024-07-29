import { Link } from "react-router-dom";
import CheveronLeftIcon from "../../../assets/icons/CheveronLeftIcon";
import Button from "../../../Components/Button";
import Pen from "../../../assets/icons/Pen";
import PrinterIcon from "../../../assets/icons/PrinterIcon";
import NewspaperIcon from "../../../assets/icons/NewspaperIcon";
import IndianRupee from "../../../assets/icons/IndianRupee";
import Wallet from "../../../assets/icons/Wallet";
import CircleDollerSign from "../../../assets/icons/CircleDollerSign";
type Props = {};

const ExpenseView = ({}: Props) => {
  const historyData = [
    {
      date: "30/05/2024",
      time: "02:30 PM",
      title: "Expense Created",
      amount: "2000",
    },
    {
      date: "30/05/2024",
      time: "02:30 PM",
      title: "Expense Created",
      amount: "2000",
    },
    {
      date: "30/05/2024",
      time: "02:30 PM",
      title: "Expense Created",
      amount: "2000",
    },
  ];

  return (
    <div className="mx-5 my-4 rounded-lg bg-white p-6 space-y-3">
      <div className="flex items-center gap-5">
        <Link to={"/expense/home"}>
          <div
            style={{ borderRadius: "50%" }}
            className="w-[40px] h-[40px] flex items-center justify-center bg-backButton"
          >
            <CheveronLeftIcon />
          </div>
        </Link>
        <p className="text-textColor text-xl font-bold">View Expense</p>
      </div>

      <div className="flex border-b py-3 border-slate-400">
        <div className="text-textColor text-lg font-semibold ">
          <p>
            Materials & Suppliers <span className="font-light px-3"> |</span>{" "}
            Materials
          </p>
        </div>
        <div className="flex ml-auto gap-4">
          <Button variant="secondary" size="sm">
            <Pen color="currentColor" />
            Edit
          </Button>
          <Button variant="secondary" size="sm">
            <PrinterIcon color="currentColor" height={20} width={20} />
            Print
          </Button>
        </div>
      </div>
      <p className="text-base font-semibold text-dropdownText">
        <span className="me-4">Expense Date:</span> 24/06/2024
      </p>

      <div className="grid grid-cols-12 text-textColor gap-4">
        <div className="col-span-6">
          <div className=" bg-lightPink rounded-lg p-6 border border-slate-200">
            <p className=" font-bold text-sm">Expense Details</p>
            <div className="flex gap-4 border-b py-4 border-slate-400">
              <div className="bg-white h-8 w-8 items-center justify-center flex rounded-full border-slate-400 border-[.01rem]">
                <NewspaperIcon color={"currentColor"} />
              </div>
              <div className="text-sm">
                <p>Name</p>
                <p className="font-bold text-base">Materials And Suppliers</p>
              </div>
            </div>
            <div className="flex gap-4 border-b py-4 border-slate-400">
              <div className="bg-white h-8 w-8 items-center justify-center flex rounded-full border-slate-400 border-[.01rem]">
                <IndianRupee />
              </div>
              <div className="text-sm">
                <p>Expense Amount</p>
                <p className="font-bold text-base">&#8377; 2000</p>
              </div>
            </div>
            <div className="flex gap-4  py-4">
              <div className="bg-white h-8 w-8 items-center justify-center flex rounded-full border-slate-400 border-[.01rem]">
                <Wallet color={"currentColor"} width={18} height={18} />
              </div>
              <div className="text-sm">
                <p>Payment Method </p>
                <p className="font-bold text-base">Cash</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-4 bg-[#F6F6F6] py-6 px-4">
          <p className="text-lg font-bold text-textColor">
            Expense History
          </p>
          <div className="relative ms-5 my-6">
            {historyData.map((item, index) => (
              <div key={index} className="flex my-10 gap-5">
                <div className="relative">
                  {index !== historyData.length - 1 && (
                    <div className="absolute  left-1/2 transform -translate-x-1/2 h-[130%] w-px bg-slate-300"></div>
                  )}
                  <div className="bg-darkRed h-10 w-10 rounded-full relative items-center justify-center flex">
                    <CircleDollerSign />
                  </div>
                </div>
                 <div className=" space-y-2 w-full ">
                    <div className="flex gap-8">
                      <p>{item.date}</p>
                      <p> {item.time}</p>
                    </div>

                    <p className="font-bold text-lg">{item.title}</p>
                    <div className="">
                    <p>Expense Created for &#8377; {item.amount}</p>
<div className="flex gap-5">
    
                          <p className="font-bold">By Info</p>
                          <p className="font-bold border-b-2">View Details</p>
</div>
                    </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpenseView;
