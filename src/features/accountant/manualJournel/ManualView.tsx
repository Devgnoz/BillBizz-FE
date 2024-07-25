import { Link } from "react-router-dom";
import CheveronLeftIcon from "../../../assets/icons/CheveronLeftIcon";
import Button from "../../../Components/Button";
import Pen from "../../../assets/icons/Pen";
import MailIcon from "../../../assets/icons/MailIcon";
import ManualPDFView from "./ManualPDFView";
type Props = {};

function ManualView({ }: Props) {


    return (
        <>
            <div className="px-6">
            <div className="flex items-center gap-5 mb-2">
                        <Link to={"/accountant/manualjournal"}>
                            <div
                                style={{ borderRadius: "50%" }}
                                className="w-[40px] h-[40px] flex items-center justify-center bg-white"
                            >
                                <CheveronLeftIcon />
                            </div>
                        </Link>
                        <p className="text-textColor text-xl font-bold">View Manual Journel</p>
                    </div>
                <div className="bg-white rounded-md p-5 mb-32">
                    
                    <br />

                <div className="flex justify-between">
                    <div className="flex gap-3 items-center">
                        <p className="text-lg text-textColor font-bold pr-4 border-r-[1px] border-borderRight">Quote</p>
                        <p className="text-lg text-textColor font-bold pr-4 border-r-[1px] border-borderRight">#QT-0001</p>
                        <p className="text-sm font-semibold text-textColor bg-cuscolumnbg p-1 text-center rounded-sm">Draft</p>
                    </div>
                    <div className="flex gap-3 items-center">
                        <Button variant="secondary" className="pl-6 pr-6"  size="sm"><Pen color="#565148" /> <p className="text-sm font-medium">Edit</p></Button>
                        <Button variant="secondary" className="pl-5 pr-5"  size="sm"><MailIcon color="#565148" /> <p className="text-sm font-medium">Email</p></Button>
                        <select name="" id="" className="border-outlineButton border rounded-md px-[0.625rem] py-2 text-sm font-medium text-outlineButton ">
                            <option value="">More Action</option>
                        </select>
                        {/* toggle button */}
                        </div>
                    </div>
                    <hr className="border-t border-inputBorder mt-4" />
                    <ManualPDFView/>
                </div>
            </div>
        </>
    );
}

export default ManualView;
