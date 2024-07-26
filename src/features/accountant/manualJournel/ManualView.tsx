import { Link } from "react-router-dom";
import CheveronLeftIcon from "../../../assets/icons/CheveronLeftIcon";
import Button from "../../../Components/Button";
import Pen from "../../../assets/icons/Pen";
import MailIcon from "../../../assets/icons/MailIcon";
import ManualPDFView from "./ManualPDFView";
import PrinterIcon from "../../../assets/icons/PrinterIcon";
import Trash2 from "../../../assets/icons/Trash2";
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
                <div className="bg-white rounded-xl px-5 mb-32 mt-5">
                    
                    <br />

                <div className="flex justify-between">
                    <div className="flex gap-3 items-center">
                        <p className="text-xl text-textColor font-bold pr-4  border-borderRight">#001</p>
                    </div>
                    <div className="flex gap-3 items-center">
                        <Button variant="secondary" className="pl-6 pr-6"  size="sm"><Pen color="#565148" /> <p className="text-sm font-medium">Edit</p></Button>
                        <Button variant="secondary" className="pl-5 pr-5"  size="sm"><PrinterIcon color="#565148" height={0} width={0} /> <p className="text-sm font-medium">Print</p></Button>
                        <Button variant="secondary" className="pl-5 pr-5"  size="sm"><Trash2 color="#565148"   /> <p className="text-sm font-medium">Delete</p></Button>
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
